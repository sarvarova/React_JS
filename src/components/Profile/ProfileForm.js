import React from "react";
import {useForm} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ProfileMessage } from "./ProfileMessage";
import { PaymentForm } from "./PaymentForm";
import { handleProfileSubmit } from "../../modules/actions";

export const ProfileForm = () => {
  const dispatch = useDispatch();
  const defaultValues = useSelector(state => state.profile);
  const { register, handleSubmit, errors} = useForm({
    defaultValues: defaultValues || {},
  });
  const [submitSucceeded, setSubmitSucceeded] = React.useState(false);

  React.useEffect(() => {
    setSubmitSucceeded(false);
  }, []);

  const onSubmit = data => {
    dispatch(handleProfileSubmit(data));
    setSubmitSucceeded(true);
  };

  if (submitSucceeded) {
    return <ProfileMessage />;
  }

  return (
    <PaymentForm
      handleSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
    />
  );
};
