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
