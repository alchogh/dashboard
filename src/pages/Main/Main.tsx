import { useNavigate } from 'react-router-dom';
import * as S from './Main.css';

export default function Main() {
  const navigate = useNavigate();

  const goToPage = (page: string) => {
    navigate(page);
  };

  return (
    <div className={S.Container}>
      Main
      <p className={S.P}>large</p>
      <div>flex 되나?</div>
      <p>asdfasd</p>
      <button onClick={() => goToPage('signin')}>로그인</button>
      <button onClick={() => goToPage('signup')}>회원가입</button>
    </div>
  );
}
