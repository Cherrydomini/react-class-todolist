import React from 'react';
import './App.css';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './component/TodoTemplate';
import TodoHead from './component/TodoHead';
import TodoList from './component/TodoList';
import TodoCreate from './component/TodoCreate';

import { TodoProvider } from './todoContext';
//yarn add styled-components\
//yarn add react-icons

//전역으로 스타일을 선언
const GlobalStyle = createGlobalStyle`
body{
  background: turquoise;
}
`;

function App() {
  return (
    <>
    <TodoProvider>
      <GlobalStyle/>
        <TodoTemplate>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
        </TodoTemplate>
    </TodoProvider>
    </>
  );
}

export default App;
