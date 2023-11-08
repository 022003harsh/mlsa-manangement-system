export type SideNavItem = {
    name: string;
    path: string;
    iconURL?: string;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
  };
  