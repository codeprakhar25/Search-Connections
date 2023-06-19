/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable semi */




import {StyleSheet, Image, Text, View, Pressable} from 'react-native';
import React from 'react';



const StallCard = ({props, navigation}:any) => {
  const {Name, Price, date, rentimage, id} = props;
  
  return (
    <>
      <Pressable
        onPress={() => navigation.navigate('uniqueMachine', {itemId: id})}>
        <View style={styles.container}>
          <View>
            <Image
              style={{borderRadius: 8, height: 100, width: 120}}
              source={{uri: `${rentimage}`}}
            />
          </View>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingHorizontal: 20,
              }}>
              <Text style={{fontSize: 16, fontWeight: 800}}>{Name}</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 3,
                paddingHorizontal: 15,
                paddingTop: 6,
              }}>
              <Image
                style={{padding: 10, tintColor: 'black'}}
                source={require('../assets/location.png')}
              />

              <Text style={{fontSize: 15}}>{Price}</Text>
            </View>
            <Text style={{paddingHorizontal: 17}}>{date}</Text>
          </View>
          <View> </View>
        </View>
      </Pressable>
    </>
  );
};

export default StallCard;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 150,
    paddingTop: 16,
    marginTop: 16,
    borderWidth: 1,
    backgroundColor: '#F9FCFE',
    borderColor: '#F9FCFE',
    borderRadius: 8,
  },
});