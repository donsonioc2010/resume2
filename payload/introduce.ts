import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '지속적인 성장과 학습을 함에 있어 집중을 하고자 노력하며 또한 서비스와 인프라에 대한 관심을 많이 가지는 개발자입니다.',
    '다른 사람이 내 코드를 봤을 때 누구나 이해를 하기 쉽도록 쉬운 코드, 재사용성이 높은 코드를 작성하고자 많은 생각을 합니다. 또한 이미 작성된 코드여도 보기 힘들면 참지 못하고 지속적으로 리팩토링 작업을 스스로 진행하는 편입니다.',
    '글쓰기에 재미를 느끼고 많은 글을 작성해보고자 노력을 하고 있으며 해당 과정은 블로그를 같이 봐주시면 좋겠습니다.',
    '글에 대한 중요성을 알고 있어 문서화를 중요시하게 생각합니다. 어떻게 해야 효율적인 문서를 생성할 수 있을지 고민을 많이 합니다. 많은 글들에서 도움을 받았다 보니 저도 다른 사람들에게 많은 도움이 되고자 작성한 글들을 공유하고 메뉴얼을 만들고자 노력합니다.',
  ],
  sign: 'Jong1',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
