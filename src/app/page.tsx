"use client";

import { Container, Grid, Box, Heading, Text, Flex, Button, Section, Card, Inset, Separator, Blockquote } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { creativityData } from "@/data/creativity";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section" id="home">
        <Image
          src="/img/slider/arriving2.png"
          alt="Fablab Moscow"
          fill
          className="hero-image"
          priority
        />
        <div className="hero-content">
          <Heading className="hero-title" size="9" weight="bold">ФАБЛАБ МОСКВА</Heading>
          <Text size="6" mb="6" style={{ maxWidth: '700px', fontWeight: 500, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            Первая в России лаборатория цифрового производства НИТУ «МИСиС»
          </Text>
          <Flex gap="4" wrap="wrap" justify="center">
            <Button size="4" className="hero-btn hero-btn-primary" asChild>
              <Link href="#about">Узнать больше</Link>
            </Button>
            <Button size="4" className="hero-btn hero-btn-secondary" asChild>
              <Link href="/equipment">Оборудование</Link>
            </Button>
          </Flex>
        </div>
      </section>

      {/* About Fablab / What Is It */}
      <Section size="3" id="about">
        <Container size="4" px={{ initial: '5', md: '0' }}>
          <Grid columns={{ initial: '1', md: '2' }} gap="8" align="center">
            <Box>
              <Heading size="8" mb="6" color="indigo">Что такое ФАБЛАБ</Heading>
              <Text as="p" size="4" mb="4" color="gray">
                Сегодня любой материальный продукт, изготовленный человеком, является результатом обработки природных или синтезированных материалов.
                В будущем появятся системы, объединяющие синтез материалов и придание им необходимых формы и структуры.
              </Text>
              <Text as="p" size="5" mb="4" weight="bold">
                «В будущем у нас появится возможность изготавливать все, что угодно, сегодня у нас есть возможность изготовить почти все, что угодно».
              </Text>
              <Text as="p" size="4" mb="4" color="gray">
                <strong>ФАБЛАБ</strong> — продукт цифровой революции: вслед за цифровой фотографией и цифровой музыкой приходит цифровое производство.
                Управляемые компьютерными программами «умные» машины обрабатывают разнообразные материалы, придавая им необходимую форму.
              </Text>
            </Box>
            <Box position="relative" style={{ height: '400px', borderRadius: 'var(--border-radius)', overflow: 'hidden' }}>
              <Image
                src="/img/fablab/replicator.jpg"
                alt="Replicator"
                fill
                className="article-image"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        </Container>
      </Section>

      {/* Origin / Where From */}
      <Section size="3" style={{ background: 'var(--gray-2)' }} id="origin">
        <Container size="4" px={{ initial: '5', md: '0' }}>
          <Grid columns={{ initial: '1', md: '2' }} gap="8" align="center">
            <Box position="relative" style={{ height: '450px', order: 1 }}>
              <Image
                src="/img/fablab/neil-gershenfeld.jpg"
                alt="Neil Gershenfeld"
                fill
                className="article-image"
                style={{ objectFit: 'cover' }}
              />
            </Box>
            <Box style={{ order: 0 }}>
              <Heading size="8" mb="6" color="indigo">Откуда это</Heading>
              <Text as="p" size="4" mb="4">
                Рожденный как университетский проект в Центре битов и атомов Массачусетского технологического института (MIT), ФАБЛАБ превратился в глобальную сеть лабораторий цифрового производства по всему миру.
              </Text>
              <Text as="p" size="4" mb="6">
                Основатель программы — профессор <strong>Нил Гершенфельд (Neil Gershenfeld)</strong>, автор курса «Как сделать (почти) все, что угодно» и книги FAB.
              </Text>

              <Box p="4" style={{ background: 'rgba(255,255,255,0.5)', borderRadius: '12px', borderLeft: '4px solid var(--indigo-9)' }}>
                <Text as="p" size="3" style={{ fontStyle: 'italic' }}>
                  «В мире уже произошла цифровая революция... Сегодня же пришла пора говорить о революции в области цифрового производства. Мы хотели показать, как тесно мир цифровых технологий связан с физическим материальным миром.»
                </Text>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Section>

      {/* Technologies Section */}
      <Section size="3" id="technologies">
        <Container size="4" px={{ initial: '5', md: '0' }}>
          <Heading size="9" mb="2" align="center">Технологии</Heading>
          <Text size="4" color="gray" align="center" mb="8" style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Набор технологических и интеллектуальных ресурсов для превращения идей в функциональные прототипы.
          </Text>

          <Flex direction="column" gap="9">
            {Object.entries(creativityData).map(([key, data], index) => (
              <Box key={key} id={key}>
                <Heading size="7" mb="6" color="indigo" align={index % 2 === 0 ? 'left' : 'right'}>
                  {data.title}
                </Heading>
                {data.sections.map((section, sIndex) => (
                  <Grid key={sIndex} columns={{ initial: '1', md: '2' }} gap="6" mb="6" align="center">
                    <Box style={{ order: index % 2 === 0 ? 0 : 1 }}>
                      {section.title && <Heading size="5" mb="3">{section.title}</Heading>}
                      <Text as="p" size="4" color="gray" style={{ lineHeight: 1.6 }}>{section.text}</Text>
                    </Box>
                    <Box style={{ order: index % 2 === 0 ? 1 : 0 }}>
                      <Card size="2">
                        <Inset clip="padding-box" side="top" pb="current">
                          <div style={{ position: 'relative', height: '300px' }}>
                            <Image
                              src={section.img}
                              alt={section.caption || data.title}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                        </Inset>
                        {section.caption && (
                          <Text size="2" color="gray" align="center" style={{ display: 'block', fontStyle: 'italic' }}>
                            {section.caption}
                          </Text>
                        )}
                      </Card>
                    </Box>
                  </Grid>
                ))}
                {index < Object.entries(creativityData).length - 1 && <Separator size="4" my="8" />}
              </Box>
            ))}
          </Flex>
        </Container>
      </Section>

      {/* Team Section */}
      <Section size="3" id="team" style={{ background: 'var(--gray-2)' }}>
        <Container size="3" px={{ initial: '5', md: '0' }}>
          <Heading size="8" mb="6" align="center">Наша команда</Heading>
          <Grid columns={{ initial: '1', md: '2' }} gap="4">
            {[
              { name: "Владимир Евгеньевич Кузнецов", role: "Директор учебно-производственного центра \"ARTCAD\"", email: "fablab@misis.ru", phone: "+7 (495) 955-01-20" },
              { name: "Вакулик Анна", role: "Заместитель директора", email: "anna.vakulik@gmail.com", phone: "+7 (915) 077-04-84" },
              { name: "Барменкова Ярослава Андреевна", role: "Инженер-дизайнер", email: "fablab@misis.ru" },
              { name: "Михалин Михаил Викторович", role: "Инженер", email: "fablab@misis.ru" },
              { name: "Егоров Филипп Владимирович", role: "Техник", email: "fablab@misis.ru" },
            ].map((member, idx) => (
              <Card key={idx} size="2">
                <Flex gap="3" align="center">
                  <Box style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--indigo-9)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    {member.name[0]}
                  </Box>
                  <Box>
                    <Text weight="bold" size="3" as="div">{member.name}</Text>
                    <Text size="2" color="gray" as="div">{member.role}</Text>
                  </Box>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Charter & Network */}
      <Section size="3" style={{ background: 'var(--indigo-2)' }}>
        <Container size="4" px={{ initial: '5', md: '0' }}>
          <Grid columns={{ initial: '1', md: '2' }} gap="9">
            <Box id="charter" style={{ scrollMarginTop: '100px' }}>
              <Heading size="8" mb="6">Хартия Fablab</Heading>
              <Card size="3" style={{ background: 'white' }}>
                <Flex direction="column" gap="4">
                  <Box>
                    <Heading size="4" mb="1" color="indigo">Миссия</Heading>
                    <Text size="3">Позволить каждому создавать всё, что он пожелает, при помощи современных цифровых технологий.</Text>
                  </Box>
                  <Box>
                    <Heading size="4" mb="1" color="indigo">Ответственность</Heading>
                    <Text size="3">Безопасность, чистота и поддержка оборудования в рабочем состоянии.</Text>
                  </Box>
                  <Box>
                    <Heading size="4" mb="1" color="indigo">Конфиденциальность</Heading>
                    <Text size="3">Разработки могут быть коммерциализированы, но процессы должны оставаться общедоступными.</Text>
                  </Box>
                  <Box mt="2">
                    <Link href="/fablab/charter">
                      <Button variant="ghost" >Читать полный текст Хартии →</Button>
                    </Link>
                  </Box>
                </Flex>
              </Card>
            </Box>

            <Box id="network" style={{ scrollMarginTop: '100px' }}>
              <Heading size="8" mb="6">Всемирная сеть</Heading>
              <Text as="p" size="4" mb="4">
                В мире уже больше сотни лабораторий цифрового производства Fab Lab. Каждая лаборатория уникальна, но объединена общей идеологией.
              </Text>
              <Grid columns="2" gap="2" mb="4">
                <Link href="http://fablab.spbstu.ru/" target="_blank" className="hover-underline"><Text size="3">Санкт-Петербург</Text></Link>
                <Link href="http://fablabbcn.org/" target="_blank" className="hover-underline"><Text size="3">Барселона (IAAC)</Text></Link>
                <Link href="http://fablab.waag.org/" target="_blank" className="hover-underline"><Text size="3">Амстердам</Text></Link>
                <Link href="http://fab.cba.mit.edu/" target="_blank" className="hover-underline"><Text size="3">MIT (Boston)</Text></Link>
              </Grid>
              <Button variant="outline" asChild>
                <Link href="https://www.fablabs.io/labs" target="_blank">Смотреть карту лабораторий</Link>
              </Button>
            </Box>
          </Grid>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section size="4" style={{
        background: 'linear-gradient(135deg, #4338ca 0%, #312e81 100%)', // Indigo to Dark Indigo
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Abstract background decorative element */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <Container size="3" style={{ position: 'relative', zIndex: 1 }} px={{ initial: '5', md: '0' }}>
          <Flex direction="column" align="center" gap="6" style={{ textAlign: 'center' }}>
            <Heading size="9" style={{ color: 'white', letterSpacing: '-0.02em', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
              Хотите стать мейкером?
            </Heading>
            <Text as="p" size="6" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '700px', lineHeight: 1.5 }}>
              Мир идей и решений Fab Lab безграничен! Приходите к нам и воплощайте свои проекты в жизнь.
            </Text>
            <Button size="4" className="hero-btn" style={{
              background: 'white',
              color: '#4338ca',
              border: 'none',
              marginTop: '1rem',
              fontWeight: 'bold'
            }} asChild>
              <Link href="/contacts">Связаться с нами</Link>
            </Button>
          </Flex>
        </Container>
      </Section>
    </div>
  );
}
