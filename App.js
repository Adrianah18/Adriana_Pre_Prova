// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import UserListScreen from './UserListScreen';
import UserProfileScreen from './UserProfileScreen';
import UserPostsScreen from './UserPostsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="UserList">
          <Stack.Screen name="UserList" component={UserListScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
          <Stack.Screen name="UserPosts" component={UserPostsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};