import { colourModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import topBar from "./pages/user_dashboard/topBar";

function App() {
  const [theme, colourMode] = useMode();
  return (
    <colourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="context">
            <topBar />
          </main>
        </div>
      </ThemeProvider>
    </colourModeContext.Provider>
  );
}

export default App;
