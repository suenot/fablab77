"use client";

import React from 'react';
import { Container, Grid, Box, Text, Flex, Heading } from '@radix-ui/themes';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <Container size="4">
        <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="8" py="8">
          <Box>
            <Heading size="4" mb="4" className="footer-heading">Фаблаб</Heading>
            <ul className="footer-list">
              <li><Link href="/fablab">Что это?</Link></li>
              <li><Link href="/fablab/wherefrom">Откуда</Link></li>
              <li><Link href="/fablab/charter">Хартия</Link></li>
              <li><Link href="/fablab/network">Всемирная сеть</Link></li>
              <li><Link href="/fablab/team">Команда</Link></li>
              <li><Link href="/ctpo">ЦТПО</Link></li>
              <li><Link href="/events">События</Link></li>
              <li><Link href="/contacts">Контакты</Link></li>
            </ul>
          </Box>

          <Box>
            <Heading size="4" mb="4" className="footer-heading">Технологии</Heading>
            <ul className="footer-list">
              <li><Link href="/equipment">Оборудование</Link></li>
              <li><Link href="/creativity/2d">2D</Link></li>
              <li><Link href="/creativity/3d">3D</Link></li>
              <li><Link href="/creativity/2d-3d">Из 2D в 3D</Link></li>
              <li><Link href="/creativity/electronics">Электроника</Link></li>
              <li><Link href="/creativity/large">По крупному</Link></li>
            </ul>
          </Box>

          <Box>
            <Heading size="4" mb="4" className="footer-heading">Сообщество</Heading>
            <Flex gap="4" mb="6" wrap="wrap">
              <a href="https://www.opendesk.cc/open-making/makers/fablab77" target="_blank" className="social-icon">
                <Image src="/img/socials/opendesk.png" alt="OpenDesk" width={60} height={30} style={{ objectFit: 'contain' }} />
              </a>
              <a href="https://www.thingiverse.com/tag:Fablab77" target="_blank" className="social-icon">
                <Image src="/img/socials/thingiverse.png" alt="Thingiverse" width={100} height={30} style={{ objectFit: 'contain' }} />
              </a>
              <a href="http://www.instructables.com/tag/type-id/keyword-fablab77/" target="_blank" className="social-icon">
                <Image src="/img/socials/instructables.png" alt="Instructables" width={100} height={30} style={{ objectFit: 'contain' }} />
              </a>
            </Flex>

            <Box mb="6">
              <Text size="2" weight="bold" mb="3" as="div">Подписаться на рассылку:</Text>
              <div
                id="timepad_subscribe_wf"
                className="timepad-widget"
                data-timepad-widget="org_subscribe"
                data-timepad-org-tag="fablabmoscowmisis"
                data-timepad-org-id="101589"
              >
                <a href="https://fablabmoscowmisis.timepad.ru/org_subscribe/101589/" target="_blank" style={{ fontSize: '12px', color: 'var(--gray-9)' }}>
                  Подписаться через Timepad
                </a>
              </div>
              <script
                type="text/javascript"
                async
                defer
                src="https://timepad.ru/js/tpwf/loader.min.js"
                charSet="UTF-8"
              />
            </Box>

            <Text size="2" color="gray">
              &copy; 2012 — 2026 «ФабЛаб»<br />
              Информация данного Интернет-сайта защищена законом об авторских правах
            </Text>
          </Box>
        </Grid>
      </Container>

      <style jsx>{`
        .footer {
          background: var(--gray-2);
          border-top: 1px solid var(--gray-5);
          margin-top: auto;
        }
        .footer-heading {
          color: var(--gray-12);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-list li {
          margin-bottom: 8px;
        }
        .footer-list a {
          color: var(--gray-11);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }
        .footer-list a:hover {
          color: var(--accent-9);
        }
        .social-icon {
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .social-icon:hover {
          opacity: 1;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
