import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import imagePath from '../constants/imagePath';

export default function Header(props) {
  const {bgcolor, headingText , _onPress} = props;
  return (
    <View
      style={{
        minHeight: 50,
        backgroundColor: bgcolor,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <TouchableOpacity onPress={_onPress}>
          <Image
            source={imagePath.menu}
            style={{width: 30, height: 30, tintColor: 'white'}}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: 110}}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          {headingText}
        </Text>
      </View>
    </View>
  );
}
