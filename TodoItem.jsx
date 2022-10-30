import React from "react";
import styled,{css} from "styled-components";
import {MdDone, MdDelete} from 'react-icons/md';
import { useTodoDispatch } from "../todoContext";

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: crimson;
    font-size: 24px;
    curosr: pointer;
    display: none;
    float: right;
`;
const TodoItemBlock = styled.div`
display: flex;
align-items: center;
padding-top: 12px;
padding-bottom: 12px;

&:hover{
    ${Remove}{
        display: inline;
    }
}
 `;
//&:hover{ 자신에게 hover이벤트 적용되면
//     ${Remove}{//대상을
//         display: inline; //보여주라는 의미
//     }
// }
// `;

const CheckCircle =styled.div`
width: 30px;
height: 30px;
margin-rght: 20px;
border: 3px solid Chartreuse;
display: flex;
border-radius: 50%;
justify-content:center;
align-items: center;

${props => 
    props.done && 
    css`border: 3px solid OliveDrab;
    color: OliveDrab;`
}
`;

const Text = styled.div`
flex: 1;
font-sized: 21px;
color: charcoalgrey;
${props => props.done && 
    css`color:#ced4da;`
}
`;
function TodoItem({id, text, done}){
    const dispatch = useTodoDispatch();
    //dispatch에 값을 대입(action)
    const onToggle = () => dispatch({type:'TOGGLE', id});
    const onRemove = () => dispatch({type:'REMOVE', id});
    return(
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>{done && <MdDone/>}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}>
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    )
}

export default TodoItem;