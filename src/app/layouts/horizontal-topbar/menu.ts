import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
  {
    id: 11,
    label: "MENUITEMS.DASHBOARD.TEXT",
    link: "/examalpha/dashboard",
    role: ["AUTHOR", "MODERATOR", "ADMIN", "EXAMINER", "ANALYTICS"],
    icon: "grid",
  },
  {
    id: 12,
    label: "MENUITEMS.USERS.TEXT",
    link: "/examalpha/users",
    role: ["ADMIN"],
    icon: "users",
  },
  {
    id: 13,
    label: "MENUITEMS.TAGS.TEXT",
    link: "/examalpha/tags",
    role: ["AUTHOR", "MODERATOR", "ADMIN"],
    icon: "tag",
  },
  /* {
    id: 14,
    label: 'MENUITEMS.PASSAGE.TEXT',
    link: '/itembank/passages',
    role: ['AUTHOR', 'MODERATOR', 'ADMIN'],
    icon: 'file-text',
  }, */
  /* {
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
  }, */
  {
    id: 16,
    label: "MENUITEMS.QUESTIONS.TEXT",
    link: "/examalpha/subjects",
    role: ["AUTHOR", "MODERATOR", "ADMIN"],
    icon: "folder",
    subItems: [
      {
        id: 1,
        label: "MENUITEMS.QUESTIONS.LIST.QUESTIONS",
        link: "/examalpha/subjects/questions",
        parentId: 16,
        icon: "layers",
        role: ["EXAMINER", "ADMIN", 'AUTHOR', 'MODERATOR'],
      },
      {
        id: 2,
        label: "MENUITEMS.QUESTIONS.LIST.PASSAGES",
        link: "/examalpha/passages/subjects/passages",
        parentId: 16,
        icon: "book",
        role: ["EXAMINER", "ADMIN", 'AUTHOR', 'MODERATOR'],
      },
      {
        id: 3,
        label: "MENUITEMS.QUESTIONS.LIST.SUBJECTS",
        link: "/examalpha/subjects",
        parentId: 16,
        icon: "folder",
        role: ["AUTHOR", "MODERATOR", "EXAMINER", "ADMIN"],
      },
      {
        id: 4,
        label: "MENUITEMS.QUESTIONS.LIST.MODERATION",
        link: "/examalpha/moderation",
        parentId: 16,
        icon: "user-check",
        role: ["EXAMINER", "ADMIN"],
      },
      {
        id: 5,
        label: "MENUITEMS.QUESTIONS.LIST.RECYCLE",
        link: "/examalpha/recycle",
        parentId: 16,
        icon: "repeat",
        role: ["EXAMINER", "ADMIN"],
      },
    ],
  },
  {
    id: 17,
    label: "MENUITEMS.EXAMS.TEXT",
    link: "/examalpha/exams",
    role: ["ADMIN", "EXAMINER"],
    icon: "monitor",
 
  },
  {
    id: 18,
    label: "MENUITEMS.SCHEDULE.TEXT",
    link: "/examalpha/schedule",
    role: ["EXAMINER", "ADMIN"],
    icon: "calendar",
  },
  {
    id: 19,
    label: "MENUITEMS.MONITOR.TEXT",
    link: "/examalpha/monitor",
    role: ["EXAMINER", "ADMIN"],
    icon: "airplay",
  },
  {
    id: 19,
    label: "MENUITEMS.RESULTS.TEXT",
    link: "/examalpha/reports",
    role: ["EXAMINER", "ADMIN"],
    icon: "bar-chart",
  },
  /* {
    id: 18,
    label: 'MENUITEMS.SETTINGS.TEXT',
    link: '/examalpha/settings',
    role: ['AUTHOR', 'MODERATOR', 'ADMIN'],
    icon: 'tag',
  }, */
  /* {
    id: 18,
    label: 'MENUITEMS.MODERATION.TEXT',
    link: '/itembank/moderation',
    role: ['ADMIN'],
    icon: 'user-check',
  },
  {
    id: 19,
    label: 'MENUITEMS.RECYCLE.TEXT',
    link: '/itembank/recycle',
    role: ['ADMIN'],
    icon: 'repeat',
  }, */
  /* {
    id: 20,
    label: 'MENUITEMS.SETTINGS.TEXT',
    link: '/itembank/settings',
    role: ['ADMIN'],
    icon: 'settings',
  }, */
  /* {
    id: 20,
    label: 'MENUITEMS.SCHEDULER.TEXT',
    link: '/scheduler/bank/group',
    role: ['ADMIN', 'EXAMINER'],
    icon: 'calendar',
    subItems: [
      
    ],
  }, */
  /* {
    id: 21,
    label: 'MENUITEMS.LOGS.TEXT',
    link: '/examalpha/logs',
    role: ['AUTHOR', 'MODERATOR', 'ADMIN', 'EXAMINER'],
    icon: 'activity',
  }, */
];

export const SCHEDULER_MENU: MenuItem[] = [
  {
    id: 1,
    label: "SCHEDULER_MENU.DASHBOARD.TEXT",
    link: "/itembank/dashboard",
    icon: "grid",
  },
  {
    id: 2,
    label: "SCHEDULER_MENU.USERS.TEXT",
    link: "/itembank/users",
    role: ["ADMIN"],
    icon: "users",
  },
  {
    id: 3,
    label: "SCHEDULER_MENU.BANK.TEXT",
    link: "/scheduler/bank/group",
    icon: "archive",
  },
  {
    id: 4,
    label: "SCHEDULER_MENU.PARTICIPANTS.TEXT",
    link: "/scheduler/participants",
    icon: "database",
  },
  {
    id: 5,
    label: "SCHEDULER_MENU.CENTERS.TEXT",
    link: "/scheduler/center",
    icon: "monitor",
  },
];
