import { Text, View, StyleSheet, ImageBackground, Pressable, Image, TouchableOpacity} from "react-native";
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { axiosInstance } from "@/api/general";
import { useState } from "react";

export default function TaskRight(props:any) {
  const { onPress, title = 'Далее', route } = props;

  const { selected, difficulty, operations, task } = route.params;

  const [ isLoading, setLoading ] = useState(false)
  
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <ImageBackground style={[styles.img]} resizeMode="cover" source={require('../../assets/images/Profile.png')}>
        <View style={styles.registrationText}>
            <View style={{marginRight:"auto"}}>
              <TouchableOpacity onPress={() => navigation.navigate('task_{id}')}>
                <Image source={require('../../assets/images/arrow_back.png')}/>
              </TouchableOpacity>    
            </View>
        </View>
        <View style={[styles.task_block]}>
          <Text style={{fontSize:16, color:'rgba(0, 191, 54, 1)'}}>Правильное решение</Text>
          <Text style={{fontSize:28}}>{task.example}  =  {task.correct_answer}</Text>
        </View>
        <View style={{flexDirection:'column', marginRight:'auto', paddingLeft:41, gap:5}}>
            <Text style={{color:'rgba(0, 122, 255, 1)'}}>+1 к карме!</Text>
            <Text style={{color:'rgba(130, 190, 255, 1)'}}>Всего кармы: 11</Text>
        </View>
        <View style={[styles.viewinput]}>
            <Pressable 
                style={styles.button} 
                disabled={isLoading}
                onPress={() => {
                  setLoading(true)

                  const post_data = {
                    example_type: selected.length > 0 ? selected[Math.floor(Math.random() * selected.length)].toLowerCase() : "",
                    difficulty: difficulty,
                    operations: operations
                  }
                  
                  axiosInstance.post("/auth/get-example", post_data).then((response) => {
                    navigation.navigate('task_{id}', { selected: selected, difficulty: difficulty, operations: operations, task: response.data })
                  }).finally(() => {
                    setLoading(false)
                  })
                }}
            >
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position:'relative',
    justifyContent: 'center',
    flexDirection:'column',
    backgroundColor: 'white',
    width:'100%',
    height:'100%',
  },
  img: {
    height:'100%',
    display:'flex',
    alignItems: 'center',
    flexDirection:'column',
    justifyContent:'flex-start',
    width:'100%',
    gap:40
  },
  registrationText: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    marginTop:130,
    width:'90%',
    gap:6
  },
  input: {
    marginTop: 20,
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  viewinput: {
    width:'90%',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    gap:14,
    marginLeft:'auto'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width:'90%',
    height:43,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: 'rgba(101, 175, 255, 1)',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  task_block:{
    borderRadius:5, 
    backgroundColor:'rgba(237, 246, 254, 1)', 
    width:'80%',
    padding:30 ,
    margin:'auto 0'
  },
});