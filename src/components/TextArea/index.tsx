import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native'
import Avatar from '../Avatar';
import { styles } from './styles';

const TextArea: React.FC<TextInputProps> = ({...rest}:TextInputProps) =>{
    return(
        <TextInput
      
        style={styles.container}
        />
    )
}

export default TextArea;