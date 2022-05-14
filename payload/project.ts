import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Inphomation',
      startedAt: '2020-09',
      endedAt: '2020-10',
      where: 'Study Project - 팀장',
      descriptions: [
        {
          content: '개요',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '사진을 촬영하는 방법, 필터등등 사진에 대한 전반적인 정보에 대한 공유가 가능한 커뮤니티 사이트 제작 프로젝트',
            },
            {
              content: 'Github Link : ',
              postHref: 'https://github.com/JINNYYUN/Inphomation',
            },
            {
              content: 'Blog Post : ',
              postHref: 'https://devjong12.tistory.com/5?category=904410',
            },
          ],
        },
        {
          content: '사용기술',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Java, JSP, Spring, HTML/CSS3, JavaScript, jQuery, Oracle, AWS EC2' },
          ],
        },
        {
          content: '인프라',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'DB 셋팅', descriptions: [{ content: 'AWS EC2를 DB서버로 사용' }] },
            { content: '스키마 설계' },
          ],
        },
        {
          content: '구현기능',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '로그인, 회원가입 페이지 제작',
              descriptions: [
                { content: 'Kakao, Naver 소셜 회원가입 및 로그인 기능 구현' },
                { content: '메일을 발송하여 패스워드 초기화 기능 구현' },
              ],
            },
            {
              content: '메인 페이지 제작',
              descriptions: [{ content: '핀터레스트 방식의 디자인 구현' }],
            },
            { content: '검색 페이지 제작' },
          ],
        },
        {
          content: 'ETC',
          weight: 'MEDIUM',
          descriptions: [
            { content: '소스코드 형상 관리 담당' },
            {
              content: '팀원들과 같이 코드리뷰',
            },
          ],
        },
      ],
    },
    {
      title: '4 Leaf Clover',
      startedAt: '2020-07',
      endedAt: '2020-08',
      where: 'Study Project - 팀장',
      descriptions: [
        {
          content: '사용기술',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Java, JSP, Spring, HTML/CSS3, JavaScript, jQuery, Oracle' }],
        },
        {
          content: '개요',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '학습을 위해 간단히 제작해볼 수 있을만한게 무엇이 있을 까? 하다가 많은 ERP프로그램들에서 영감을 받아 거래를 기록이 가능할만한 웹사이트 프로젝트를 진행하였습니다',
            },
            {
              content: 'Github Link : ',
              postHref: 'https://github.com/donsonioc2010/4leafClover',
            },
            {
              content: 'Blog Post : ',
              postHref: 'https://devjong12.tistory.com/4?category=904410',
            },
          ],
        },
        {
          content: '인프라',
          weight: 'MEDIUM',
          descriptions: [{ content: 'DB 셋팅' }, { content: '스키마 설계' }],
        },
        {
          content: '구현기능',
          weight: 'MEDIUM',
          descriptions: [
            { content: '로그인, 회원가입 페이지 제작' },
            { content: '메인화면  제작' },
            { content: '네비게이션  제작' },
            { content: '상품관리  제작' },
            {
              content: '거래페이지  제작',
              descriptions: [{ content: '거래페이지의 리스트 엑셀화 기능 구현' }],
            },
          ],
        },
        {
          content: 'ETC',
          weight: 'MEDIUM',
          descriptions: [
            { content: '소스코드 형상 관리 담당' },
            {
              content: '팀장을 맡으며 팀원의 기능 구현 보조',
              descriptions: [{ content: '개발 당시, 개발미숙 팀원이 많은 이슈가 존재' }],
            },
          ],
        },
      ],
    },
  ],
};

export default project;
