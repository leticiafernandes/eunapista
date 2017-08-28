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
      console.log('sucesso');
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
        <Content style={styles.content} padder>
          <Card>
            <CardItem header>
              <Text style={styles.titleText}>Quer compartilhar um evento? </Text>
              <Text style={styles.titleText}>Diz ai!</Text>
            </CardItem>
          </Card>
          <Form>
            <View style={styles.inputBox}>
              <Label style={styles.labelText}>Nome</Label>
              <TextInput
              placeholder="Nome da corrida"
              style={styles.marginTop}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name} />
            </View>

            <View style={{ marginTop: 20 }}>
              <Label style={styles.labelText}>Data da corrida</Label>
              <DatePicker
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
                    borderBottomWidth: 0.5,
                    alignItems: 'flex-start',
                  },
                  dateIcon: {
                    display: 'none',
                  },
                  dateText: {
                    alignItems: 'flex-start',
                    fontSize:16,
                    marginLeft: 5,
                    bottom: 0,
                  },

                }}
                onDateChange={(date) => {this.setState({start_date: date})}}
              />
            </View>

            <View style={styles.inputBox}>
              <Label style={styles.labelText}>Local de partida</Label>
              <GooglePlaces
              onChange={(start_local) => this.setState({start_local})}
              value={this.state.start_local} />
            </View>

            <View style={styles.inputBox}>
              <Label style={styles.labelText}>Horário de partida</Label>
              <TextInput
              placeholder="00:00"
              style={styles.marginTop}
              onChangeText={(race_time) => this.setState({race_time})}
              value={this.state.race_time} />
            </View>

            <View style={styles.inputBox}>
              <Label style={styles.labelText}>Local de chegada</Label>
              <GooglePlaces
              onChange={(finish_local) => this.setState({finish_local})}
              value={this.state.finish_local} />
            </View>

            <View style={styles.inputBox}>
              <Label style={styles.labelText}>Valor</Label>
              <TextInput
              placeholder="R$ 10,00"
              style={styles.marginTop}
              keyboardType="decimal-pad"
              onChangeText={(value) => this.setState({value})}
              value={this.state.value} />
            </View>

            <View style={styles.inputBox}>
              <Label style={styles.labelText}>Link oficial do evento</Label>
              <TextInput
              placeholder="www.meuevento.com"
              style={styles.marginTop}
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
  content: {
    margin: 10,
  },
  labelText: {
    color: '#4d4d4d'
  },
  titleText: {
    color: '#3f51b5',
  },
  inputBox: {
    marginTop: 20,
    borderBottomWidth:0.5,
  },
  button: {
    marginTop: 40,
    marginBottom: 20,
    alignSelf: "center",
    backgroundColor: '#3f51b5'
  },
  marginTop: {
    marginTop: 20,
  }
});
