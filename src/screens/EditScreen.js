import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogForm from '../components/BlogForm'
import { Context } from '../context/BlogContext'

export default function EditScreen({ route }) {
    const { state, editBlog } = useContext(Context)
    const Blog = state.find((blog) => blog.id == route.params.id)
    console.log(route.params.id)
    return (
        <SafeAreaView>
            <BlogForm initialValues={{ title: Blog.title, content: Blog.content }} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
