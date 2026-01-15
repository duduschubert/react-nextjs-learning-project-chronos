import { Menu } from './components/Menu/Index.tsx';
import { Logo } from './components/Logo/Index.tsx';
import { Cycles } from './components/Cycles/Index.tsx';
import { Footer } from './components/Footer/index.tsx';
import { Container } from './components/Container/index.tsx';
import { CountDown } from './components/CountDown/Index.tsx';
import { DefaultInput } from './components/DefaultInput/Index.tsx';
import { DefaultButton } from './components/DefaultButton/Index.tsx';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';


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

      <Container>
        <form className='form' action=''>
          <DefaultInput
            labelText='Task/Tarefa'
            type='text'
            id='meuInput'
            placeholder='Digite algo'
          />

          <div className='formRow'>
            {' '}
            <p>Lorem ipsum dolor sit.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
           {/* <DefaultButton icon={<StopCircleIcon />} color='red' />*/}
          </div>

          <div>
            <Footer />
          </div>
        </form>
      </Container>
    </>
  );
}
