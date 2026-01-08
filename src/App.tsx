import { Container } from './components/Container/index.tsx';
import { Menu } from './components/Menu/Index.tsx'
import { Logo } from './components/Logo/Index.tsx'
import { CountDown } from './components/CountDown/Index.tsx';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
        </Container>
            
      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>
    </>
  );
}
