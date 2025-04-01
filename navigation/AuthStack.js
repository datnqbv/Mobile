import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

const AuthStack = ({ onLogin }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SignIn">
      {(props) => <SignIn {...props} onLogin={onLogin} />}
    </Stack.Screen>
    <Stack.Screen name="SignUp">
      {(props) => <SignUp {...props} onLogin={onLogin} />}
    </Stack.Screen>
  </Stack.Navigator>
);

export default AuthStack;