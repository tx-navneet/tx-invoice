
import React from 'react';
import {
  CalendarIcon,
  ContactsIcon,
  DashboardIcon,
  InvoiceIcon,
  ScrumboardIcon,
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
    'Invoices': [
      { path: "/invoice-list", label: "Invoice List" },
      { path: "/invoice-templates", label: "Invoice Templates" },
      { path: "/create-invoice", label: "Create Invoice" },
      { path: "/invoice-preview", label: "Invoice Preview" }
    ],
    'Scrumboard': [
      { path: "/all-boards", label: "All Boards" },
      { path: "/project-kanban", label: "Project Kanban" },
      { path: "/pipeline-kanban", label: "Pipeline Kanban" }
    ],
    'Contacts': [
      { path: "/context-list", label: "Contact List" },
      { path: "/context-cards", label: "Contact Cards" },
      { path: "/edit-context", label: "Edit Contact" }
    ],
    'Todo': [
      { path: "/tasklist", label: "Tasklist" },
      { path: "/gantt", label: "Gantt" }
    ]
  };