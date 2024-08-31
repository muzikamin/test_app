import {
  Box,
  Button,
  Img,
  Input,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { QnA } from "./QnA";
import { useForm } from "react-hook-form";

const Home = () => {
  const { register, handleSubmit } = useForm();

  const [page, setPage] = useState(0);
  const [name, setName] = useState("나");

  const { colorMode } = useColorMode();

  const onSubmitResult = (data) => {
    const { name: onName } = data;
    if (onName === "") {
      setName("나");
    } else {
      setName(onName);
    }

    setPage(1);
  };

  console.log(name);

  return (
    <Box
      padding="50px 0"
      wordBreak="break-word"
      margin="0 auto"
      width="100%"
      maxW="450px"
      fontSize="16px"
      display="flex"
      justifyContent="Center"
      alignItems="center"
      bg={colorMode === "light" ? "rgba(249, 249, 249, 1)" : "gray.800"}
    >
      <Box w="100%">
        {page === 0 ? (
          <VStack>
            <Box>
              <Text fontSize="22px" fontWeight="700" marginBottom="20px">
                내 안의 불안이는 얼마나 클까? 😫
              </Text>
              <Img
                margin="0 auto"
                w="120px"
                src="https://ext.fmkorea.com/files/attach/new4/20240629/7194722285_486616_99b983892094b5c6d2fc3736e15da7d1.png"
                alt="불안이메인"
              />
              <Text
                text
                marginTop="20px"
                marginBottom="20px"
                textAlign="center"
                lineHeight="26px"
              >
                <Box fontStyle="italic">
                  '~하면 어쩌지?' '불안해 너무 불안해!'
                </Box>
                <br />내 마음 속의 불안이는 얼마나 클까?
                <br />
                간단하게 테스트 해보자!
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              as="form"
              onSubmit={handleSubmit(onSubmitResult)}
            >
              <Input
                width="100%"
                marginBottom="20px"
                type="text"
                {...register("name")}
                variant="flushed"
                placeholder="이름을 입력해주세요"
              />
              <Button type="submit" colorScheme="teal" variant="outline">
                테스트 시작하기
              </Button>
            </Box>
          </VStack>
        ) : (
          <QnA
            page={page}
            setPage={setPage}
            colorMode={colorMode}
            name={name}
          />
        )}
      </Box>
    </Box>
  );
};

export default Home;
