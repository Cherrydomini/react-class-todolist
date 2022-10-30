import React from "react";
import styled from "styled-components";
//import {TodoProvider} from './todoContext';

const TodoTemplateBlock = styled.div`
margin: 0 auto;
margin-top: 90px;
width:512px;
height: 768px;
background-color: azure;
border-radius: 16px;
box-shadow: 0 0 8px 0 rgba(0,0,0,0.1);

//TodoHead, TodoLlist, TodoCreate 들어갈 컴포넌트를 세로로 정렬
display: flex;
flex-direction: column;
position: relative;
`;
function TodoTemplate({children}){
    return(
        <div>
            <TodoTemplateBlock>
                {children}
            </TodoTemplateBlock>
        </div>
    )
}

export default TodoTemplate;