import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import styles from './ProfileMessage.module.css';
import { Link } from "react-router-dom";

export const ProfileMessage = () => {
    return (
      <Grid container data-testid="success" spacing={2}>
      <Grid item xs={12} align="center">
        <Typography className={styles.message}>
          Платёжные данные обновлены. Теперь вы можете заказывать такси.
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Button variant="contained" color="primary" component={Link} to="/map">
          Перейти на карту
        </Button>
      </Grid>
    </Grid>
    )
}
