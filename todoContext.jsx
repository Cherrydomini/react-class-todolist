import React, {useReducer, createContext, useContext, useRef} from "react";
 
const initialTodos = [
    {
        id: 1,
        text: '1.프론트엔드 프로젝트 만들기',
        done: false
    },
    {
        id: 2,
        text: '2.밥 잘 챙겨먹기',
        done: true
    },
    {
        id: 3,
        text: '3.운동하기',
        done: true
    },
    {
        id: 4,
        text: '4.일기쓰기',
        done: false
    }


];

 
// 각각의 컴포넌트에서 발생하는 이벤트를 세분화 시킴
function todoReducer(state, action){
    switch(action.type){
        case 'CREATE':  
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>

            todo.id === action.id ? { ...todo, done: !todo.done } : todo );
 
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
 
        default:
            throw new Error(`${action.type}이 잘못 전달됨`);
    }
}
 
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();
 //todos 상태어ㅣ, onToggle, onRemove, onCreate 함수
 //해당 값을 props를 사요해ㅛㅓ 자식 컴포넌트들에게 전달해주는 방싲으로 구현
 //프로젝트의 규모가 커지게 돤다면 촤상위 컴포넌트인 App에서
 //모든 상태 관리를 하기엔 App컴포넨츠의 코드가 너무 복잡해질 수도 있고,
 //props를 전달해줘야하는 컴포넌트가 너무 깊숙히 있을 수도 있습니다
 //(여러 컴포넌트를 )
export function TodoProvider({ children }){
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);
    // const nextId = useRef(5);//최초에 새로 추가될 배열요소 아이디값
   return(
        <TodoStateContext.Provider value={state}>{/* value는 현재 배열상태값을 다루는 props*/}
            <TodoDispatchContext.Provider value={dispatch}>{/* value는 현재 특정이벤트(Toggle,remove)인 상태값을 다루는 props*/}
                <TodoNextIdContext.Provider value={nextId}>{/* value는 현재 배열에서 배열요소를 추가하는데 다루는 props*/}
                {children}{/* 현재 화면에 보이는 컴포넌트들을 의미*/}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
   )
}

 
//
export function useTodoState(){
    const context = useContext(TodoStateContext);
    if(!context){
        throw new Error('TodoProvider를 찾을 수 없음');
    }
    return context;
}
 
export function useTodoDispatch(){
    const context = useContext(TodoDispatchContext);
    if(!context){
        throw new Error('TodoProvider를 찾을 수 없음');
    }
    return context;
}

 
export function useTodoNextId(){
    const context = useContext(TodoNextIdContext);
    if(!context){
        throw new Error('TodoProvider를 찾을 수 없음');
    }
    return context;
}