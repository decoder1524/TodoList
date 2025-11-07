import { useState } from 'react'
import React from 'react'
import Navbar from '../../Components/Layout/Navbar'
import PopModal from '../../Components/Layout/PopModal'

const HomePage = () => {
  const[showModal,setShowModal] = useState(false)
  const[title,setTitle] = useState('')
  const[description,setDescription] = useState('')
  const openModalHandler = ()=>{
    setShowModal(true)
  }
  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="add-task">
        <h1>Your Task</h1>
        <input type="Search" placeholder="Search your task" />
        <button className='btn btn-primary' onClick={openModalHandler} >Create Task <i className="fa-solid fa-plus"/></button>
      </div>
      <PopModal 
      showModal={showModal} 
      setShowModal={setShowModal} 
      title= {title} 
      setTitle = {setTitle}
      description = {description}
      setDescription = {setDescription}
      />
    </div>
    </>
  )
}

export default HomePage
