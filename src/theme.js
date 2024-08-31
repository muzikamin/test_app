import {
  extendBaseTheme,
  theme as chakraTheme,
  extendTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: () => ({
    body: {
      color: mode("gray.800", "#d9d9d9"),
      bg: mode("f6f6f6", "#20214"),
    },
  }),
};

const { Button } = chakraTheme.components;

const components = {
  Button,
  Drawer: {
    BaseStyle: () => ({
      dialog: {
        bg: mode("white", "#20214"),
      },
    }),
  },
};

const _theme = extendTheme({
  styles,
  components,
  config,
  fonts: {
    heading: "Pretendard Variable",
    body: "Pretendard Variable",
  },
});

export default _theme;
