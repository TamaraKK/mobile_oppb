import { Text, View, StyleSheet, ImageBackground, Image, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function UserProfile(props:any) {
  const navigation = useNavigation();
  const { onPress, title = 'Приступить к решениям!' } = props;
  return (
    <View style={styles.container}>
      <ImageBackground style={[styles.img]} resizeMode="cover" source={require('../../assets/images/Profile.png')}>
        <View style={[styles.container_header]}>
            <View style={{ width:'100%', marginLeft:"auto"}}>
                <Image source={require('../../assets/images/edit_icon.png')}/>
            </View>
            <View style={{display:'flex', flexDirection:'row', gap:60, width:'100%'}}>
                <View style={{display:'flex', flexDirection:'column'}}>
                    <Text style={{fontSize:23}}>nikname</Text> 
                    <Text style={{fontSize:15, color:'rgba(101, 175, 255, 1)'}}>Лауреат математики</Text>
                </View>
                <View>
                    <Image source={require('../../assets/images/user_test.png')}/>
                </View>
            </View>
        </View>
        <View style={{width:'80%'}}>
            <View style={{justifyContent:'flex-start', width:'100%'}}>
                <View style={{display:'flex', flexDirection:'row', gap:5, marginBottom:8}}>
                    <Text style={{fontSize:24}}>Рейтинг</Text>
                    <Text style={{color:'rgba(101, 175, 255, 1)', fontSize:24}}>5 место</Text>
                </View>
                <Text>Посмотреть весь топ</Text>
            </View>
            <View>
                <Text style={{fontSize:24, marginBottom:8}}>Все ачивки</Text>
                <View>
                    <Text style={{fontSize:15, color:'rgba(101, 175, 255, 1)'}}>Лауреат математики</Text>
                    <Text style={{fontSize:15, color:'rgba(101, 175, 255, 1)'}}>Теоретик математик</Text>
                    <Text style={{fontSize:15, color:'rgba(101, 175, 255, 1)'}}>Нуб математик</Text>
                </View>
            </View>
        </View>
        <View style={{width:'80%', marginLeft:'10%'}}>
            <Pressable 
                style={styles.button} 
                onPress={() => navigation.navigate('log_approve')}
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width:'90%',
    height:43,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: 'rgba(101, 175, 255, 1)',
    padding:10
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  container_header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:160,
    display:'flex',
    flexDirection:'column',
    borderRadius:10,
    backgroundColor:'rgba(237, 246, 254, 1)',
    padding:25
  },
});