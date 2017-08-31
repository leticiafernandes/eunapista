import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'

export default class TextField extends Component {  
  error() {
    if (this.props.error) {
      return <Text>{this.props.error}</Text>
    }
    return null
  }

  render() {
    return (
      <View>
        <TextInput/>
        {this.error()}
      </View>
    )
  }
}
