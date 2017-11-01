import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";
import { TabNavigator,StackNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";

import Map from "./MapScreen.js";
import RaceCalendar from "../RaceScreen/RaceCalendar.js";
import Events from "../RaceScreen/Events.js";
import Register from "../RaceScreen/Register.js";
import RaceDetail from "../RaceScreen/RaceDetail.js";
import Profile from "../RaceScreen/Profile.js";

const EventNavigator = StackNavigator({
  HomeEvents: { screen: Events },
  RaceDetail: { screen: RaceDetail },
});

export default (MainScreenNavigator = TabNavigator(
  {
    Map: { screen: Map },
    RaceCalendar: { screen: RaceCalendar },
    Events: { screen: EventNavigator },
    Register: { screen: Register },
    Profile: { screen: Profile }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Map")}>
              <Icon name="ios-map" style={styles.icon} />
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("RaceCalendar")}>
              <Icon name="md-calendar" style={styles.icon} />
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Events")}>
              <Icon name="md-medal" style={styles.icon} />
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("Register")}>
              <Icon name="md-add" style={styles.icon} />
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 4}
              onPress={() => props.navigation.navigate("Profile")}>
              <Icon name="ios-contact" style={styles.icon} />
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));

const styles = StyleSheet.create({
  menuText: {
    fontSize: (Platform.OS === 'ios') ? 10 : 6,
  },
  icon: {
    fontSize: 25,
    color: 'rgb(63, 81, 181)',
  },
});
