import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Text, useColorMode } from "@chakra-ui/react";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "light" ? "rgba(243, 243, 243, 1)" : "gray.900";

  return (
    <Box
      pos="relative"
      bgColor={isDark}
      w="100%"
      h="60px"
      padding="15px 0"
      maxW="450px"
      margin="0 auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        textAlign="center"
        onClick={() => window.location.reload()}
        cursor="pointer"
        fontWeight="900"
        fontSize="18px"
      >
        불안테스트
      </Text>
      <Box
        pos="absolute"
        right="30px"
        top="16px"
        onClick={toggleColorMode}
        w="22px"
        h="22px"
        borderRadius={"30px 30px 30px 0"}
      >
        {colorMode === "light" ? (
          <SunIcon fontSize="22px" />
        ) : (
          <MoonIcon fontSize="22px" />
        )}
      </Box>
    </Box>
  );
};
