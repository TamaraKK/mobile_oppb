import { Text, View, StyleSheet, TextInput, ImageBackground, Button, Pressable} from "react-native";


export default function Index(props:any) {
  const { onPress, title = 'Зарегистрироваться' } = props;
  return (
    <View style={styles.container}>
      <ImageBackground style={[styles.img]} resizeMode="cover" source={require('../assets/images/Register.png')}>
        <View style={styles.registrationText}>
          <Text style={{ fontSize: 40 }}>Регистрация</Text>
          <Text style={{ fontSize: 15, marginTop: 15 }}>Создайте свой аккаунт</Text>
        </View>
        <View style={[styles.viewinput]}>
          <View style={{width:'100%'}}>
            <Text style={{ fontSize: 15 }}>Почта</Text>
            <TextInput style={[styles.input]}></TextInput>
          </View>
          <View style={{width:'100%'}}>
            <Text style={{ fontSize: 15 }}>Пароль</Text>
            <TextInput style={[styles.input]}></TextInput>
          </View>
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
          </Pressable>
        </View>
        <View style={{alignItems:'center', flexDirection:'row', gap:5}}>
          <Text style={{ fontSize: 15 }}>Уже есть аккаунт?</Text>
          <Text style={{ fontSize: 16, textDecorationLine:'underline' }}>Войти</Text>
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
    gap:50
  },
  registrationText: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop:100
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
    gap:20,
    marginLeft:'auto'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width:'90%',
    height:43,
    borderRadius: 4,
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