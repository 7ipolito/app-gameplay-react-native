import React from 'react'
import { View, FlatList } from 'react-native'
import { GuildProps } from '../../components/Appointments'
import Guild from '../../components/Guild'
import ListDivider from '../../components/ListDivider'
import { styles } from './styles'

type Props={
    handleGuildSelect:(guild:GuildProps)=>void;
}

const Guilds:React.FC<Props> = ({handleGuildSelect}:Props) =>{
    const guilds =[
        {
            id:'1',
            name:'Lendários',
            icon:'image.png',
            owner:true
        },
        {
            id:'2',
            name:'Lendários',
            icon:'image.png',
            owner:true
        },
        {
            id:'3',
            name:'Lendários',
            icon:'image.png',
            owner:true
        },
        {
            id:'4',
            name:'Lendários',
            icon:'image.png',
            owner:true
        }
    ]
    return(
        <View style={styles.container}>
            <FlatList
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({item})=>(
                <Guild 
                data={item}
                onPress={()=>handleGuildSelect(item)} />
            )}
            ItemSeparatorComponent={()=><ListDivider isCentered/>}
            contentContainerStyle={{paddingBottom:68,paddingTop:104}}
            ListHeaderComponent={()=><ListDivider isCentered/>}
            style={styles.guilds}
            />
        </View>
    )
}
export default Guilds