import React from "react";

import { Text, View, StyleSheet } from "react-native";
import { createNativeWrapper } from "react-native-gesture-handler";

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
    //PARENT 
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        //--- properties  of Parent ---
        //--- alignItems ---
        // alignItems : 'flex-start', // DEFAULT
        // alignItems: 'center',
        // alignItems : 'flex-end',
        //--- FlexDirection ---
        // flexDirection : 'column', // DEFAULT 
        // flexDirection : 'row',
        //--- justifyContent ---
        // justifyContent: 'flex-start', // DEFAULT
        // justifyContent: 'space-around',
        justifyContent: 'space-between',
        // justifyContent: 'space-evenly',
        // justifyContent: 'center',

    },
    //CHILDRENS
    textOneStyle: {
        // flex: 4,
        height: 50, width: 50,
        borderWidth: 3,
        borderColor: 'red',
        alignSelf: "flex-start"
    },
    textTwoStyle: {
        // flex: 2,
        height: 50, width: 50,
        borderWidth: 3,
        // alignSelf:"flex-start",
        // alignSelf: "center",
        alignSelf:"flex-end",
        borderColor: 'red',
        // position: "absolute",
        // position: "relative" // DEFAULT
        //TRICK TO FILL UP COMPLETALLY 
        // position: "absolute",
        // top:0,bottom:0,left:0,right:0,
        // react gimmick , remember what ... does
        // ...StyleSheet.absoluteFillObject
        position:"absolute",
        top: 0,
    },
    textThreeStyle: {
        // flex: 4,
        height: 50, width: 50,
        borderWidth: 3,
        borderColor: 'red',
        alignSelf: "center",
        position: "absolute",
        top:50,bottom:50,
        
    },
    // textFourStyle: {
    //     // flex: 4,
    //     borderWidth: 3,
    //     borderColor: 'red',
    //     alignSelf:"stretch"
    // },
})
/**
 * tutorial solution 
 * 
 * 
const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoParent}>
        <View style={styles.viewTwoStyle} />
      </View>
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green'
  },
  viewTwoParent: {
    height: 100,
    justifyContent: 'flex-end'
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'purple'
  }
});
 */

export default BoxScreen; 