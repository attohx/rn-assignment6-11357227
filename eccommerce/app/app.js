import 'react-native-gesture-handler'; // Import for gesture handling
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Image, TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import HomeScreen from './homeScreen';
import CartScreen from './cartScreen';

const Drawer = createDrawerNavigator();

function CustomHeaderButtons({ navigation }) {
  return (
    <View style={styles.headerButtonsContainer}>
      <TouchableOpacity onPress={() => { /* Add your search action here */ }}>
        <Image source={require('../images/Search.png')} style={styles.headerButton} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { /* Add your shopping bag action here */ }}>
        <Image source={require('../images/shoppingBag.png')} style={styles.headerButton} />
      </TouchableOpacity>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image source={require('../images/Logo.png')} style={styles.drawerImage} />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="OPENFASHION"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => <CustomHeaderButtons navigation={navigation} />
          })}
        />
        <Drawer.Screen name="Cart" component={CartScreen} />
      </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  headerButtonsContainer: {
    flexDirection: 'row',
    paddingRight: 10,
  },
  headerButton: {
    width: 25, // Adjust size as needed
    height: 25,
    marginLeft: 10,
  },
  drawerHeader: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});
