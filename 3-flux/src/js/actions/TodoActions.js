import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function reloadTodos() {
  dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 123412341234,
        text: "Text text text",
        complete: false
      },
      {
        id: 13412341234,
        text: "dfalsdkmfas dlfkamsd ;lkam",
        complete: true
      }
    ]});
  },1000);
}
