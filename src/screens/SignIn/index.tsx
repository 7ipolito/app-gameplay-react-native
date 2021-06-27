import React,{useContext} from 'react';
import { 
  View, 
  Text, 
  Image,  
  StatusBar,
  Alert,
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';
import Background  from '../../components/Background';
import { AuthContext, useAuth } from '../../hooks/auth'
import ButtonIcon  from '../../components/ButtonIcon';
import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

const SignIn:React.FC = ()=>{
  const navigation = useNavigation();
  const {user,SignIn} = useAuth();
  
  const handleSignIn=useCallback(async()=>{
    try {
      await SignIn();
    } catch (error) {
      Alert.alert(error)
    }
  },[])


  return(
    <Background>
    <View style={styles.container}>
     
      
      <Image 
        source={IllustrationImg} 
        style={styles.image} 
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`} 
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`} 
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
          title="Entrar com Discord"
          onPress={handleSignIn}
        />                
               
      </View>
    </View>
    </Background>
  );
}

export default SignIn;