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

interface ListHeaderProps{
    title:string;
    subtitle:string;
}

const ListHeader:React.FC<ListHeaderProps>=({title,subtitle})=>{
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        { title }
      </Text>

      <Text style={styles.subtitle}>
        { subtitle }
      </Text>
    </View>
  );
}

export default ListHeader;