import React, { useReducer } from "react";

import { View, Text, StyleSheet } from 'react-native';

import ColorCounter from "../components/ColorCounter";


const COLOR_INCREMENT = 15;


const funReducer = (state, action) => {
    // state === { red: number, green:number, blue:number }               
    // action = the update that we want to make , === {colorToChange: 'red' || 'green' || 'blue' , amount : 15 || -15 }

    switch (action.colorToChange) {
        case 'red':
            // never do something like : state.red = state.red - 15 ;
            //instead , rebuild the state overwrited with the updated data 
            return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : { ...state, red: state.red + action.amount };
            
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 ? state : { ...state, green: state.green + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state : { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }

};

const SquareScreen = () => {

    //Reducer -> [now all the states are combined in an unique obj,we use RunMyReducer to provide the information for the changes in this istance of state]
    const [state, runMyReducer] = useReducer(funReducer, { red: 0, green: 0, blue: 0 });
    const {red , green , blue } = state;


    return (<View>
        <ColorCounter
            onIncrease={() => runMyReducer({
                colorToChange: 'red',
                amount: COLOR_INCREMENT
            })}
            onDecrease={() => runMyReducer({
                colorToChange: 'red',
                amount: -1 * COLOR_INCREMENT
            })}
            color="Red" />
        <ColorCounter
            onIncrease={() => runMyReducer({
                colorToChange: 'blue',
                amount: COLOR_INCREMENT
            })}
            onDecrease={() => runMyReducer({
                colorToChange: 'blue',
                amount: -1 * COLOR_INCREMENT
            })}
            color="Blue" />
        <ColorCounter
            onIncrease={() => runMyReducer({
                colorToChange: 'green',
                amount: COLOR_INCREMENT
            })}
            onDecrease={() => runMyReducer({
                colorToChange: 'green',
                amount: -1 * COLOR_INCREMENT
            })}
            color="Green" />
        <View style={{ height: 400, width: 400, backgroundColor: `rgb(${red},${green},${blue})`, marginTop: 20 }} />
    </View>)
};

const style = StyleSheet.create({});

export default SquareScreen;

/*
 * 1) useReducer is a Hook fun similat to useState is a Hook , to add functionality
 * Generally we create state variables in the MOST PARENT COMPONENT that needs to READ OR CHANGE a state value 
 * SquareScreen //this needs to read the three different state values
 *      //those need to change the three different state values
 *      red ColorScreen
 *      green ColorScreen
 *      blue ColorScreen
 * 
 * 2) if a child needs to READ a state value , the parent can pass it down as prop
 * note : ColorCounter doesn't need to read state values
 * 3) we use now , a callback function , to update the props in SquareComponent
 * 4) useState is a Hook , with that we can add functionality to a function based component
 */