import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'Spring',
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'Maria(MySQL)',
    },
    {
      title: 'Oracle',
    },
    {
      title: 'H2',
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Mac',
    },
    {
      title: 'Intellij',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Git',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, etc],
};

export default skill;
