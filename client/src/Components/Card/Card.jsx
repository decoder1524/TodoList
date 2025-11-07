import React, { useState } from 'react'
import EditTodo from '../Layout/EditTodo'
import toast from 'react-hot-toast'
import TodoServices from '../../services/TodoServices'

const Card = ({ allTask,getUserTask }) => {
    const [showModal, setShowModal] = useState(false)

    const handleEdit = () => {
        setShowModal(true)
    }
    const handleDelete = async (id) => {
        try {
            await TodoServices.deleteTodo(id)
            toast.success('Task Deleted Successfully')
            getUserTask()
        } catch (error) {
            console.log(error);
            toast.error(error.message)


        }
    }
    return (
        <>
            <div className="card-container">
                {
                    allTask?.map((task, i) => (
                        <>
                            <div className="card border-primary mb3 mt-3" style={{ maxWidth: '18rem' }} key={i}>
                                <div className="card-header">
                                    <div className="chead">
                                        <h6>{task?.title.substring(0, 10)}</h6>
                                        <h6 className={task?.isCompleted === true ? 'task-cmp' : 'task-inc'}>
                                            {task?.isCompleted === true ? 'Completed' : 'Inclomplete'}
                                        </h6>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6 style={{ fontWeight: "bold" }}>{task?.title}</h6>
                                    <p className="card-text">{task?.description}</p>
                                    <h6>Date: {task?.createdAt.substring(0, 10)}</h6>
                                </div>
                                <div className="card-footer bg=transparent border-primary">
                                    <button className="btn btn-warning" title='EDIT TASK' onClick={handleEdit}>
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button className="btn btn-danger ms-2" title='DELETE TASK' onClick={() => {
                                        handleDelete(task?._id)
                                    }}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                            <div>
                                {showModal && <EditTodo task={task} setShowModal={setShowModal} getUserTask={getUserTask} />}
                            </div>
                        </>
                    ))}
            </div>
        </>
    )
}

export default Card
