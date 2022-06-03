import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Layout from "./components/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" element={<Notes />}>
                {/* <Notes /> */}
              </Route>
              <Route path="/create" element={<Create />}>
                {/* <Create /> */}
              </Route>
            </Switch>
          </Layout>
        </Router>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
