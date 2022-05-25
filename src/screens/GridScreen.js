import React,{useState} from 'react';
import {View,Text,FlatList,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import countryFlags from '../data/countryFLag';
import { Checkbox } from 'react-native-paper';

const GridScreen = ({route,navigation}) => {
    const {number} = route.params;
    const isResult = !!route.params.resultSelectedCountry
    const flags = countryFlags.slice(0,number)
    const [selectedCountry, setSelectedCountry] = useState([])


    const renderItem = ({item}) => (
        <View style={styles.container}>
        {!isResult ? <Checkbox 
            status={selectedCountry.includes(item.name) ? "checked" : "unchecked"} 
            onPress={() => { selectedCountry.includes(item.name) ? 
                setSelectedCountry(selectedCountry.filter(country => country !=item.name)) : 
                setSelectedCountry((old)=>[...old,item.name])}}
            color='#335599'
            uncheckedColor='grey'/>:<></>}
            
        <Text style={styles.flagtext}>{item.flag}</Text>
        
    </View>
    );
    return(<>
        
        <View>
        {!isResult ? <View style={styles.view}>
                <TouchableOpacity onPress={()=>navigation.navigate('GridScreen',{
                    screen : 'GridScreen',
                    resultSelectedCountry : selectedCountry
                })}>
                    <Text style={styles.text}>
                       Select
                    </Text>
                </TouchableOpacity>
        </View> : <></>}
            <FlatList
                data={isResult ? flags.filter(flag => route.params.resultSelectedCountry.includes(flag.name)) : flags}    
                renderItem={renderItem}
                keyExtractor={item => item.name}
                numColumns={3}
            />

       
        </View>
    </>)
}

const styles = StyleSheet.create({
    view:{
        backgroundColor: '#335599',
        padding: 8,
        borderRadius: 25,
        alignSelf: 'center',
        marginVertical:10
    },
    text:{
        fontSize:15,
        alignSelf:'center',
        color:'white'
    },
    container:{
        justifyContent:'space-evenly',
        flex:1,
        marginHorizontal:5,
        marginVertical:5,
        elevation:3,
        backgroundColor:'#e1e1e1',
        padding:5
    },
    flagtext:{
        fontSize:70,
        alignSelf:'center',
   },
})
export default GridScreen;