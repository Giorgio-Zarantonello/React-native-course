import React from "react";

import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child # 1</Text>
            <Text style={styles.textTwoStyle}>Child # 2</Text>
            <Text style={styles.textThreeStyle}>Child # 3</Text>
            {/* <Text style={styles.textFourStyle}>Child # 4</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        //--- properties  of Parent ---
        //--- alignItems ---
        // alignItems : 'flex-start', // DEFAULT
        alignItems: 'center',
        // alignItems : 'flex-end',
        //--- FlexDirection ---
        // flexDirection : 'column', // DEFAULT 
        // flexDirection : 'row',
        //--- justifyContent ---
        // justifyContent: 'flex-start', // DEFAULT
        // justifyContent: 'space-around',
        // justifyContent: 'space-between',
        // justifyContent: 'space-evenly',
        // justifyContent: 'center',

    },
    textOneStyle: {
        // flex: 4,
        borderWidth: 3,
        borderColor: 'red',
        alignSelf: "flex-start"
    },
    textTwoStyle: {
        // flex: 2,
        borderWidth: 3,
        // alignSelf:"flex-start",
        alignSelf: "center",
        // alignSelf:"flex-end",
        borderColor: 'red',
    },
    textThreeStyle: {
        // flex: 4,
        borderWidth: 3,
        borderColor: 'red',
        alignSelf: "flex-end"
    },
    // textFourStyle: {
    //     // flex: 4,
    //     borderWidth: 3,
    //     borderColor: 'red',
    //     alignSelf:"stretch"
    // },
})


export default BoxScreen; 