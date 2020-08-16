import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Pannel from '../screens/AdminPannel';
import Home from '../screens/Home';
import TeacherLogin from '../screens/TeacherLogin';
import ParentLogin from '../screens/ParentsLogin';
import AdminLogin from '../screens/AdminLogin';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TeacherLogin" component={TeacherLogin} />
        <Stack.Screen name="ParentLogin" component={ParentLogin} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="AdminPannel" component={Pannel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
