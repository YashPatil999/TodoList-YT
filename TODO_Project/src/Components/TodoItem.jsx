import styles from "./todoitem.module.css"
export default function TodoItem({item, todos, setTodos})
{
    function handledelete(item)
    {
        setTodos(todos.filter((todo)=> todo !== item));
    }
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>{item}
            <span>
                <button onClick={()=>handledelete(item)} className={styles.deleteButton}>X</button>
            </span>
            </div>
            <hr className={styles.line}/>
        </div>
    );
}