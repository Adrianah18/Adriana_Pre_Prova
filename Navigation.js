import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserListScreen from './UserListScreen';
import UserProfileScreen from './UserProfileScreen';
import UserPostsScreen from './UserPostsScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="UserList" component={UserListScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="UserPosts" component={UserPostsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;