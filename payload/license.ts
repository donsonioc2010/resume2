import { ILicense } from '../component/license/ILicense';

const license: ILicense.Payload = {
  disable: false,

  list: [
    {
      title: 'Lorem ipsum',
      subTitle: 'consectetur adipiscing elit',
      at: '2017-10',
      descriptions: [
        {
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          content: 'Slideshare:',
          postHref: 'https://www.slideshare.net//',
        },
      ],
    },
  ],
};

export default license;
