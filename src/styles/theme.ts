import { createTheme } from "@mui/material/styles";
// import { red } from "@mui/material/colors";

// declare module "@mui/material/styles" {
//   interface Palette {
//     neutral: Palette["primary"];
//   }

//   interface PaletteOptions {
//     neutral: PaletteOptions["primary"];
//   }
// }

// eslint-disable-next-line import/no-mutable-exports
let theme = createTheme({
  // palette: {
  // primary: {
  //   main: "#F5F5F5",
  //   dark: "#616161",
  //   light: "#E5E5E5",
  // },
  // secondary: {
  //   main: "#2419BE",
  //   dark: "#2419BE",
  //   light: "#2419BE",
  // },
  // neutral: {
  //   main: "red",
  //   contrastText: "#fff",
  // },

  // error: {
  //   main: red.A400,
  // },
  // },
  direction: "ltr",
  typography: {
    fontFamily: ["roboto", "Helvetica", "Arial", "sans-serif"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F5F5F5",
          // padding: "2em",
          // height: "100vh",
        },
      },
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          [theme.breakpoints.down("md")]: {
            fontSize: 14,
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: 11,
          },
        },
      },
    },
  },
});

export default theme;
