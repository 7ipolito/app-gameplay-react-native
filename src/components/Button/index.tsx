import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';

import {RectButton} from 'react-native-gesture-handler'
import { styles } from './styles';

interface ButtonProps extends RectButtonProperties{
  title: string;
}

const ButtonIcon:React.FC<ButtonProps> =({ title, ...rest })=>{
  return(
    <RectButton 
      style={styles.container} 
      {...rest }
    >

      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}

export default ButtonIcon;