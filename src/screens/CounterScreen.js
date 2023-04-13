import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

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

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({
          type: 'increment',
          payload: PAYLOAD
        })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({
          type: 'decrement',
          payload: PAYLOAD
        })}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
