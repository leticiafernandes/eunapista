import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import axios from "axios"; 

import TextField from "../Util/TextField.js";
import validation from "../Util/validation_messages.js";
import validate from "../Util/validate_rules.js";

import DatePicker from "react-native-datepicker";
import GooglePlaces from "../RaceScreen/GooglePlaces.js";
import { Container, Body, Content, Header, Form, Title, Input, Item, Label,Card, CardItem, Button, Text } from "native-base";

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      start_date: '',
      race_time: '',
      value: '',
      link: '',
      start_local: {
        place_id: '',
        local_text: '',
        comp_text: '',
        lat: 0,
        lng: 0
      },
      finish_local: {
        place_id: '',
        local_text: '',
        comp_text: '',
        lat: 0,
        lng: 0
      }
    };
  }

  newEvent = () => {
    let url = 'http://192.168.0.12:3000/events',
        params = {
          name: this.state.name,
          start_date: this.state.start_date,
          race_time: this.state.race_time,
          value: this.state.value,
          link: this.state.link,
          start_local: {
            place_id: this.state.start_local.place_id,
            local_text: this.state.start_local.local_text,
            comp_text: this.state.start_local.comp_text,
            lat: this.state.start_local.lat,
            lng: this.state.start_local.lng
          },
          finish_local: {
            place_id: this.state.finish_local.place_id,
            local_text: this.state.finish_local.local_text,
            comp_text: this.state.finish_local.comp_text,
            lat: this.state.finish_local.lat,
            lng: this.state.finish_local.lng
          }
        };
    axios
    .post(url, params)
    .then(response => {
      this.props.navigation.navigate("Events");
      console.log('Sucesso!');
    })
    .catch(error => {
      console.log(`Error: ${error}`);
    });
  }

  validateRegister = () => {
    const nameError = validate('name', this.state.name);
    const raceTimeError = validate('raceTime', this.state.race_time);
    const raceValueError = validate('raceValue', this.state.value);
    const raceLinkError = validate('raceLink', this.state.link);

    this.setState({
      nameError: nameError,
      raceTimeError: raceTimeError,
      raceValueError: raceValueError,
      raceLinkError: raceLinkError
    })

    if (!nameError && !raceTimeError && !raceValueError && !raceLinkError) {
      //newEvent();
      alert('Details are valid!');
    }
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
            <View style={styles.marginTop}>
              <Label style={styles.labelText}>Nome</Label>
              <TextField
              placeholder="Nome da corrida"
              onChangeText={name => this.setState({name: name.trim()})}
              error={this.state.nameError} />
            </View>

            <View style={styles.inputStyle}>
              <Label style={styles.labelText}>Data da corrida</Label>
              <DatePicker
                date={this.state.start_date}
                mode="date"
                androidMode="spinner"
                format="DD/MM/YYYY"
                confirmBtnText="OK"
                cancelBtnText="Cancelar"
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                    borderBottomWidth: 0,
                    padding: 0,
                    alignItems: 'flex-start'
                  },
                  dateIcon: {
                    display: 'none',
                  },
                  dateText: {
                    fontSize:16,
                    marginLeft: 0,
                    bottom: 0,
                    marginTop: 20,
                    height: 20.5,
                  },
                  btnTextConfirm: {
                    color: '#000'
                  }
                }}
                onDateChange={(date) => {this.setState({start_date: date})}}
              />
            </View>

            <View style={styles.inputStyle}>
              <Label style={styles.labelText}>Local de partida</Label>
              <GooglePlaces
                onPress={(data, details) => {
                  this.setState({
                    start_local: {
                      place_id: details.place_id,
                      local_text: data.structured_formatting.main_text,
                      comp_text: data.structured_formatting.secondary_text,
                      lat: details.geometry.location.lat,
                      lng: details.geometry.location.lng
                    }
                  })
                }}
                value={this.state.start_local} 
                />
            </View>

            <View style={styles.marginTop}>
              <Label style={styles.labelText}>Horário de partida</Label>
              <TextField
                placeholder="00:00"
              onChangeText={race_time => this.setState({race_time: race_time.trim()})}
              error={this.state.raceTimeError} />
            </View>

            <View style={styles.inputStyle}>
              <Label style={styles.labelText}>Local de chegada</Label>
              <GooglePlaces
                onPress={(data, details) => {
                  this.setState({
                    finish_local: {
                      place_id: details.place_id,
                      local_text: data.structured_formatting.main_text,
                      comp_text: data.structured_formatting.secondary_text,
                      lat: details.geometry.location.lat,
                      lng: details.geometry.location.lng
                    }
                  })
                }}
                value={this.state.finish_local} 
                />
            </View>

            <View style={styles.marginTop}>
              <Label style={styles.labelText}>Valor</Label>
              <TextField
              placeholder="R$ 00,00"
                keyboardType="decimal-pad"
              onChangeText={value => this.setState({value: value.trim()})}
              error={this.state.raceValueError} />
            </View>

            <View style={styles.marginTop}>
              <Label style={styles.labelText}>Link oficial do evento</Label>
              <TextField
              placeholder="www.meuevento.com"
              keyboardType="url"
              onChangeText={link => this.setState({link: link.trim()})}
              error={this.state.raceLinkError} />
            </View>

            <Button rounded danger style={styles.button} onPress={this.validateRegister}>
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
  content: {
    margin: 10,
  },
  inputStyle: {
    marginTop: 10,
    borderBottomWidth:0.5,
  },
  labelText : {
    color : '#4d4d4d',
    marginBottom: 10,
  },
  marginTop: {
    marginTop: 10,
  },
  titleText: {
    color: '#3f51b5',
  },
});
