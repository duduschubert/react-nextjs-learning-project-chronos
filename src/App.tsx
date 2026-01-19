import { Home } from './pages/Home';
import { useState } from 'react';
import { TaskContextProvider } from './contexts/TaskContext';

import './styles/theme.css';
import './styles/global.css';

export function App() {
 const [state, setState] = useState();
  
  return (
  <TaskContextProvider>
    <Home/>;
  </TaskContextProvider>
)}
