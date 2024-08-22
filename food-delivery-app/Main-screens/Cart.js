import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'


const Cart = () => {

  return (

    <SafeAreaView>
      <StatusBar backgroundColor='#ffff'
          barStyle='dark-content'
          translucent={false} />
      <ScrollView>

          <View style={styles.maincontainer}>
            <Text style={styles.title}>Cart</Text>
              <View style={styles.Container2}>
                  <View style={styles.textContainer}>
                        <Text style={{fontWeight:'bold', fontSize: 15}}>Item 1</Text>
                        <Text style={{fontWeight:'bold', fontSize: 15}}>Item 2</Text>
                        <Text style={{fontWeight:'bold', fontSize: 15}}>Item 3</Text>
                        <Text style={{fontWeight:'bold', fontSize: 15}}>Item 4</Text>
                        <Text style={{fontWeight:'bold', fontSize: 15}}>Item 5</Text>
                        <Text style={{fontWeight:'bold', fontSize: 15}}>Item 6</Text>
                  </View>
              </View>
          </View>

          <View style={styles.maincontainer}>
            <Text style={styles.title}>Total</Text>
              <View style={styles.Container3}>
                  <View style={styles.textContainer}>
                    <View style={styles.total}>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>6 Items</Text>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Total: R600</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Payment completed')}>
                      <Text style={{fontWeight:'bold', fontSize: 15}}>Proceed to checkout</Text>
                    </TouchableOpacity>
                  </View>
              </View>
          </View>
      </ScrollView>
      </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({

  title:{
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 10
  },

  maincontainer: {
      backgroundColor: '#ffff'
  },

  Container2:{
    height: 450,
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

  button:{
    borderWidth: 1, 
    borderColor: 'grey',
    width: '90%',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#ffff',
    marginLeft: 10,
    alignSelf: 'center'
  }, 

  total:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    margin: 'auto',
    marginTop: 10,
    marginBottom: 5,
  }

})