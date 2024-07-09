import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from './Signin.css';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../api/Signin';

interface SigninFormInputs {
  username: string;
  password: string;
}

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormInputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SigninFormInputs> = async (data) => {
    try {
      const response = await login(data.username, data.password);
      console.log(response);
      navigate('/signin');
    } catch (error) {
      console.error('failed', error);
    }
  };

  return (
    <div className={S.Container}>
      <h3 className={S.Title}>관리자 로그인</h3>
      <form className={S.Form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className={S.Label}>아이디</label>
          <input
            type="id"
            className={S.Input}
            {...register('username', { required: '아이디를 입력해주세요' })}
            placeholder="아이디를 입력해주세요"
          />
          {errors.username && <span>{errors.username.message}</span>}
        </div>
        <div>
          <label className={S.Label}>비밀번호</label>
          <input
            type="password"
            className={S.Input}
            placeholder="비밀번호를 입력해주세요"
            {...register('password', { required: '비밀번호를 입력해주세요' })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button type="submit" className={S.Button}>
          로그인
        </button>
      </form>
    </div>
  );
}
