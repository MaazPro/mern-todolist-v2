import axios from 'axios';
axios.defaults.withCredentials = true;
const baseUrl = "https://mern-todolist-v2.vercel.app/";

const getAllToDo = (setToDo)=>{
    axios
    .get(baseUrl)
    .then(({data})=>{
        console.log('data --->', data);
        setToDo(data)
    })
    .catch((err)=>console.log(err))
}
const addToDo = (text, setText, setToDo)=>{
    axios.post(`${baseUrl}/save`, {text})
    .then((data)=>{
        console.log(data);
        setText("");
        getAllToDo(setToDo);
    })
    .catch((err)=>console.log(err))
}

// const updateTodo = (toDoId, text, setToDo, setText, setIsUpdating)=>{
//     axios.post(`${baseUrl}/update`, {_id: toDoId, text})
//     .then((data)=>{
//         setText("");
//         setIsUpdating(false)
//         getAllToDo(setToDo);
//     })
//     .catch((err)=>console.log(err))
// }
const deleteTodo = (_id, setToDo)=>{
    axios.post(`${baseUrl}/delete`, {_id})
    .then((data)=>{
        getAllToDo(setToDo);
    })
    .catch((err)=>console.log(err))
}


export {getAllToDo, addToDo, deleteTodo};