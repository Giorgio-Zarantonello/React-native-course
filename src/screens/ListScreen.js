
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Rachel Green', age: 24, imageSource: require('../assets/rachel-green.jpg') },
    { name: 'Monica Geller ', age: 24, imageSource: require('../assets/monica.jpg') },
    { name: 'Ross Geller', age: 26, imageSource: require('../assets/ross.jpg') },
    { name: 'Chandler Bing', age: 26, imageSource: require('../assets/chandler.jpg') },
    { name: 'Joey Tribbiani', age: 25, imageSource: require('../assets/joey.jpg') },
    { name: 'Phoebe Buffay', age: 27, imageSource: require('../assets/phoebe.jpg') },
    { name: 'Gunther', age: 35, imageSource: require('../assets/gunther.jpg') },


    
  ];

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imageSource} style={styles.image} />
      <View style={styles.cardTextContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.ageText}>Age {item.age}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={renderCard}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 25,
    margin: 10,
  },
  cardTextContainer: {
    marginLeft:10
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ageText: {
    fontSize: 16,
  },
});

export default ListScreen;