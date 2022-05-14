import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '수원 과학 대학교',
      subTitle: '컴퓨터 정보과 - 전문학사 졸업',
      startedAt: '2014-03',
      endedAt: '2019-02',
    },
    {
      title: '안양 성문고등학교',
      subTitle: '인문계 졸업',
      startedAt: '2011-03',
      endedAt: '2014-02',
    },
  ],
};

export default education;
