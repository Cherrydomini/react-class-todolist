import React from "react";
import styled from "styled-components";
import {useTodoState} from '../todoContext';

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #e9ecef;

    h1{
        margin:0;
        font-size: 36px;
        color:cadetblue;
    }
    .day{
        margin-top: 4px;
        color: darkcyan;
        font-size: 21px;
    }
    .task-left{
        color:cyan;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function TodoHead(){
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayname = today.toLocaleDateString('eng-US', {weekday: 'long'});
    const daynamek = today.toLocaleDateString('ko-KR', {weekday: 'long'});
    
    return(
        <>
            <TodoHeadBlock>
                <h1>{dateString}</h1>
                <div className="day">{daynamek}/{dayname}</div>
                <div className="task-left">할 일 {undoneTasks.length}개 남음</div>
            </TodoHeadBlock>
        </>
    )
}

export default TodoHead;