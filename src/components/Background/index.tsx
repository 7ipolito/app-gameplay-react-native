import React,{ReactNode} from 'react'
import {styles} from './styles';
import {LinearGradient} from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme';

interface BackgroundProps{
    children:ReactNode
}

const Background:React.FC<BackgroundProps> = ({children})=>{

const{ secondary80,secondary100}=theme.colors;
    return(
        <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
    )
}

export default Background;