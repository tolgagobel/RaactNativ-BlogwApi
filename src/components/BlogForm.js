import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function BlogForm({ blog,onSubmit, initialValues, isVisible }) {
    const [title, setTitle] = useState(initialValues ? initialValues.title : '')
    const [content, setContent] = useState(initialValues ? initialValues.content : '')
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Başlık :</Text>
            <TextInput style={styles.content} value={title} onChangeText={(text) =>setTitle(text)} />
            <Text style={styles.title}>İçerik :</Text>
            <TextInput style={styles.content} value={content} onChangeText={(text) => setContent(text)}/>
            <TouchableOpacity style={styles.button_container} onPress={() => onSubmit(title,content)}>
                <View style={styles.button_body}>
                    <Text style={styles.button_title}>{isVisible ? 'Kaydet' : 'Güncelle'}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff'
    },
    content: {
        padding: 15,
        borderWidth: 1,
        marginVertical: 16,
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 10
    },
    button_container:{
        justifyContent:'center',
        alignItems:'center',
    },
    button_body: {
        paddingHorizontal:20,
        paddingVertical:13,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#005B41',
        borderColor:'#005B41',
        borderRadius:10
    },
    button_title: {
        color:'#fff',
        fontSize:17
    }
})
