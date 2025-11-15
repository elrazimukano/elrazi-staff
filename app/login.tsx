import { useUser } from '@/hooks/useUser'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const login = () => {
    const { user } = useUser()
    // const {user} = UserContext({})
    console.log({ user })
    return (
        <View>
            <Text>{user}</Text>
        </View>
    )
}

export default login

const styles = StyleSheet.create({})