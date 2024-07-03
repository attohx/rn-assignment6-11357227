import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const products = [
  { id: 1, title: 'Office Wear', image: require('../images/dress1.png'), tag: 'Formal', price: '$120' },
  { id: 2, title: 'Black', image: require('../images/dress2.png'), tag: 'Casual', price: '$90' },
  { id: 3, title: 'Church Wear', image: require('../images/dress3.png'), tag: 'Elegant', price: '$150' },
  { id: 4, title: 'Lamerei', image: require('../images/dress4.png'), tag: 'Luxury', price: '$200' },
  { id: 5, title: '21WN', image: require('../images/dress5.png'), tag: 'Modern', price: '$130' },
  { id: 6, title: 'Lopo', image: require('../images/dress6.png'), tag: 'Trendy', price: '$110' },
  { id: 7, title: '21WN', image: require('../images/dress7.png'), tag: 'Classic', price: '$140' },
  { id: 8, title: 'Lam3', image: require('../images/dress2.png'), tag: 'Casual', price: '$100' },
];

const HomeScreen = () => {
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();

  const addToCart = (product) => {
    setCart([...cart, product]);
    Alert.alert('Success', `${product.title} has been added to the cart!`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Our Story</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../images/Listview.png')} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../images/Filter.png')} style={styles.buttonImage} />
          </TouchableOpacity>
        </View>
      </View>
      {/* <Button title="View Cart" onPress={() => navigation.navigate('Cart', { cartItems: cart })} /> */}
      <View style={styles.grid}>
        {products.map((product) => (
          <View key={product.id} style={styles.product}>
            <Image source={product.image} style={styles.image} />
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productTag}>{product.tag}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            <TouchableOpacity onPress={() => addToCart(product)} style={styles.addButton}>
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonImage: {
    width: 40, // Adjust the size of the button images as needed
    height: 40,
    marginLeft: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  product: {
    width: '48%', // Adjusting the width for proper spacing
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  productTitle: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
  productTag: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 14,
    color: 'grey',
  },
  productPrice: {
    textAlign: 'left',
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gold',
  },
  addButton: {
    backgroundColor: 'black',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
