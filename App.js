 import * as React from 'react';
import { PureComponent } from 'react';
import { ActivityIndicator, Text, View, StyleSheet, FlatList, TouchableHighlight, AlertIOS, Button } from 'react-native';
import MapView from 'react-native-maps';
import { Constants } from 'expo';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import tablooks from './tablooks.js';
import dino from './donechad.png'
import chez from './donechez.png'
import chud from './donechud.png'
import trainpin from './trainpin.png'
import greentrainpin from './greentrainpin.png'
import nuevapin from './nuevapin.png'

class SettingsScreen extends React.Component {
  render() {
    return(
      <View>
        <Text> </Text>
        <Text style={{padding: 10}}>Settings</Text>

      </View>
    );
  }
}

// class ListScreen extends React.Component {
//   render() {
//     return(
//       <View>
//         <FlatList
//           data={this.props.screenProps.results}
//           renderItem={({item}) => this.renderListItem(item) }
//           // keyExtractor={(item) => item.properties.id}
//         />
//       </View>
//     );
//   }

//   renderListItem(item) {
//     let color;
//     if( item.properties.mag < 1 ) {
//       color = "green";
//     } else if( item.properties.mag < 3 ) {
//       color = "orange";
//     } else {
//       color = "red";
//     }
//     return <Text style={{padding: 10, color: color }}>There is a quake with a magnitude of {item.properties.mag} {item.properties.place} </Text>
//   }
// }

class MapScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.544,
            longitude: -122.3018148,
            latitudeDelta: 0.444,
            longitudeDelta: 0.402,
          }}>
          {this.resultsAsMarkers()}

          <MapView.Marker
            coordinate={{ longitude: -122.3018148, latitude: 37.5439281 }}
            title={'Nueva'}
            image = {nuevapin}
            description={'Where we are-ish'}>
            <MapView.Callout onPress= {()=>this.markerClick('Nueva')}>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{ longitude: -122.2980, latitude: 37.5384 }}
            title={'Hillsdale'}
            image = {trainpin}
            description={'Hillsdale Train Station'}
          />
          <MapView.Marker
            coordinate={{ longitude: -122.3868, latitude: 37.6002 }}
            title={'Millbrae'}
            image = {trainpin}
            description={'Millbrae Train Station'}
          />
          <MapView.Marker
            coordinate={{ longitude: -122.3237, latitude: 37.568 }}
            title={'San Mateo'}
            image = {trainpin}
            description={'San Mateo Train Station'}
          />
          <MapView.Marker
            coordinate={{ longitude: -122.2317, latitude: 37.4858 }}
            title={'Redwood City'}
            image = {trainpin}
            description={'Redwood City Train Station'}
          />
          <MapView.Marker
            coordinate={{ longitude: -122.1826, latitude: 37.4548 }}
            title={'Menlo Park'}
            image = {trainpin}
            description={'Menlo Park Train Station'}
          />
          <MapView.Marker
            coordinate={{ longitude: -122.1625, latitude: 37.4435 }}
            title={'Palo Alto'}
            image = {trainpin}
            description={'Palo Alto Train Station'}
          />
          <MapView.Marker
            coordinate={{ longitude: -122.1419, latitude: 37.4292 }}
            title={'California Avenue'}
            image = {trainpin}
            description={'California Avenue Train Station'}
          />
          <MapView.Marker
            coordinate={{ longitude: -122.1071, latitude: 37.4072 }}
            title={'San Antonio'}
            image = {trainpin}
            description={'San Antonio Train Station'}
          />
          <MapView.Marker
            coordinate={{ longitude: -122.0760, latitude: 37.3946 }}
            title={'Mountain View'}
            image = {trainpin}
            description={'Mountain View Train Station'}
          />
          <MapView.Marker
            coordinate={{ longitude: -122.0308, latitude: 37.3784 }}
            title={'Sunnyvale'}
            image = {trainpin}
            description={'Sunnyvale Train Station'}
          />
          <MapView.Marker
            coordinate = {{ longitude: -122.9960, latitude: 37.3704 }}
            title={'Lawrence'}
            image = {trainpin}
            description={'Lawrence Train Station'}
          />

          <MapView.Marker
            coordinate = {{ longitude: -121.9364, latitude: 37.3532 }}
            title={'Santa Clara'}
            image = {trainpin}
            description={'Santa Clara Train Station'}
          />

          <MapView.Marker
            coordinate = {{ longitude: -121.9155, latitude: 37.3427 }}
            title={'College Park'}
            image = {trainpin}
            description={'College Park Train Station'}
          />

          <MapView.Marker
            coordinate = {{ longitude: -121.9025, latitude: 37.3299 }}
            title={'San Jose Diridon'}
            image = {trainpin}
            description={'San Jose Diridon Train Station'}
          />

          <MapView.Marker
            coordinate = {{ longitude: -121.8847, latitude: 37.3126 }}
            title={'Tamien'}
            image = {trainpin}
            description={'Tamien Train Station'}
          />

          <MapView.Marker
            coordinate = {{ longitude: -121.8418, latitude: 37.2840 }}
            title={'Capitol'}
            image = {trainpin}
            description={'Capitol Train Station'}
          />

          <MapView.Marker
            coordinate = {{ longitude: -121.7975, latitude: 37.2524 }}
            title={'Blossom Hill'}
            image = {trainpin}
            description={'Blossom Hill Train Station'}
          />

          <MapView.Marker
            coordinate = {{ longitude: -121.6506, latitude: 37.1297 }}
            title={'Morgan Hill'}
            image = {trainpin}
            description={'Morgan Hill Train Station'}
          />

          <MapView.Marker
            coordinate = {{ longitude: -121.6104, latitude: 37.0857 }}
            title={'San Martin'}
            image = {trainpin}
            description={'San Martin Train Station'}
          />

          <MapView.Marker
            coordinate = {{ longitude: -121.5669, latitude: 37.0045 }}
            title={'Gilroy'}
            image = {trainpin}
            description={'Gilroy Train Station'}
          />

          <MapView.Marker
            coordinate = {{ longitude: -122.2763, latitude: 37.5213 }}
            title={'Belmont'}
            image = {trainpin}
            description={'Belmont Train Station'}
          />

          <MapView.Marker
            coordinate = {{ longitude: -122.2601, latitude: 37.5081 }}
            title={'San Carlos'}
            image = {trainpin}
            description={'San Carlos Train Station'}
          />

          <MapView.Marker
            coordinate = {{ longitude: -122.3097, latitude: 37.5531 }}
            title={'Hayward Park'}
            image = {trainpin}
            description={'Hayward Park Train Station'}
          />

          <MapView.Marker
            coordinate = {{ longitude: -122.3450, latitude: 37.5799 }}
            title={'Burlingame'}
            image = {trainpin}
            description={'Burlingame Train Station'}
          />

          <MapView.Marker
            coordinate = {{ longitude: -122.4163, latitude: 37.6378 }}
            title={'San Bruno'}
            image = {trainpin}
            description={'San Bruno Train Station'}
          />

          <MapView.Marker
            coordinate = {{ longitude: -122.4052, latitude: 37.6559 }}
            title={'South San Francisco'}
            image = {trainpin}
            description={'South San Francisco Train Station'}
          />

          <MapView.Marker
            coordinate = {{ longitude: -122.4018, latitude: 37.7077 }}
            title={'Bayshore'}
            image = {trainpin}
            description={'Bayshore Train Station'}
          />

          <MapView.Marker
            coordinate = {{ longitude: -122.3929, latitude: 37.7574 }}
            title={'22nd Street'}
            image = {trainpin}
            description={'22nd Street Train Station'}
          />

          <MapView.Marker
            coordinate = {{ longitude: -122.3948, latitude: 37.7767 }}
            title={'San Francisco'}
            image = {trainpin}
            description={'San Francisco Train Station'}
          />

        </MapView>
      </View>
    );
  }

  markerClick(locationName) {
    console.log(locationName);
    AlertIOS.alert(
  'Do you want to select ' + locationName + '?',
  '',
  [
    {
      text: 'No',
      onPress: () => console.log('No Pressed'),
      style: 'cancel',
    },
    {
      text: 'Yes',
      onPress: () => console.log('Yes'),
    },
  ],
);
  }

  resultsAsMarkers() {
    if (!this.props.screenProps.state.loading) {
      let markers = [];
      for (let result of this.props.screenProps.results) {
        let image;
        if (result.properties.mag > 1) {

          image = chez;
          if (result.properties.mag > 2) {
            image = chud
          }
        } else {
          image = dino;
        }
        // markers.push(
        //   <MapView.Marker
        //     image={image}
        //     key={`${result.id}`}
        //     coordinate={{
        //       longitude: result.geometry.coordinates[0],
        //       latitude: result.geometry.coordinates[1],
        //     }}
        //     title={`${result.id}`}
        //     description={`Magnitude: ${result.properties.mag} ${
        //       result.properties.place
        //     }`}
        //   />
        // );
      }
      return markers;
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
  customFont: {
    fontFamily: 'Heebo',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 23,
    color: '#65dca5',
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

const TabNavigator = createBottomTabNavigator({
  Map : {screen: MapScreen,
      navigationOptions: {
        tabBarLabel: <Text style={styles.customFont}> Map </Text>,
      }
    },
  Settings: {screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 23, color: "#65dca5" }}> My Profile</Text>,
      }
    },
},{
    tabBarOptions : {
      style: {
        backgroundColor: '#193455',
      }
    }
});


const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: {
        baseURL: 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&',
        parameters: {
          starttime:'2019-03-01',
          endtime:'2019-03-02',
          latitude:'37.5439281',
          longitude:'-122.3018201',
          maxradiuskm:'40',
        },
      },
      results: [],
      loading: true,
      long: 0,
      lat: 0,
    };
  }


  async componentDidMount() {
    try {
      const query = this.state.query;
      const url = query.baseURL + Object.entries(query.parameters).map(([key,value])=>`${key}=${value}`).join('&');
      const apiCall = await fetch( url );
      const earthquakes = await apiCall.json();
      this.setState({ results: earthquakes.features, loading: false });
    } catch (err) {
      console.log('Error fetching data', err);
    }
  }

  render() {
    if( this.state.loading ) {
      return <ActivityIndicator style={styles.map} size="large" color="#0028BC"/>;
    } else {
      return <AppContainer screenProps={{results:this.state.results, state:this.state}}/>;
    }
  }
}
