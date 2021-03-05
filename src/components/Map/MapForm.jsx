import React, { useState } from "react";
import { connect } from "react-redux";
import { sendAddresses, sendRoute, saveCoords } from "../../modules/actions";
import styles from "./Map.module.css";
import { RenderField } from "../RenderField";
import Button from "@material-ui/core/Button";

class MapForm extends React.Component {
  state = {
      startingPoint: null,
      endingPoint: null
  };

  render() {
    return (
      <form
        data-testid="form"
        className={styles.mapForm}
        onSubmit={(e) => {
          e.preventDefault();
          this.props.sendRoute(
            this.state.startingPoint,
            this.state.endingPoint
          );
        }}
      >
        <div className={styles.mapWrapper}>
          <div className={styles.formFields}>
            <div className={styles.formRow}>
              <label className={styles.formLabel} data-testid="from">
                <span className="app-form__fieldname">Откуда:</span>
                <RenderField
                  name="start"
                  list="startPoint"
                  className={styles.formInput}
                  onChange={(e) =>
                    this.setState({ startingPoint: e.target.value })
                  }
                  value={
                    this.state.startingPoint ? this.state.startingPoint : ""
                  }
                ></RenderField>
              </label>
              <datalist id="startPoint">
                {this.props.addressesList
                  .filter((item) => item !== this.state.endingPoint)
                  .map((address) => (
                    <option value={address} key={address}></option>
                  ))}
              </datalist>
            </div>
            <div className={styles.formRow}>
              <label className={styles.formLabel} data-testid="to">
                <span className="app-form__fieldname">Куда:</span>
                <RenderField
                  name="end"
                  list="endPoint"
                  className={styles.formInput}
                  onChange={(e) =>
                    this.setState({ endingPoint: e.target.value })
                  }
                  value={this.state.endingPoint ? this.state.endingPoint : ""}
                ></RenderField>
              </label>
              <datalist name="endingPoint" value="choose2" id="endPoint">
                {this.props.addressesList
                  .filter((item) => item !== this.state.startingPoint)
                  .map((address) => (
                    <option value={address} key={address}>
                      {address}
                    </option>
                  ))}
              </datalist>
            </div>
            <div className="app-form__controls">
              <div className={styles.formRow}>
              <Button
                variant="contained"
                color="primary"
                elevation={0}
                type="submit"
              >
                Вызвать такси
              </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const MapConnect = connect((state) => state.map, {
  sendAddresses,
  sendRoute,
  saveCoords,
})(MapForm);

export default MapConnect;
