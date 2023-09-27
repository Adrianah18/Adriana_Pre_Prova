import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const UserProfileScreen = ({ route, navigation }) => {
  const { userId } = route.params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userId]);

  return (
    <View style={styles.container}>
      {user ? (
        <View style={styles.userProfile}>
          <Text style={styles.userName}>Nome: {user.name}</Text>
          <Text style={styles.userEmail}>Email: {user.email}</Text>
          <Button
            title="Ver Posts"
            onPress={() => navigation.navigate('UserPosts', { userId })}
          />
        </View>
      ) : (
        <Text style={styles.loadingText}>Carregando...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  userProfile: {
    padding: 16,
    backgroundColor: '#FFC2D1',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  userName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#936ED4',
    textAlign: 'center',
  },
  userEmail: {
    fontSize: 20,
    marginVertical: 8,
    textAlign: 'center',
    fontWeight:'bold',
    color: 'white',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;