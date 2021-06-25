import React,{ReactNode} from 'react';
import {TouchableOpacity,TouchableOpacityProps,Text, View} from 'react-native'
import {Feather} from '@expo/vector-icons'
import GuildIcon from '../GuildIcon';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';


export interface GuildProps{
    id:string;
    name:string;
    icon:string | null;
    owner:boolean;
}

type Props = TouchableOpacityProps &{
    data:GuildProps
}

const Guild:React.FC<Props> = ({data,...rest}:Props) =>{



    return(
        <TouchableOpacity
        style={styles.container}
        activeOpacity={0.7}
        {...rest}>
            <GuildIcon/>

            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>
                    {data.name}
                    </Text>

                    <Text style={styles.type}>
                        {data.owner ? 'Admininstrador':'Convidado'}
                    </Text>
                </View>
            </View>
            <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={24}
            />

        </TouchableOpacity>
    )
}
export default Guild