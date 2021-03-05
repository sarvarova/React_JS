import mapboxgl from "mapbox-gl";
import React from "react";
import { connect } from "react-redux";
import { sendAddresses, sendRoute, saveCoords } from "../../modules/actions";
import PropTypes from "prop-types";
import styles from "./Map.module.css";
import MapForm from "./MapForm";
import Button from "@material-ui/core/Button";

class Map extends React.Component {
  map = React.createRef();
  mapbox;
  state = {
    showMessage: false,
  };

  static propTypes = {
    coords: PropTypes.array,
    addressesList: PropTypes.array,
    sendAddresses: PropTypes.func,
    sendRoute: PropTypes.func,
  };

  componentDidMount() {
    mapboxgl.accessToken =
    "pk.eyJ1IjoibmFkamFzYXJ2YXJvdmEiLCJhIjoiY2trOG53M3JmMHBpejJvbXYxYm0yMmUyZyJ9.4TSsV10hjZhHPcCTObkDbw";
    this.mapbox = new mapboxgl.Map({
      container: this.map.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [30.3056504, 59.9429126], 
      zoom: 10
    });
    this.props.sendAddresses();
  }

  componentDidUpdate(prevProps) {
    const isEqual = require('lodash.isequal');
    const {coords} = this.props;
		
    if (!isEqual(coords, prevProps)) {
      if (this.props.coords && this.props.coords !== prevProps.coords) {
        this.drawRoute(this.mapbox, this.props.coords);
        this.setState({ showMessage: true });
      }
  }
}

  /*componentWillUnmount() {
    this.map.remove();
    }*/

  drawRoute = (map, coordinates) => {
    map.flyTo({
      center: coordinates[0],
      zoom: 12,
    });

    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates,
          },
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#ffc617",
        "line-width": 8,
      },
    });
  };

  render() {
    return (
      <div className={styles.map}>
        {this.state.showMessage && (
          <div className={styles.mapForm}>
            <div className={`${styles.mapWrapper} ${styles.mapWrapperBig}`}>
              <h2 className={styles.formTitle}>Заказ размёщен</h2>
              <p className={styles.formText}>
                Ваше такси уже едет к вам. Прибудет приблизительно через 10
                минут.
              </p>
              <div className={styles.formRow}>
              <Button
                variant="contained"
                color="primary"
                elevation={0}
                type="submit"
                  onClick={(e) => {
                    if (this.mapbox.getLayer("route")) {
                      this.mapbox.removeLayer("route");
                      this.setState({ showMessage: false });
                    }
                    if (this.mapbox.getSource("route")) {
                      this.mapbox.removeSource("route");
                      this.props.saveCoords(null);
                    }
                  }}
                >
                  Сделать новый заказ
                </Button>
              </div>
            </div>
          </div>
        )}
        {!this.state.showMessage && (
          <MapForm />
        )}
        <div
          ref={this.map}
          style={{ width: "100vw", height: "100vh" }}
          className="app-map__map"
          data-testid="map"
        />
      </div>
    );
  }
}

const MapConnect = connect((state) => state.map, {
  sendAddresses,
  sendRoute,
  saveCoords,
})(Map);

export default MapConnect;
