import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity, Alert, Window } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { useContext, useState } from 'react';


function card_info(){
  return(
    <View>
    <Text>Card Number: 0000 0000 0000 0000</Text>
    <Text>Date: 2026/08</Text>
    </View>
  )
}

const Profile = () => {

  return (
    <SafeAreaView>
    <StatusBar backgroundColor='#ffff'
        barStyle='dark-content'
        translucent={false} />
    <ScrollView>
        <View style={styles.maincontainer}>
          <Text style={styles.title}>Profile</Text>
            <View style={styles.Container}>
                <Image source={require('../assets/profile-pic.png')} style={styles.images}/>
                <View style={styles.textContainer}>
                    <Text style={styles.names}>Name</Text>
                    <Text style={styles.email}>email@gmail.com</Text>
                    <Text style={styles.address}>Address</Text>
                </View>
            </View>
        </View>

        <View style={styles.maincontainer}>
          <Text style={styles.title}>Customize App</Text>
            <View style={styles.Container2}>
                <View style={styles.textContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Text colour changed')}>
                      <Text style={{fontWeight:'bold', fontSize: 15}}>Change text colour</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Theme changed')}>
                      <Text style={{fontWeight:'bold', fontSize: 15}}>Change app theme</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={styles.maincontainer}>
          <Text style={styles.title}>Card Info</Text>
            <View style={styles.Container3}>
                <View style={styles.textContainer}>
                    <TouchableOpacity style={styles.button} onPress={card_info}>
                      <Text style={{fontWeight:'bold', fontSize: 15}}>View card info</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({

  title:{
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 10
  },

  maincontainer: {
      backgroundColor: '#ffff'
  },

  Container: {
      height: 180,
      flexDirection: 'row',
      margin: 10,
      overflow: 'hidden',
      borderRadius: 15 / 2,
      backgroundColor: '#f1f1f1',
      shadowOffset:{
        width: 10,
        height: 10
      },
      shadowColor: 'grey',
      shadowRadius: 10,
      borderWidth: 1,
      borderColor: '#dedede',
  },

  Container2:{
    height: 110,
    margin: 10,
    overflow: 'hidden',
    borderRadius: 15 / 2,
    backgroundColor: '#f1f1f1',
    shadowOffset:{
      width: 10,
      height: 10
    },
    shadowColor: 'grey',
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: '#dedede',
  },

  Container3:{
    height: 60,
    margin: 10,
    overflow: 'hidden',
    borderRadius: 15 / 2,
    backgroundColor: '#f1f1f1',
    shadowOffset:{
      width: 10,
      height: 10
    },
    shadowColor: 'grey',
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: '#dedede', 
  },

  images: {
      width: '40%',
      height: '80%',
      margin: 10,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: '#e2e2e2',
      borderRadius: 200 / 1,
      marginTop: 15
  },

  names: {
      width: '70%',
      fontSize: 20,
      fontWeight: 'bold',
      paddingLeft: 10,
      marginTop: 35
  },

  email: {
      paddingTop: 5,
      paddingLeft: 10,
  },

  address: {
      width: 200,
      paddingTop: 10,
      paddingLeft: 10,
      paddingBottom: 10,
  },

  button:{
    borderWidth: 1, 
    borderColor: 'grey',
    width: '80%',
    alignItems: 'center',
    padding: 5,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#ffff',
    marginLeft: 10,
  }, 


})