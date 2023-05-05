import React from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useState } from 'react'
import { updateCourse } from './CourseReducer'
import { useDispatch } from 'react-redux'

export default function Update() {
    const {id} = useParams();
    const courses = useSelector((state) => state.courses);
    const existingCourse = courses.filter(f => f.id == id);
    const {name, description} = existingCourse[0]
    const[updateName, setName] = useState(name)
    const[updateDescription, setDescription] = useState(description)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate =(e)=>{
        e.preventDefault();
        dispatch(updateCourse({
            id: id,
            name: updateName,
            description: updateDescription
           
        }))
        navigate('/')
    }
    return (
        <div>
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
                <div className="w-50 border bg-secondary text-white p-5">
                    <h3>Update Course</h3>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Course Name</label>
                            <input type="text" name='name' className="form-control" placeholder="Course Name" value={updateName} onChange={event => setName(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" name='description' rows="3" placeholder="Course Description" value={updateDescription} onChange={event => setDescription(event.target.value)}></textarea>
                        </div> <br />
                        <button className="btn btn-info">Update</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
