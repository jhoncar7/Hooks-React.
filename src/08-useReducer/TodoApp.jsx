import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodo } from "./hooks/useTodo";


export const TodoApp = () => {

    const {
        todos,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount
    } = useTodo();


    return (
        <>
            <h1>Todo App: {todosCount()}, <small>pendientes: {pendingTodosCount()}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleRemoveTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>


        </>
    )
}
