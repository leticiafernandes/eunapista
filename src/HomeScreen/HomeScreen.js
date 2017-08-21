import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

export default class Map extends React.Component {

  _centerOnUser = () => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            this.map.animateToCoordinate(position.coords)
        },
        (error) => {
            Alert.alert(error.message)
        },
        {
            enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
        }
    );
  }

  componentWillMount = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
          this.setState({
              region: {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA
              }
          });
          this.map.animateToCoordinate({
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude
          });
      },
      (error) => {
          console.log(error.message)
      },
      {
          enableHighAccuracy: false,
          timeout: 20000,
          maximumAge: 1000
      }
    );
  }

  /*componentDidMount() {
    this.map.animateToRegion(this.state.region, 100);
  }*/

  constructor(props) {
    super(props);

    this.state = {
      markers: [{
        key: 1,
        title: 'hello',
        coordinates: {
          latitude: -23.0066023,
          longitude: -43.3156324,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }
      },
      {
        key: 2,
        title: 'hello',
        coordinates: {
          latitude: -23.0044297,
          longitude: -43.3190871,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }
      }]
    }
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
            title={marker.title}
          />
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
});
