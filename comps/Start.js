import React from 'react';
import {Text,Image,View} from 'react-native';

function Start(){
  return (
    <View>
      <Image
        source={{uri:'https://ak3.picdn.net/shutterstock/videos/1023315223/thumb/1.jpg'}}
        style={{width:100,height:100}}
      />
      <Text>Starting Text</Text>
    </View>
  );
}

export default Start;
