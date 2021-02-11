import mapboxgl from "mapbox-gl";
import React from "react";
import { connect } from "react-redux";
import { fetchAddresses, sendRoute } from "./actions";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

class Map extends React.Component {
  map = React.createRef();
  mapbox;
  state = {
    startingPoint: null,
    endingPoint: null,
    filteredArray: [],
  };

  filterArray = () => {
    const arr = this.props.addressesList.filter(
      (item) =>
        item !== this.state.startingPoint && item !== this.state.endingPoint
    );
    return this.setState({ filteredArray: arr });
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

    this.props.fetchAddresses();
  }

  componentDidUpdate(prevProps) {
    if (this.props.coords !== prevProps.coords) {
      this.drawRoute(this.mapbox, this.props.coords);
    }
  }

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
      <div className="app-map">
        {localStorage.getItem("cardData") ? (
          <form
            data-testid="form"
            className="app-map__form app-form"
            onSubmit={(e) => {
              e.preventDefault();
              this.props.sendRoute(
                this.state.startingPoint,
                this.state.endingPoint
              );
            }}
          >
            <div className="form">
              <div className="form__wrapper">
                <div className="form__row">
                  <FormLabel>
                    <span className="form__text">Откуда:</span>
                    <select
                      name="startingPoint"
                      value={
                        this.state.startingPoint ||
                        "Откуда"
                      }
                      onChange={(e) =>
                        this.setState({ startingPoint: e.target.value })
                      }
                    >
                      <option value="Откуда">
                        Откуда
                      </option>
                      {this.props.addressesList
                        .filter((item) => item !== this.state.endingPoint)
                        .map((address) => (
                          <option value={address} key={address}>
                            {address}
                          </option>
                        ))}
                    </select>
                  </FormLabel>
                </div>
                <div className="form__row">
                  <FormLabel>
                    <span className="form__text">Куда:</span>
                    <select
                      name="endingPoint"
                      value="choose2"
                      value={
                        this.state.endingPoint ||
                        "Куда"
                      }
                      onChange={(e) =>
                        this.setState({ endingPoint: e.target.value })
                      }
                    >
                      <option value="Куда">
                        Куда
                      </option>
                      {this.props.addressesList
                        .filter((item) => item !== this.state.startingPoint)
                        .map((address) => (
                          <option value={address} key={address}>
                            {address}
                          </option>
                        ))}
                    </select>
                  </FormLabel>
                </div>
                <div className="form__controls">
                  <div className="form__row">
                    <Button
                      data-testid="call"
                      type="submit"
                      className="button form__button"
                    >
                      Вызвать такси
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <div>Заполните данные банковской карты</div>
        )}
        <div
          ref={this.map}
          style={{ height: "800px" }}
          className="app-map__map"
          data-testid="map"
        />
      </div>
    );
  }
}

export default connect((state) => state.map, { fetchAddresses, sendRoute })(
  Map
);


/*import React, {Component} from 'react'
import mapboxgl from "mapbox-gl";

export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1IjoibmFkamFzYXJ2YXJvdmEiLCJhIjoiY2trOG53M3JmMHBpejJvbXYxYm0yMmUyZyJ9.4TSsV10hjZhHPcCTObkDbw";
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.3056504, 59.9429126], 
      zoom: 10,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
        <div className="map-wrapper">
          <div data-testid="map" className="map" ref={this.mapContainer} />
        </div>
    );
  }
}*/