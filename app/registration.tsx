import { Text, View, StyleSheet, TextInput, ImageBackground, Button, Pressable} from "react-native";
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { User } from "@/api/user";
import { axiosInstance } from "@/api/general";
import { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";


export default function Reg(props:any) {
  const [ isLoading, setLoading ] = useState(false)
  const [ errorText, setErrorText ] = useState("") 

  const STRONGER_PASSWORD = "Введите более надежный пароль\n\nВаш пароль должен содержать как минимум:\n• 8 символов\n• 1 заглавную букву\n• 1 строчную букву\n• 1 цифру\n• И 1 символ из набора \"@#$%=:?!./|~>*\""
  const EMAIL_IN_USE = "Введите другой email, данный адрес уже используется"

  const { onPress, title = 'Зарегистрироваться' } = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { control, handleSubmit, formState: { errors } } = useForm({ 
    defaultValues: { 
      email: "", 
      password: "" 
    }
  });

  const onSubmit = (data: any) => {
    setLoading(true)

    let user: User | undefined = undefined

    axiosInstance.post("/users", data).catch((error) => {
      const message = error.response.data.detail

      if (message == "Email is already exists.") {
        setErrorText(EMAIL_IN_USE)
      }
      else {
        setErrorText("Произошла неизвестная ошибка, мы работаем над ее устранением")
        alert("ERROR: ${error.message}")
      }
    }).then((response) => {
      navigation.navigate("reg_approve")
    }).finally(() => {
      setLoading(false)
    })
  }
  
  
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
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput {...field} style={[styles.input]} placeholder="mail@site.com"/>
              )}
              name = "email"
              rules={{ required: 'Введите email', pattern: { value: /^\S+@\S+$/i, message: 'Введите правильный email' } }}
            />
            {errors.email && <Text style={{ ...styles.text, color: "red" }}>{errors.email.message}</Text>}
          </View>
          <View style={{width:'100%'}}>
            <Text style={{ fontSize: 15 }}>Пароль</Text>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput {...field} style={[styles.input]} placeholder="********"/>
              )}
              name = "password"
              rules={{ required: 'Введите пароль', pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%=:?!./|~>*]).{8,32}$/, message: STRONGER_PASSWORD }, minLength: { value: 8, message: "Минимальная длина пароля 8 символов" }, maxLength: { value: 32, message: "Максимальная длина пароля 32 символа" } }}
            />
            {errors.password && <Text style={{ ...styles.text, color: "red" }}>{errors.password.message}</Text>}
          </View>
          <Pressable 
            style={{ ...styles.button, backgroundColor: isLoading ? "#808080" : styles.button.backgroundColor }} 
            disabled={isLoading}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={{ ...styles.text, color: isLoading ? "#222" : styles.text.color }}>{title}</Text>
          </Pressable>

          {errorText.length > 0 && 
            <View style={{width:'90%', alignItems: "center"}}>
              <Text style={{ ...styles.text, color: "red" }}>{errorText}</Text>
            </View>
          }
        </View>
        <View style={{alignItems:'center', flexDirection:'row', gap:5}}>
          <Text style={{ fontSize: 15 }}>Уже есть аккаунт?</Text>
          <Text 
            style={{ fontSize: 16, textDecorationLine:'underline' }}
            onPress={() => navigation.navigate('login')}
          >Войти</Text>
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