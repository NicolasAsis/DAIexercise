import React from 'react';
import {
    View,
    Text,
  } from 'react-native';

 function Contacts (){
     return(
         <View>
             <View>
                <Text>Name: Dhanika</Text>
                <Text>Number: 778-111-1111</Text>
                <Text>Address: 123 bcit st</Text>
             </View>
             <View>
                <Text>Name: Heidi</Text>
                <Text>Number: 778-111-2222</Text>
                <Text>Address: 456 bcit st</Text>
             </View>
             <View>
                <Text>Name: Nico</Text>
                <Text>Number: 778-111-3333</Text>
                <Text>Address: 111 bcit st</Text>
             </View>
             <View>
                <Text>Name: Siya</Text>
                <Text>Number: 778-111-3033</Text>
                <Text>Address: 333 bcit st</Text>
             </View>
         </View>
     )
 } 

 export default Contacts;