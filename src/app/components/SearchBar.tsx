/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */

/* eslint-disable @typescript-eslint/no-unused-vars */



import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


interface MyComponentProps {
  text1: string;
  text2: any;
}

const SearchBar: React.FC<MyComponentProps>  = (props) => {
    // const [ searchText, setSearchText] = useState('');
  
    const handleSearch = () => {
      console.log('Search:', props.text1);
    };
  
    const handleClearSearch = () => {
      props.text2('');
    };
  
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <TextInput
          style={{ flex: 1, height: 40, borderWidth: 1, borderRadius: 5, paddingHorizontal: 10 }}
          placeholder="Search"
          value={props.text1}
          onChangeText={text => props.text2(text)}
        />
        {props.text1 !== '' && (
          <TouchableOpacity onPress={handleClearSearch} style={{ marginLeft: 10 }}>
            <Icon name="times-circle" size={20} color="gray" />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={handleSearch} style={{ marginLeft: 10 }}>
          <Icon name="search" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    );
  };
  
  export default SearchBar;
  
