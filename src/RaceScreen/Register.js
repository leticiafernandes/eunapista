import React from "react";
import { StyleSheet} from 'react-native';
import { AppRegistry, View, StatusBar } from "react-native";
import DatePicker from "react-native-datepicker";
import { Container, Body, Content, Header, Form, Title, Input, Item, Label,Card, CardItem, Button, Text } from "native-base";
import axios from 'axios';

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      start_date: '',
      start_local: '',
      race_time: '',
      finish_local: '',
      value: '',
      link: ''
    }; 
  }

  newEvent(){
    console.log(`name=> ${this.state.name} / start_date => ${this.state.start_date} / start_local => ${this.state.start_local} / race_time => ${this.state.race_time} / finish_local => ${this.state.finish_local} / value => ${this.state.value} / link => ${this.state.link}`);
    axios.post('http://10.2.8.51:3000/events', {
      name: this.state.name,
      start_date: this.state.start_date,
      start_local: this.state.start_local,
      race_time: this.state.race_time,
      finish_local: this.state.finish_local,
      value: this.state.value,
      link: this.state.link
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.response);
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Body>
            <Title>Cadastro</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem header>
              <Text style={styles.titleText}>Quer compartilhar um evento? </Text>
              <Text style={styles.titleText}>Diz ai!</Text>
            </CardItem>
          </Card>
          <Form>
            <Item floatingLabel style={{ marginTop: 20 }}>
              <Label>Nome</Label>
              <Input
              onChangeText={(name) => this.setState({name})}
              value={this.state.name} />
            </Item>
            <View floatingLabel style={{ marginTop: 20, marginLeft: 12 }}>
              <Label>Data da corrida</Label>
              <DatePicker
                style={{width: 200}}
                date={this.state.start_date}
                mode="date"
                androidMode="spinner"
                placeholder="Escolha a data"
                format="DD/MM/YYYY"
                confirmBtnText="OK"
                cancelBtnText="Cancelar"
                onDateChange={(date) => {this.setState({start_date: date})}}
              />
            </View>
            <Item floatingLabel style={{ marginTop: 20 }}>
              <Label>Local de partida</Label>
              <Input
              onChangeText={(start_local) => this.setState({start_local})}
              value={this.state.start_local} />
            </Item>
            <Item floatingLabel style={{ marginTop: 20 }}>
              <Label>Horário de partida</Label>
              <Input
              onChangeText={(race_time) => this.setState({race_time})}
              value={this.state.race_time} />
            </Item>
            <Item floatingLabel style={{ marginTop: 20 }}>
              <Label>Local de chegada</Label>
              <Input
              onChangeText={(finish_local) => this.setState({finish_local})}
              value={this.state.finish_local} />
            </Item>
            <Item floatingLabel style={{ marginTop: 20 }}>
              <Label>Valor</Label>
              <Input keyboardType="decimal-pad"
              onChangeText={(value) => this.setState({value})}
              value={this.state.value} />
            </Item>
            <Item floatingLabel style={{ marginTop: 20 }}>
              <Label>Link oficial do evento</Label>
              <Input keyboardType="url"
              onChangeText={(link) => this.setState({link})}
              value={this.state.link} />
            </Item>
            <Button rounded danger
              style={styles.button}
              onPress={_ => this.newEvent()}>
              <Text>Criar!</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
    backgroundColor: '#3f51b5'
  },
  titleText: {
    color: '#3f51b5',
  }
});
