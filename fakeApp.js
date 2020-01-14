import * as React from 'react';
import { PureComponent } from 'react';
import { ActivityIndicator, Text, View, StyleSheet, FlatList, DatePickerIOS} from 'react-native';
import MapView from 'react-native-maps';
import { Constants } from 'expo';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import dino from './dino.png'
import chez from './chez.png'
import chud from './chud.png'


export default class App extends PureComponent {
  state = {
    results: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const apiCall = await fetch(
        'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-03-05&endtime=2019-03-06&latitude=37.5439281&longitude=-122.3018201&maxradiuskm=500'
      );
      const earthquakes = await apiCall.json();
      this.setState({ results: earthquakes.features, loading: false });
    } catch (err) {
      console.log('Error fetching data', err);
    }
  }

  render() {
    const { quakeList, loading } = this.state;
    if (!loading) {
      return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.5439281,
              longitude: -122.3018148,
              latitudeDelta: 0.0222,
              longitudeDelta: 0.0201,
            }}>
            {this.resultsAsMarkers()}
            <MapView.Marker
              coordinate={{ longitude: -122.3018148, latitude: 37.5439281 }}
              title={'Nueva'}
              description={'Where we are-ish'}
            />
          </MapView>
        </View>
      );
    } else {
      return (
        <ActivityIndicator style={styles.map} size="large" color="#0028BC" />
      );
    }
  }


  render() {
    if( this.state.loading ) {
      return <ActivityIndicator style={styles.map} size="large" color="#0028BC"/>;
    } else {
      return <AppContainer screenProps={{results:this.state.results}}/>;
    }
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  activity: {
    // size: 'large',
    // color: '#0028BC',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
//
// const AppContainer = createAppContainer({
//
//   render() {
//     if( this.state.loading ) {
//       return <ActivityIndicator style={styles.map} size="large" color="#0028BC"/>;
//     } else {
//       return <screenProps={{results:this.state.results}}/>;
//     }
//   }
// });
