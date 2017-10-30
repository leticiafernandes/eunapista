import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import MapView from 'react-native-maps';
import axios from 'axios';
import AppConfig from '../config';

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

export default class Map extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      markers: []
    }
  }

  _centerOnUser = () => {
    navigator.geolocation.getCurrentPosition(position => {
        this.map.animateToCoordinate(position.coords);
      },
      error => {
        Alert.alert(error.message)
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }

  componentWillMount = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }
      });
      this.map.animateToRegion(this.state.region, 1500);
    },
    (error) => {
      console.log(error.message)
    },
    {
      enableHighAccuracy: false,
      timeout: 20000,
      maximumAge: 1000
    });

    axios.get(`${AppConfig.host}/events.json`)
    .then(response => {
      let markers = [];
      response
        .data
        .map(event => event.start_local)
        .map(local => {
          markers.push({
            key: local.id,
            title: local.local_text,
            coordinates: {
              latitude: Number(local.lat),
              longitude: Number(local.lng),
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA
            }
          });
        });

      this.setState({markers: markers});
    }).catch((error)=>{
      console.log("Api call error");
      alert(error.message);
    });
  }

  componentDidMount = () => {
    var self = this;
  }

  render() {
    return (
      <MapView style={styles.map}
      showsUserLocation={true}
      initialRegion={this.state.region}
      ref={ref => { this.map = ref; }}>

        {this.state.markers.map(marker => (
          <MapView.Marker
          key={marker.key}
          coordinate={marker.coordinates}
          title={marker.title}>
            <MapView.Callout style={styles.plainView}>
              <View>
                <Text>Corrida no centro</Text>
                <Text>Clique aqui para mais detalhes!</Text>
              </View>
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  plainView: {
    flex:1,
    width: 150,
    height: 50,
  },
});
