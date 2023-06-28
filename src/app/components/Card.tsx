import {StyleSheet, Image, Text, View, Pressable,TouchableOpacity} from 'react-native';
import React from 'react';

const Card = ({props, navigation}:any) => {
  const {firstname,age,surname,company,email,gender} = props;

  return (
    <>
      <>
        <View style={styles.container}>
          <View style={styles.ImgContainer}>
          {
  gender === 'male' ?
   <>
   <Image style={{borderRadius: 8, height: 100, width: 100}}  source={require('../assets/male.jpg')}
   />
   </> 
  :
<Image style={{borderRadius: 8, height: 100, width: 100}} 
source={require('../assets/female.jpg')}
   />
}
          </View>
          <View style={styles.rightBody}>  
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{firstname} {surname}</Text>
              <Text style={{fontSize: 15}}>{company}</Text>
            <Text style={{fontSize: 15}}>Age- {age}</Text>
              <Text style={{fontSize: 14}}>{email}</Text>
            </View>
        </View>
      </>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 120,
    margin: 8,
    marginTop:0,
    marginRight:10,
    borderWidth: 1,
    backgroundColor: '#F9FCFE',
    borderColor: '#F9FCFE',
    borderRadius: 8,
  },
  ImgContainer:{
    marginLeft:10,
  display: 'flex',
justifyContent:'center',
alignItems:'center',
  },
  rightBody:{
    display: 'flex',
    width:'70%',
    flexDirection: 'column',
    textAlign: 'left',
    gap: 3,
    paddingHorizontal: 20,
 justifyContent:'center',
  },
});