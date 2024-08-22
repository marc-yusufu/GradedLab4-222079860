import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, { useContext } from 'react'


const Menu = () => {

  return (
    <SafeAreaView>
    <StatusBar backgroundColor='#ffff'
        barStyle='dark-content'
        translucent={false} />
    <ScrollView>
        <View style={styles.maincontainer}>
          <Text style={styles.title}>Menu</Text>
            <View style={styles.Container}>
                <Image source={require('../assets/food/pepperoni.jpg')} style={styles.images}/>
                <View style={styles.textContainer}>
                    <Text style={styles.names}>Pepperoni Pizza</Text>
                    <Text style={styles.rating}>(4.3)
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/half-star.png')}/>
                        Rating
                    </Text>
                    <Text style={styles.description}>Margherita large with Pepperoni</Text>
                    <Text style={styles.price}>R100</Text>
                    <TouchableOpacity style={styles.add} onPress={() => Alert.alert('Item added to cart')}>
                      <Text style={{fontWeight:'bold', fontSize: 15}}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.Container}>
                <Image source={require('../assets/food/burger.jpg')} style={styles.images} />
                <View style={styles.textContainer}>
                    <Text style={styles.names}>Cheese burger</Text>
                    <Text style={styles.rating}>(4)
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        Rating
                    </Text>
                    <Text style={styles.description}>Classic American cheese burger</Text>
                    <Text style={styles.price}>R100</Text>
                    <TouchableOpacity style={styles.add} onPress={() => Alert.alert('Item added to cart')}>
                      <Text style={{fontWeight:'bold', fontSize: 15}}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.Container}>
                <Image source={require('../assets/food/Beef-Fried-Rice.jpg')} style={styles.images} />
                <View style={styles.textContainer}>
                    <Text style={styles.names}>Beef fried rice</Text>
                    <Text style={styles.rating}>(4.3)
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/half-star.png')}/>
                        Rating
                    </Text>
                    <Text style={styles.description}>Prawn white Thai fried rice ,vegetables</Text>
                    <Text style={styles.price}>R100</Text>
                    <TouchableOpacity style={styles.add} onPress={() => Alert.alert('Item added to cart')}>
                      <Text style={{fontWeight:'bold', fontSize: 15}}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.Container}>
                <Image source={require('../assets/food/sushi.jpg')} style={styles.images} />
                <View style={styles.textContainer}>
                    <Text style={styles.names}>Sushi</Text>
                    <Text style={styles.rating}>(4.7)
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        Rating
                    </Text>
                    <Text style={styles.description}>Salmon california rolls, with avocado</Text>
                    <Text style={styles.price}>R100</Text>
                    <TouchableOpacity style={styles.add} onPress={() => Alert.alert('Item added to cart')}>
                      <Text style={{fontWeight:'bold', fontSize: 15}}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.Container}>
                <Image source={require('../assets/food/chicken.jpg')} style={styles.images} />
                <View style={styles.textContainer}>
                    <Text style={styles.names}>Fried Chicken</Text>
                    <Text style={styles.rating}>(4.7)
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        Rating
                    </Text>
                    <Text style={styles.description}>10 pieces fried chicken with garlic sauce</Text>
                    <Text style={styles.price}>R100</Text>
                    <TouchableOpacity style={styles.add} onPress={() => Alert.alert('Item added to cart')}>
                      <Text style={{fontWeight:'bold', fontSize: 15}}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.Container}>
                <Image source={require('../assets/food/noodles.jpg')} style={styles.images} />
                <View style={styles.textContainer}>
                    <Text style={styles.names}>Fried noodles</Text>
                    <Text style={styles.rating}>(4.7)
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        Rating
                    </Text>
                    <Text style={styles.description}>Fried noodles with beef, chicken, and vegetables</Text>
                    <Text style={styles.price}>R100</Text>
                    <TouchableOpacity style={styles.add} onPress={() => Alert.alert('Item added to cart')}>
                      <Text style={{fontWeight:'bold', fontSize: 15}}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.Container}>
                <Image source={require('../assets/food/steak.jpg')} style={styles.images} />
                <View style={styles.textContainer}>
                    <Text style={styles.names}>Grilled Steak</Text>
                    <Text style={styles.rating}>(4.4)
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/star.png')}/>
                        <Image source={require('../assets/half-star.png')}/>
                        Rating
                    </Text>
                    <Text style={styles.description}>Grilled steak with baked potato and vegetables</Text>
                    <Text style={styles.price}>R100</Text>
                    <TouchableOpacity style={styles.add} onPress={() => Alert.alert('Item added to cart')}>
                      <Text style={{fontWeight:'bold', fontSize: 15}}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    </ScrollView>
</SafeAreaView>
  )
}

export default Menu


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
      height: 195,
      flexDirection: 'row',
      margin: 10,
      overflow: 'hidden',
      borderRadius: 15 / 2,
      backgroundColor: '#f3f3f3',
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
      height: '100%',
  },

  names: {
      width: '70%',
      fontSize: 20,
      fontWeight: 'bold',
      paddingLeft: 10
  },

  rating: {
      paddingTop: 5,
      paddingLeft: 10,
  },

  description: {
      width: 200,
      paddingTop: 10,
      paddingLeft: 10,
      paddingBottom: 10,
  },

  add:{
    borderWidth: 1, 
    borderColor: 'grey',
    width: 100,
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#ffff',
    marginLeft: 10,
    position: 'absolute',
    bottom: 7,
    alignSelf: 'flex-end'
  }, 

  price:{
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  }


})