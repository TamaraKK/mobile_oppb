import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserProfile from './user_profile';
import EditProfile from './edit_profile';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='reg'>
        <Stack.Screen options={{headerShown:false}} name="{user}_profile" component={UserProfile}/>
        <Stack.Screen options={{headerShown:false}} name="edit_profile" component={EditProfile}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

