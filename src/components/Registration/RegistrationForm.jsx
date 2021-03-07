import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { handleSignUp } from '../../modules/actions'
import {Link as RouterLink} from 'react-router-dom'
import { RenderField } from '../../components/RenderField'
import styles from './RegistrationForm.module.css';
import { useDispatch } from "react-redux";
import {useForm} from "react-hook-form";
import PropTypes from "prop-types";

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password, name, surname } = data;
    dispatch(handleSignUp(email, password, name, surname));
  };

  return (
      <form
       onSubmit={handleSubmit(onSubmit)}
       className={styles.appForm}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              className={styles.formTitle}
              component="h1"
              variant="h4"
              align="left"
            >
              Регистрация
            </Typography>
            <Typography
              component="p"
              align="left"
            >
              Уже зарегистрированы? <Link component={RouterLink} to="/login">Войти</Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <RenderField
              required
              inputRef={register}
              error={!!errors.email}
              helperText={!!errors.email && errors.email.message}
              name="email"
              type="email"
              label="Адрес электронной почты"
              color="secondary"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <RenderField
              required
              inputRef={register}
              error={!!errors.name}
              helperText={!!errors.name && errors.name.message}
              name="name"
              type="text"
              label="Имя"
              color="secondary"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <RenderField
              required
              inputRef={register}
              error={!!errors.surname}
              helperText={!!errors.name && errors.surname.message}
              name="surname"
              type="text"
              label="Фамилия"
              color="secondary"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <RenderField
              required
              error={!!errors.password}
              helperText={!!errors.name && errors.password.message}
              name="password"
              type="password"
              label="Пароль"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} align="right">
            <Button variant="contained" color="primary" type="submit">
              Зарегистрироваться
            </Button>
          </Grid>
        </Grid>
      </form>
  );
};

RegistrationForm.propTypes = {
  handleSignUp: PropTypes.func,
}
