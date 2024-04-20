import './App.css';
import profile_normal from './assets/profile_normal.png';

function App() {
  return (
    <div className='wrap'>
      <img
        className='profile'
        src={profile_normal}
        alt='반뿔테 안경을 쓰고 착하게 생긴 권기범의 프로필 사진(컨퍼런스 배경)'
      />
      <h1>권기범의 페이지는 새 단장 중!</h1>
      <a
        className='resume-link'
        href='https://www.rallit.com/resumes/24850@gun01043989956/%EA%B6%8C%EA%B8%B0%EB%B2%94?theme=STANDARD'
      >
        이력서 읽으러 가기
      </a>
    </div>
  );
}

export default App;
