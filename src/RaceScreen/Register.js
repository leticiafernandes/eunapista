import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import GooglePlaces from "../RaceScreen/GooglePlaces.js";

import DatePicker from "react-native-datepicker";
import { Container, Body, Content, Header, Form, Title, Input, Item, Label,Card, CardItem, Button, Text } from "native-base";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

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
            <View style={styles.inputBox}>
              <Label>Nome</Label>
              <TextInput
              onChangeText={(name) => this.setState({name})}
              value={this.state.name} />
            </View>

            <View style={{ marginTop: 20 }}>
              <Label>Data da corrida</Label>
              <DatePicker
                style={{width: 200, borderBottomWidth: 0}}
                date={this.state.start_date}
                mode="date"
                androidMode="spinner"
                placeholder=""
                format="DD/MM/YYYY"
                confirmBtnText="OK"
                cancelBtnText="Cancelar"
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                  },
                  dateIcon: {
                    display: 'none'
                  },
                }}
                onDateChange={(date) => {this.setState({start_date: date})}}
              />
            </View>

            <View style={{ marginTop: 20 }}>
              <Text>Local de partida</Text>
              <GooglePlaces
              onChange={(start_local) => this.setState({start_local})}
              value={this.state.start_local} />
            </View>

            <View style={styles.inputBox}>
              <Label>Horário de partida</Label>
              <TextInput
              onChangeText={(race_time) => this.setState({race_time})}
              value={this.state.race_time} />
            </View>

            <View style={{ marginTop: 20 }}>
              <Label style={styles.inputBox}>Local de chegada</Label>
              <GooglePlaces
              onChange={(finish_local) => this.setState({finish_local})}
              value={this.state.finish_local} />
            </View>

            <View style={styles.inputBox}>
              <Label>Valor</Label>
              <TextInput
              keyboardType="decimal-pad"
              onChangeText={(value) => this.setState({value})}
              value={this.state.value} />
            </View>

            <View style={styles.inputBox}>
              <Label>Link oficial do evento</Label>
              <TextInput
              keyboardType="url"
              onChangeText={(link) => this.setState({link})}
              value={this.state.link} />
            </View>

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
  titleText: {
    color: '#3f51b5',
  },
  inputBox: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
    backgroundColor: '#3f51b5'
  }
});
