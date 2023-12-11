import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";




const init = () => {
    if (localStorage.getItem('todos'))
        return JSON.parse(localStorage.getItem('todos'));
    return [];
};


export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };

        dispatch(action);
    }

    const handleRemoveTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        };

        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        };

        dispatch(action);
    }
    const todosCount = () => todos.length;
    const pendingTodosCount = () => todos.filter(todo => !todo.done).length;
    
    return {
        todos,
        dispatch,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount
    };
}
