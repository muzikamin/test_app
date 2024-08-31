import { Box, useColorMode, VStack } from "@chakra-ui/react";

export const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <VStack
      fontSize="14px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      maxW="450px"
      h="120px"
      margin="0 auto"
      textAlign="center"
      bg={colorMode === "light" ? "rgba(243, 243, 243, 1)" : "gray.900"}
    >
      <Box fontSize="14px">&copy; Minzy Kim | 2024 </Box>
      <Box fontSize="12px" opacity="0.7">
        이 테스트는 포트폴리오 용으로 사용되며, <br /> 상업적으로 이용되지
        않습니다.
      </Box>
    </VStack>
  );
};
