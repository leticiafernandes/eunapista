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
      start_local: '',
      race_time: '',
      finish_local: '',
      value: '',
      link: ''
    };
  }

  newEvent = () => {
    let url = 'https://eu-na-pista.herokuapp.com/events',
        params = {
          name: this.state.name,
          start_date: this.state.start_date,
          start_local: this.state.start_local,
          race_time: this.state.race_time,
          finish_local: this.state.finish_local,
          value: this.state.value,
          link: this.state.link
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
    console.log(`entrei1`); 
    console.log(`name => ${this.state.name}`);
    console.log(`race_time => ${this.state.race_time}`);
    console.log(`value => ${this.state.value}`);
    console.log(`link => ${this.state.link}`);
    
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

    console.log(`nameError=> ${nameError}`);
    console.log(`nameError=> ${raceTimeError}`);
    console.log(`nameError=> ${raceValueError}`);
    console.log(`nameError=> ${raceLinkError}`);
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
              underlineColorAndroid="transparent"
              style={styles.marginTop}
              onChangeText={name => this.setState({name: name.trim()})}
              error={this.state.nameError} />
            </View>

            <View style={styles.inputBox}>
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

            <View style={styles.inputBox}>
              <Label style={styles.labelText}>Local de partida</Label>
              <GooglePlaces
                onPress={(local) => this.setState({start_local: local})}
                value={this.state.start_local} 
                />
            </View>

            <View style={styles.marginTop}>
              <Label style={styles.labelText}>Horário de partida</Label>
              <TextField
              placeholder="00:00"
              underlineColorAndroid="transparent"
              style={styles.marginTop}
              onChangeText={race_time => this.setState({race_time: race_time.trim()})}
              error={this.state.raceTimeError} />
            </View>

            <View style={styles.inputBox}>
              <Label style={styles.labelText}>Local de chegada</Label>
              <GooglePlaces
                onPress={(local) => this.setState({finish_local: local})}
                value={this.state.finish_local} 
                />
            </View>

            <View style={styles.marginTop}>
              <Label style={styles.labelText}>Valor</Label>
              <TextField
              placeholder="R$ 00,00"
              underlineColorAndroid="transparent"
              style={styles.marginTop}
              keyboardType="decimal-pad"
              onChangeText={value => this.setState({value: value.trim()})}
              error={this.state.raceValueError} />
            </View>

            <View style={styles.marginTop}>
              <Label style={styles.labelText}>Link oficial do evento</Label>
              <TextField
              placeholder="www.meuevento.com"
              underlineColorAndroid="transparent"
              keyboardType="url"
              onChangeText={link => this.setState({link: link.trim()})}
              error={this.state.raceLinkError} />
            </View>

            <Button rounded danger
              style={styles.button}
              onPress={this.validateRegister}>
              
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
  labelText : {
    color : '#4d4d4d'
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