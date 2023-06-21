/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable semi */

import React, { useState, useEffect } from 'react'
import { Pressable, ScrollView, Text,View} from 'react-native'
import Header from '../app/components/Header'
import ScreenWrapper from '../app/components/ScreenWrapper'
import SearchBar from '../app/components/SearchBar'
import { useMutation, useQuery } from 'react-query';
import Loading from '../app/components/Loading'
import { Image } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Card from '../app/components/Card'



const Home = ({navigation}:any) => {
  const [searchvalue, setSearchValue]=useState('');
  const [sortOption, setSortOption] = useState('');
  
  const handleSortOptionChange = (option: string) => {
    setSortOption(option);
  };

  const fetchData = async () => {
    const response = await fetch('https://run.mocky.io/v3/0bff210c-7fc8-4964-a555-8d93de3d5f17');
   const  fetdata = await response.json();
        const data = fetdata.filter((item:any) => {
            return item.firstname.toLowerCase().includes(searchvalue.toLowerCase());
        });
          // Apply sort
  if (sortOption === 'asc') {
    data.sort((a:any, b:any) => {
      return a.age - b.age;
    });
  } else if (sortOption === 'desc') {
    data.sort((a:any, b:any) => {
      return b.age - a.age;
    });
  }
    console.log(data)

    return data;
};


useEffect(() => {
    fetchData();
  
    console.log('myState has changed:', searchvalue);
    console.log('sort value has changed', sortOption)
  }, [searchvalue,sortOption]); 

const {isSuccess, isLoading, error,data} = useQuery(['search', searchvalue,sortOption], fetchData);

  if (isLoading) {
    return <><Header text='Your Connections'/>
    <SearchBar text1={searchvalue} text2={setSearchValue} function={fetchData}/>
   <View  style={{display:'flex' , flexDirection:'row',marginLeft: 20,width:50, justifyContent:'space-between'}}>
        <Image 
        source={require('../app/assets/sort.png')}
        />
        <Text>Sort</Text>
        </View>
        <Picker
  selectedValue={sortOption}
  onValueChange={handleSortOptionChange}
>
  <Picker.Item label="Sort by: None" value="" />
  <Picker.Item label="Sort by: Ascending" value="asc" />
  <Picker.Item label="Sort by: Descending" value="desc" />
</Picker><Text><Loading/></Text></>;
}

else if (error) {
    return <Text>Error</Text>;
}




  return (
    <>
    <Header text='Your Connections'/>
    <SearchBar text1={searchvalue} text2={setSearchValue} function={fetchData}/>
   <View  style={{display:'flex' , flexDirection:'row',marginLeft: 20,width:50, justifyContent:'space-between'}}>
        <Image 
        source={require('../app/assets/sort.png')}
        />
        <Text>Sort</Text>
        </View>
        <Picker
  selectedValue={sortOption}
  onValueChange={handleSortOptionChange}

>
  <Picker.Item label="Sort by: None" value=""/>
  <Picker.Item label="Sort by: Ascending" value="asc"/>
  <Picker.Item label="Sort by: Descending" value="desc"/>
</Picker>
    {data && (
  <ScreenWrapper>
    <ScrollView showsVerticalScrollIndicator={false}>
  {data.map((item: any) => (
    <>
    <Pressable onPress={()=>{
      navigation.navigate('Profile' ,{itemId: item.index} )
    }}>
<Card props={item} />
    </Pressable>
    </>
  ))} 
    </ScrollView>
</ScreenWrapper>
      )
  }
    </>
  )

}
export default Home 


