import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login';
import Reg from './registration';
import LoginApprove from './(code_approve)/log_approve';
import RegApprove from './(code_approve)/reg_approve';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='reg'>
        <Stack.Screen options={{headerShown:false}} name="reg" component={Reg}/>
        <Stack.Screen options={{headerShown:false}} name="login" component={Login}/>
        <Stack.Screen options={{headerShown:false}} name="log_approve" component={LoginApprove}/>
        <Stack.Screen options={{headerShown:false}} name="reg_approve" component={RegApprove}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

