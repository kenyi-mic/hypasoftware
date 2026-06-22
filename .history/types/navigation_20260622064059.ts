// types/navigation.ts
export interface BaseNavItem {
  id: string;
  label: string;
}

export interface NavItemWithHref extends BaseNavItem {
  href: string;
  dropdown?: never; // Explicitly undefined
}

export interface NavItemWithDropdown extends BaseNavItem {
  href?: never; // Explicitly undefined
  dropdown: DropdownItem[];
}

export type NavItem = NavItemWithHref | NavItemWithDropdown;

export interface DropdownItem {
  id: string;
  label: string;
  href: string;
  description?: string;
}
