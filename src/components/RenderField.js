import React from 'react'
import TextField from "@material-ui/core/TextField";

export const RenderField = ({
  label,
  input,
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={false}
    helperText={""}
    {...input}
    {...custom}
  />
);