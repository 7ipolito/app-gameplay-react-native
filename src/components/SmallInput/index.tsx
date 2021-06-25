import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native'
import Avatar from '../Avatar';
import { styles } from './styles';

const SmallInput: React.FC<TextInputProps> = ({...rest}:TextInputProps) =>{
    return(
        <TextInput
        keyboardType="numeric"
        style={styles.container}
        />
    )
}

export default SmallInput;