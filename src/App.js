import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IndexScreen from './screens/IndexScreen'
import ShowScreen from './screens/ShowScreen'
import CreateScreen from './screens/CreateScreen'
import EditScreen from './screens/EditScreen'

export default function App() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerTitle:"Blog App"}}>
                <Stack.Screen name='Index' component={IndexScreen} />
                <Stack.Screen name='Show' component={ShowScreen} />
                <Stack.Screen name='Create' component={CreateScreen} />
                <Stack.Screen name='Edit' component={EditScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
