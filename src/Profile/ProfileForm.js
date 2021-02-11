import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { saveProfile, loadProfile } from "../actions";
import FormLabel from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button";

class ProfileForm extends React.Component {
  state = {
    number: "",
    date: "",
    name: "",
    cvc: "",
  };

  formRef = React.createRef();

  componentDidMount() {
    this.props.loadProfile(this.props.token);
    const { number, date, name, cvc } = this.props;
    this.setState({number, date, name, cvc});
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const { number, date, name, cvc } = this.props;
      this.setState({number, date, name, cvc});
    }
  }

  render() {
    return (
      <form
        ref={this.formRef}
        onSubmit={async (e) => {
          e.preventDefault();
          const { number, date, name, cvc } = this.state;
          const { token } = this.props;
          this.props.saveProfile(number, date, name, cvc, token);
        }}
        className="profile__form"
      >
        <div className="form__wrapper">
          <div className="form__cols">
            <div className="form__col">
              <div className="form__row">
                <FormLabel>
                  <span className="form__text">Номер карты*</span>
                  <Input
                    onChange={(e) => {
                      const value = e.target.value;
                      this.setState({ number: value });
                    }}
                    type="text"
                    name="number"
                    data-testid="number"
                    value={this.state.number}
                    className="form__input"
                  />
                </FormLabel>
              </div>
              <div className="form__row">
                <FormLabel>
                  <span className="form__text">Срок действия*</span>
                  <Input
                    onChange={(e) => {
                      const value = e.target.value;
                      this.setState({ date: value });
                    }}
                    type="text"
                    name="date"
                    data-testid="date"
                    className="form__input"
                    value={this.state.date}
                  />
                </FormLabel>
              </div>
            </div>
            <div className="form__col">
              <div className="form__row">
                <FormLabel>
                  <span className="form__text">Имя владельца*</span>
                  <Input
                    onChange={(e) => {
                      const value = e.target.value;
                      this.setState({ name: value });
                    }}
                    type="text"
                    name="name"
                    data-testid="name"
                    className="form__input"
                    value={this.state.name}
                  />
                </FormLabel>
              </div>
              <div className="form__row">
                <FormLabel>
                  <span className="form__text">CVC*</span>
                  <Input
                    onChange={(e) => {
                      const value = e.target.value;
                      this.setState({ cvc: value });
                    }}
                    name="cvc"
                    data-testid="cvc"
                    type="password"
                    value={this.state.cvc}
                  />
                </FormLabel>
              </div>
            </div>
          </div>
          <div className="form__controls">
            <div className="form__row">
              <Button
                data-testid="save"
                type="submit"
                className="button form__button"
              >
                Сохранить
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

ProfileForm.propTypes = {
    saveProfile: PropTypes.func,
    loadProfile: PropTypes.func,
  };

export default connect(
  (state) => ({ ...state.profile, token: state.auth.token }),
  { saveProfile, loadProfile }
)(ProfileForm);