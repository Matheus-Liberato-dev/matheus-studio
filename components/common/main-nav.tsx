"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { MobileNav } from "@/components/common/mobile-nav";
import { Icons } from "@/components/common/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

interface NavItem {
  title: string;
  href: string;
  icon?: keyof typeof Icons;
  external?: boolean;
  disabled?: boolean;
}

interface MainNavProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <div className="flex items-center gap-8">
      {/* Wordmark */}
      <Link href="/" className="hidden items-center gap-2.5 md:flex" aria-label="Home">
        <Image
          src={profileImg}
          alt="Matheus Liberato"
          width={36}
          height={36}
          className="rounded-full object-cover flex-shrink-0"
          priority
        />
        <span
          className="italic text-[22px] leading-none tracking-tight font-heading"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {siteConfig.authorName}
        </span>
      </Link>

      {/* Desktop nav */}
      {items?.length ? (
        <nav className="hidden gap-7 md:flex items-center">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={cn(
                "font-sans text-[13px] font-medium tracking-[0.02em] transition-colors",
                item.href === pathname
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-accent-foreground",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}

      {/* Mobile trigger */}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        aria-label="Toggle menu"
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="font-sans text-sm font-medium">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
