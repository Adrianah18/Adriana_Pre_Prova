import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';


const UserPostsScreen = ({ route }) => {
  const { userId } = route.params;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userId]);
  
  return (
    <View style={styles.container}>
        <FlatList 
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View style={styles.postItem}>
                <Text style={styles.postTitle}>Título: {item.title}</Text>
                <Text style={styles.postBody}>Corpo: {item.body}</Text>
            </View>
            )}
        />
    </View>
 );
};

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  postItem: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postBody: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default UserPostsScreen;