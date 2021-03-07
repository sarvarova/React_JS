import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { RenderField } from "../RenderField";
import styles from "./PaymentForm.module.css";

const cardNumber = e => {
  const { value } = e.target;
  if (!value) {
    e.target.value = "";
  }

  const match =
    value
      .replace(/\D/g, "")
      .substring(0, 16)
      .match(/.{1,4}/g) || [];
  e.target.value = match.join(" ");
};

const cvc = e => {
  const { value } = e.target;
  if (!value) {
    e.target.value = "";
  }
  e.target.value = value.replace(/\D/g, "").substring(0, 3);
};

const cardName = e => {
  const { value } = e.target;
  if (!value) {
    e.target.value = "";
  }
  e.target.value = value.toUpperCase();
};

export const PaymentForm = ({ handleSubmit, register, errors }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="app-form__wrapper">
        <div className={styles.formCols}>
          <div className={styles.formCol}>
            <div className={styles.formRow}>
              <span className={styles.formName}>Номер карты:</span>
                <Grid
                  error={!!errors.cardNumber}
                  helperText={
                    !!errors.cardNumber && errors.cardNumber.message
                  }
                  name="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  maxLength="12"
                  onChange={cardNumber}
                  inputRef={register}
                  component={RenderField}
                />
            </div>
            <div className={styles.formRow}>
              <label className={styles.formLabel}>
                <span className={styles.formName}>Срок действия:</span>
                <Grid
                  type="text"
                  name="date"
                  data-testid="date"
                  component={RenderField}
                  placeholder="00/12"
                  inputRef={register}
                  fullWidth
                 />
              </label>
            </div>
          </div>
          <div className={styles.formCol}>
            <div className={styles.formRow}>
              <label className={styles.formLabel}>
                <span className={styles.formName}>Имя владельца:</span>
                <Grid
                  required
                  error={!!errors.cardName}
                  helperText={
                    !!errors.cardName && errors.cardName.message
                  }
                  name="cardName"
                  placeholder="USER NAME"
                  onChange={cardName}
                  fullWidth
                  inputRef={register}
                  component={RenderField}
                />
              </label>
            </div>
            <div className={styles.formRow}>
              <label className={styles.formLabel}>
                <span className={styles.formName}>CVC:</span>
                <Grid
                  required
                  error={!!errors.cvc}
                  helperText={
                    !!errors.cvc && errors.cvc.message
                  }
                  name="cvc"
                  onChange={cvc}
                  inputRef={register}
                  component={RenderField}
                  placeholder="123"
                />
              </label>
            </div>
          </div>
        </div>
        <div className={styles.formControls}>
          <div className={styles.formRow}>
          <Button
              variant="contained"
              color="primary"
              elevation={0}
              type="submit"
            >
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

PaymentForm.propProps = {
errors: {}
};
