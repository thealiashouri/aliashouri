import localFont from "next/font/local";

export const yekan = localFont({
  variable: "--font-yekan",
  display: "swap",
  src: [
    {
      path: "../public/fonts/yekan/Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/yekan/Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/yekan/Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/yekan/Heavy.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/yekan/Fat.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const vazir = localFont({
  variable: "--font-vazir",
  display: "swap",
  src: [
    {
      path: "../public/fonts/vazir/Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/vazir/Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/vazir/Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/vazir/Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/vazir/Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const iransans = localFont({
  variable: "--font-iransans",
  display: "swap",
  src: [
    {
      path: "../public/fonts/iransans/IRANSansWeb_UltraLight.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/iransans/IRANSansWeb_Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/iransans/IRANSansWeb.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/iransans/IRANSansWeb_Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/iransans/IRANSansWeb_Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/iransans/IRANSansWeb_Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});