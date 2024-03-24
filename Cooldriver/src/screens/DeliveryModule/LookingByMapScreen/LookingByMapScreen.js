import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

//Third Party
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import PropTypes from 'prop-types';

//Components
import GoogleInfoPin from '../../../components/GoogleInfoPin/GoogleInfoPin';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import {allColors} from '../../../assets/styles/mainColors';

const tempMarkers = [
  {
    id: 0,
    coordinate: {latitude: 42.36652518703266, longitude: -71.05495023721711},
  },
  {
    id: 1,
    coordinate: {latitude: 42.364749515843414, longitude: -71.05464982981947},
  },
];

const LookingByMapScreen = props => {
  //markers shown on the map
  const [markers, setMarkers] = useState([]);
  //polyline data for displaying routes
  const [polylineData, setPolylineData] = useState([]);
  //polygon data placeholder
  const [polygonData, setPolygonData] = useState([
    {
      coordinates: [
        {
          longitude: -71.0581843,
          latitude: 42.3618894,
        },
        {
          longitude: -71.0632068,
          latitude: 42.36414,
        },
        {
          longitude: -71.056553,
          latitude: 42.368009,
        },
        {
          longitude: -71.051831,
          latitude: 42.36683,
        },
        {
          longitude: -71.05123,
          latitude: 42.362143,
        },
        {
          longitude: -71.0570252,
          latitude: 42.359923,
        },
        {
          longitude: -71.0581414,
          latitude: 42.36154,
        },
      ],
      strokeColor: '#4099FF',
      fillColor: 'rgba(0, 95, 255, 0.4)',
    },
    {
      coordinates: [
        {
          longitude: -71.0587423,
          latitude: 42.3620163,
        },
        {
          longitude: -71.0669844,
          latitude: 42.3662019,
        },
        {
          longitude: -71.0727367,
          latitude: 42.3561813,
        },
        {
          longitude: -71.0620478,
          latitude: 42.3578621,
        },
        {
          longitude: -71.0612321,
          latitude: 42.3609381,
        },
        {
          longitude: -71.0587423,
          latitude: 42.3616357,
        },
      ],
      strokeColor: '#FFB800',
      fillColor: 'rgba(255,184,0,0.42)',
    },
    {
      coordinates: [
        {
          longitude: -71.0615326,
          latitude: 42.3583378,
        },
        {
          longitude: -71.0722645,
          latitude: 42.3551665,
        },
        {
          longitude: -71.068444,
          latitude: 42.3476499,
        },
        {
          longitude: -71.0593433,
          latitude: 42.345842,
        },
        {
          longitude: -71.0545784,
          latitude: 42.3530416,
        },
        {
          longitude: -71.0511871,
          latitude: 42.3551982,
        },
        {
          longitude: -71.0520027,
          latitude: 42.3595428,
        },
        {
          longitude: -71.0562096,
          latitude: 42.3586232,
        },
        {
          longitude: -71.0576262,
          latitude: 42.3616992,
        },
        {
          longitude: -71.0581843,
          latitude: 42.3622065,
        },
        {
          longitude: -71.0610175,
          latitude: 42.3608747,
        },
        {
          longitude: -71.0615326,
          latitude: 42.3584012,
        },
      ],
      strokeColor: '#979797',
      fillColor: 'rgba(0,0,0,0.2)',
    },
  ]);

  //set temporary marker data
  useEffect(() => {
    setMarkers(props.tempMarkers ? tempMarkers : []);
  }, [props.tempMarkers]);

  useEffect(() => {}, [props.homeIcon]);

  //set routes for the passed in markers
  useEffect(() => {
    if (props.showRoute) {
      let tempRoute = [];
      props.googleMarker.map(item => {
        tempRoute.push({latitude: item.latitude, longitude: item.longitude});
      });
      setPolylineData(tempRoute);
    }
  }, [props.showRoute, props.googleMarker]);

  return (
    <View style={[globalStyles.flex, {borderRadius: 5}]}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={globalStyles.flex}
        showsScale={true}
        region={{
          latitude: props.googleMarker[0].latitude,
          longitude: props.googleMarker[0].longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.03,
        }}>
        {/*------- Polygon areas Start -----*/}
        {props.isPolygonVisible &&
          polygonData.map((value, index) => (
            <MapView.Polygon
              key={'region_map_' + index}
              tappable={true}
              coordinates={value.coordinates}
              strokeWidth={1} // The width of the outline of the shape
              strokeColor={value.strokeColor} // Color of the outline
              fillColor={value.fillColor} // Shape color
              onPress={val => {
                props.onPolygonPress();
              }}
            />
          ))}
        {/*------- Polygon areas End -----*/}

        {/*------ Passed in Google Markers Map View Render Start ------*/}
        {props.isIconVisible &&
          props.googleMarker.length > 0 &&
          props.googleMarker.map((item, index) => {
            return (
              <Marker
                key={'marker_' + index}
                tracksViewChanges={false}
                anchor={{x: 0.4, y: 0.6}}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}>
                {item.homeIcon}
                <Callout>
                  <GoogleInfoPin
                    imagePath={item.profilePicturePath}
                    title={item.name}
                    address={item.address}
                    showRatingView={item.showRatingView}
                    rating={item.rating}
                    ratingNum={item.ratingNum}
                  />
                </Callout>
              </Marker>
            );
          })}
        {/*------ Passed in Google Markers Map View Render End ------*/}

        {/*------ Route Render Three Way Directions Start------*/}
        {props.showRoute && polylineData.length > 2 && (
          <MapViewDirections
            origin={polylineData[0]}
            waypoints={polylineData.slice(1, -1)}
            destination={polylineData[polylineData.length - 2]}
            apikey={'AIzaSyANG0-LliP9w-QPFBo1Oz7WyYoXgra2Tcc'}
            strokeWidth={2}
            strokeColor={'rgb(214,50,41)'}
            optimizeWaypoints={true}
            lineDashPattern={[35, 35]}
          />
        )}
        {/*------ Route Render Three Way Directions End------*/}

        {/*------ Route Render Three Way Directions Start------*/}
        {props.showRoute && polylineData.length > 2 && (
          <MapViewDirections
            origin={polylineData[1]}
            waypoints={polylineData.slice(1, -1)}
            destination={polylineData[polylineData.length - 1]}
            apikey={'AIzaSyANG0-LliP9w-QPFBo1Oz7WyYoXgra2Tcc'}
            strokeWidth={2}
            strokeColor={'"rgb(59,89,152)"'}
            optimizeWaypoints={true}
          />
        )}
        {/*------ Route Render Three Way Directions End------*/}

        {/*------ Route Render Two Way Directions Start------*/}
        {props.showRoute && polylineData.length === 2 && (
          <MapViewDirections
            origin={polylineData[0]}
            destination={polylineData[polylineData.length - 1]}
            apikey={'AIzaSyANG0-LliP9w-QPFBo1Oz7WyYoXgra2Tcc'}
            strokeWidth={2}
            strokeColor={'"rgb(59,89,152)"'}
            optimizeWaypoints={true}
          />
        )}
        {/*------ Route Render Two Way Directions End------*/}

        {/*------ Temporary Markers Render Start ------*/}
        {markers.map(marker => (
          <Marker
            key={'marker_temp_' + marker.id}
            tracksViewChanges={false}
            resizeMode="contain"
            coordinate={marker.coordinate}
            pinColor={'red'}
          />
        ))}
        {/*------ Temporary Markers Render End ------*/}
      </MapView>
    </View>
  );
};

/*---- Default Props Start -------*/
LookingByMapScreen.defaultProps = {
  googleMarker: [],
  isIconVisible: true,
  isPolygonVisible: false,
  markerBackgroundColor: allColors.white,
  onPolygonPress: () => {},
  showRoute: false,
  tempMarkers: false,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
LookingByMapScreen.propTypes = {
  googleMarker: PropTypes.array,
  isIconVisible: PropTypes.bool,
  isPolygonVisible: PropTypes.bool,
  markerBackgroundColor: PropTypes.string,
  onPolygonPress: PropTypes.func,
  showRoute: PropTypes.bool,
  tempMarkers: PropTypes.bool,
};
/*---- Prop Type Expectations End -------*/

export default LookingByMapScreen;
