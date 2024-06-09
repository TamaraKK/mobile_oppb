import { Text, View, StyleSheet, ImageBackground, Pressable, Image, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Textarea from 'react-native-textarea';
import { useState } from "react";

export default function Task(props:any) {
    const { onPress, title = 'Ответить' } = props;
    const { onPresss2, titlee2 = 'Пропустить' } = props;
    const [userAnswer, setUserAnswer] = useState('');
    const navigation = useNavigation();
    const correctAnswer = '10';

    const handleNextButtonPress = () => {
        if (userAnswer === correctAnswer) {
            navigation.navigate('task_{id}/task_right');
        } else {
            navigation.navigate('task_{id}/task_wrong', { wrongAnswer: userAnswer });
        }
    }
  return (
    <View style={styles.container}>
      <ImageBackground style={[styles.img]} resizeMode="cover" source={require('../../assets/images/Profile.png')}>
        <View style={styles.registrationText}>
            <View style={{marginRight:"auto"}}>
              <TouchableOpacity onPress={() => navigation.navigate('type_task')}>
                <Image source={require('../../assets/images/arrow_back.png')}/>
              </TouchableOpacity>    
            </View>
        </View>
        <View style={[styles.task_block]}>
            <Text style={{fontSize:28}}>x + x + x - y = ?</Text>
        </View>
        <View>
            <Textarea
                containerStyle={styles.textareaContainer}
                style={styles.textarea}
                placeholder={'Введите свой ответ'}
                placeholderTextColor={'#c7c7c7'}
                underlineColorAndroid={'transparent'}
                value={userAnswer}
                onChangeText={text => setUserAnswer(text)}
            />
        </View>    
        <View style={[styles.viewinput]}>
            <Pressable 
                style={styles.button} 
                onPress={handleNextButtonPress}
            >
                <Text style={styles.text}>{title}</Text>
            </Pressable>
            <Pressable 
                style={styles.button} 
                onPress={() => navigation.navigate('task_{id}')}
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