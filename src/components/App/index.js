import { useContext, useMemo } from 'react';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { AppProvider, AppContext } from '../../contexts/AppContext';
import GlobalStyles from '../../assets/styles/global';
import themes from '../../assets/styles/themes';
import Routes from '../../Routes';

import { Container } from './styles';

function App() {
  const { theme } = useContext(AppContext);

  const currentTheme = useMemo(() => {
    return themes.light || themes.dark;
  }, [theme]);
  
  return (
    <BrowserRouter>
      <AppProvider>
        <ThemeProvider theme={currentTheme}>
          <GlobalStyles />
          
          <Container>
            <Routes />
          </Container>
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
