import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


interface MyComponentProps {
  text1: string;
  text2: any;
  function: Function,
}

const SearchBar: React.FC<MyComponentProps>  = (props) => {
    const handleSearch = async () => {
      console.log('Search:', props.text1);
      props.function();
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
          onChangeText={text => {
            props.text2(text);
          }
        }
        onChange={()=>{
             props.function;
             
           }
          }
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
  
