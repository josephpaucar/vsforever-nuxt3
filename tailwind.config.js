module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      caveat: ["Caveat"],
      windsong: ["WindSong"],
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
        "dark-green": "#848A78",
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
        "palete-yellow": "#FFF9E6",
        "palete-green": "#E9F3E7",
        "palete-red": "#F6EAEB",
        "palete-blue": "#E0F1FB",
        "grey-scale-200": "#EFF0EC",
      }),
    },
  },
};
