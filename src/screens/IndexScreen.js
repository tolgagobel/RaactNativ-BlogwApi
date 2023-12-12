import React, { useContext, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Context } from '../context/BlogContext'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function IndexScreen({navigation}) {
    const { state, getBlogs } = useContext(Context)

    useEffect(() => {
        getBlogs();
    }, []);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FlatList
                    data={state}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.button_container} onPress={()=>navigation.navigate('Show',{id:item.id})}>
                                <View style={styles.button_body}>
                                    <Text style={styles.button_title}>{item.title}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Icon name="trash" size={20} style={styles.trash} />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button_container: {
        borderWidth:1,
        borderColor:'#fff',
        marginHorizontal: 10,
        marginTop: 20,
        borderRadius: 10,
        padding: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    button_body: {},
    button_title: {
        fontSize: 20,
        fontWeight: '600',
        color:'#3081D0'
    },
    trash: {
        color:'red'
    },
})
