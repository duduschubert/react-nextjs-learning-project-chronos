import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown/Index';
import { MainForm } from '../../components/MainForm';

import { MainTemplate } from '../../Templates/MainTemplate';

// Essa parte será o miolo da página que irá trocar usando sempre a base MainTemplate

export function Home() {
   return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
