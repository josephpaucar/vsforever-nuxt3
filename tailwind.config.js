module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      caveat: ["Caveat"],
      didact: ["Didact Gothic"],
      marcellus: ["Marcellus"],
    },
    extend: {
      colors: {
        links: "#7e7e7e",
        "links-hover": "#333333",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#FDCA14",
        secondary: "#CAFB6A",
        dark: "#3A3F31",
        "palete-yellow": "#FEEFBE",
        "palete-green": "#D6E9D2",
        "palete-red": "#EBD1D3",
        "palete-blue": "#C4E4F7",
        "grey-scale-200": "#EFF0EC",
      }),
    },
  },
};
