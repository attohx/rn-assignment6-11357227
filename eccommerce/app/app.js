import 'react-native-gesture-handler'; // Import for gesture handling
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './homeScreen';
import CartScreen from './cartScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Cart" component={CartScreen} />
      </Drawer.Navigator>
  );
}
