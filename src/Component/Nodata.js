import React from 'react' ;
import { View , Text } from "react-native" ; 

export default function Nodata(props) {

    const { data } = props ;

    return (
        <View style={{flex:1 , justifyContent:'center' , alignItems:'center'}}>
            <Text>
                Nothing found in {data}
            </Text>
        </View>
    )
}
