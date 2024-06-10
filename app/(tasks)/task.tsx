import { Text, View, StyleSheet, ImageBackground, Pressable, Image, TouchableOpacity} from "react-native";
import { ParamListBase, useNavigation } from '@react-navigation/native';
import Textarea from 'react-native-textarea';
import { useState } from "react";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { axiosInstance } from "@/api/general";

export default function Task(props:any) {
  const { onPress, title = 'Ответить', route } = props;
  const { onPresss2, titlee2 = 'Пропустить' } = props;

  const [ isLoading, setLoading ] = useState(false)
  const [userAnswer, setUserAnswer] = useState('');

  const { selected, operations, difficulty, task } = route.params;
  const { example, correct_answer } = task;

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleNextButtonPress = () => {
    const answer = userAnswer
    setUserAnswer("")

    if (answer === correct_answer) {
      navigation.navigate('task_{id}/task_right', { selected: selected, difficulty: difficulty, operations: operations, task: task });
    } else {
      navigation.navigate('task_{id}/task_wrong', { selected: selected, difficulty: difficulty, operations: operations, task: task, wrongAnswer: answer });
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={[styles.img]} resizeMode="cover" source={require('../../assets/images/Profile.png')}>
        <View style={styles.registrationText}>
            <View style={{marginRight:"auto"}}>
              <TouchableOpacity onPress={() => navigation.navigate('type_task', { operations: operations, difficulty: difficulty })}>
                <Image source={require('../../assets/images/arrow_back.png')}/>
              </TouchableOpacity>    
            </View>
        </View>
        <View style={[styles.task_block]}>
            <Text style={{fontSize:28}}>{example}</Text>
        </View>
        <View>
            <Textarea
                containerStyle={styles.textareaContainer}
                style={styles.textarea}
                placeholder={'Введите свой ответ'}
                placeholderTextColor={'#c7c7c7'}
                underlineColorAndroid={'transparent'}
                value={userAnswer}
                onChangeText={(value: string) => setUserAnswer(value)}
            />
        </View>    
        <View style={[styles.viewinput]}>
            <Pressable 
                style={styles.button} 
                disabled={isLoading}
                onPress={handleNextButtonPress}
            >
                <Text style={styles.text}>{title}</Text>
            </Pressable>
            <Pressable 
                style={styles.button} 
                disabled={isLoading}
                onPress={() => {
                  setLoading(true)

                  setUserAnswer("")

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
                <Text style={styles.text}>{titlee2}</Text>
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
  textareaContainer: {
    height: 120,
    padding: 15,
    backgroundColor: '#F5FCFF',
    width:300
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
});