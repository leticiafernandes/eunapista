import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Header, Body, Content, Title, Form, Label, Button, Thumbnail } from 'native-base';
import TextField from '../Util/TextField.js';
import AppConfig from '../config';
import validate from "../Util/validate_rules.js";
import axios from "axios";
import HomeScreen from "../HomeScreen/index.js";
import Session from "../Util/Session.js";
import RegisterUser from "../RaceScreen/RegisterUser.js";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    };
  }

  /****************************************************************
  **                     login                                   **
  *****************************************************************/
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
              isPassword={true}
              placeholder="senha"
              onChangeText={password => this.setState({password: password.trim()})}
              error={this.state.passwordError} />
            </View>
            <Button rounded danger style={styles.button} onPress={this.validateLogin}>
              <Text style={styles.buttonText}>Entrar</Text>
            </Button>
            <Button rounded danger style={styles.button} onPress={this.registrateUserComponent}>
              <Text style={styles.buttonText}>Novo aqui ?</Text>
            </Button>
          </Form>
        </Content>
      )
    });
  }

  validateLogin = () => {
    const emailError = validate('email', this.state.email);
    const passwordError = validate('password', this.state.password);

    this.setState({
      emailError: emailError,
      passwordError: passwordError
    });

    if (!emailError && !passwordError) {
      this.loginUser();
    }
  }

  loginUser = () => {
    let url = `${AppConfig.host}/login`,
        params = {
          email: this.state.email
        };
    axios
    .post(url, params)
    .then(response => {
      this.setState({
        component: (
          <HomeScreen />
        )
      });

      Session.setItem("@login", "sucesso");
      Session.setItem("@email", `${response.data.email}`);
      Session.setItem("@user_id", `${response.data.id}`);
    })
    .catch(error => {
      alert(error.message);
    });
  }

  /****************************************************************
  **                     register                                **
  *****************************************************************/
  registrateUserComponent = () => {
    this.setState({
      component: (
        <RegisterUser />
      )
    });
  }

  /****************************************************************
  **                  render component                           **
  *****************************************************************/
  render() {
    return (
      <Container>
        { this.state.component }
      </Container>
    );
  }
}

/****************************************************************
**                     style                                   **
*****************************************************************/


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
