import React, { Component } from "react";
import Expo from "expo";
import HomeScreen from "./src/HomeScreen/index.js";
import Login from "./src/RaceScreen/Login.js";
import Session from "./src/Util/Session.js";

export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      logged: false,
      isReady: false
    };
  }

  componentWillMount = () => {
    Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    })

    Session.getItem("@login").then((value) => {
        this.setState({
          logged: value == "sucesso"? true : false,
          isReady: true
        })
    });
  }

  returnFirstScreenMyApp = () => {
    return this.state.logged ? <HomeScreen /> : <Login />
  }

  render() {
    if ( !this.state.isReady ) return <Expo.AppLoading />;
    return (
         this.returnFirstScreenMyApp()
    );
  }
}
