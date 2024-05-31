import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './log_approve';
import Reg from './reg_approve';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="reg_approve" component={Reg}/>
        <Stack.Screen options={{headerShown:false}} name="log_approve" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

