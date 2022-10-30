import React, {useState} from "react";
import styled, {css} from 'styled-components';
import {MdAdd} from "react-icons/md";
import {useTodoDispatch, useTodoNextId} from '../todoContext';

const CircleButton = styled.button`
width: 80px;
height: 80px;
display: flex;
align-items: center;
justify-content:center;
position: absolute;
left: 50%;
bottom: 0px;
z-index: 5;
transform: translate(-50%, 50%);
background: yellowGreen;
&:hover{
    background:rebeccapurple;
}
&:active{
    background:yellowGreen:
}

cursor: pointer;
color:white;
font-size: 60px;
border-radius: 50%;
border: none;
outline: none;

transition: 0.125s all ease-in;
${props =>
    props.open && 
    css`
    background: #ff6b6b;
    transform: translate(-50%, 50%) rotate(45deg);
    `
}
`;

const InsertFormPositioner = styled.div`
width: 100%;
position: absolute;
left: 0;
bottom: 0;
`;

const Insertform =  styled.form`
    background: powderblue;
    padding-left:32px;
    padding-top:32px;
    padding-right:32px;
    padding-bottom: 72px;


    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1ps solid #e9ecef;

`;

const Input = styled.input`
    padding: 12px;
    border-radius:4px;
    border: 1px solid black;
    width: 100%;
    font-size: 18px;
    box-sizing: border-box;
`;

function TodoCreate(){

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();
    
    const onToggle = () =>{
        setOpen(!open);
    }

    const onchange = (e) =>setValue(e.target.value);
    const onSubmit = e =>{
        e.preventDefault();//서버로 데이터를 전송하는 기능을 막음(새로고침X)
        dispatch({
            type:'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        });
        setValue('');
        setOpen(false);
        nextId.current += 1;
    }
    return(

        <>
            {open &&(
                  <InsertFormPositioner>
                  <Insertform onSubmit={onSubmit}>
                      <Input autoFocus placeholder="힐 일을 입력 후,  enter를 누르세요"
                      onChange={onchange}
                      value={value}
                      name="text"
                      />
                  </Insertform>
              </InsertFormPositioner>

            ) }
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd/>
            </CircleButton>
        </>
    )
}

export default TodoCreate;