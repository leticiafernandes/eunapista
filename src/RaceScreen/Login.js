import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Header, Body, Content, Title, Form, Label, Button, Thumbnail } from 'native-base';
import TextField from '../Util/TextField.js';
import AppConfig from '../config';
import validate from "../Util/validate_rules.js";
import axios from "axios";
import HomeScreen from "../HomeScreen/index.js";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    };
  }

  componentWillMount = () => {
    this.setState({
      component: (
        <Content style={styles.content} padder>
          <View style={styles.logoBox}>
            <Thumbnail large source={require('../../img/running.png')} />
            <Text style={styles.appName}>eu na pista</Text>
          </View>
          <Form>
            <View style={styles.marginTop}>
              <Label style={styles.labelText}>Email</Label>
              <TextField
              placeholder="email"
              onChangeText={email => this.setState({email: email.trim()})}
              error={this.state.emailError} />
            </View>
            <View style={styles.marginTop}>
              <Label style={styles.labelText}>Senha</Label>
              <TextField
              placeholder="senha"
              onChangeText={password => this.setState({password: password.trim()})} />
            </View>
            <View style={styles.marginTop}>
              <Label style={styles.labelText}>Confirme sua senha</Label>
              <TextField
              placeholder="senha"
              onChangeText={password_confirmation => this.setState({password_confirmation: password_confirmation.trim()})} />
            </View>
            <Button rounded danger style={styles.button} onPress={this.validateRegister}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </Button>
          </Form>
        </Content>
      )
    })
  }

  newUser = () => {
    let url = `${AppConfig.host}/user_registration`,
        params = {
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation
        };
    console.log(url);
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.password_confirmation);
    axios
    .post(url, params)
    .then(response => {
      this.setState({
        component: (
          <HomeScreen />
        )
      })
      console.log('Sucesso!');
    })
    .catch(error => {
      console.log(`Error: ${error}`);
    });
  }

  validateRegister = () => {
    const emailError = validate('email', this.state.email);
    const passwordError = validate('password', this.state.password);

    this.setState({
      emailError: emailError,
      passwordError: passwordError
    })

    if (!emailError && !passwordError) {
      this.newUser();
    }
  }

  render() {
    return (
      <Container>
        { this.state.component }
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  logoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  appName:{
    fontSize: 20,
    color: AppConfig.primaryColor,
    marginTop: 20,
  },
  labelText : {
    color : '#4d4d4d',
    marginBottom: 10,
    color: AppConfig.primaryColor,
  },
  content: {
    margin: 10,
    justifyContent:'center',
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
    backgroundColor: AppConfig.primaryColor,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
  },
  marginTop: {
    marginTop: 10,
  },
});
