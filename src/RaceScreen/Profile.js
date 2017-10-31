import React from 'react';
import { AppRegistry, View, StatusBar, StyleSheet, Alert} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Button, Thumbnail, Left, Body, Icon } from 'native-base';
import AppConfig from '../config';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Pedro',
      email: 'pedro01@email.com'
    };
  }

  render() {
    var race_name = [ 'Golden Run 21km','Do Leme ao Pontal','Corrida 10km','Corrida 5km'];

    return (
      <Container style={styles.container}>
        <Content padder>
          <View style={styles.personalData}>
            <Thumbnail large source={require('../../img/running.png')} />
            <Text style={styles.text1}>Olá, {this.state.name}!</Text>
            <Text style={styles.text4}>{this.state.email}</Text>
          </View>
          <View style={styles.checkIn1}>
            <Text></Text>
          </View>
          <View style={styles.checkIn2}>
            <Text style={styles.text3}>Corridas que fez check-in:</Text>
            <List
              dataArray={race_name}
              removeClippedSubviews={false}
              renderRow={(item) =>
                <ListItem icon
                  style={styles.listItem}>
                  <Left>
                    <Icon name="ios-checkmark-circle-outline" style={styles.icon} />
                  </Left>
                  <Body>
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
    height: 130,
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
});
