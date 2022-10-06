import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'NooBLoL',
      startedAt: '2022-07',
      endedAt: '2022-10',
      where: 'F-Lab',
      descriptions: [
        {
          content: '개요',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '게임 리그 오브 레전드(이하 "LOL")의 사용자 게임 전적 조회 및 커뮤니티 구현',
            },
          ],
        },
        {
          content: '구현기능',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '소환사명을 바탕으로 게임 전적 리스트에 대한 조회 API 개발',
            },
            {
              content: '커뮤니티에서 사용이 되는 게시물에 대한 API 개발',
            },
            {
              content: '사용자의 API 개발',
              descriptions: [
                {
                  content: '일반 사용자의 사용 기능 개발',
                },
                {
                  content: '관리자의 사용 기능 개발',
                  descriptions: [
                    {
                      content: '일반 사용자의 권한, 탈퇴의 로직 구현',
                    },
                    {
                      content: '게시판의 권한관리에 대한 로직 구현',
                    },
                  ],
                },
              ],
            },
            {
              content: 'Git Action을 통한 CI / CD 구현',
            },
          ],
        },
        {
          content: '이슈사항에 대한 정리',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'thymeleaf를 활용한 인증메일 발송의 템플릿 화 :',
              postHref: 'https://devjong12.tistory.com/59',
            },
            {
              content: 'MyBatis사용시 Dto의 상태값 Enum화 : ',
              postHref: 'https://devjong12.tistory.com/76',
            },
            {
              content: 'H2를 활용한 개발시 DB Type선언의 중요성 : ',
              postHref: 'https://devjong12.tistory.com/58',
            },
            {
              content: 'MockHttp를 활용한 테스트 케이스 구현',
              postHref: 'https://devjong12.tistory.com/53',
            },
            {
              content:
                '그 외의 오류또는 리팩토링 과정에 대해서 블로그에 작성이 되어있으니 참고 부탁드립니다',
            },
          ],
        },
        {
          content: 'ETC',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'DB Table Docs :',
              descriptions: [
                {
                  content: '문서화 되는 페이지',
                  postHref: 'https://dbdocs.io/donsonioc2010/NooBLoL',
                },
                {
                  content: 'CD 배포 레포지토리',
                  postHref: 'https://github.com/donsonioc2010/NooBLoL_DbDocs',
                },
              ],
            },
            {
              content: 'Github Link : ',
              postHref: 'https://github.com/f-lab-edu/NoobLoL',
            },
            {
              content: 'Blog Post : ',
              postHref: 'https://url.kr/ktegpl',
            },
          ],
        },
      ],
    },
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
      ],
    },
  ],
};

export default project;
