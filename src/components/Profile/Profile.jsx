import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import styles from './Profile.module.css';
import { ProfileForm } from "./ProfileForm";

export const Profile = () => (
  <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "90vh" }}
      >
        <Grid item>
          <Paper className={styles.paper}>
            <Typography component="h1" variant="h4" align="center" >
              Профиль
            </Typography>
            <Typography
              align="center"
              className={styles.profileTop}
            >
              Способ оплаты
            </Typography>
            <ProfileForm />
          </Paper>
        </Grid>
      </Grid> 
  </>
);

export default (Profile);

