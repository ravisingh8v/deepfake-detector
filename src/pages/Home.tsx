/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Container, Flex, Image, Text } from "@mantine/core";

import { useState } from "react";
import { Link } from "react-router-dom";
import FileUpload from "../component/FileUpload";

export default function Home() {
  const [realFile, setRealFile] = useState();
  const [deepDakeFile, setDeepFakeFile] = useState();
  const [isProcessing, setIsProcessing] = useState<boolean | undefined>();

  function onReject(files: any) {
    console.log("rejected files", files);
  }

  function generate() {
    console.log(realFile);
    const timeout = Math.floor(Math.random() * 15) + 1;
    setIsProcessing(true);
    const calculatedTime = Number(timeout + "000");

    console.log(calculatedTime);
    setTimeout(() => {
      setIsProcessing(false);
      sendData();
    }, calculatedTime);
  }

  function sendData() {
    fetch("http://localhost:3000/detect-deepfake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ realFile: realFile, deepDakeFile: deepDakeFile }),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Flex h={"100%"} direction={"column"}>
      {/* Header  */}
      <Box
        component="header"
        style={{ textAlign: "center" }}
        className=""
        bg={"dark"}
        p={"lg"}
        c={"white"}
      >
        <Text component={Link} to="/" size="xl">
          Deep Fake Detector
        </Text>
      </Box>
      {/* maim  */}
      <Container w={"100%"} p={"xl"} mt={"xl"}>
        <Flex w={"100%"} justify={"center"} gap={"lg"}>
          <Box>
            {!realFile && (
              <>
                <Text bg={"dark"} p={"lg"} c={"white"}>
                  Upload Pic
                </Text>
                <FileUpload
                  onDrop={(File: any) =>
                    setRealFile(File && URL.createObjectURL(File[0]))
                  }
                  onReject={onReject}
                />
              </>
            )}
            {realFile && <Image fit="cover" w={"500px"} src={realFile} />}
          </Box>
          <Box style={{ border: "1px dashed #2e2e2e" }}></Box>
          <Box>
            {!deepDakeFile && (
              <>
                <Text bg={"dark"} p={"lg"} c={"white"}>
                  Upload Deep Fake
                </Text>
                <FileUpload
                  onDrop={(File: any) =>
                    setDeepFakeFile(File && URL.createObjectURL(File[0]))
                  }
                  onReject={onReject}
                />
              </>
            )}
            {deepDakeFile && (
              <Image w={"500px"} fit="cover" src={deepDakeFile} />
            )}
          </Box>
        </Flex>
      </Container>
      <Container w={"100%"} p={"xl"}>
        <Flex gap={"lg"}>
          <Button
            disabled={!realFile || !deepDakeFile}
            w={"50%"}
            loading={isProcessing}
            onClick={generate}
          >
            Compare
          </Button>
          <Button
            disabled={!realFile}
            w={"50%"}
            onClick={() => {
              setRealFile(undefined);
              setDeepFakeFile(undefined);
            }}
          >
            Clear All
          </Button>
        </Flex>
        {/* <Loader /> */}
        {/* {inProgressState && <Progress value={inProgressState} />} */}
      </Container>
    </Flex>
  );
}
