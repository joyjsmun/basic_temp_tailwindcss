import "@/styles/globals.css";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";
import "@fontsource/bebas-neue";

import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: "ProtoMono-Light";
      src: url("/fonts/proto-mono-light/webfonts/proto-mono-light.ttf")
          format("truetype"),
        url("/fonts/proto-mono-light/webfonts/proto-mono-light.svg#youworkforthem")
          format("svg");
      font-weight: 200;
      font-style: normal;
      src: url("/fonts/proto-mono-light/webfonts/proto-mono-light.ttf");
      src: url("/fonts/proto-mono-light/webfonts/proto-mono-light.ttf")
        format("truetype");
    }

    @font-face {
      font-family: "ProtoMono-LightShadow";
      src: url("/fonts/proto-mono-light-shadow/webfonts/proto-mono-light-shadow.ttf")
          format("truetype"),
        url("/fonts/proto-mono-light-shadow/webfonts/proto-mono-light-shadow.svg#youworkforthem")
          format("svg");
      font-weight: 200;
      font-style: normal;
    }
    
    @font-face {
      font-family: "ProtoMono-SemiBold";
      src: url("/fonts/proto-mono-semi-bold/webfonts/proto-mono-semi-bold.ttf")
          format("truetype"),
        url("/fonts/proto-mono-semi-bold/webfonts/proto-mono-semi-bold.svg#youworkforthem")
          format("svg");
      font-weight: 600;
      font-style: normal;
    }
    


   
      `}
  />
);

const chakraTheme: ThemeConfig = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#0A0A0A",
        overflowX: "hidden",
      },
    },
  },
  fonts: {
    heading: `'ProtoMono-SemiBold', Helvetica, Arial, Sans-Serif`,
    body: `'ProtoMono-Light', Helvetica, Arial, Sans-Serif`,
    shdow: `'ProtoMono-LightShadow', Helvetica, Arial, Sans-Serif`,
    bebas: `'Bebas Neue', cursive`,
  },
  textStyles: {
    h1: {
      fontSize: ["4rem", "19rem"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-0.6vw",
      wordSpacing: "-4.6vw",
    },
    h2: {
      fontSize: ["0.86rem", "4rem"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
      wordSpacing: "-1.6vw",
    },
    bebas: {
      fontSize: ["0.86rem", "3.5rem"],
      fontWeight: "semibold",
      lineHeight: "140%",
      letterSpacing: "-1%",
      wordSpacing: "0.17vw",
    },
    bebasSm: {
      fontSize: ["0.86rem", "3.2rem"],
      fontWeight: "semibold",
      lineHeight: "140%",
      letterSpacing: "-1%",
      wordSpacing: "0.1vw",
    },
  },

  colors: {
    brand: {
      black: "#0A0A0A",
      white: "#E7EBEC",
      lightWhite: "#F9EDE1",
      neon: "#B6F84D",
      pink: "#DF3285",
      darkBlue: "#015EFF",
      lightGray: "#FCFDFE",
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={chakraTheme}>
      <Layout title="About Joy Mun">
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
