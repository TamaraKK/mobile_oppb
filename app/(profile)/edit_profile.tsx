import { Text, View, StyleSheet, TextInput, ImageBackground, Button, Pressable, Image} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function EditProfile(props:any) {
  const { onPress, title = 'Сохранить' } = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground style={[styles.img]} resizeMode="cover" source={require('../../assets/images/Profile_edit.png')}>
        <View style={styles.registrationText}>
            <View style={{marginRight:"auto"}}>
                <Image source={require('../../assets/images/arrow_back.png')}/>
            </View>
            <View>
                <Image source={require('../../assets/images/user_test.png')}/>
            </View>
          {/* <Text style={{ fontSize: 15, marginTop: 15 }}>Добро пожаловать!</Text> */}
        </View>
        <View style={[styles.viewinput]}>
          <View style={{width:'100%'}}>
            <Text style={{ fontSize: 15 }}>Изменить никнейм</Text>
            <TextInput style={[styles.input]}></TextInput>
          </View>
          <View style={{width:'100%'}}>
            <Text style={{ fontSize: 15 }}>Изменить почту</Text>
            <TextInput style={[styles.input]}></TextInput>
          </View>
          <View style={{width:'100%'}}>
            <Text style={{ fontSize: 15 }}>Изменить пароль</Text>
            <TextInput style={[styles.input]}></TextInput>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, color:'transparent' }}>Some text on the left</Text>
          </View>
          <Pressable 
            style={styles.button} 
            // onPress={() => navigation.navigate('log_approve')}
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
    alignItems: 'center',
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
});