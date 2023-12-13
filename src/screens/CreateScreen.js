import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogForm from '../components/BlogForm'
import { Context } from '../context/BlogContext'

export default function CreateScreen({navigation}) {
    const { addBlogs } = useContext(Context)
    return (
        <SafeAreaView>
            <BlogForm onSubmit={(title, content) => { addBlogs(title, content, () => navigation.navigate('Index')) }} />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({})
