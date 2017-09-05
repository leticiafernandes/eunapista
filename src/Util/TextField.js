import React, {Component} from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";

export default class TextField extends Component {  
  error() {
    if (this.props.error) {
      return <Text style={{color: 'red'}}>{this.props.error}</Text>
    }
    return null
  }

  handleChangeText = (value) => {
    console.log(`changeText => ${value}`)
    this.props.onChangeText(value);
  }

  handlePlaceHolder = (message) => {
    this.props.placeholder(message);
  }

  render() {
    return (
      <View>
        <View style={styles.inputStyle}>
          <TextInput 
          underlineColorAndroid="transparent"
          onChangeText={this.handleChangeText} 
          />
        </View>
        <View>
          {this.error()}
        </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth:0.5,
  }
});
