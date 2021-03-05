import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  message: {
    marginBottom: 30
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing()
  },
  card: {
    width: 300,
    height: 300 * 0.63,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    position: "relative"
  }
});

export const ProfileMessage = withStyles(styles)(({classes}) => (
  <Grid container data-testid="success" spacing={2}>
    <Grid item xs={12} align="center">
      <Typography className={classes.message}>
        Платёжные данные обновлены. Теперь вы можете заказывать такси.
      </Typography>
    </Grid>
    <Grid item xs={12} align="center">
      <Button variant="contained" color="primary" component={Link} to="/map">
        Перейти на карту
      </Button>
    </Grid>
  </Grid>
));
