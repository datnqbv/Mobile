import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainStack = ({ onLogout }) => (
  <Tab.Navigator>
    <Tab.Screen name="Explorer" component={HomeScreen} />
    <Tab.Screen name="Account">
      {(props) => <ProfileScreen {...props} onLogout={onLogout} />}
    </Tab.Screen>
  </Tab.Navigator>
);

export default MainStack;