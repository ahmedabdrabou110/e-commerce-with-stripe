import Header from "./components/Header/Header";
import DarkModeThemeProvider from "./context/theme-provider";

function App() {
  return (
    <DarkModeThemeProvider>
      <Header />
    </DarkModeThemeProvider>
  );
}

export default App;
