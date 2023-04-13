import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  const [count, setCount] = useState(0);

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
    <View>
      <Button title="Add a Color" onPress={handleAddColor} />

      <FlatList
        style={styles.list}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
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
  list: {
    margin: 45,
  },
  colorColumn: {
    marginRight: 10,
  },
  colorBox: color => ({
    height: 50,
    width: 50,
    backgroundColor: color,
    marginBottom: 10,

  }),
});

export default ColorScreen;