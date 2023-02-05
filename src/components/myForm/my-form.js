import React, { useState } from 'react';
import s from './my-form.module.css'
import { useForm, Controller } from 'react-hook-form'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/action';


const MyForm = () => {

  const dispatch = useDispatch()

  const { register, formState: { errors }, handleSubmit, reset, control } = useForm();


  const onSubmit = (form) => {
    dispatch(addList({ ...form }))
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <div className={s.main}>
        <center>
          <div className={s.register}>
            <div className={s.head}>
              <h1>Register</h1>
            </div>
            <div className={s.inputs}>
              <TextField
                style={{
                  width: '100%',
                  marginTop: '5px',
                  marginBottom: '5px'
                }}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                {...register('lastName', {
                  required: 'обязательно надо заполнить',
                  minLength: {
                    value: 3,
                    message: 'Минумим 3 символа'
                  }
                })}
                label="lastName"
                name={'lastName'}
                variant="outlined" />

              <TextField
                style={{
                  width: '100%',
                  marginTop: '5px',
                  marginBottom: '5px'
                }}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                {...register('firstName', {
                  required: 'обязательно надо заполнить',
                  minLength: {
                    value: 3,
                    message: 'Минумим 3 символа'
                  }
                })}
                label="firstName"
                name={'firstName'}
                variant="outlined" />

              <TextField
                style={{
                  width: '100%',
                  marginTop: '5px',
                  marginBottom: '5px'
                }}
                error={!!errors.adress}
                helperText={errors.adress?.message}
                {...register('adress', {
                  required: 'обязательно надо заполнить',
                  minLength: {
                    value: 3,
                    message: 'Минумим 3 символа'
                  }
                })}
                name={'adress'}
                label="adress"
                variant="outlined" />

              <TextField
                style={{
                  width: '100%',
                  marginTop: '5px',
                  marginBottom: '5px'
                }}
                type='date'
                error={!!errors.date}
                helperText={errors.date?.message}
                {...register('date', {
                  required: 'обязательно надо заполнить',
                })}
                name={'date'}
                variant="outlined" />

              <Controller
                style={{
                  width: '100%',
                  marginTop: '5px',
                  marginBottom: '5px'
                }}
                control={control}
                name="phone"
                rules={{ required: true }}
                render={({ field: { ref, ...field } }) => (
                  <PhoneInput
                    {...field}
                    inputExtraProps={{
                      ref,
                      required: true,
                      autoFocus: true
                    }}
                    name={'phone'}
                    country={"kg"}
                    countryCodeEditable={false}
                    specialLabel={"Указайте свой телефон номер"}
                  />
                )}
              />

            </div>
            <div className={s.radio}>
              <FormControl>
                <FormLabel
                  id="demo-radio-buttons-group-label">
                  Gender:
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="male"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value='male'
                    {...register('gender')}
                    control={<Radio />}
                    label="Male" />
                  <FormControlLabel
                    value='female'
                    {...register('gender')}
                    control={<Radio />}
                    label="Female" />
                </RadioGroup>
              </FormControl>˝
            </div>
            <div className={s.btn}>
              <Button type='submit'
                variant="contained"
                disableElevation
                className={s.btn}>
                sing in
              </Button>
            </div>
          </div>
        </center>
      </div>
    </form>
  );
};

export default MyForm;