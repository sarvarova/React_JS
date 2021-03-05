import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { handleSignUp } from '../../modules/actions'
import {Link as RouterLink, Redirect} from 'react-router-dom'
import { RenderField } from '../../components/RenderField'
import styles from './RegistrationForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import {useForm} from "react-hook-form";

export const RegistrationForm = ({useDispatchHook = useDispatch}) => {
  const dispatch = useDispatchHook();
  const { register, handleSubmit } = useForm();

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
              //className={classes.subheader}
              component="p"
              align="left"
            >
              Уже зарегистрированы? <Link component={RouterLink} to="/login">Войти</Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <RenderField
             // className={classes.input}
              required
              name="email"
              type="email"
              label="Адрес электронной почты"
              color="secondary"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <RenderField
              //className={classes.input}
              required
              name="name"
              type="text"
              label="Имя"
              color="secondary"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <RenderField
             // className={classes.input}
              required
              name="surname"
              type="text"
              label="Фамилия"
              color="secondary"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <RenderField
              //className={classes.input}
              required
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


/*import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { registerUser } from "../../modules/actions";
import {
  required,
  email,
  minLength8,
  maxLength12,
} from "../../utils/validators";
import styles from './RegistrationForm.module.css';
//import buttonStyles from '../common/Button.module.css';

//import FormLabel from "../common/FormLabel";
import Input from "../common/Input";
//import Button from "../common/Button";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class RegistrationForm extends React.Component {
  static propTypes = {
    authenticate: PropTypes.func,
  };

  state = {
    email: "",
    password: "",
    firstName: "",
    secondName: "",
  };

  render() {
    return (
      <form
        className={styles.appForm}
        onSubmit={this.props.handleSubmit((val) => {
          const { email, password, firstName, secondName } = val
          this.props.registerUser(email, password, firstName, secondName);
        })}
      >
        <div className="app-form__wrapper">
          <h2 className={styles.formTitle}>Регистрация</h2>
          <p className={styles.formSuggestion}>
            Уже зарегистрированы?
            <Link className={styles.formLink} to="/login">Войти</Link>
          </p>
          <div className="app-form__fields">
            <div className={styles.formRow}>
              <label className={styles.formLabel}>
                <span className="app-form__fieldname">
                  Адрес электронной почты
                </span>
                <Field
                  data-testid="email"
                  type="email"
                  className={styles.formInput}
                  component={Input}
                  name="email"
                  validate={[required, email]}
                />
              </label>
            </div>
            <div className={styles.formRow}>
              <label className={styles.formLabel}>
                <span className="app-form__fieldname">Имя</span>
                <Field
                  data-testid="name"
                  type="text"
                  className={styles.formInput}
                  component={Input}
                  name="name"
                  validate={[required]}
                />
              </label>
              <label className={styles.formLabel}>
                <span className="app-form__fieldname">Фамилия</span>
                <Field
                  data-testid="surname"
                  type="text"
                  className={styles.formInput}
                  component={Input}
                  name="surname"
                  validate={[required]}
                />
              </label>
            </div>
            <div className={styles.formRow}>
              <label className={styles.formLabel}>
                <span className="app-form__fieldname">Пароль</span>
                <Field
                  data-testid="password"
                  type="text"
                  className={styles.formInput}
                  component={Input}
                  name="password"
                  validate={[required, minLength8, maxLength12]}
                />
              </label>
            </div>
          </div>
          <div className="app-form__controls">
            <div className={styles.formRow}>
            <Button
                variant="contained"
                color="primary"
                elevation={0}
                type="submit"
                //className={classes.button}
              >
                Зарегистрироваться
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const RegistrationFormConnect = connect(
  (state) => ({ error: state.auth.error }),
  { registerUser }
)(RegistrationForm);

export default reduxForm({ form: "registrationForm" })(RegistrationFormConnect);*/
