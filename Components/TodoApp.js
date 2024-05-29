    import React, { useState , useCallback, useMemo } from 'react';
    import '../App.css';

    const TodoApp = () => {
    const [todo, setTodo]= useState([]);
    const [input , setInput] = useState(0);

    const addTodo = useCallback(()=>{
        if (input !== "") {
            const newTodo = [...todo];
            newTodo.push(input);
        setTodo(newTodo);
        setInput("");
        }
    },[input]);
    const delTodo = useCallback ((inn)=>{
        function dt(i) {
            return i !== inn
    }
        const dtodo = todo.filter(dt);
        setTodo(dtodo);        
    },[])

    const handleEditTodo = (index, newValue) => {
        const updatedTodos = [...todo];
                updatedTodos[index] = newValue;
                setTodo(updatedTodos);
      };
      const tt = useMemo(() => (
        todo.map((todo, index) => (
          <div key={index}>
            <span>{todo}</span>
            <button onClick={() => delTodo(index)}>Delete</button>
            <button onClick={() => {
              const newTodo = prompt('Edit todo:', todo);
              if (newTodo !== null) {
                handleEditTodo(index, newTodo);
              }
            }}>Edit</button>
          </div>
        ))
      ), [todo, delTodo, handleEditTodo]);

    return (
        <div>
        <h1>To-Do List</h1>
        <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo..."
        />
        <button onClick={addTodo}>Add Todo</button>
        <div>
        {tt}
        </div>
    </div>
    );
    };

    export default TodoApp;
