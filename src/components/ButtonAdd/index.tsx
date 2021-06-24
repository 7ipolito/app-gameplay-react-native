import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { Image} from 'react-native'
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";
import {MaterialCommunityIcons} from '@expo/vector-icons'
const Avatar:React.FC<RectButtonProperties> = ({...rest}) =>{
   
    return(
      <RectButton
      style={styles.container}
      {...rest}>
        <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
        />
      </RectButton>
    )
}

export default Avatar