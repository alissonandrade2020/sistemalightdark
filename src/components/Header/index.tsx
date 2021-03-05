import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
     <strong>Light e Dark</strong>

    
      <strong>Alisson Andrade</strong>
        <p><a href="https://github.com/alissonandrade2020"><b>Acesse o Github</b></a></p>
               <p><a href="https://app.rocketseat.com.br/me/alissondeandradearaujo"><b>Acesse o Perfil - Rocketseat</b></a></p>
  

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  );
};

export default Header;
