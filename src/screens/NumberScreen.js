import React,{useState} from 'react';
import {View,TextInput, StyleSheet} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

const NumberScreen = ({navigation}) => {

    const [number, setNumber] = useState();
    function buttonClickEvent(){
        if(!!number && !isNaN(number)){
            navigation.navigate('GridComponent',{
                screen : 'GridScreen',
                params : {number : number}
            })
        }
        else{
            alert("Please enter proper number");
        }
    }
    return(
        <View style={styles.view}>
            <TextInput 
                style={styles.textInput}
                placeholder='Enter Number' 
                keyboardType='numeric'
                onChangeText={(text) => setNumber(text)}  />

                <ButtonComponent 
                 title='Submit'
                 onPress={buttonClickEvent}/>
                
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        justifyContent:'center'
    },
    textInput:{
        fontSize:20,
        alignSelf:'center',
        width:'60%',
        borderWidth:1,
        borderRadius:10,
        padding:10,
        
    },
    button:{
    }
})
export default NumberScreen;