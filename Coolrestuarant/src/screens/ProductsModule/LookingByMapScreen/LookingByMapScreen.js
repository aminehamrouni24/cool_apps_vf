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
import {verticalScale} from '../../../utility/Scale';

const LookingByMapScreen = props => {
  //markers shown on the map
  const [markers, setMarkers] = useState([]);
  //polyline data for displaying routes
  const [polylineData, setPolylineData] = useState([]);

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
    <View style={[globalStyles.flex, {height: verticalScale(150)}]}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={[{borderRadius: 5}, globalStyles.flex]}
        showsScale={true}
        region={{
          latitude: props.googleMarker[0].latitude,
          longitude: props.googleMarker[0].longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.03,
        }}>
        {/*------ Passed in Google Markers Map View Render Start ------*/}
        {props.googleMarker.length > 0 &&
          props.googleMarker.map((item, index) => {
            return (
              <Marker
                key={'marker_' + index}
                tracksViewChanges={false}
                anchor={{x: 0.4, y: 0.6}}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
              />
            );
          })}
        {/*------ Passed in Google Markers Map View Render End ------*/}
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
};
/*---- Prop Type Expectations End -------*/

export default LookingByMapScreen;
