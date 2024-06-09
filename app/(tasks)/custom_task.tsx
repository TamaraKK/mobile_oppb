import { Text, View, StyleSheet, ImageBackground, Pressable, Image, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import CheckBox from 'expo-checkbox';

export default function CustomTask(props:any) {
  const { onPress, title = 'Далее' } = props;
  const [stars, setStars] = useState([true, false, false]); // Состояние звезд: true - золотая, false - серая
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    subtraction: false,
    addition: false,
    division: false,
    multiplication: false
  });
  
  const handleStarPress = (index) => {
    const newStars = [...stars];
    for (let i = 0; i < newStars.length; i++) {
      if (i <= index) {
        newStars[i] = true; // Золотая звезда
      } else {
        newStars[i] = false; // Серая звезда
      }
    }
    setStars(newStars);
  };

  const handleCheckboxChange = (checkboxName:any) => {
    setSelectedCheckboxes(prevState => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName]
    }));
  };

  
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground style={[styles.img]} resizeMode="cover" source={require('../../assets/images/Profile.png')}>
        <View style={styles.registrationText}>
            <View style={{marginRight:"auto"}}>
              <TouchableOpacity onPress={() => navigation.navigate('{user}_profile')}>
                <Image source={require('../../assets/images/arrow_back.png')}/>
              </TouchableOpacity>    
            </View>
            <View>
                <Text style={{ fontSize: 30 }}>Кастомизация задания</Text>
            </View>
        </View>
        <View style={[styles.viewinput]}>
            <View style={[styles.chose]}>
                <CheckBox
                    value={selectedCheckboxes.subtraction}
                    onValueChange={() => handleCheckboxChange('subtraction')}
                    style={selectedCheckboxes.subtraction ? [styles.checkbox, styles.checkbox_active] : styles.checkbox}
                />
                <Text style={{ fontSize: 16, color:'rgba(32, 137, 251, 1)' }}>Вычитание</Text>
                </View>
            <View style={[styles.chose]}>
                <CheckBox
                    value={selectedCheckboxes.addition}
                    onValueChange={() => handleCheckboxChange('addition')}
                    style={selectedCheckboxes.addition ? [styles.checkbox, styles.checkbox_active] : styles.checkbox}
                />
                <Text style={{ fontSize: 16, color:'rgba(32, 137, 251, 1)' }}>Сложение</Text>
            </View>
            <View style={[styles.chose]}>
                <CheckBox
                    value={selectedCheckboxes.division}
                    onValueChange={() => handleCheckboxChange('division')}
                    style={selectedCheckboxes.division ? [styles.checkbox, styles.checkbox_active] : styles.checkbox}
                />
                <Text style={{ fontSize: 16, color:'rgba(32, 137, 251, 1)' }}>Деление</Text>
            </View>
            <View style={[styles.chose]}>
                <CheckBox
                    value={selectedCheckboxes.multiplication}
                    onValueChange={() => handleCheckboxChange('multiplication')}
                    style={selectedCheckboxes.multiplication ? [styles.checkbox, styles.checkbox_active] : styles.checkbox}
                />
                <Text style={{ fontSize: 16, color:'rgba(32, 137, 251, 1)' }}>Умножение</Text>
            </View>
            <View>
                <Text style={{ fontSize: 21 }}>Уровень сложности</Text>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                    {stars.map((star, index) => (
                        <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
                        <Image source={star ? require('../../assets/images/Star.png') : require('../../assets/images/Star_grey.png')} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <Pressable 
                style={styles.button} 
                onPress={() => navigation.navigate('type_task')}
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
  checkbox: {
    borderColor:'grey'
  },
  checkbox_active:{
    borderColor:'rgba(101, 175, 255, 1)',
    backgroundColor:'rgba(101, 175, 255, 1)',
  },
  chose: {
    backgroundColor:'rgba(245, 245, 245, 1)',
    padding: 10,
    borderRadius:3,
    display:'flex',
    flexDirection:'row',
    gap:10,
    width:'50%'
  },
});