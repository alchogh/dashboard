import * as S from './Signin.css';

export default function Signin() {
  return (
    <div className={S.Container}>
      <form>
        <div>
          <label>아이디 :</label>
          <input type="email" className={S.Input} />
        </div>
        <div>
          <label>비밀번호</label>
          <input type="password" />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
