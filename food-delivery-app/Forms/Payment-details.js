import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React from 'react'

const Payment = ({navigation}) => {


    const [cardnum, setCardnum] = useState('');
    const [date, setDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        validateForm();
    },[cardnum, date, cvv]);

    const validateForm = () => {
        let errors = {};
        if(!cardnum && !date && !cvv){
            errors.address = '*All field required.*';
        }

        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    const handleSubmit = () =>{
        if(isFormValid){
            navigation.navigate('Main');
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
            <View style={styles.inputContainer}>

            {Object.values(errors).map((error, index) => (
            <Text key={index} style={styles.error}>{error}</Text>
            ))}

                <Text style={styles.labels}>Card Number</Text>
                <TextInput placeholder='16 Numbers' 
                keyboardType='numeric' 
                maxLength={16} 
                style={styles.inputs}
                value={cardnum}
                onChangeText={setCardnum}/>

                <Text style={styles.labels}>Expiration Date</Text><Text style={{opacity: 0.5}}>(Year/Month)</Text>
                <TextInput 
                placeholder='Enter Expiration Date' 
                style={styles.inputs}
                value={date}
                onChangeText={setDate}/>

                <Text style={styles.labels}>CVV</Text>
                <TextInput 
                placeholder='3 Digits' 
                keyboardType='numeric' 
                maxLength={4} 
                style={styles.inputs}
                value={cvv}
                onChangeText={setCVV}/>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}
                onPress={handleSubmit}>
                    <Text style={{fontWeight:'bold', fontSize: 16, color: '#f3f3f3'}}>Finish</Text>
                </TouchableOpacity>
            </View>
        </View>

    </View>

    </ScrollView>

    </SafeAreaView>
  )
}

export default Payment

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
      marginTop: 50,
      borderWidth: 1,
      borderBlockColor: 'grey',
      borderRadius: 5,
      padding: 15,
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
        backgroundColor: 'navy'
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