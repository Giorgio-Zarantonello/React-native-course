import React from "react";

import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child # 1</Text>
            <Text style={styles.textStyle}>Child # 2</Text>
            <Text style={styles.textStyle}>Child # 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        //--- alignItems ---
        // alignItems : 'flex-start', // DEFAULT
        alignItems : 'center',
        // alignItems : 'flex-end',
        //--- FlexDirection ---
        flexDirection : 'column', // DEFAULT 
        // flexDirection : 'row',
        //--- justifyContent ---
        // justifyContent: 'flex-start', // DEFAULT
        // justifyContent: 'space-around',
        // justifyContent: 'space-between',
        justifyContent: 'space-evenly',
        // justifyContent: 'center',
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical : 20 , 
        // marginHorizontal : 20 , 
        

    }
})


export default BoxScreen; 