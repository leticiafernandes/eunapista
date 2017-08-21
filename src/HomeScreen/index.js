import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";

import Map from "./HomeScreen.js";
import RaceCalendar from "../RaceScreen/RaceCalendar.js";
import Events from "../RaceScreen/Events.js";
import Register from "../RaceScreen/Register.js";
import RaceDetail from "../RaceScreen/RaceDetail.js";

export default (MainScreenNavigator = TabNavigator(
  {
    Map: { screen: Map },
    RaceCalendar: { screen: RaceCalendar },
    Events: { screen: Events },
    Register: { screen: Register },
    RaceDetail: {screen: RaceDetail}
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
              <Icon name="ios-map-outline" />
              <Text style={styles.menuText}>Mapa</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("RaceCalendar")}>
              <Icon name="ios-calendar-outline" />
              <Text style={styles.menuText}>Calendário</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Events")}>
              <Icon name="ios-walk" color={'#fff'} />
              <Text style={styles.menuText}>Corridas</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("Register")}>
              <Icon name="md-add" color={'#fff'} />
              <Text style={styles.menuText}>Cadastro</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));

const styles = StyleSheet.create({
  menuText: {
    fontSize: (Platform.OS === 'ios') ? 12 : 8,
  }
});
