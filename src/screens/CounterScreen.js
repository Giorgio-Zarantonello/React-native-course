import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const PAYLOAD = 1;

const reducer = (state, action) => {
  // state === {count : number}
  //action === {type : 'increment' || 'decrement' , payload : 1}

  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return state.count <= 0 ? state : { ...state, count: state.count - action.payload };
    default:
  }

};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (<View>
    <View><Text style={styles.currentCount}>Current Count : {state.count}</Text></View>

    <View style={styles.row}>

      <TouchableOpacity
        onPress={() => dispatch({
          type: 'increment',
          payload: PAYLOAD
        })}
        style={styles.addButtonBlue}>

        <View style={styles.addButton}>
          <Text style={styles.plus}>+</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch({
          type: 'decrement',
          payload: PAYLOAD
        })}
        style={styles.addButtonBlue}>

        <View style={styles.addButton}>
          <Text style={styles.plus}>-</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  row: {
    marginTop: 200,
    flexDirection: 'row',
  },
  addButtonBlue: {
    height: 150,
    width: 150,
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
  currentCount: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    marginTop:300,
    width: "100%"
  },
  plus: {
    color: '#3498DB',
  },
});

export default CounterScreen;
