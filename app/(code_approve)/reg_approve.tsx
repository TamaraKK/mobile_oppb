import { Text, View, StyleSheet, TextInput, ImageBackground, Button, Pressable} from "react-native";
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { axiosInstance } from "@/api/general";
import { useState } from "react";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";


export default function RegApprove(props:any) {
  const [ isLoading, setLoading ] = useState(false)

  const { onPress, title = 'Подтвердить' } = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  
  return (
    <View style={styles.container}>
      <ImageBackground style={[styles.img]} resizeMode="cover" source={require('../../assets/images/Register.png')}>
        <View style={styles.registrationText}>
          <Text style={{ fontSize: 40 }}>Регистрация</Text>
          {/* <Text style={{ fontSize: 15, marginTop: 15 }}>Добро пожаловать!</Text> */}
        </View>
        <View style={[styles.viewinput]}>
          <View style={{width:'100%'}}>
            <Text style={{ fontSize: 15, marginRight:'10%', textAlign:'center' }}>Мы отправили вам на почту код подтверждения. Введите его ниже</Text>
            <TextInput style={[styles.input]}></TextInput>
          </View>
          <Pressable 
            style={styles.button} 
            disabled={isLoading}
            onPress={() => {
              setLoading(true)

              axiosInstance.post("/users/verify", "test").then((response) => {
                navigation.navigate("login")
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