import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomTask from './custom_task';
import TypeTask from './type_task';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='reg'>
        <Stack.Screen options={{headerShown:false}} name="custom_task" component={CustomTask}/>
        <Stack.Screen options={{headerShown:false}} name="type_task" component={TypeTask}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

