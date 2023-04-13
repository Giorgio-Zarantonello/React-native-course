import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";



const TextScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <Text>Enter Name</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={newValue => setName(newValue)}
            />
            <Text>My Name is </Text>
        </View>
    )
}

const styles = StyleSheet.create({
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