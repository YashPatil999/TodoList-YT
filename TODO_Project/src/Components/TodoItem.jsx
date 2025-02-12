import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handledelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleclick(name) {
    setTodos(
        todos.map((todo)=>
        todo.name === name? {...todo,done:!todo.done} : todo));
  }
  const ClassDef = item.done? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={ClassDef} onClick={()=>handleclick(item.name)}>{item.name}</span>
        <span>
          <button
            onClick={() => handledelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
