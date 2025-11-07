import axios from 'axios'
const user = JSON.parse(localStorage.getItem('todoapp'))
axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`

const createTodo = (data)=>{
    return axios.post('/todo/create',data)

}

const TodoServices = {createTodo}
export default TodoServices