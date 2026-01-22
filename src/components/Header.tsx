"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Box, Container, Flex, Text, Button } from '@radix-ui/themes';
import { usePathname } from 'next/navigation';

const menuItems = [
    { title: 'Оборудование', href: '/equipment' },
    { title: 'ЦТПО', href: '/ctpo' },
    { title: 'Магистратура', href: 'http://fablab.moscow/', external: true },
    { title: 'Контакты', href: '/contacts' },
    { title: 'События', href: '/events' },
];

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="header">
            <Container size="4" px={{ initial: '5', md: '0' }}>
                <Flex justify="between" align="center" py="3">
                    <Flex align="center" gap="4">
                        <Link href="/" className="logo-link">
                            <Flex align="center" gap="3">
                                <Image src="/img/logos/fablab.png" alt="Фаблаб Москва" width={48} height={48} style={{ objectFit: 'contain' }} />
                                <Text size="6" weight="bold" style={{ letterSpacing: '-0.02em', textTransform: 'uppercase', lineHeight: '1', color: 'var(--gray-12)' }}>Фаблаб</Text>
                            </Flex>
                        </Link>
                    </Flex>

                    {/* Desktop Nav */}
                    <NavigationMenu.Root className="NavigationMenuRoot" delayDuration={0}>
                        <NavigationMenu.List className="NavigationMenuList">
                            {menuItems.map((item, idx) => {
                                const isActive = item.href === pathname;

                                return (
                                    <NavigationMenu.Item key={idx}>
                                        <NavigationMenu.Link asChild>
                                            <Link
                                                href={item.href || '#'}
                                                className={`NavigationMenuLink ${isActive ? 'active' : ''}`}
                                                target={item.external ? "_blank" : undefined}
                                            >
                                                {item.title}
                                            </Link>
                                        </NavigationMenu.Link>
                                    </NavigationMenu.Item>
                                );
                            })}
                        </NavigationMenu.List>

                        <div className="ViewportPosition">
                            <NavigationMenu.Viewport className="NavigationMenuViewport" />
                        </div>
                    </NavigationMenu.Root>

                    <Flex gap="4" align="center" className="right-logos" display={{ initial: 'none', lg: 'flex' }}>
                        <a href="http://web.mit.edu/" target="_blank" className="partner-logo">
                            <Image src="/img/logos/mit.png" alt="MIT" width={44} height={22} style={{ objectFit: 'contain' }} />
                        </a>
                        <a href="http://www.misis.ru/" target="_blank" className="partner-logo">
                            <Image src="/img/logos/misis.png" alt="MISIS" width={90} height={30} style={{ objectFit: 'contain' }} />
                        </a>
                    </Flex>

                    {/* Mobile Menu */}
                    <Box display={{ initial: 'block', md: 'none' }}>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                                <Button variant="ghost" color="gray" highContrast>
                                    <HamburgerMenuIcon width="24" height="24" />
                                </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.Content className="mobile-dropdown-content" sideOffset={5} align="end">
                                    {menuItems.map((item, idx) => (
                                        <DropdownMenu.Item key={idx} className="dropdown-item" asChild>
                                            <Link href={item.href || '#'} className={`mobile-nav-link ${pathname === item.href ? 'active' : ''}`}>
                                                {item.title}
                                            </Link>
                                        </DropdownMenu.Item>
                                    ))}
                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>
                    </Box>
                </Flex>
            </Container>

            <style jsx>{`
        .header {
          border-bottom: 1px solid var(--gray-a4);
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: background 0.3s ease;
        }

        .logo-link {
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          align-items: center;
        }
        .logo-link:hover {
          transform: scale(1.05);
        }

        /* Navigation Menu styles */
        :global(.NavigationMenuRoot) {
          position: relative;
          display: flex;
          justify-content: center;
          width: 100%;
          z-index: 1001;
        }

        @media (max-width: 1024px) {
          :global(.NavigationMenuRoot) {
            display: none;
          }
        }

        :global(.NavigationMenuList) {
          display: flex;
          justify-content: center;
          background-color: var(--gray-a2);
          padding: 4px;
          border-radius: 10px;
          list-style: none;
          margin: 0;
          gap: 2px;
          border: 1px solid var(--gray-a3);
        }

        :global(.NavigationMenuTrigger),
        :global(.NavigationMenuLink) {
          padding: 8px 14px;
          outline: none;
          user-select: none;
          font-weight: 500;
          line-height: 1.2;
          border-radius: 6px;
          font-size: 14px;
          color: var(--gray-12);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
          border: none;
          cursor: pointer;
        }

        :global(.NavigationMenuTrigger:hover),
        :global(.NavigationMenuLink:hover) {
          color: var(--indigo-11);
          background-color: var(--indigo-a3);
        }

        :global(.NavigationMenuTrigger.active),
        :global(.NavigationMenuLink.active) {
          color: var(--indigo-11);
          background-color: var(--indigo-a2);
          box-shadow: inset 0 0 0 1px var(--indigo-a4);
        }

        :global(.CaretDown) {
          position: relative;
          color: var(--gray-10);
          top: 1px;
          transition: transform 250ms ease, color 0.2s;
        }
        :global([data-state='open'] > .CaretDown) {
          transform: rotate(-180deg);
          color: var(--indigo-11);
        }

        :global(.NavigationMenuContent) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          animation: scaleIn 200ms ease;
        }

        @keyframes scaleIn {
          from { transform: translateY(4px) scale(0.98); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }

        :global(.List) {
          display: flex;
          flex-direction: column;
          padding: 10px;
          margin: 0;
          list-style: none;
          min-width: 250px;
          gap: 2px;
        }

        :global(.ListItemLink) {
          display: block;
          padding: 10px 14px;
          text-decoration: none;
          border-radius: 8px;
          font-size: 14px;
          color: var(--gray-11);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 500;
        }

        :global(.ListItemLink:hover) {
          background: linear-gradient(135deg, var(--indigo-9) 0%, var(--indigo-10) 100%);
          color: white;
          padding-left: 18px;
        }

        :global(.ListItemLink.active) {
          color: var(--indigo-11);
          background-color: var(--indigo-a2);
          font-weight: 600;
        }

        :global(.NavigationMenuViewport) {
          position: relative;
          transform-origin: top center;
          width: var(--radix-navigation-menu-viewport-width);
          background-color: white;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 15px 40px -10px rgba(0,0,0,0.2), 0 10px 20px -15px rgba(0,0,0,0.1);
          height: var(--radix-navigation-menu-viewport-height);
          transition: width 300ms ease, height 300ms ease;
          border: 1px solid var(--gray-a4);
          background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(249,250,251,1) 100%);
        }

        :global(.ViewportPosition) {
          position: absolute;
          display: flex;
          justify-content: center;
          width: 100%;
          top: 100%;
          left: 0;
          perspective: 2000px;
          padding-top: 14px;
        }

        /* Partner Logos */
        .partner-logo {
          opacity: 0.8;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          align-items: center;
          filter: grayscale(0.2);
        }
        .partner-logo:hover {
          opacity: 1;
          transform: translateY(-2px) scale(1.05);
          filter: grayscale(0);
        }

        /* Mobile Dropdown */
        :global(.mobile-dropdown-content) {
          min-width: 290px;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 16px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid var(--gray-a4);
          max-height: 85vh;
          overflow-y: auto;
        }

        :global(.mobile-nav-link) {
          display: block;
          padding: 14px 18px;
          color: var(--gray-12);
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          transition: all 0.2s;
        }
        :global(.mobile-nav-link:hover) {
          background: var(--gray-a3);
        }

        :global(.mobile-sub-link) {
          display: block;
          padding: 10px 18px;
          color: var(--gray-11);
          text-decoration: none;
          font-size: 15px;
          border-radius: 8px;
          transition: all 0.3s;
          font-weight: 500;
        }
        :global(.mobile-sub-link:hover) {
          background: var(--indigo-a3);
          color: var(--indigo-11);
          padding-left: 24px;
        }

        :global(.mobile-nav-link.active),
        :global(.mobile-sub-link.active) {
          color: var(--indigo-11);
          background: var(--indigo-a2);
        }
      `}</style>
        </header>
    );
};

export default Header;
