import React from 'react';
import {Text, View} from 'react-native'
import Avatar from '../Avatar';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import { categories } from '../../utils/categories';
import Category from '../Category';

interface CategorySelectedProps{
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckbox?:boolean;
}

const CategorySelect: React.FC<CategorySelectedProps> = 
({ categorySelected,
  setCategory,
  hasCheckbox=false
}) =>{
    return(
        <ScrollView
        horizontal
        style={styles.container}  
        showsHorizontalScrollIndicator={false}  
        contentContainerStyle={{ paddingRight: 40 }}
      >
        {
          categories.map(category => (
            <Category 
              key={category.id}
              title={category.title}
              icon={category.icon}
              checked={category.id === categorySelected}
              onPress={() => setCategory(category.id)}
              hasCheckBox={hasCheckbox}
            />
          ))
        }
      </ScrollView>
    )
}

export default CategorySelect;