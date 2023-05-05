import { createSlice } from '@reduxjs/toolkit';
import { courseList } from './Data';

const courseSlice = createSlice({
    name: "Courses",
    initialState: courseList,
    reducers: {
        addCourse: (state, action) => {
            state.push(action.payload)
        },
        updateCourse: (state, action) =>{
            const {id, name, description} = action.payload;
            const updatingCourse = state.find(course => course.id == id);

            if(updatingCourse)
            {
                updatingCourse.name = name;
                updatingCourse.description = description;
            }

        },
        deleteCourse: (state, action) =>{
            const {id} = action.payload;
            const deletingCourse = state.find(course => course.id === id);
            if (deletingCourse)
            {
                return state.filter (f => f.id != id)
            }

        }


    }
})

export const { addCourse, updateCourse, deleteCourse } = courseSlice.actions;

export default courseSlice.reducer;