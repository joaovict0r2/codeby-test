import { useContext, useMemo } from 'react';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { AppContext } from '../../contexts/AppContext';
import GlobalStyles from '../../assets/styles/global';
import themes from '../../assets/styles/themes';
import Routes from '../../Routes';

import { Container } from './styles';

function App() {
  const { theme } = useContext(AppContext);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        
        <Container>
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
