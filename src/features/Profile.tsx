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
import {StyleSheet, ScrollView, Text,View,Image} from 'react-native'
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
       {data && (
  <ScreenWrapper>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.ProfileContainer}>
 {
   data[0].gender === 'male' ?
   <>
   <Image style={styles.profileImg}  source={require('../app/assets/male.jpg')}
   />
   </> 
  :
<Image style={styles.profileImg} 
source={require('../app/assets/female.jpg')}
/>
}
<View style={styles.Details}>  
        <Text style={{fontSize: 20, fontWeight: 800}}>{data[0].firstname} {data[0].surname}</Text>
              <Text style={{fontSize: 18}}>{data[0].company}</Text>
            <Text style={{fontSize: 18}}>Age- {data[0].age}</Text>
              <Text style={{fontSize: 18}}>{data[0].email}</Text>
              <Text style={{fontSize: 18}}>{data[0].phone}</Text>
            </View>
      </View>
    </ScrollView>
</ScreenWrapper>
      )
  }
    </>
  )
}

export default Profile


const styles = StyleSheet.create({
  ProfileContainer:{
  height:400,
  width:'100%',
  backgroundColor: '#F9FCFE',
  marginTop:100,

  },

  profileImg:{
    height:120, 
    width:120,
    marginTop:-55,
    marginLeft:'30%',
  },
  Details:{
    marginTop:40,
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    textAlign: 'center',
    justifyContent:'center',
    gap: 10,
  },
})
