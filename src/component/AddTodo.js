import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submitHandle = (e) => {
        e.preventDefault()
        if (!title || !desc) {
            alert("please insert the data")
        } else {
            addTodo(title, desc);
            setTitle("")
            setDesc("")
        }
    }
    return (
        <div className='container my-5 py-4'>
            <h3>Add a Todo</h3>
            <form onSubmit={submitHandle}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => { setTitle(e.target.value) }} aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" className="form-control" id="desc" value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                </div>
                <button type="submit" className="btn btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo