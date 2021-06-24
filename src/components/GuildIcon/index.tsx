import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';

import {RectButton} from 'react-native-gesture-handler'
import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

const GuildIcon:React.FC=()=>{
    const uri= "https://i.pinimg.com/originals/94/f3/a5/94f3a5df3dd1c49db4167fe11dea3c85.jpg";
  return(
    <Image
    source={{uri}}
    style={styles.image}
    resizeMode="cover"/>
    
  );
}

export default GuildIcon;