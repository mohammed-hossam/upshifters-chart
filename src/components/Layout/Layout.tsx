import { Box, Paper } from "@mui/material";
import ChartHeader from "components/ChartHeader/ChartHeader";

type LayoutTypes = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutTypes) {
  return (
    <Box
      sx={{ justifyContent: "center", alignItems: "center", height: "100vh", padding: "2em" }}
      component="main"
    >
      <Paper
        elevation={3}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          paddingBlock: "3em",
          paddingInline: "3em",
          height: "100%",
        }}
      >
        <ChartHeader />
        {children}
      </Paper>
    </Box>
  );
}

export default Layout;
