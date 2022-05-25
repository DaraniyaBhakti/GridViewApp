import React from 'react';
import { View,Text, StyleSheet, TouchableOpacity} from 'react-native';

const ButtonComponent = (props) => {

    return(
        <View style={styles.view}>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.text}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        backgroundColor: '#335599',
        padding: 10,
        width: '40%',
        borderRadius: 25,
        alignSelf: 'center',
        margin: '10%'
    },
    text:{
        fontSize:18,
        alignSelf:'center',
        color:'white'
    }
})

export default ButtonComponent;