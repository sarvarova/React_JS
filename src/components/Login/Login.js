import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { authenticate } from "../../modules/actions";
import { Link } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { RenderField } from "../RenderField";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styles from './LoginForm.module.css';
import PropTypes from "prop-types";

export const Login = () => {
  const dispatch = useDispatch();
  const { register, error, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    const { email, password } = data;
    dispatch(authenticate(email, password));
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}
      className={styles.appForm}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              className={styles.formTitle}
              component="h1"
              variant="h4"
              align="left"
            >
              Войти
            </Typography>
            <Typography
              className={styles.formSuggestion}
              component="p"
              align="left"
            >
              Новый пользователь?{" "}
              <Link component={RouterLink} to="/registration">
                Зарегистрируйтесь
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <RenderField
              error={!!error}
              helperText={error}
              required
              name="email"
              label="Имя пользователя"
              color="secondary"
              inputRef={register}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <RenderField
              error={!!error}
              helperText={error}
              required
              name="password"
              type="password"
              label="Пароль"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} align="right">
            <Button variant="contained" color="primary" type="submit">
              Войти
            </Button>
          </Grid>
        </Grid>
      </form>
  );
};

  Login.propTypes = {
    authenticate: PropTypes.func,
  };

