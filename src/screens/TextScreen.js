import react from "react";
import { View , Text , StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TextScreen = () => {
    return (
        <View>
            <TextInput style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderRadius:10, 
        borderColor: 'black',
        borderWidth : 1
    }
});

export default TextScreen;