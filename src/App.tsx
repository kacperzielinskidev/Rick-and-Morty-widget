import { ThemeProvider } from "@emotion/react";
import { theme } from "./assets/styles/theme";
import { AppDataProvider } from "./context/AppData.context";
import { AppContainer } from "./App.styled";
import { CharacterWidget } from "./components/CharacterWidget/CharacterWidget";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppDataProvider>
        <AppContainer>
          <CharacterWidget />
        </AppContainer>
      </AppDataProvider>
    </ThemeProvider>
  );
};

export default App;
