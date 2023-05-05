import React, { useState } from 'react'
import {addCourse} from './CourseReducer'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Create() {
    const[name, setName] = useState('')
    const[description, setDescription] = useState('')
    const courses = useSelector((state) => state.courses);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCourse({id: courses[courses.length - 1].id + 1 , name, description}))
       
        navigate('/')
    }

    return (
        <div>
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
                <div className="w-50 border bg-secondary text-white p-5">
                    <h3>Add New Course</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Course Name</label>
                            <input type="text"  name='name' className="form-control"  placeholder="Course Name" onChange={event => setName(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" name='description' rows="3" placeholder="Course Description" onChange={event => setDescription(event.target.value)}></textarea>
                        </div> <br />
                        <button className="btn btn-info">Add</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
