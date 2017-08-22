import React from "react";
import { AppRegistry, View, StatusBar, StyleSheet, Alert} from "react-native";
import { Container, Header, Body, Content, Title, List, ListItem, Thumbnail,Button, Text } from "native-base";
import { StackNavigator } from 'react-navigation';
import axios from 'axios';

export default class Events extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }

  componentDidMount() {
    axios.get('http://10.2.8.51:3000/events.json')
    .then(res => {
      this.setState({events: res.data})
    }).catch((error)=>{
      console.log("Api call error");
      alert(error.message);
    });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container style={styles.container}>
        <Content padder>
          <List removeClippedSubviews={false}>
          {this.state.events.map(event =>
            <ListItem key={event.id}>
              <Thumbnail size={80} source={require('../../img/running.png')} />
              <Body>
                <Text>{event.name}</Text>
                <Text note>{event.start_local}</Text>
                <Button iconRight transparent primary
                  onPress={() => navigate('RaceDetail', { id:event.id })} >
                  <Text>Ver</Text>
                </Button>
              </Body>
            </ListItem>
          )}
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  }
});
