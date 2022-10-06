import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faBlogger } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김종원',
    small: '(Jong1)',
  },
  contact: [
    {
      title: 'whddnjs822@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/donsonioc2010',
      link: 'https://github.com/donsonioc2010',
      icon: faGithub,
    },
    {
      title: 'https://devjong12.tistory.com',
      link: 'https://devjong12.tistory.com',
      icon: faBlogger,
    },
  ],
  notice: {
    title: '위에 기입되어 있듯 이메일을 통해서 연락주시면 감사하겠습니다.',
    icon: faBell,
  },
};

export default profile;
