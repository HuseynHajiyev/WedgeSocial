import { LinksArrayInterface } from '@/common.types';

export const footerLinks: LinksArrayInterface[] = [
  {
    title: 'Get Started',
    links: [
      {
        href: '/profile/edit',
        label: 'Edit your profile',
      },
      {
        href: '/post/create',
        label: 'Share your thoughts',
      },
      {
        href: '/groups/create',
        label: 'Create a group',
      },
      {
        href: '/friends',
        label: 'Find friends',
      },
    ],
  },
  {
    title: 'Created By',
    links: [
      {
        href: 'https://huseynhajiyev.com',
        label: 'Huseyn Hajiyev',
      },
      {
        href: 'https://github.com/huseynHajiyev',
        label: 'Github',
      },
      {
        href: 'https://www.linkedin.com/in/huseyn-hajiyev-akif/',
        label: 'LinkedIn',
      },
    ],
  },
  {
    title: 'Other Projects',
    links: [
      {
        href: 'https://participle-plus.vercel.app/',
        label: 'Participle+',
      },
      {
        href: 'https://troopl.com/hhajiyev/kanaku',
        label: 'Kanaku',
      },
      {
        href: 'https://www.foodcity.az/',
        label: 'FoodCity APMS',
      },
      {
        href: 'https://avf.az/en/home/',
        label: 'AVF - Azerbaijan Volleyball Federation',
      },
    ],
  },
];
