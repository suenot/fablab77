"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon, HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { Box, Container, Flex, Text, Button } from '@radix-ui/themes';
import { usePathname } from 'next/navigation';

const menuItems = [
    { title: 'Оборудование', href: '/equipment' },
    { title: 'ЦТПО', href: '/ctpo' },
    { title: 'Магистратура', href: 'http://fablab.moscow/', external: true },
    { title: 'Контакты', href: '/contacts' },
    { title: 'События', href: '/events' },
];

const mobileMenuItems = [
    { title: 'Главная', href: '/' },
    ...menuItems,
];

const Header = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    // Prevent body scroll when menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <header className="header">
                <Container size="4" px={{ initial: '5', md: '0' }}>
                    <Flex justify="between" align="center" py="3">
                        <Flex align="center" gap="4" style={{ zIndex: 1100, position: 'relative' }}>
                            <Link href="/" className="logo-link" onClick={() => setIsOpen(false)}>
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

                        {/* Mobile Menu Toggle */}
                        <Box display={{ initial: 'block', md: 'none' }} style={{ zIndex: 1100, position: 'relative' }}>
                            <Button
                                variant="ghost"
                                color="gray"
                                highContrast
                                onClick={toggleMenu}
                                style={{ padding: 0, width: 44, height: 44 }}
                            >
                                {isOpen ? <Cross1Icon width="28" height="28" /> : <HamburgerMenuIcon width="28" height="28" />}
                            </Button>
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
              z-index: 1100;
              transition: background 0.3s ease;
            }
    
            .logo-link {
              transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
              display: flex;
              align-items: center;
              text-decoration: none;
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
    
            :global(.NavigationMenuLink.active) {
              color: var(--indigo-11);
              background-color: var(--indigo-a2);
              box-shadow: inset 0 0 0 1px var(--indigo-a4);
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
          `}</style>
            </header>

            {/* Mobile Full Screen Menu Overlay */}
            <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    <Flex direction="column" align="center" justify="center" gap="6" style={{ height: '100%' }}>
                        {mobileMenuItems.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.href || '#'}
                                className={`mobile-menu-link ${pathname === item.href ? 'active' : ''}`}
                                onClick={() => setIsOpen(false)}
                                target={item.external ? "_blank" : undefined}
                            >
                                {item.title}
                            </Link>
                        ))}
                        <Flex gap="6" mt="8" align="center">
                            <a href="http://web.mit.edu/" target="_blank" style={{ opacity: 0.7 }}>
                                <Image src="/img/logos/mit.png" alt="MIT" width={60} height={30} style={{ objectFit: 'contain' }} />
                            </a>
                            <a href="http://www.misis.ru/" target="_blank" style={{ opacity: 0.7 }}>
                                <Image src="/img/logos/misis.png" alt="MISIS" width={100} height={40} style={{ objectFit: 'contain' }} />
                            </a>
                        </Flex>
                    </Flex>
                </div>
                <style jsx>{`
                    .mobile-menu-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100dvh;
                        background: rgba(255, 255, 255, 0.98);
                        backdrop-filter: blur(20px); 
                        z-index: 1050;
                        opacity: 0;
                        pointer-events: none;
                        transition: opacity 0.3s ease;
                        display: flex;
                        flex-direction: column;
                        padding-top: 80px; 
                    }
                    .mobile-menu-overlay.open {
                        opacity: 1;
                        pointer-events: all;
                    }
                    .mobile-menu-content {
                        flex: 1;
                        overflow-y: auto;
                        padding-bottom: 40px;
                    }
                    .mobile-menu-link {
                        font-family: var(--font-geist-sans), sans-serif;
                        font-size: 32px;
                        font-weight: 700;
                        color: var(--gray-12);
                        text-decoration: none;
                        letter-spacing: -0.02em;
                        transition: all 0.2s ease;
                        position: relative;
                    }
                    .mobile-menu-link:hover, .mobile-menu-link.active {
                        color: var(--indigo-10);
                        transform: scale(1.05);
                    }
                `}</style>
            </div>
        </>
    );
};

export default Header;
