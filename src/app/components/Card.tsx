/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */



import {StyleSheet, Image, Text, View, Pressable} from 'react-native';
import React from 'react';



const Card = ({props, navigation}:any) => {
  const {picture,firstname,age,company,email} = props;

  return (
    <>
      <Pressable
        // onPress={() => navigation.navigate('uniqueMachine', {id})}
        >
        <View style={styles.container}>
          <View>
            <Image
              style={{borderRadius: 8, height: 100, width: 120}}
              source={{uri: `${picture}`}}
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
              <Text style={{fontSize: 16, fontWeight: 800}}>{firstname}</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                paddingHorizontal: 15,
                paddingTop: 6,
              }}>
              {/* <Image
                style={{padding: 10, tintColor: 'black'}}
                // source={require('../assets/location.png')}
              /> */}

              <Text style={{fontSize: 15}}>{email}</Text>
              <Text style={{fontSize: 15}}>{company}</Text>
            </View>
            <Text style={{paddingHorizontal: 17}}>{age}</Text>
          </View>
        </View>
      </Pressable>
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
    height: 150,
    paddingTop: 16,
    marginTop: 16,
    borderWidth: 1,
    backgroundColor: '#F9FCFE',
    borderColor: '#F9FCFE',
    borderRadius: 8,
  },
});