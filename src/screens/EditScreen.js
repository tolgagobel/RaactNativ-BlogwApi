import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogForm from '../components/BlogForm'
import { Context } from '../context/BlogContext'

export default function EditScreen({ route }) {
    const { state, editBlog } = useContext(Context)
    const id =route.params.id
    const Blog = state.find((blog) => blog.id == id)
    return (
        <SafeAreaView>
            <BlogForm onSubmit={(title, content) => { editBlog(id, title, content) }} isVisible={false} initialValues={{ title: Blog.title, content: Blog.content }} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
