import { Text, View, StyleSheet, ImageBackground, Pressable, Image, TouchableOpacity} from "react-native";
import { ParamListBase, useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { MultiSelect } from 'react-native-element-dropdown';
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { axiosInstance } from "@/api/general";

export default function TypeTask(props:any) {
  const [selected, setSelected] = useState<string[]>([]);
  const [isLoading, setLoading] = useState(false)

  const { onPress, title = 'Далее', route } = props;
  const data = [
    { label: 'Числовые примеры', value: '1' },
    { label: 'Уравнения', value: '2' },
    { label: 'Неравенства', value: '3' },
  ];
  const { operations, difficulty } = route.params;

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  
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
            selectedStyle={styles.selectedStyle}
            />
          </View>
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
    borderColor: 'rgba(170, 211, 255, 1)',
    borderWidth: 2,
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