/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable radix */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable semi */



import React,{useEffect} from 'react'
import { ScrollView, Text,View,Image} from 'react-native'
import Header from '../app/components/Header'
import ScreenWrapper from '../app/components/ScreenWrapper'
import { useQuery } from 'react-query';
import Loading from '../app/components/Loading';



const Profile = ( {route}:any) => {
  const {itemId} = route.params;
  console.log(itemId)
  const fetchData = async () => {
    const response = await fetch('https://run.mocky.io/v3/0bff210c-7fc8-4964-a555-8d93de3d5f17');
   const  fetdata = await response.json();
   const data = fetdata.filter((item:any) => {
    return item.index === parseInt(itemId);
});
    console.log(data)
    return data;
};


const {isSuccess, isLoading, error,data} = useQuery('mydata',fetchData);

useEffect(() => {
  fetchData();
console.log("Got Data")
}, [itemId]); 

if (isLoading){
<Text><Loading/></Text>
}
if (error){
<Text>Error</Text>
}

  return (
    <>
    <Header text='Profile'/>

    <Text>Profile</Text>

       {data && (
  <ScreenWrapper>
    <ScrollView showsVerticalScrollIndicator={false}>
 <Text>{data[0].firstname}</Text>
 {
  data[0].gender === 'male' ?
   <>
   <Image style={{height:100, width:100}}  source={require('../app/assets/male.jpg')}
   />
   </> 
  :
<Image style={{height:100, width:100}} 
source={require('../app/assets/female.jpg')}
   />
}
    </ScrollView>
</ScreenWrapper>
      )
  }
    </>
  )
}

export default Profile
