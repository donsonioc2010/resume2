import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '웹 서비스와 인프라에 많은 관심을 가지고 있는 개발자이며, Java, Oracle, AWS, Linux를 다뤄보며 개발, 유지보수 경험이 있습니다.',
    '다른 사람들이 제작했던 사이트들의 유지보수를 진행하며 주석이 없거나 하드코딩되어있는 코드를 보며 많은 고생을 하다 보니, 누구나 이해를 하기 쉬운 코드를 작성하기 위해 많은 생각을 합니다.',
    '기억력이 뛰어난 편이 아니다 보니 생활을 하며 자주 까먹는 경우가 많습니다. 이를 극복하기 위해서 기록이 가능한 대부분을 정리해서 기록하거나, 혹은 문서나 메뉴얼로 제작을 하기 위해 노력합니다.',
  ],
  sign: 'Jong1',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
