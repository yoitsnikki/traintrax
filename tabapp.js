import * as React from 'react';
import { PureComponent } from 'react';
import { ActivityIndicator, Text, View, StyleSheet, FlatList, DatePickerIOS} from 'react-native';
import MapView from 'react-native-maps';
import { Constants } from 'expo';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import dino from './dino.png'
import chez from './chez.png'
import chud from './chud.png'

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chosenDate: new Date()};

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

  render() {
    return(
      <View>
        <FlatList
          data={this.props.screenProps.results}
          renderItem={({item}) => <Text>{item.id}</Text>}
        />
        <Text style={styles.text}>Hello</Text>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
      </View>
      // <View style={styles.container}>
      // </View>
    );
  }
}

class ListScreen extends React.Component {
  render() {
    return(
      <View>
        <FlatList
          data={this.props.screenProps.results}
          renderItem={({item}) => <Text>{item.id}</Text>}
        />
      </View>
    );
  }
}

class MapScreen extends React.Component {
  render() {
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
  }

  resultsAsMarkers() {
    if (!this.state.loading) {
      let markers = [];
      for (let result of this.state.results) {
        let image;
        if (result.properties.mag > 1) {

          image = chez;
          if (result.properties.mag > 2) {
            image = chud
          }
        } else {
          image = dino;
        }
        markers.push(
          <MapView.Marker
            image={image}
            key={`${result.id}`}
            coordinate={{
              longitude: result.geometry.coordinates[0],
              latitude: result.geometry.coordinates[1],
            }}
            title={`${result.id}`}
            description={`Magnitude: ${result.properties.mag} ${
              result.properties.place
            }`}
          />
        );
      }
      return markers;
    }
  }
}
// export default class App extends PureComponent {
//   state = {
//     results: [],
//     loading: true,
//   };
//
//   async componentDidMount() {
//     try {
//       const apiCall = await fetch(
//         'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-03-05&endtime=2019-03-06&latitude=37.5439281&longitude=-122.3018201&maxradiuskm=500'
//       );
//       const earthquakes = await apiCall.json();
//       this.setState({ results: earthquakes.features, loading: false });
//     } catch (err) {
//       console.log('Error fetching data', err);
//     }
//   }
//
//   render() {
//     const { quakeList, loading } = this.state;
//     if (!loading) {
//       return (
//         <View style={styles.container}>
//           <MapView
//             style={styles.map}
//             initialRegion={{
//               latitude: 37.5439281,
//               longitude: -122.3018148,
//               latitudeDelta: 0.0222,
//               longitudeDelta: 0.0201,
//             }}>
//             {this.resultsAsMarkers()}
//             <MapView.Marker
//               coordinate={{ longitude: -122.3018148, latitude: 37.5439281 }}
//               title={'Nueva'}
//               description={'Where we are-ish'}
//             />
//           </MapView>
//         </View>
//       );
//     } else {
//       return (
//         <ActivityIndicator style={styles.map} size="large" color="#0028BC" />
//       );
//     }
//   }
export default class App extends React.Component {
  state = {
    api: {
      baseURL: 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&',
      parameters: {
        starttime:'2019-03-01',
        endtime:'2019-03-06',
        latitude:'37.5439281',
        longitude:'-122.3018201',
        maxradiuskm:'80',
      },
    },
    results: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const api = this.state.api;
      const url = api.baseURL + Object.entries(api.parameters).map(([key,value])=>`${key}=${value}`).join('&');
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
const TabNavigator = createBottomTabNavigator({
  Map: MapScreen,
  List: ListScreen,
  Settings: SettingsScreen,
});

const AppContainer = createAppContainer({

  render() {
    if( this.state.loading ) {
      return <ActivityIndicator style={styles.map} size="large" color="#0028BC"/>;
    } else {
      return <AppContainer screenProps={{results:this.state.results}}/>;
    }
  }
});
