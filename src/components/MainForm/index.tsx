import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles/Index';
import { DefaultButton } from '../DefaultButton/Index';
import { DefaultInput } from '../DefaultInput/Index';

export function MainForm() {
  return (
    <form className='form' action=''>
      <div className='form'>
        <DefaultInput
          labelText='Task/Tarefa'
          type='text'
          id='meuInput'
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        {' '}
        <p>Próximo intervalo é de ... min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
        {/* <DefaultButton icon={<StopCircleIcon />} color='red' />*/}
      </div>
    </form>
  );
}
