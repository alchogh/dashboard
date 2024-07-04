import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import * as S from './Signin.css';

export default function Signin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };
  console.log(credentials);
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('', qs.stringify(credentials), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      console.log(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Login failed', error.response?.data);
        // 로그인 실패 후 처리
      } else {
        console.error('An unexpected error occurred', error);
      }
    }
  };
  return (
    <div className={S.Container}>
      <h3 className={S.Title}>관리자 로그인</h3>
      <form className={S.Form} onSubmit={handleLogin}>
        <div>
          <label className={S.Label}>아이디</label>
          <input
            type="id"
            className={S.Input}
            placeholder="아이디를 입력해주세요"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className={S.Label}>비밀번호</label>
          <input
            type="password"
            className={S.Input}
            placeholder="비밀번호를 입력해주세요"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={S.Button}>
          로그인
        </button>
      </form>
    </div>
  );
}
