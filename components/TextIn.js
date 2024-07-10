import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const TextIn = (props) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={props.place}
                keyboardType={props.type}
                value={props.value}
                onChangeText={props.txt}
                editable={props.edit}
            />
        </View>

    )
}

export default TextIn

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
})

