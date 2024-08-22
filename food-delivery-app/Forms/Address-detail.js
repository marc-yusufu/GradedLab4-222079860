import { StatusBar } from 'expo-status-bar'
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React from 'react'

const Address = ({navigation}) => {


    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        validateForm();
    },[address, zip]);

    const validateForm = () => {
        let errors = {};
        if(!address){
            errors.address = '*Address is required.*';
        }
        if(!zip){
            errors.zip = '*Zip code is required.*';
        }

        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    const handleSubmit = () =>{
        if(isFormValid){
            navigation.navigate('Payment Method');
        }else{
            Alert.alert('Invalid info')
        }
    }


  return (
    <SafeAreaView>
        <StatusBar translucent={false} backgroundColor='white'/>
    
    <ScrollView>

    <View style={{height: '90%'}}>

        <View style={styles.container}>
        {Object.values(errors).map((error, index) => (
            <Text key={index} style={styles.error}>{error}</Text>
        ))}
        
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Address</Text>
                <TextInput placeholder='Enter Address' 
                style={styles.inputs}
                value={address}
                onChangeText={setAddress}/>

                <Text style={styles.labels}>City</Text>
                <TextInput placeholder='Enter City' style={styles.inputs}/>

                <Text style={styles.labels}>State</Text>
                <TextInput placeholder='Enter State' style={styles.inputs}/>

                <Text style={styles.labels}>Zip Code</Text>
                <TextInput placeholder='Enter Zip Code' 
                keyboardType='numeric' 
                style={styles.inputs}
                value={zip}
                onChangeText={setZip}/>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}
                onPress={handleSubmit}>
                    <Text style={{fontWeight:'bold', fontSize: 16, color: '#f3f3f3'}}>Proceed</Text>
                </TouchableOpacity>
            </View>
        </View>

    </View>
    </ScrollView>

    </SafeAreaView>
  )
}

export default Address

const styles = StyleSheet.create({

    title:{
        fontSize: 30,
        fontWeight: 'bold',
        margin: 'auto',
    },

    container: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      width: '90%',
      margin: 'auto',
      borderWidth: 1,
      borderBlockColor: 'grey',
      borderRadius: 5,
      padding: 15,
      marginTop: 50
    },

    inputs:{
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        marginTop: 7,
        marginBottom: 30,
        borderRadius: 10,
    },

    labels:{
        fontWeight: 'bold',
        fontSize: 18,
    },

    button:{
        borderColor: 'grey',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'navy',
    },

    buttonContainer:{
        margin: 10
    },

    error:{
        fontStyle: 'italic',
        marginTop: 5,
        color: 'red',
    }
});