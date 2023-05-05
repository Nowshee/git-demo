import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteCourse } from './CourseReducer';

export default function Home() {
    const courses = useSelector((state) => state.courses);
    const dispatch = useDispatch();

    const handleDelete = (id) => {

        dispatch(deleteCourse({id: id}))
        

    }
   
    return (
        <div>
            <div className="container">
                <h2>CRUD using Redux</h2>
                <Link to = "/create" className="btn btn-success my-3">Create Course</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr  key ={index}>
                                <td>{course.id}</td>
                                <td>{course.name}</td>
                                <td>{course.description}</td>
                                <td>
                                <Link to={`/edit/${course.id}`}className="btn btn-sm btn-primary">Edit</Link>
                                <button onClick={() => handleDelete(course.id)} className="btn btn-sm btn-danger my-3">Delete</button>
                                </td>
                               
                               
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>


        </div>
    )
}
