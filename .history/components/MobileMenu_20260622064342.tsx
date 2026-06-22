// components/MobileMenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  onSearchClick: () => void;
  onLoginClick: () => void;
}

const MobileMenu = ({
  isOpen,
  onClose,
  items,
  onSearchClick,
  onLoginClick,
}: MobileMenuProps) => {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-lg font-semibold text-gray-900">Menu</span>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
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
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {items.map((item) => {
                const isActive =
                  "href" in item
                    ? pathname === item.href
                    : item.dropdown?.some((child) => pathname === child.href);

                return (
                  <li key={item.id}>
                    {"dropdown" in item && item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleExpand(item.id)}
                          className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors font-medium ${
                            isActive
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                          }`}
                        >
                          <span>{item.label}</span>
                          <svg
                            className={`w-5 h-5 transition-transform ${
                              expandedItems.includes(item.id)
                                ? "rotate-180"
                                : ""
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

                        {/* Dropdown Children */}
                        {expandedItems.includes(item.id) && (
                          <ul className="ml-4 mt-1 space-y-1">
                            {item.dropdown.map((child) => (
                              <li key={child.id}>
                                <Link
                                  href={child.href}
                                  onClick={onClose}
                                  className={`block px-4 py-3 rounded-lg transition-colors ${
                                    pathname === child.href
                                      ? "text-blue-600 bg-blue-50"
                                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                                  }`}
                                >
                                  <div className="font-medium">
                                    {child.label}
                                  </div>
                                  {child.description && (
                                    <div className="text-sm text-gray-500 mt-0.5">
                                      {child.description}
                                    </div>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={"href" in item ? item.href || "/" : "#"}
                        onClick={onClose}
                        className={`block px-4 py-3 rounded-lg transition-colors font-medium ${
                          isActive
                            ? "text-blue-600 bg-blue-50"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="p-4 border-t space-y-3">
            <button
              onClick={() => {
                onSearchClick();
                onClose();
              }}
              className="w-full flex items-center justify-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              <svg
                className="w-5 h-5 mr-3"
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
              Search
            </button>

            <button
              onClick={() => {
                onLoginClick();
                onClose();
              }}
              className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors font-medium"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
