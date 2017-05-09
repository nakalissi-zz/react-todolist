import React from "react";

import Todo from "../components/layout/Todo";
import TodoStore from "../store/TodoStore";
import * as TodoActions from "../actions/TodoActions";

export default class Featured extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    }
  }
  componentWillMount() {
    TodoStore.on("change", this.getTodos);
    console.log("count", TodoStore.listenerCount("change"));
  }
  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }
  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    })
  }
  createTodo() {
    TodoActions.createTodo(Date.now());
  }
  reloadTodos() {
    TodoActions.reloadTodos();
  }
  render() {
    const { todos } = this.state;
    const TodosComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <div class="row">
          <div class="col-sm-12">
            <div class="well text-center">
              <button onClick={this.reloadTodos.bind(this)}>Reload</button>
              <h1>Todos</h1>
              <ul>{TodosComponents}</ul>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
