import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainStack = () => (
  <Tab.Navigator>
    <Tab.Screen name="Explorer" component={HomeScreen} />
    <Tab.Screen name="Account" component={ProfileScreen} />
  </Tab.Navigator>
);

export default MainStack;