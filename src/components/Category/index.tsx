import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {Text, View} from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {  SvgProps } from 'react-native-svg';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

interface CategoryProps extends RectButtonProps{
  title: string;
  hasCheckBox?:boolean;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

const Category: React.FC<CategoryProps> = ({
  title,
  icon: Icon,
  hasCheckBox=false,
  checked = false,
  ...rest
}) =>{
    const{ secondary50,secondary70,secondary85,secondary40}=theme.colors;

    return(
      <RectButton {...rest}>
      <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
      >
        <LinearGradient style={[styles.content, { opacity: checked ? 1 : 0.4 }]}
        colors={[checked ? secondary85:secondary50,secondary40]}
        >
          {
            hasCheckBox &&(
              <View style={
                checked ? styles.checked : styles.check
              }/>
            )
          }
          

          <Icon 
              width={48} 
              height={48}
          />

          <Text style={styles.title}>
            { title }
          </Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
    )   
}

export default Category;