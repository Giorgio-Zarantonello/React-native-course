import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  const [count, setCount] = useState(0);
  console.log(colors);
  const handleAddColor = () => {
    if (count < 50) {
      if (count % 10 === 0) {
        setColors([...colors, [randomRgb()]]);
        setCount(count + 1);
      } else {
        setColors([
          ...colors.slice(0, -1),
          [...colors[colors.length - 1], randomRgb()],
        ]);
        setCount(count + 1);
      }
    }
    else {
      null;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
      //`flexWrap: `wrap`` is not supported with the `VirtualizedList` components.
      //Consider using `numColumns` with `FlatList` 
      numColumns={5} 
        style={styles.list}
        contentContainerStyle={{
          justifyContent: 'flex-start',
        }}
        keyExtractor={(item, index) => index.toString()}
        data={colors}
        renderItem={({ item }) => (
          <View style={styles.colorColumn}>
            {item.map((color, index) => (
              <View key={index} style={styles.colorBox(color)} />
            ))}
          </View>
        )}
      />

      <View style={styles.buttonContainer}>
        <Button
          style={styles.addButton}
          title="Add a Color"
          onPress={handleAddColor} />
      </View>
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    width: '100%',
  },
  list: {
    margin: 40,
  },
  colorColumn: {
    borderColor : 'grey',
    borderWidth : 1,
  },
  colorBox: color => ({
    height: 50,
    width: 50,
    
    backgroundColor: color,
    margin: 5,    
    borderRadius: 10,

  }),
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default ColorScreen;