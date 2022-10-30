import React from "react";
import styled from 'styled-components';
import TodoItem from "./TodoItem";
import {useTodoState} from '../todoContext';

const TodoListBlock = styled.div`
padding: 20px 32px;
padding-bottom: 48px;
overflow-y: auto;
`;

function TodoList(){
    const todos = useTodoState();//todoContext에서 배열을 갖고있는 함수
    return(
        <TodoListBlock>
            {/* <TodoItem text="프론트엔드 프로젝트 만들기" done={true}> </TodoItem>
            <TodoItem text="밥 잘 챙겨먹기" done={true}> </TodoItem>
            <TodoItem text="운동하기" done={false} > </TodoItem>
            <TodoItem text="일기쓰기" done={false}> </TodoItem> */}
            {todos.map( todo => (
            <TodoItem 
                ikey={todo.id}
                id={todo.id}
                text={todo.text}
                done={todo.done}
            />
            ))}
        </TodoListBlock>
    )
}

export default TodoList;