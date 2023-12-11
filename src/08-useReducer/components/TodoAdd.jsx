import { useForm } from "../../hooks/useForm"


export const TodoAdd = ({onNewTodo}) => {

  const { onInputChange, description, onResetForm } = useForm({ description: '' });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description.trim(),
      done: false
    };

    // console.log({newTodo});
    onNewTodo(newTodo);


    onResetForm();

  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        onChange={onInputChange}
        value={description}
        name="description"
      />
      <button className="btn btn-outline-primary mt-2" type="submit">Agregar</button>
    </form>
  )
}
