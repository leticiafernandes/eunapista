import React from 'react';
import { AppRegistry, View, StatusBar, StyleSheet, Alert, BackAndroid, BackHandler} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Button, Thumbnail, Left, Body, Icon } from 'native-base';
import AppConfig from '../config';
import Session from "../Util/Session.js";
import axios from 'axios';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'teste',
      event_names: []
    };
  }

  componentDidMount() {
    var self = this;
    axios.get(`${AppConfig.host}/user_event?user_id=1`)
    .then(response => {
      let events = response.data,
          event_names = [];
      events.map((event) => {
          event_names.push(event.name)
      });

      this.setState({
        event_names
      });
    }).catch((error)=>{
      console.log("api call error - busca json event");
      alert(error.message);
    });
  }

  logout = () => {
    console.log('entrei logout');
    Session.removeItem("@login");
    BackAndroid.exitApp();
    BackHandler.exitApp();
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <View style={styles.personalData}>
            <Thumbnail large source={require('../../img/running.png')} />
            <Text style={styles.text1}>Olá!</Text>
            <Text style={styles.text4}>{this.state.email}</Text>
            <Button rounded danger style={styles.button} onPress={() => this.logout() }>
              <Text style={styles.buttonText}>sair</Text>
            </Button>
          </View>
          <View style={styles.checkIn1}>
            <Text></Text>
          </View>
          <View style={styles.checkIn2}>
            <Text style={styles.text3}>Corridas que fez check-in:</Text>
            <List
              dataArray={this.state.event_names}
              removeClippedSubviews={false}
              renderRow={(item) =>
                <ListItem icon
                  style={styles.listItem}>
                  <Left>
                    <Icon name="ios-checkmark-circle-outline" style={styles.icon} />
                  </Left>
                  <Body style={styles.noBorder}>
                    <Text style={styles.text2}>{item}</Text>
                  </Body>
                </ListItem>
              }>
            </List>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  personalData: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 210,
    marginTop: 20,
  },
  checkIn1: {
    borderColor: AppConfig.primaryColor,
    borderBottomWidth: 1,
    margin: 20,
  },
  text1: {
    fontSize: 20,
    color: AppConfig.primaryColor,
    marginTop: 20,
  },
  text2: {
    fontSize: 16,
    color: AppConfig.primaryColor,
  },
  text3: {
    fontSize: 16,
    color: AppConfig.primaryColor,
    marginLeft: 20,
    marginBottom: 10,
  },
  text4: {
    fontSize: 12,
    color: AppConfig.primaryColor,
    marginTop: 10,
  },
  listItem: {
    marginLeft: 20,
    marginRight: 20,
  },
  icon: {
    fontSize: 20,
    color: 'rgb(63, 81, 181)',
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  button: {
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: AppConfig.primaryColor,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
  },
});
