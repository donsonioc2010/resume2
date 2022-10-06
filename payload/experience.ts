import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주) 비즈웰',
      position: 'Java Developer / 유지보수 개발자',
      startedAt: '2021-04',
      endedAt: '2022-06',
      descriptions: [
        '전자결재와 메신저를 메인 서비스로 제공',
        '담당 고객사의 로그 분석 및 지속적인 오류내역의 조치',
        'Data modeling and Mashup API development',
        'Systems Engineering and DevOps',
      ],
      skillKeywords: [
        'Java',
        'JSP',
        'JavaScript',
        'jQuery',
        'Linux',
        'Window Server',
        'JEUS',
        'Tomcat',
        'Resin',
        'Scouter',
      ],
    },
  ],
};

export default experience;
