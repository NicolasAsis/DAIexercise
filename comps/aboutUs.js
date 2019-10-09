import React from 'react';
import {View, Text, Image} from 'react-native';

function AboutUs(){
    return(
        <View>
            <Text>Hello, this is Siya</Text>
            <Image
            style={{width: 50, height: 50}}
          source={{uri:'https://siyayang0420.com/courton/wp-content/uploads/2019/09/siya1.jpg'}}
            />
            <Text>Hello, this is Dan!</Text>
            <Image
            style={{width: 50, height: 50}}
          source={{uri:'https://siyayang0420.com/courton/wp-content/uploads/2019/09/IMG_0138-e1569106604600.jpg'}}
            />
        </View>
    )
}

export default AboutUs;
