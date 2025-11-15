

import { UserProvider } from '@/context/UserContext'
import { Stack } from 'expo-router'
import React from 'react'

export default function _layout() {
    return (
        <UserProvider >
            <Stack>
                <Stack.Screen name='index' options={{ title: 'Home' }}></Stack.Screen>
                {/* <Stack.Screen name='login' options={{ title: 'Login' }}></Stack.Screen> */}
            </Stack>
        </UserProvider>
    )
}