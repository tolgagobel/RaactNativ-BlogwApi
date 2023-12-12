import React from "react";
import JsonServer from "../api/JsonServer";
import CreateDataContext from "./CreateDataContext";

const BlogReducer = (state,action) => {
    switch (action.type) {
        case 'get_blog':
            return action.payload

        default:
            state;
    }
}

const getBlogs = (dispatch) => {
    return async () => {
        const response = await JsonServer.get('/blogpost')
        dispatch({type:'get_blog',payload:response.data})
    }
}

export const {Context,Provider} = CreateDataContext(BlogReducer,{getBlogs},{blogPosts: [] })
