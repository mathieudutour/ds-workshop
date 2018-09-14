import * as React from 'react'
import { render, Text, View } from 'react-sketchapp'

import { getColor, getTextStyle } from '../tokens'

const Button = ({ primary, text }) => (
  <View
    name={`Button`}
    style={{
      height: 36,
      margin: 4,
      backgroundColor: primary ? getColor('deeppurple600') : 'transparent',
      borderWidth: 1,
      borderColor: getColor('deeppurple600'),
      borderRadius: 20,
      padding: 8,
      paddingLeft: 25,
      paddingRight: 25
    }}
  >
    <Text style={{
      ...getTextStyle('button'),
      color: primary ? 'white' : getColor('deeppurple600'),
      textAlign: 'center'
    }}>
      {text}
    </Text>
  </View>
);

export default Button
