import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import { Container } from "./styles";

interface ThemeSwitcherProps {
  toggleTheme(): void;
}

export function ThemeSwitcher({ toggleTheme }: ThemeSwitcherProps) {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
        handleDiameter={16}
        offColor="#000"
        onColor="#fff"
        offHandleColor="#fff"
        onHandleColor="#000"
      />
    </Container>
  )
}