import React from "react";

import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (<View>
        <Text>{color}</Text>
        <View style={styles.row}><TouchableOpacity
            onPress={() => onIncrease()} 
            title={`Increase ${color}`} 
            style={styles.addButtonBlue}>
            <View style={styles.addButton}>
          <Text style={styles.plus}>+</Text>
        </View></TouchableOpacity>
        <TouchableOpacity
            onPress={() => onDecrease()} 
            title={`Decrease ${color}`} 
            style={styles.addButtonBlue}>
            <View style={styles.addButton}>
          <Text style={styles.plus}>-</Text>
        </View></TouchableOpacity></View>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      },
    addButtonBlue: {
        height: 100,
        width: 100,
        margin: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db',
      },
      addButton: {
        width: 30,
        height: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
});

export default ColorCounter;