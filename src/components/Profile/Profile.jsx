import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { ProfileForm } from "./ProfileForm";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    padding: "44px 60px",
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: "44px 60px"
    }
  },
  subtitle: {
    color: "rgba(0, 0, 0, 0.54)",
    marginBottom: 40
  }
});

const Profile = ({ classes }) => (
  <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Профиль
            </Typography>
            <Typography
              align="center"
              gutterBottom
              className={classes.subtitle}
            >
              Способ оплаты
            </Typography>
            <ProfileForm />
          </Paper>
        </Grid>
      </Grid>
    
  </>
);

export default withStyles(styles)(Profile);

