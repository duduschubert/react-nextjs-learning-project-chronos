import { Heading } from './components/Heading';


import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('Oi');
  return (
    <>
      <Heading/> {/*Não possuem tags filhas, por isso abre e fecha na mesma sentença*/}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iste omnis
        eligendi, eveniet tempore velit numquam perspiciatis praesentium rem
        molestiae accusamus consequuntur amet cum, magnam repellat consequatur
        eius nisi saepe.
      </p>
    </>
  );
}
//