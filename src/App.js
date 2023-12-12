import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IndexScreen from './screens/IndexScreen'
import ShowScreen from './screens/ShowScreen'
import CreateScreen from './screens/CreateScreen'
import EditScreen from './screens/EditScreen'
import { Provider } from './context/BlogContext'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function App() {
    const Stack = createNativeStackNavigator()
    return (
        <Provider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerTitle: "Blog App", contentStyle: { backgroundColor: '#3081D0' } }}>
                    <Stack.Screen name='Index' component={IndexScreen} options={({ navigation }) => ({
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                                <Icon name="plus" size={20} />
                            </TouchableOpacity>
                        )
                    })} />
                    <Stack.Screen name='Show' component={ShowScreen} options={({ navigation,route }) => ({
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Edit',{id:route.params.id})}>
                                <Icon name="pencil" size={20} />
                            </TouchableOpacity>
                        )
                    })} />
                    <Stack.Screen name='Create' component={CreateScreen} />
                    <Stack.Screen name='Edit' component={EditScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

const styles = StyleSheet.create({})
