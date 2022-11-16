import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

import { Layout } from "../screens/layout";

const stack = createStackNavigator();
function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigaitor initialRouteName= 'Layout'>
                <Stack.Screen name = "Layout" component = {Layout} options = {{title: '처음 Layout'}}/>
            </Stack.Navigaitor>
        </NavigationContainer>
    );
}
export default MainStackNavigator