"use client";

import Link from "next/link";
import { useState } from "react";

type NavigationItem = {
  label: string;
  href: string;
};

type MobileNavigationProps = {
  items: readonly NavigationItem[];
};

export default function MobileNavigation({
  items,
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((current) => !current);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className="flex h-12 w-12 items-center justify-center border-2 border-brand-dark text-brand-dark lg:hidden"
        aria-label={isOpen ? "ปิดเมนู" : "เปิดเมนู"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 6L18 18" />
            <path d="M18 6L6 18" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 7H20" />
            <path d="M4 12H20" />
            <path d="M4 17H20" />
          </svg>
        )}
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-b-2 border-brand-dark bg-white lg:hidden"
        >
          <div className="mx-auto max-w-7xl px-6 py-5">
            <div className="flex flex-col">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-brand-dark/20 py-4 text-base font-semibold text-brand-dark transition-colors hover:text-brand-primary"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/quote"
                onClick={closeMenu}
                className="mt-5 bg-brand-accent px-5 py-4 text-center text-base font-bold text-brand-dark"
              >
                ขอใบเสนอราคา
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}