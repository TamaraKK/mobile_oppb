import { Text, View, StyleSheet, ImageBackground, Pressable, Image, TouchableOpacity, Modal, FlatList} from "react-native";
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { MultiSelect } from 'react-native-element-dropdown';
// import { Picker } from '@react-native-picker/picker';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TypeTask(props:any) {
    const [selected, setSelected] = useState([]);
    const { onPress, title = 'Далее' } = props;
    const data = [
        { label: 'Уравнение', value: '1' },
        { label: 'Уравнение второй степени', value: '2' },
        { label: 'Дробно-рациональное уравнение', value: '3' },
        { label: 'Простые операции', value: '4' },
        { label: 'Биквадратное уравнение', value: '5' },
      ];
    
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground style={[styles.img]} resizeMode="cover" source={require('../../assets/images/Profile.png')}>
        <View style={styles.registrationText}>
            <View style={{marginRight:"auto"}}>
              <TouchableOpacity onPress={() => navigation.navigate('custom_task')}>
                <Image source={require('../../assets/images/arrow_back.png')}/>
              </TouchableOpacity>    
            </View>
            <View>
                <Text style={{ fontSize: 30 }}>Тип примера</Text>
            </View>
          {/* <Text style={{ fontSize: 15, marginTop: 15 }}>Добро пожаловать!</Text> */}
        </View>
        <View style={[styles.viewinput]}>
        <View style={[styles.chose]}>
            <MultiSelect
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Выбрать"
                value={selected}
                onChange={item => {
                    setSelected(item);
                }}
            //     renderLeftIcon={() => (
            //         <AntDesign
            //         style={styles.icon}
            //         color="black"
            //         name="Safety"
            //         size={20}
            //         />
            // )}
            selectedStyle={styles.selectedStyle}
            />
            {/* <Text style={{ fontSize: 16, color: 'rgba(32, 137, 251, 1)' }}>Выбрать</Text> */}
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
  chose: {
    // backgroundColor:'rgba(245, 245, 245, 1)',
    padding: 10,
    borderRadius:3,
    display:'flex',
    flexDirection:'column',
    gap:10,
    width:'70%'
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  dropdown: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width:220
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  selectedStyle: {
    borderRadius: 12,
  },
});