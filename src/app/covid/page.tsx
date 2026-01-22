import { Container, Heading, Text, Section, Box, Grid, Card } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

const models = [
    {
        id: "#FLMFS",
        name: "Fab Lab Moscow Face Shield",
        description: "Изделие состоит из прозрачного щитка (визора) и рамки. Визор из PET-A, рамка из HDPE. Устойчивы к дезинфицирующим растворам.",
        img: "/img/slider/flmfs.PNG",
        link: "https://3dprint.nih.gov/discover/3dpx-013306"
    },
    {
        id: "#PRUSA RC3",
        name: "Prusa RC3",
        description: "Популярная модель от Prusa. Рамка из PET-G или PLA методом 3D-печати. Максимальное расстояние от визора до лица.",
        img: "/img/slider/pfs.PNG",
        link: "https://www.prusa3d.com/covid19/"
    },
    {
        id: "#3DVFaceShield",
        name: "3DVerkstan Face Shield",
        description: "Шведская разработка. Минимальный вес, максимальный комфорт в ношении.",
        img: "/img/slider/3dv.PNG",
        link: "https://3dprint.nih.gov/discover/3dpx-013306"
    }
];

export default function CovidPage() {
    return (
        <Section size="3">
            <Container size="4">
                <Heading size="9" mb="4" align="center">COVID19</Heading>

                <Box className="glass-card" mb="8" style={{ border: '2px solid var(--red-9)' }}>
                    <Heading size="5" mb="3" color="red">Информация для медиков</Heading>
                    <Text as="p" size="4">
                        Вы московский медик? Вашей команде нужны защитные щитки? Пожалуйста, <Link href="https://forms.gle/qyubaKhCNwx3E4ZN9" target="_blank" style={{ color: 'var(--red-9)', fontWeight: 'bold' }}>заполните форму</Link>. Мы постараемся помочь.
                    </Text>
                </Box>

                <Box mb="8">
                    <Text as="p" size="3" mb="4">
                        В условиях глобального вызова мейкеры всего мира объединились для борьбы с пандемией. Распределенное цифровое производство заработало! Фаблабы, мейкерспейсы и отдельные энтузиасты наладили производство средств защиты (face shields, респираторы, маски) с помощью 3D-принтеров и лазерных станков.
                    </Text>
                    <Text as="p" size="3">
                        Фаблаб МИСиС не остался в стороне. Мы наладили выпуск защитных щитков и осуществляем их безвозмездную передачу московским врачам.
                    </Text>
                </Box>

                <Heading size="7" mb="6">Производимые модели</Heading>
                <Grid columns={{ initial: '1', md: '3' }} gap="6">
                    {models.map((model, idx) => (
                        <Card key={idx} size="2">
                            <Box position="relative" style={{ height: '200px', marginBottom: '1rem' }}>
                                <Image
                                    src={model.img}
                                    alt={model.name}
                                    fill
                                    style={{ objectFit: 'contain', background: '#f5f5f5', borderRadius: 'var(--border-radius)' }}
                                />
                            </Box>
                            <Heading size="4" mb="1" color="indigo">{model.id}</Heading>
                            <Heading size="3" mb="2">{model.name}</Heading>
                            <Text as="p" size="2" mb="4" color="gray">{model.description}</Text>
                            <Link href={model.link} target="_blank" style={{ fontSize: 'var(--font-size-2)', color: 'var(--accent-9)' }}>
                                Подробнее о модели
                            </Link>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </Section>
    );
}
