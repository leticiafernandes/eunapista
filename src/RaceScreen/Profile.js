import React from 'react';
import { AppRegistry, View, StatusBar, StyleSheet, Alert} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Button, Thumbnail, Left, Body, Icon } from 'native-base';
import AppConfig from '../config';

export default class Profile extends React.Component {

  render() {
    var items = [ 'Golden Run 21km','Do Leme ao Pontal','Corrida 10km','Corrida 5km'];

    return (
      <Container style={styles.container}>
        <Content padder>
          <View style={styles.personalData}>
            <Thumbnail large source={require('../../img/running.png')} />
            <Text style={styles.text1}>Olá, Pedro!</Text>
            <Text style={styles.text4}>pedro01@email.com</Text>
          </View>
          <View style={styles.checkIn1}>
            <Text></Text>
          </View>
          <View style={styles.checkIn2}>
            <Text style={styles.text3}>Corridas que fez check-in:</Text>
            <List
              dataArray={items}
              removeClippedSubviews={false}
              renderRow={(item) =>
                <ListItem
                  style={styles.listItem}>
                  <Left>
                    <Text style={styles.text2}>10km</Text>
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
    height: 150,
  },
  checkIn1: {
    borderColor: AppConfig.primaryColor,
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
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
    fontSize: 13,
    color: AppConfig.primaryColor,
    marginTop: 10,
  },
  listItem: {
    marginLeft: 20,
    marginRight: 20,
  },
});
