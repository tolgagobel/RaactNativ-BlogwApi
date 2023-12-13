import React from "react";
import JsonServer from "../api/JsonServer";
import CreateDataContext from "./CreateDataContext";

const BlogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blog':
            return action.payload
        case 'delete_blog':
            return state.filter((blogPosts) => blogPosts.id != action.payload)
        default:
            state;
    }
}

const getBlogs = (dispatch) => {
    return async () => {
        const response = await JsonServer.get('/blogpost')
        dispatch({ type: 'get_blog', payload: response.data })
    }
}

const addBlogs = (dispatch) => {
    return async (title, content, callback) => {
        const response = await JsonServer.post('/blogpost', { title, content })
        // dispatch({ type: 'add_blog', payload: { title, content } })
        if (callback) {
            callback()
        }
    }
}

const deleteBlog = (dispatch) => {
    return async (id) => {
        const response = await JsonServer.delete(`/blogpost/${id}`)
        dispatch({ type: 'delete_blog', payload: id })
    }
}


export const { Context, Provider } = CreateDataContext(BlogReducer, { getBlogs, addBlogs, deleteBlog }, { blogPosts: [] })
