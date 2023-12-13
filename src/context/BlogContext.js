import React from "react";
import JsonServer from "../api/JsonServer";
import CreateDataContext from "./CreateDataContext";

const BlogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blog':
            return action.payload
        case 'edit_blog':
            return state.map((blogPosts) => blogPosts.id == action.payload.id ? action.payload : blogPosts)
        default:
            state;
    }
}

const getBlogs = (dispatch) => {
    return async () => {
        const response = await JsonServer.get('/blogpost')
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
    }
}

const editBlog = (dispatch) => {
    return async (id, title, content) => {
        await JsonServer.put(`/blogpost/${id}`, { title, content })
        dispatch({ type: 'edit_blog', payload: { id, title, content } })
    }
}

export const { Context, Provider } = CreateDataContext(BlogReducer, { getBlogs, addBlogs, deleteBlog, editBlog }, { blogPosts: [] })
