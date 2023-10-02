import './ResumeHeader.css'
import profile_normal from '../assets/profile_normal.png'
import profile_something_on_your_mind from '../assets/profile_something_on_your_mind.png'
import MP3something_on_your_mind from '../assets/MP3something_on_your_mind.mp3'
import { BsTelephoneFill, BsDiscord, BsInstagram } from 'react-icons/bs'
import { useState } from 'react'

function ResumeHeader() {
  const [profile, setProfile] = useState(profile_normal)

  const audioSOYM = new Audio(MP3something_on_your_mind)
  audioSOYM.volume = 0.4

  function changeProfile() {
    if (profile === profile_normal) {
      setProfile(profile_something_on_your_mind)
      audioSOYM.play()
    } else {
      setProfile(profile_normal)
    }
  }

  return (
    <div className='resumeHeader'>
      <img
        src={profile}
        onClick={changeProfile}
        alt='반뿔테 안경을 쓰고 착하게 생긴 권기범의 프로필 사진(컨퍼런스 배경)'
      />
      <div className='nameAndContact'>
        <div className='name'>권기범</div>
        <div className='contact'>
          <div className='phoneNumber contacts'>
            <BsTelephoneFill id='icon' /> <a href='tel:+82 1043989956'>01043989956</a>
          </div>

          <div className='contacts'>
            <BsDiscord id='icon' /> <p>ggb.</p>
          </div>
          <div className='contacts'>
            <p id='icon' alt='디스콰이엇 로고'>
              D*
            </p>{' '}
            <a href='https://disquiet.io/@_ggbdev_'>권기범</a>
          </div>
          <div className='contacts'>
            <BsInstagram id='icon' />{' '}
            <a href='https://www.instagram.com/gwon_gi_beom0_0/'>gwon_gi_beom0_0</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeHeader
