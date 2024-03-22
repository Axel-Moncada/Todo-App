function TodoList({children}){
    return(
    <div className="todolist">
    <ul>
        {children}
    </ul>
    </div>
    );
}

export {TodoList};