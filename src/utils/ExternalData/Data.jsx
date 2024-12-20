import React from 'react';
import {
  CalendarIcon,
  ChatIconTwo,
  ContactsIcon,
  DashboardIcon,
  EmailIcon,
  FileManagerIcon,
  GalleryIcon,
  InvoiceIcon,
  ScrumboardIcon,
  ThreeDotsIcon,
  TodoIcon,
} from './Svgs';

// Define the navigation links array
export const navLinks = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/dashboard',
  },
  {
    name: 'Invoices',
    icon: <InvoiceIcon />,
    path: '/invoices',
  },
  {
    name: 'Scrumboard',
    icon: <ScrumboardIcon />,
    path: '/scrumboard',
  },
  {
    name: 'Contacts',
    icon: <ContactsIcon />,
    path: '/contacts',
  },
  {
    name: 'Todo',
    icon: <TodoIcon />,
    path: '/todo',
  },
  {
    name: 'Calendar',
    icon: <CalendarIcon />,
    path: '/calendar',
  },
];

export const dropdownData = {
  Invoices: [
    { path: '/invoice-list', label: 'Invoice List' },
    { path: '/invoice-templates', label: 'Invoice Templates' },
    { path: '/invoice-preview', label: 'Invoice Preview' },
    { 
      label: 'Create Invoice', // This will act as a parent dropdown for the nested options
      nestedDropdown: [
        { path: '/create-performa-invoice', label: 'Performa Invoice' },
        { path: '/create-tax-invoice', label: 'Tax Invoice' },
        { path: '/create-quote', label: 'Quote' },
      ]
    }
  ],
  Scrumboard: [
    { path: '/all-boards', label: 'All Boards' },
    { path: '/project-kanban', label: 'Project Kanban' },
    { path: '/pipeline-kanban', label: 'Pipeline Kanban' },
  ],
  Contacts: [
    { path: '/context-list', label: 'Contact List' },
    { path: '/context-cards', label: 'Contact Cards' },
    { path: '/edit-context', label: 'Edit Contact' },
  ],
  Todo: [
    { path: '/tasklist', label: 'Tasklist' },
    { path: '/gantt', label: 'Gantt' },
  ],
};
export const invoicesData = [
  {
    id: 11201,
    date: '01 Feb, 2020',
    recipient: 'Alice Johnson',
    email: 'alice@company.com',
    status: 'Unpaid',
    amount: '$1,200.00',
    actions: 'Send',
  },
  {
    id: 11202,
    date: '05 Mar, 2020',
    recipient: 'Bob Smith',
    email: 'bob.smith@domain.com',
    status: 'Paid',
    amount: '$3,450.00',
    actions: 'View',
  },
  {
    id: 11203,
    date: '10 Apr, 2020',
    recipient: 'Carol White',
    email: 'carolw@business.net',
    status: 'Draft',
    amount: '$850.00',
    actions: 'Edit',
  },
  {
    id: 11204,
    date: '15 May, 2020',
    recipient: 'David Brown',
    email: 'david.brown@sample.org',
    status: 'Paid',
    amount: '$5,000.00',
    actions: 'View',
  },
  {
    id: 11205,
    date: '20 Jun, 2020',
    recipient: 'Eve Black',
    email: 'eve.black@provider.com',
    status: 'Unpaid',
    amount: '$2,750.00',
    actions: 'Send',
  },
  {
    id: 11206,
    date: '25 Jul, 2020',
    recipient: 'Frank Green',
    email: 'frankg@enterprise.biz',
    status: 'Unpaid',
    amount: '$1,990.00',
    actions: 'Send',
  },
  {
    id: 11207,
    date: '30 Aug, 2020',
    recipient: 'Grace Kelly',
    email: 'grace.kelly@webmail.co',
    status: 'Paid',
    amount: '$3,125.00',
    actions: 'View',
  },
  {
    id: 11208,
    date: '05 Sep, 2020',
    recipient: 'Henry Ford',
    email: 'henryf@innovation.tech',
    status: 'Draft',
    amount: '$4,500.00',
    actions: 'Edit',
  },
  {
    id: 11209,
    date: '10 Oct, 2020',
    recipient: 'Ivy Blue',
    email: 'ivy.blue@creative.org',
    status: 'Paid',
    amount: '$700.00',
    actions: 'View',
  },
  {
    id: 11210,
    date: '15 Nov, 2020',
    recipient: 'Jack Hill',
    email: 'jack.hill@workplace.com',
    status: 'Unpaid',
    amount: '$1,450.00',
    actions: 'Send',
  },
  {
    id: 11211,
    date: '20 Dec, 2020',
    recipient: 'Karen Adams',
    email: 'karen.adams@finance.gov',
    status: 'Paid',
    amount: '$6,800.00',
    actions: 'View',
  },
  {
    id: 11212,
    date: '25 Jan, 2021',
    recipient: 'Leo Clark',
    email: 'leo.clark@network.biz',
    status: 'Draft',
    amount: '$3,320.00',
    actions: 'Edit',
  },
  {
    id: 11213,
    date: '01 Feb, 2021',
    recipient: 'Mia Lee',
    email: 'mia.lee@media.net',
    status: 'Unpaid',
    amount: '$4,700.00',
    actions: 'Send',
  },
  {
    id: 11214,
    date: '05 Mar, 2021',
    recipient: 'Noah Walker',
    email: 'noah.walker@home.org',
    status: 'Paid',
    amount: '$1,950.00',
    actions: 'View',
  },
  {
    id: 11215,
    date: '10 Apr, 2021',
    recipient: 'Olivia Davis',
    email: 'olivia.davis@startup.io',
    status: 'Draft',
    amount: '$2,600.00',
    actions: 'Edit',
  },
  {
    id: 11216,
    date: '15 May, 2021',
    recipient: 'Paul Taylor',
    email: 'paul.taylor@project.co',
    status: 'Unpaid',
    amount: '$8,000.00',
    actions: 'Send',
  },
  {
    id: 11217,
    date: '20 Jun, 2021',
    recipient: 'Quincy Morris',
    email: 'quincy.morris@platform.biz',
    status: 'Paid',
    amount: '$2,900.00',
    actions: 'View',
  },
  {
    id: 11218,
    date: '25 Jul, 2021',
    recipient: 'Rachel Moore',
    email: 'rachel.moore@work.org',
    status: 'Draft',
    amount: '$1,750.00',
    actions: 'Edit',
  },
  {
    id: 11219,
    date: '30 Aug, 2021',
    recipient: 'Sam Wilson',
    email: 'sam.wilson@team.io',
    status: 'Unpaid',
    amount: '$5,600.00',
    actions: 'Send',
  },
  {
    id: 11220,
    date: '05 Sep, 2021',
    recipient: 'Tina Scott',
    email: 'tina.scott@design.net',
    status: 'Paid',
    amount: '$3,000.00',
    actions: 'View',
  },
  {
    id: 11221,
    date: '10 Oct, 2021',
    recipient: 'Uma Evans',
    email: 'uma.evans@school.edu',
    status: 'Draft',
    amount: '$2,150.00',
    actions: 'Edit',
  },
  {
    id: 11222,
    date: '15 Nov, 2021',
    recipient: 'Victor Allen',
    email: 'victor.allen@travel.com',
    status: 'Unpaid',
    amount: '$7,250.00',
    actions: 'Send',
  },
  {
    id: 11223,
    date: '20 Dec, 2021',
    recipient: 'Wendy Harris',
    email: 'wendy.harris@social.org',
    status: 'Paid',
    amount: '$4,400.00',
    actions: 'View',
  },
  {
    id: 11224,
    date: '25 Jan, 2022',
    recipient: 'Xander Lewis',
    email: 'xander.lewis@market.biz',
    status: 'Unpaid',
    amount: '$5,850.00',
    actions: 'Send',
  },
  {
    id: 11225,
    date: '01 Feb, 2022',
    recipient: 'Yvonne Baker',
    email: 'yvonne.baker@tech.co',
    status: 'Draft',
    amount: '$2,950.00',
    actions: 'Edit',
  },
  {
    id: 11226,
    date: '05 Mar, 2022',
    recipient: 'Zane Carter',
    email: 'zane.carter@service.net',
    status: 'Paid',
    amount: '$6,300.00',
    actions: 'View',
  },
  {
    id: 11227,
    date: '10 Apr, 2022',
    recipient: 'Amy Ward',
    email: 'amy.ward@finance.gov',
    status: 'Unpaid',
    amount: '$3,100.00',
    actions: 'Send',
  },
  {
    id: 11228,
    date: '15 May, 2022',
    recipient: 'Brian Reed',
    email: 'brian.reed@creative.org',
    status: 'Draft',
    amount: '$2,400.00',
    actions: 'Edit',
  },
  {
    id: 11229,
    date: '20 Jun, 2022',
    recipient: 'Cathy Stone',
    email: 'cathy.stone@agency.com',
    status: 'Paid',
    amount: '$5,200.00',
    actions: 'View',
  },
  {
    id: 11230,
    date: '25 Jul, 2022',
    recipient: 'Derek Hall',
    email: 'derek.hall@market.net',
    status: 'Unpaid',
    amount: '$4,800.00',
    actions: 'Send',
  },
  {
    id: 11230,
    date: '25 Jul, 2022',
    recipient: 'Jaydeep ',
    email: 'jaydeep@market.net',
    status: 'Unpaid',
    amount: '$4,800.00',
    actions: 'Send',
  },
  {
    id: 11230,
    date: '25 Jul, 2022',
    recipient: 'harsh ',
    email: 'harsh@market.net',
    status: 'Paid',
    amount: '$4,800.00',
    actions: 'Send',
  },
];



export const headerLinks = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/dashboard',
  },
  {
    name: 'Chat',
    icon: <ChatIconTwo />,
    path: '/chat',
    dropdown: [
      { path: '/chats', label: 'Chats' },
      { path: '/groups', label: 'Groups' },
      { path: '/contacts', label: 'Contacts' },
      {
        label: 'Chat Popup',
        nestedDropdown: [
          { path: '/direct-message', label: 'Direct Message' },
          { path: '/chatbot', label: 'Chatbot' },
        ],
      },
    ],
  },
  {
    name: 'Email',
    icon: <EmailIcon />,
    path: '/email',
  },
  {
    name: 'Scrumboard',
    icon: <ScrumboardIcon />,
    path: '/scrumboard',
    dropdown: [
      { path: '/all-boards', label: 'All Boards' },
      { path: '/project-kanban', label: 'Project Kanban' },
      { path: '/pipeline-kanban', label: 'Pipeline Kanban' },
    ],
  },
  {
    name: 'Contacts',
    icon: <ContactsIcon />,
    path: '/contacts',
    dropdown: [
      { path: '/contact-list', label: 'Contact List' },
      { path: '/contact-cards', label: 'Contact Cards' },
      { path: '/edit-contact', label: 'Edit Contact' },
    ],
  },
  {
    name: 'Todo',
    icon: <TodoIcon />,
    path: '/todo',
    dropdown: [
      { path: '/tasklist', label: 'Tasklist' },
      { path: '/gantt', label: 'Gantt' },
    ],
  },
  {
    name: 'Invoices',
    icon: <InvoiceIcon />,
    path: '/invoices',
    dropdown: [
      { path: '/invoice-list', label: 'Invoice List' },
      { path: '/invoice-templates', label: 'Invoice Templates' },
      { path: '/create-invoice', label: 'Create Invoice' },
      { path: '/invoice-preview', label: 'Invoice Preview' },
    ],
  },
  {
    name: 'Calendar',
    icon: <CalendarIcon />,
    path: '/calendar',
  },
  {
    name: 'File Manager',
    icon: <FileManagerIcon />,
    path: '/file-manager',
    dropdown: [
      { path: '/list-view', label: 'List View' },
      { path: '/grid-view', label: 'Grid View' },
    ],
  },
  {
    name: 'Gallery',
    icon: <GalleryIcon />,
    path: '/gallery',
  },
  {
    name: '',
    icon: <ThreeDotsIcon />,
    dropdown: [
      {
        label: 'Blog',
        nestedDropdown: [
          { path: '/posts', label: 'Posts' },
          { path: '/edit-posts', label: 'Edit Posts' },
          { path: '/post-detail', label: 'Post Detail' },
        ],
      },
      {
        label: 'Integrations',
        nestedDropdown: [
          { path: '/all-apps', label: 'All Apps' },
          { path: '/app-detail', label: 'App Detail' },
          { path: '/integrations', label: 'Integrations' },
        ],
      },
      {
        label: 'Authentication',
        nestedDropdown: [
          {
            label: 'Log In',
            nestedDropdown: [
              { path: '/login', label: 'Login' },
              { path: '/login-simple', label: 'Login Simple' },
              { path: '/login-classic', label: 'Login Classic' },
            ],
          },
          {
            label: 'Sign Up',
            nestedDropdown: [
              { path: '/signup', label: 'Signup' },
              { path: '/signup-simple', label: 'Signup Simple' },
              { path: '/signup-classic', label: 'Signup Classic' },
            ],
          },
          { path: '/lock-screen', label: 'Lock Screen' },
          { path: '/reset-password', label: 'Reset Password' },
          { path: '/error-404', label: 'Error 404' },
          { path: '/error-503', label: 'Error 503' },
        ],
      },
      {
        label: 'Profile',
        nestedDropdown: [
          { path: '/profile', label: 'Profile' },
          { path: '/edit-profile', label: 'Edit Profile' },
          { path: '/account', label: 'Account' },
        ],
      },
      {
        path: 'https://nubra-ui.hencework.com/',
        label: 'Documentation',
        external: true,
      },
      {
        path: 'https://nubra-ui.hencework.com/avatar.html',
        label: 'Components',
        external: true,
      },
    ],
  },
];










export const colorOptions = [
  { name: 'Light Blue', color: 'lightblue', icon: 'full-circle' },
  { name: 'Light Green', color: 'lightgreen', icon: 'full-circle' },
  { name: 'Light Coral', color: 'lightcoral', icon: 'full-circle' },
  { name: 'Light Gray', color: 'lightgray', icon: 'full-circle' },
  { name: 'Light Yellow', color: 'lightyellow', icon: 'full-circle' },
  { name: 'Light Pink', color: 'lightpink', icon: 'full-circle' },
  { name: 'Light Purple', color: 'thistle', icon: 'full-circle' },
  { name: 'Light Cyan', color: 'lightcyan', icon: 'full-circle' },
  { name: 'Light Peach', color: 'peachpuff', icon: 'full-circle' },
  { name: 'Light Lavender', color: 'lavender', icon: 'full-circle' },
  { name: 'Light Salmon', color: 'lightsalmon', icon: 'full-circle' },
  { name: 'Light Steel Blue', color: 'lightsteelblue', icon: 'full-circle' },
  { name: 'Light Sea Green', color: 'lightseagreen', icon: 'full-circle' },
  { name: 'Light Goldenrod Yellow', color: 'lightgoldenrodyellow', icon: 'full-circle' },
  { name: 'Light Mint', color: 'mintcream', icon: 'full-circle' },
  { name: 'Light Orchid', color: 'thistle', icon: 'full-circle' },
  { name: 'Light Sky Blue', color: 'lightskyblue', icon: 'full-circle' },
  { name: 'Light Rosy Brown', color: 'lightrosybrown', icon: 'full-circle' },
  { name: 'Light Slate Gray', color: 'lightslategray', icon: 'full-circle' },
  { name: 'Light Golden', color: 'lightgoldenrod', icon: 'full-circle' },
  { name: 'Alice Blue', color: 'aliceblue', icon: 'full-circle' },
  { name: 'Antique White', color: 'antiquewhite', icon: 'full-circle' },
  { name: 'Aqua', color: 'aqua', icon: 'full-circle' },
  { name: 'Aquamarine', color: 'aquamarine', icon: 'full-circle' },
  { name: 'Azure', color: 'azure', icon: 'full-circle' },
  { name: 'Beige', color: 'beige', icon: 'full-circle' },
  { name: 'Bisque', color: 'bisque', icon: 'full-circle' },
  { name: 'Black', color: 'black', icon: 'full-circle' },
  { name: 'Blanched Almond', color: 'blanchedalmond', icon: 'full-circle' },
  { name: 'Blue', color: 'blue', icon: 'full-circle' },
  { name: 'Blue Violet', color: 'blueviolet', icon: 'full-circle' },
  { name: 'Brown', color: 'brown', icon: 'full-circle' },
  { name: 'Burly Wood', color: 'burlywood', icon: 'full-circle' },
  { name: 'Cadet Blue', color: 'cadetblue', icon: 'full-circle' },
  { name: 'Chartreuse', color: 'chartreuse', icon: 'full-circle' },
  { name: 'Chocolate', color: 'chocolate', icon: 'full-circle' },
  { name: 'Coral', color: 'coral', icon: 'full-circle' },
  { name: 'Cornflower Blue', color: 'cornflowerblue', icon: 'full-circle' },
  { name: 'Cornsilk', color: 'cornsilk', icon: 'full-circle' },
  { name: 'Crimson', color: 'crimson', icon: 'full-circle' },
  { name: 'Cyan', color: 'cyan', icon: 'full-circle' },
  { name: 'Dark Blue', color: 'darkblue', icon: 'full-circle' },
  { name: 'Dark Cyan', color: 'darkcyan', icon: 'full-circle' },
  { name: 'Dark Goldenrod', color: 'darkgoldenrod', icon: 'full-circle' },
  { name: 'Dark Gray', color: 'darkgray', icon: 'full-circle' },
  { name: 'Dark Green', color: 'darkgreen', icon: 'full-circle' },
  { name: 'Dark Khaki', color: 'darkkhaki', icon: 'full-circle' },
  { name: 'Dark Magenta', color: 'darkmagenta', icon: 'full-circle' },
  { name: 'Dark Olive Green', color: 'darkolivegreen', icon: 'full-circle' },
  { name: 'Dark Orange', color: 'darkorange', icon: 'full-circle' },
  { name: 'Dark Orchid', color: 'darkorchid', icon: 'full-circle' },
  { name: 'Dark Red', color: 'darkred', icon: 'full-circle' },
  { name: 'Dark Salmon', color: 'darksalmon', icon: 'full-circle' },
  { name: 'Dark Sea Green', color: 'darkseagreen', icon: 'full-circle' },
  { name: 'Dark Slate Blue', color: 'darkslateblue', icon: 'full-circle' },
  { name: 'Dark Slate Gray', color: 'darkslategray', icon: 'full-circle' },
  { name: 'Dark Turquoise', color: 'darkturquoise', icon: 'full-circle' },
  { name: 'Dark Violet', color: 'darkviolet', icon: 'full-circle' },
  { name: 'Deep Pink', color: 'deeppink', icon: 'full-circle' },
  { name: 'Deep Sky Blue', color: 'deepskyblue', icon: 'full-circle' },
  { name: 'Dim Gray', color: 'dimgray', icon: 'full-circle' },
  { name: 'Dodger Blue', color: 'dodgerblue', icon: 'full-circle' },
  { name: 'Firebrick', color: 'firebrick', icon: 'full-circle' },
  { name: 'Floral White', color: 'floralwhite', icon: 'full-circle' },
  { name: 'Forest Green', color: 'forestgreen', icon: 'full-circle' },
  { name: 'Fuchsia', color: 'fuchsia', icon: 'full-circle' },
  { name: 'Gainsboro', color: 'gainsboro', icon: 'full-circle' },
  { name: 'Ghost White', color: 'ghostwhite', icon: 'full-circle' },
  { name: 'Gold', color: 'gold', icon: 'full-circle' },
  { name: 'Goldenrod', color: 'goldenrod', icon: 'full-circle' },
  { name: 'Gray', color: 'gray', icon: 'full-circle' },
  { name: 'Green', color: 'green', icon: 'full-circle' },
  { name: 'Green Yellow', color: 'greenyellow', icon: 'full-circle' },
  { name: 'Honeydew', color: 'honeydew', icon: 'full-circle' },
  { name: 'Hot Pink', color: 'hotpink', icon: 'full-circle' },
  { name: 'Indian Red', color: 'indianred', icon: 'full-circle' },
  { name: 'Indigo', color: 'indigo', icon: 'full-circle' },
  { name: 'Ivory', color: 'ivory', icon: 'full-circle' },
  { name: 'Khaki', color: 'khaki', icon: 'full-circle' },
  { name: 'Lavender', color: 'lavender', icon: 'full-circle' },
  { name: 'Lavender Blush', color: 'lavenderblush', icon: 'full-circle' },
  { name: 'Lawn Green', color: 'lawngreen', icon: 'full-circle' },
  { name: 'Lemon Chiffon', color: 'lemonchiffon', icon: 'full-circle' },
  { name: 'Light Blue', color: 'lightblue', icon: 'full-circle' },
  { name: 'Light Coral', color: 'lightcoral', icon: 'full-circle' },
  { name: 'Light Cyan', color: 'lightcyan', icon: 'full-circle' },
  { name: 'Light Goldenrod Yellow', color: 'lightgoldenrodyellow', icon: 'full-circle' },
  { name: 'Light Gray', color: 'lightgray', icon: 'full-circle' },
  { name: 'Light Green', color: 'lightgreen', icon: 'full-circle' },
  { name: 'Light Pink', color: 'lightpink', icon: 'full-circle' },
  { name: 'Light Salmon', color: 'lightsalmon', icon: 'full-circle' },
  { name: 'Light Sea Green', color: 'lightseagreen', icon: 'full-circle' },
  { name: 'Light Sky Blue', color: 'lightskyblue', icon: 'full-circle' },
  { name: 'Light Slate Gray', color: 'lightslategray', icon: 'full-circle' },
  { name: 'Light Steel Blue', color: 'lightsteelblue', icon: 'full-circle' },
  { name: 'Light Yellow', color: 'lightyellow', icon: 'full-circle' },
  { name: 'Lime', color: 'lime', icon: 'full-circle' },
  { name: 'Lime Green', color: 'limegreen', icon: 'full-circle' },
  { name: 'Linen', color: 'linen', icon: 'full-circle' },
  { name: 'Magenta', color: 'magenta', icon: 'full-circle' },
  { name: 'Maroon', color: 'maroon', icon: 'full-circle' },
  { name: 'Medium Aquamarine', color: 'mediumaquamarine', icon: 'full-circle' },
  { name: 'Medium Blue', color: 'mediumblue', icon: 'full-circle' },
  { name: 'Medium Orchid', color: 'mediumorchid', icon: 'full-circle' },
  { name: 'Medium Purple', color: 'mediumpurple', icon: 'full-circle' },
  { name: 'Medium Sea Green', color: 'mediumseagreen', icon: 'full-circle' },
  { name: 'Medium Slate Blue', color: 'mediumslateblue', icon: 'full-circle' },
  { name: 'Medium Spring Green', color: 'mediumspringgreen', icon: 'full-circle' },
  { name: 'Medium Turquoise', color: 'mediumturquoise', icon: 'full-circle' },
  { name: 'Medium Violet Red', color: 'mediumvioletred', icon: 'full-circle' },
  { name: 'Midnight Blue', color: 'midnightblue', icon: 'full-circle' },
  { name: 'Mint Cream', color: 'mintcream', icon: 'full-circle' },
  { name: 'Misty Rose', color: 'mistyrose', icon: 'full-circle' },
  { name: 'Moccasin', color: 'moccasin', icon: 'full-circle' },
  { name: 'Navajo White', color: 'navajowhite', icon: 'full-circle' },
  { name: 'Navy', color: 'navy', icon: 'full-circle' },
  { name: 'Old Lace', color: 'oldlace', icon: 'full-circle' },
  { name: 'Olive', color: 'olive', icon: 'full-circle' },
  { name: 'Olive Drab', color: 'olivedrab', icon: 'full-circle' },
  { name: 'Orange', color: 'orange', icon: 'full-circle' },
  { name: 'Orange Red', color: 'orangered', icon: 'full-circle' },
  { name: 'Orchid', color: 'orchid', icon: 'full-circle' },
  { name: 'Pale Goldenrod', color: 'palegoldenrod', icon: 'full-circle' },
  { name: 'Pale Green', color: 'palegreen', icon: 'full-circle' },
  { name: 'Pale Turquoise', color: 'paleturquoise', icon: 'full-circle' },
  { name: 'Pale Violet Red', color: 'palevioletred', icon: 'full-circle' },
  { name: 'Papaya Whip', color: 'papayawhip', icon: 'full-circle' },
  { name: 'Peach Puff', color: 'peachpuff', icon: 'full-circle' },
  { name: 'Peru', color: 'peru', icon: 'full-circle' },
  { name: 'Pink', color: 'pink', icon: 'full-circle' },
  { name: 'Plum', color: 'plum', icon: 'full-circle' },
  { name: 'Powder Blue', color: 'powderblue', icon: 'full-circle' },
  { name: 'Purple', color: 'purple', icon: 'full-circle' },
  { name: 'Rebecca Purple', color: 'rebeccapurple', icon: 'full-circle' },
  { name: 'Red', color: 'red', icon: 'full-circle' },
  { name: 'Rosy Brown', color: 'rosybrown', icon: 'full-circle' },
  { name: 'Royal Blue', color: 'royalblue', icon: 'full-circle' },
  { name: 'Saddle Brown', color: 'saddlebrown', icon: 'full-circle' },
  { name: 'Salmon', color: 'salmon', icon: 'full-circle' },
  { name: 'Sandy Brown', color: 'sandybrown', icon: 'full-circle' },
  { name: 'Sea Green', color: 'seagreen', icon: 'full-circle' },
  { name: 'Sea Shell', color: 'seashell', icon: 'full-circle' },
  { name: 'Sienna', color: 'sienna', icon: 'full-circle' },
  { name: 'Silver', color: 'silver', icon: 'full-circle' },
  { name: 'Sky Blue', color: 'skyblue', icon: 'full-circle' },
  { name: 'Slate Blue', color: 'slateblue', icon: 'full-circle' },
  { name: 'Slate Gray', color: 'slategray', icon: 'full-circle' },
  { name: 'Snow', color: 'snow', icon: 'full-circle' },
  { name: 'Spring Green', color: 'springgreen', icon: 'full-circle' },
  { name: 'Steel Blue', color: 'steelblue', icon: 'full-circle' },
  { name: 'Tan', color: 'tan', icon: 'full-circle' },
  { name: 'Teal', color: 'teal', icon: 'full-circle' },
  { name: 'Thistle', color: 'thistle', icon: 'full-circle' },
  { name: 'Tomato', color: 'tomato', icon: 'full-circle' },
  { name: 'Turquoise', color: 'turquoise', icon: 'full-circle' },
  { name: 'Violet', color: 'violet', icon: 'full-circle' },
  { name: 'Wheat', color: 'wheat', icon: 'full-circle' },
  { name: 'White', color: 'white', icon: 'full-circle' },
  { name: 'White Smoke', color: 'whitesmoke', icon: 'full-circle' },
  { name: 'Yellow', color: 'yellow', icon: 'full-circle' },
  { name: 'Yellow Green', color: 'yellowgreen', icon: 'full-circle' }
];