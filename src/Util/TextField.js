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

  handleBlur = () => {
    console.log(`onBlur => ${value}`);
    this.props.onBlur(value);
  }

  render() {
    return (
      <View>
        <View style={styles.inputBox}>
          <TextInput 
          onChangeText={this.handleChangeText} />
        </View>
        <View>
          {this.error()}
        </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 20,
    borderBottomWidth:0.5,
  },
});
