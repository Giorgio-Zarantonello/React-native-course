import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";



const TextScreen = () => {
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text style={styles.text}>Enter Password : </Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={newValue => {
                    setPassword(newValue)
                }}
            />
            {password.length <= 5 ? <Text style={styles.text}>The Password must be longer than 5 characters </Text> : null}

        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 10

    },
    input: {
        margin: 15,
        height: 50,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10

    }
});

export default TextScreen;