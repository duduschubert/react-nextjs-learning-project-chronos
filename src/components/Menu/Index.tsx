import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';

    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); // Não segue o link
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });

    // document.documentElement.setAttribute('data-theme', theme);
  }

  /*useEffect(() => {
  console.log('useEffect sem dependência', Date.now());
})*/

  /* useEffect(() => {
  console.log('useEffect com array de deps vazio', Date.now()); //executa apenas quando o React monta o componente pela primeira vez!!! Essa prática é muito boa quando você quer buscar dados de uma API externa, quando o componente carrega você puxará os dados e joga em tela e caso o componente necessite de renderizar, este processo não necessitará de ser feito novamente.
}, []);*/

  useEffect(() => {
    console.log('Theme mudou', theme, Date.now());
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    return () => {
      console.log('Este componente será atualizado'); // Função de clean up
    };
  }, [theme]); // array de dependências, a função só será executada quando o valor da variável mudar, ou seja, dark para light!

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a Home'
        title='Ir para a home'
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver histórico'
        title='Ver histórico'
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar tema'
        title='Mudar tema '
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
