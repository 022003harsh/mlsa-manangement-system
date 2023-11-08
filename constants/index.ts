import { SideNavItem } from '@/types/types';

export const SIDEBAR_MENU: SideNavItem[] = [
  {
    iconURL: "/icon/sidebar-open.svg",
    name: "Dashboard",
    path: "/",
    submenu: true,
    subMenuItems: [
      {
        iconURL: "/icon/user.svg",
        name: "Members Dashboard",
        path: "/members-dashboard",
      },
      {
        iconURL: "/icon/calendar-check-2.svg",
        name: "Events Dashboard",
        path: "/events-dashboard",
      },
    ],
  },
  {
    iconURL: "/icon/file-edit.svg",
    name: "Forms",
    path: "/",
    submenu: true,
    subMenuItems: [
      {
        iconURL: "/icon/file-edit.svg",
        name: "Member Form",
        path: "/members-dashboard",
      },
    ],
  },
  {
    iconURL: "/icon/file-edit.svg",
    name: "Settings",
    path: "/settings",
  }
];
