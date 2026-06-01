import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 11,
    label: 'MENUITEMS.DASHBOARD.TEXT',
    link: '/itembank/dashboard',
    role: ['AUTHOR', 'MODERATOR', 'ADMIN', 'EXAMINER', 'ANALYTICS'],
    icon: 'grid',
  },
  {
    id: 12,
    label: 'MENUITEMS.USERS.TEXT',
    link: '/itembank/users',
    role: ['ADMIN'],
    icon: 'users',
  },
  {
    id: 13,
    label: 'MENUITEMS.TAGS.TEXT',
    link: '/itembank/tags',
    role: ['AUTHOR', 'MODERATOR', 'ADMIN', 'EXAMINER'],
    icon: 'tag',
  },
  {
    id: 14,
    label: 'MENUITEMS.PASSAGE.TEXT',
    link: '/itembank/passages',
    role: ['AUTHOR', 'MODERATOR', 'ADMIN'],
    icon: 'file-text',
  },
  {
    id: 15,
    label: 'MENUITEMS.ASSESSMENT_TEMPLATES.TEXT',
    link: '/itembank/assessment-templates',
    icon: 'hash',
    role: ['ADMIN', 'EXAMINER'],
    subItems: [
      {
        id: 1,
        label: 'MENUITEMS.ASSESSMENT_TEMPLATES.LIST.ASSESSMENT DETAILS',
        link: '/itembank/templates/assessment-details',
        parentId: 15,
      },
      {
        id: 2,
        label: 'MENUITEMS.ASSESSMENT_TEMPLATES.LIST.SECTION TEMPLATES',
        link: '/itembank/templates/assessment-section',
        parentId: 15,
      },
      {
        id: 3,
        label: 'MENUITEMS.ASSESSMENT_TEMPLATES.LIST.ASSESSMENT SETTINGS',
        link: '/itembank/templates/assessment-settings',
        parentId: 15,
      },
    ],
  },
  {
    id: 16,
    label: 'MENUITEMS.SUBJECTS.TEXT',
    link: '/itembank/subjects',
    role: ['AUTHOR', 'MODERATOR', 'ADMIN'],
    icon: 'folder',
  },
  {
    id: 17,
    label: 'MENUITEMS.ASSESSMENT.TEXT',
    link: '/itembank/assessment',
    role: ['MODERATOR', 'ADMIN'],
    icon: 'monitor',
  },
  {
    id: 18,
    label: 'MENUITEMS.MODERATION.TEXT',
    link: '/itembank/moderation',
    role: ['MODERATOR', 'ADMIN'],
    icon: 'user-check',
  },
  {
    id: 19,
    label: 'MENUITEMS.RECYCLE.TEXT',
    link: '/itembank/recycle',
    role: ['ADMIN', 'EXAMINER'],
    icon: 'repeat',
  },
  {
    id: 20,
    label: 'MENUITEMS.SETTINGS.TEXT',
    link: '/itembank/settings',
    role: ['ADMIN'],
    icon: 'settings',
  },
  {
    id: 21,
    label: 'MENUITEMS.LOGS.TEXT',
    link: '/itembank/logs',
    role: ['AUTHOR', 'MODERATOR', 'ADMIN', 'EXAMINER', 'ANALYTICS'],
    icon: 'activity',
  },
];

export const SHARED_MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.DASHBOARD.TEXT',
    link: '/itembank/dashboard',
    icon: 'grid',
  },
  {
    id: 2,
    label: 'MENUITEMS.TAGS.TEXT',
    link: '/itembank/tags',
    icon: 'tag',
  },
  {
    id: 5,
    label: 'MENUITEMS.LOGS.TEXT',
    link: '/itembank/logs',
    icon: 'activity',
  },
]

export const AUTHOR_MENU: MenuItem[] = [
  /* {
    id: 2,
    label: 'MENUITEMS.TAGS.TEXT',
    link: '/itembank/tags',
    icon: 'tag',
  }, */
  {
    id: 3,
    label: 'MENUITEMS.SUBJECTS.TEXT',
    link: '/itembank/subjects',
    role: ['AUTHOR'],
    icon: 'folder',
  }
];

export const MODERATOR_MENU: MenuItem[] = [
  /* {
    id: 1,
    label: 'MENUITEMS.DASHBOARD.TEXT',
    link: '/itembank/dashboard',
    icon: 'grid',
  }, */
  {
    id: 2,
    label: 'MENUITEMS.TAGS.TEXT',
    link: '/itembank/tags',
    icon: 'tag',
  },
  /* {
    id: 3,
    label: 'MENUITEMS.LOGS.TEXT',
    link: '/itembank/logs',
    icon: 'activity',
  }, */
  {
    id: 3,
    label: 'MENUITEMS.MODERATION.TEXT',
    link: '/itembank/moderation',
    icon: 'user-check',
  },
];

export const EXAMINER_MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.DASHBOARD.TEXT',
    link: '/itembank/dashboard',
    icon: 'grid',
  },
  {
    id: 2,
    label: 'MENUITEMS.TAGS.TEXT',
    link: '/itembank/tags',
    icon: 'tag',
  },
  {
    id: 3,
    label: 'MENUITEMS.ASSESSMENT.TEXT',
    link: '/itembank/assessment',
    icon: 'monitor',
  },
  {
    id: 4,
    label: 'MENUITEMS.LOGS.TEXT',
    link: '/itembank/logs',
    icon: 'activity',
  },
];

export const ANALYTICS_MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.DASHBOARD.TEXT',
    link: '/itembank/dashboard',
    icon: 'grid',
  },
  {
    id: 2,
    label: 'MENUITEMS.LOGS.TEXT',
    link: '/itembank/logs',
    icon: 'activity',
  },
];
