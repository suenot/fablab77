import { Container, Heading, Text, Section, Box, Grid, Card } from "@radix-ui/themes";
import Image from "next/image";

const programs = [
    {
        title: "Сделай и сыграй!",
        description: "Спроектируй, изготовь и собери собственную игру!",
        img: "/img/ctpo/3.jpg",
        points: [
            "Знакомство с историей настольных спортивных игр",
            "Проектирование функциональных конструкций в CAD",
            "Работа на фрезерном станке с ЧПУ",
            "Приобретение навыков безопасной работы с оборудованием"
        ]
    },
    {
        title: "Человек и машина",
        description: "Найди общий язык с роботом!",
        img: "/img/ctpo/4.jpg",
        points: [
            "Знакомство с устройством мобильного робота",
            "Разработка электронных устройств",
            "Изготовление печатных плат на фрезерном станке",
            "Изучение техники пайки SMD-компонентов"
        ]
    },
    {
        title: "Построй свой дом",
        description: "Объединитесь с друзьями и постройте свой уникальный дом!",
        img: "/img/ctpo/5.jpg",
        points: [
            "Проектирование в CAD системах",
            "Макетирование с применением лазерной резки",
            "Работа с тяжелыми деталями и безопасная эксплуатация оборудования",
            "Навыки командной работы"
        ]
    }
];

export default function CtpoPage() {
    return (
        <Section size="3">
            <Container size="4" px={{ initial: "4", sm: "6", md: "8" }}>
                <Heading size={{ initial: "7", md: "9" }} mb="4" align="center">ЦТПО</Heading>
                <Text as="p" size={{ initial: "3", md: "5" }} mb="8" align="center" color="gray" style={{ maxWidth: '800px', marginInline: 'auto' }}>
                    Центр технологической поддержки образования — это уникальная площадка дополнительного образования московских школьников и повышения квалификации педагогов.
                </Text>

                <Box position="relative" style={{ height: '400px', marginBottom: '4rem' }}>
                    <Image
                        src="/img/ctpo/1.jpg"
                        alt="CTPO"
                        fill
                        className="article-image"
                        style={{ objectFit: 'cover' }}
                    />
                </Box>

                <Heading size={{ initial: "5", md: "7" }} mb="6">Образовательные программы</Heading>
                <Grid columns={{ initial: '1', md: '3' }} gap="6">
                    {programs.map((prog, idx) => (
                        <Card key={idx} size="2">
                            <Box position="relative" style={{ height: '200px', marginBottom: '1rem' }}>
                                <Image
                                    src={prog.img}
                                    alt={prog.title}
                                    fill
                                    style={{ objectFit: 'cover', borderRadius: 'var(--border-radius)' }}
                                />
                            </Box>
                            <Heading size="4" mb="2">{prog.title}</Heading>
                            <Text as="p" size="2" mb="4" color="gray">{prog.description}</Text>
                            <ul style={{ paddingLeft: '1.2rem', color: 'var(--gray-11)', fontSize: 'var(--font-size-2)' }}>
                                {prog.points.map((p, pIdx) => (
                                    <li key={pIdx} style={{ marginBottom: '0.5rem' }}>{p}</li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </Grid>

                <Section size="2">
                    <Box className="glass-card">
                        <Heading size="5" mb="3">Как начать?</Heading>
                        <Text as="p" size="3">
                            Знакомство с ЦТПО можно начать с экскурсии. Чтобы поучаствовать в мероприятиях или образовательных программах, присылайте заявку на <a href="mailto:fablab@misis.ru" style={{ color: 'var(--accent-9)' }}>fablab@misis.ru</a>.
                        </Text>
                    </Box>
                </Section>
            </Container>
        </Section>
    );
}
