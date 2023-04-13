import React, { useDebugValue, useState } from "react";

import { View, Text, StyleSheet } from 'react-native';

import ColorCounter from "../components/ColorCounter";


const COLOR_INCREMENT = 15;

const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, changePoints) => {
        // color === red , blue , green 
        // change === +15 , -15

        switch (color) {
            case 'red': red + changePoints > 255 || red + changePoints < 0 ? null : setRed(red + changePoints);
                return;
            case 'green': green + changePoints > 255 || green + changePoints < 0 ? null : setGreen(green + changePoints);
                return;
            case 'blue': blue + changePoints > 255 || blue + changePoints < 0 ? null : setBlue(blue + changePoints);
                return;
            default:
                return;
        }


    }


    return <View>
        <ColorCounter
            onIncrease={() => setColor('red', COLOR_INCREMENT)}
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
            color="Red" />
        <ColorCounter
            onIncrease={() => setColor('blue', COLOR_INCREMENT)}
            onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
            color="Blue" />
        <ColorCounter
            onIncrease={() => setColor('green', COLOR_INCREMENT)}
            onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
            color="Green" />
        <View style={{ height: 400, width: 400, backgroundColor: `rgb(${red},${green},${blue})`, marginTop: 20 }} />
    </View>
};

const style = StyleSheet.create({});

export default SquareScreen;

/*
 * 1) state variables , who and what they do 
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