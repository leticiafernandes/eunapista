import React, {Component} from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import AppConfig from '../config';

export default class TextField extends Component {
  error() {
    if (this.props.error) {
      return <Text style={{color: 'red'}}>{this.props.error}</Text>
    }
    return null
  }

  handleChangeText = (value) => {
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
          secureTextEntry={this.props.isPassword}
          underlineColorAndroid="transparent"
          onChangeText={this.handleChangeText}
          autoCapitalize="none"
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
    borderColor: AppConfig.primaryColor,
  }
});
