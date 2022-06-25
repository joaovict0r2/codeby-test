import { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext';

import { Button } from './styles';

function DarkModeToggle() {
  const { theme, handleToggleTheme } = useContext(AppContext);

  return (
    <Button onClick={handleToggleTheme}>
      {theme === 'dark' ? '🌞' : '🌚'}
    </Button>
  );
}

export default DarkModeToggle;
