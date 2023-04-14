import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const items = [
    { title: 'Components Demo', key: 'Components' },
    { title: 'List Demo', key: 'List' },
    { title: 'Image Demo', key: 'Image' },
    { title: 'Counter Demo', key: 'Counter' },
    { title: 'Color Demo', key: 'Color' },
    { title: 'Square Demo', key: 'Square' },
    { title: 'Text Demo', key: 'Text' },
    { title: 'Box Demo', key: 'Box' },
  ];

  return (
    <View>
      <Text style={styles.text}>Homepage - Udemy Course</Text>
      <FlatList style={styles.wrapper}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.key)}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper : {
    marginBottom: 40,
  },  
  text: {
    fontSize: 30,
    margin: 20,
    textAlign: 'center'
  },
  buttonContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },
});

export default HomeScreen;