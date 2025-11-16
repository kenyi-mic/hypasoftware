// components/MobileMenu.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NavItem } from "@/types/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  onSearchClick: () => void;
}

const MobileMenu = ({
  isOpen,
  onClose,
  items,
  onSearchClick,
}: MobileMenuProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleDropdownToggle = (itemId: string) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50 bg-blue-900">
      {/* Close Button */}
      <div className="flex items-center justify-between p-4 border-b border-blue-800">
        <div className="w-6" /> {/* Spacer for alignment */}
        <button
          onClick={onClose}
          className="p-2 text-white hover:bg-blue-800 rounded-lg transition-colors"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="p-4">
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="border-b border-blue-800 last:border-b-0"
            >
              {item.dropdown ? (
                <div className="py-3">
                  <button
                    onClick={() => handleDropdownToggle(item.id)}
                    className="flex items-center justify-between w-full text-white font-semibold mb-2"
                  >
                    <span>{item.label}</span>
                    {/* Arrow icon for mobile */}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.id ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown items - only show when active */}
                  {activeDropdown === item.id && (
                    <div className="space-y-1 ml-4">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.id}
                          href={dropdownItem.href}
                          className="block py-2 text-blue-200 hover:text-white transition-colors"
                          onClick={onClose}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="block py-3 text-white font-semibold hover:text-blue-200 transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Search Button */}
        <button
          onClick={() => {
            onSearchClick();
            onClose();
          }}
          className="w-full mt-6 p-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span>Search</span>
        </button>
      </nav>
    </div>
  );
};

export default MobileMenu;
