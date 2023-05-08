import React from "react";
import { Widget } from "@typeform/embed-react";
import { Box, Container } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Form = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box>
          <Widget
            id="z8waQfLn"
            style={{ width: "600px", height: "700px" }}
            className="my-form"
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Form;
