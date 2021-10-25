export default {
  title: "Dreamers Lab",
  public: "/public",
  dest: "/docs",
  propsParser: false,
  themeConfig: {
    search: true,
    header: {
      icons: "minimal",
    },
    menu: {
      search: false,
      headings: {
        rightSide: true,
        scrollspy: true,
        depth: 3,
      },
    },
    logo: {
      src: {
        light: "/public/logo-light.svg",
        dark: "/public/logo-dark.svg",
      },
      width: 50,
    },
  },
  groups: {
    "": [],
    Projects: ["Extensions"],
  },
};
