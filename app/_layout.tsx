import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login';
import Reg from './registration';
import LoginApprove from './(code_approve)/log_approve';
import RegApprove from './(code_approve)/reg_approve';
import ReDoPassword from './(code_approve)/redo_password';
import UserProfile from './(profile)/user_profile';
import EditProfile from './(profile)/edit_profile';
import CustomTask from './(tasks)/custom_task';
import TypeTask from './(tasks)/type_task';
import Task from './(tasks)/task';
import TaskWrong from './(tasks)/task_wrong';
import TaskRight from './(tasks)/task_right';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='reg'>
        <Stack.Screen options={{headerShown:false}} name="reg" component={Reg}/>
        <Stack.Screen options={{headerShown:false}} name="login" component={Login}/>
        <Stack.Screen options={{headerShown:false}} name="log_approve" component={LoginApprove}/>
        <Stack.Screen options={{headerShown:false}} name="reg_approve" component={RegApprove}/>
        <Stack.Screen options={{headerShown:false}} name="redo_password" component={ReDoPassword}/>
        <Stack.Screen options={{headerShown:false}} name="{user}_profile" component={UserProfile}/>
        <Stack.Screen options={{headerShown:false}} name="edit_profile" component={EditProfile}/>
        <Stack.Screen options={{headerShown:false}} name="custom_task" component={CustomTask}/>    
        <Stack.Screen options={{headerShown:false}} name="type_task" component={TypeTask}/>    
        <Stack.Screen options={{headerShown:false}} name="task_{id}" component={Task}/>
        <Stack.Screen options={{headerShown:false}} name="task_{id}/task_wrong" component={TaskWrong}/>
        <Stack.Screen options={{headerShown:false}} name="task_{id}/task_right" component={TaskRight}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

