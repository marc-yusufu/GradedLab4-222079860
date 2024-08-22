import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';

import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React from 'react'

const User = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        validateForm();
    },[name, email,phone]);

    const validateForm = () => {
        let errors = {};
        if(!name){
            errors.name = 'Name is required.';
        }
        if(!email){
            errors.email = 'Email is required.';
        }else if(!/^\S+@\S+\.\S+$/.test(email)){
            errors.email = '* Invalid Email. *';
        }
        if(!phone){
            errors.phone = '*Phone number is required.*';
        }else if(phone.length < 10){
            errors.phone = '*Phone number must be 10 digits*';
        }

        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    const handleSubmit = () =>{
        if(isFormValid){
            navigation.navigate('Address');
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
                <Text style={styles.labels}>Name</Text>
                <TextInput 
                placeholder='Enter Name' 
                style={styles.inputs}
                value={name}
                onChangeText={setName}/>

                <Text style={styles.labels}>Email</Text>
                <TextInput placeholder='Enter Email' 
                keyboardType='email-address' 
                style={styles.inputs}
                value={email}
                onChangeText={setEmail}/>

                <Text style={styles.labels}>Phone Number</Text>
                <TextInput 
                placeholder='Enter Phone Number' 
                keyboardType='numeric' 
                style={styles.inputs}
                value={phone}
                onChangeText={setPhone}/>
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

export default User

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