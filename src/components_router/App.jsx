import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App(props) {

    const [todos, setTodos] = useState([]);
    const url = "https://jsonplaceholder.typicode.com"

    const fetchApi = (resource, id) => {
        
        fetch(`${url}/${resource}/${id ? `/${id}` : ''}`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setTodos(json);
            })

    }

    const getApiAxios = (resource, id) => {
        axios.get(`${url}/${resource}/${id ? `/${id}` : ''}`)
            .then(response => {
                setTodos(response.data);
            })
            
    }

    useEffect(() => {
        // fetchApi("todos");
        getApiAxios("todos")
    },[])
    
    return (
        <div>
            <ul>
                {todos.map(todo => {
                    return <li>{todo.title}</li>
                })}
            </ul>

        </div>
    );
}

export default App;