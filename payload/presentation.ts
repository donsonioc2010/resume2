import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: 'F-Lab',
      subTitle: 'Java Backend',
      startedAt: '2022-05',
      endedAt: '2022-10',
      descriptions: [
        {
          content:
            '내가 만든 코드가 실제 JVM에서 어떻게 실행이 이뤄지는가에 대한 예상을 깊이 생각해볼 수 있게 됨',
        },
        {
          content:
            'Primitive Type과 Wrapper Class의 차이를 명확히 이해하고 차이점을 활용한 개발을 할 수 있게 됨',
        },
        {
          content: 'Exception의 중요성과 예방하는 방법들을 체감하고 개발에 적용할 수 있슴',
        },
        {
          content: 'OOP에 대한 이해',
        },
        {
          content:
            '내가 어떻게 성장해야 하는가? 어떤 방식으로 성장해야 하는가?를 깊이 생각 할 수 있게 된 계기',
        },
      ],
    },
    {
      title: '디지털컨버전스 기반 Smart Web Content 개발자 양성과정',
      subTitle: '비트캠프-강남점 (국비)',
      startedAt: '2020-05',
      endedAt: '2020-10',
      descriptions: [
        {
          content: 'Java 및 Spring 교육',
        },
        {
          content: 'More..',
          descriptions: [
            {
              content:
                '두번의 프로젝트를 팀장을 진행하면서 PM으로써 일정관리에 대한 부분을 체험하였으며, 개발에 대한 선수 지식이 확실하지 않으면 확실한 일정을 산출하기 힘들다는 점을 체감함. ' +
                '또한 혼자서는 모두 할 수 있긴 하나 한정된 시간안에서는 혼자서 모든 것을 전부 다 할 수는 없는 것을 알게되었던 시간',
            },
            {
              content:
                '인프라에 관심이 많음에도 불구하고 AWS를 타인과 같이 사용해볼 기회가 없어 해보지 못했었으나, 프로젝트를 진행해 보면서 실제로 적용할 수 있었음. ' +
                '당시 서비스를 직접 해본다는 개념이 없었다 보니 아쉬운점으로 남음',
            },
          ],
        },
      ],
    },
    {
      title: '육군 전역',
      subTitle: '병장만기전역 - 통신병',
      startedAt: '2015-02',
      endedAt: '2016-11',
      descriptions: [
        {
          content: '고성 GOP 18개월 복무',
        },
        {
          content: 'GOP 모든 소초의 PC상태, 네트워크, 무선통신 관리',
        },
      ],
    },
    {
      title: '연세IT미래교육원 장안문캠퍼스',
      subTitle: '네트워크 통신',
      startedAt: '2013-03',
      endedAt: '2013-11',
      descriptions: [
        {
          content: '네트워크 IP통신 학습',
        },
        {
          content: 'CISCO사의 네트워크 장비 셋팅 학습',
        },
      ],
    },
  ],
};

export default presentation;
