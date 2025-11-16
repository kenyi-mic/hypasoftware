// components/Navigation.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { NavItem } from "@/types/navigation";

interface NavigationProps {
  items: NavItem[];
  isScrolled: boolean;
}

const Navigation = ({ items, isScrolled }: NavigationProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownToggle = (itemId: string) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  return (
    <nav className="flex items-center space-x-8" ref={dropdownRef}>
      {items.map((item) => (
        <div key={item.id} className="relative">
          {item.dropdown ? (
            <>
              <button
                onClick={() => handleDropdownToggle(item.id)}
                className={`flex items-center space-x-1 transition-colors ${
                  isScrolled
                    ? "text-white hover:text-blue-200"
                    : "text-white hover:text-blue-100"
                } font-medium`}
                aria-expanded={activeDropdown === item.id}
              >
                <span>{item.label}</span>
                {/* Arrow icon - rotates when dropdown is open */}
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

              {/* Dropdown Menu */}
              {activeDropdown === item.id && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="p-2">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.id}
                        href={dropdownItem.href}
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors font-medium"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.href || "#"}
              className={`transition-colors ${
                isScrolled
                  ? "text-white hover:text-blue-200"
                  : "text-white hover:text-blue-100"
              } font-medium`}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
