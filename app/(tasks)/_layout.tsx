import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomTask from './custom_task';
import TypeTask from './type_task';
import Task from './task';
import TaskWrong from './task_wrong';
import TaskRight from './task_right';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='reg'>
        <Stack.Screen options={{headerShown:false}} name="custom_task" component={CustomTask}/>
        <Stack.Screen options={{headerShown:false}} name="type_task" component={TypeTask}/>
        <Stack.Screen options={{headerShown:false}} name="task_{id}" component={Task}/>
        <Stack.Screen options={{headerShown:false}} name="task_{id}/task_wrong" component={TaskWrong}/>
        <Stack.Screen options={{headerShown:false}} name="task_{id}/task_right" component={TaskRight}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

