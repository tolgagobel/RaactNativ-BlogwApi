import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'

export default function ShowScreen({route}) {
    const {state} = useContext(Context)
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20
    },
    title:{
        textAlign:'center',
        fontSize:28,
        margin:20,
        color:'#fff',
        fontWeight:'600'
    },
    content:{
        fontSize:17,
        margin:10,
        color:'#fff',
        fontWeight:'400'
    },
})
