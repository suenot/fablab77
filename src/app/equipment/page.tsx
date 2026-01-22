"use client";

import { Container, Grid, Box, Heading, Text, Section, Card, Inset, Badge, Flex, Separator } from "@radix-ui/themes";
import Image from "next/image";

interface EquipmentItem {
    title: string;
    img: string;
    tag?: string;
    desc?: string;
}

// Categorized data for better presentation
const equipmentCategories: Record<string, EquipmentItem[]> = {
    "3D Печать": [
        { title: "3D принтер Dimension Elite", img: "/img/equipment-list/elite.jpg", tag: "FDM" },
        { title: "3D принтер Replicator", img: "/img/equipment-list/replicator.jpg", tag: "FDM" },
        { title: "3D принтер BFB Touch", img: "/img/equipment-list/3dtouch-3d-printer.jpg", tag: "FDM" },
        { title: "3D принтер Form1", img: "/img/equipment-list/form1.jpg", tag: "SLA" },
    ],
    "ЧПУ и Фрезеровка": [
        { title: "Большой фрезерный станок", img: "/img/equipment-list/flexicam-stealth.jpg", desc: "Flexicam Stealth" },
        { title: "Настольный фрезерный станок MTM Snap", img: "/img/equipment-list/mtm-snap.jpg" },
        { title: "Настольный фрезерный станок MTM BlackMamba", img: "/img/equipment-list/milling-machine.jpg" },
        { title: "Настольный фрезерный станок Roland MDX20", img: "/img/equipment-list/roland-mdx-20.jpg" },
        { title: "4-х осевой фрезерный станок Roland MDX 540", img: "/img/equipment-list/roland-mdx-540.jpg" },
    ],
    "Лазерная резка и Плоттеры": [
        { title: "Trotec Speedy 400 flex", img: "/img/equipment-list/trotec.jpg", tag: "Laser" },
        { title: "Epilog Mini24 40 Вт", img: "/img/equipment-list/epilog-mini.jpg", tag: "Laser" },
        { title: "LaserPRO Spirit 100 Вт", img: "/img/equipment-list/pro-spirit.jpg", tag: "Laser" },
        { title: "Рулонные плоттеры Rolland GX300/GX24", img: "/img/equipment-list/roland-gx-300.jpg", tag: "Plotter" },
    ],
    "Ручной инструмент и Электроника": [
        { title: "Паяльная станция", img: "/img/equipment-list/soldering-station.jpg" },
        { title: "Осциллограф", img: "/img/equipment-list/instek.jpg" },
        { title: "Ручная шлифовальная машина", img: "/img/equipment-list/dremel-3000.jpg" },
        { title: "Пресс для термопереноса", img: "/img/equipment-list/press-schulze.jpg" },
        { title: "Воздушный компрессор", img: "/img/equipment-list/fiac-dryer.jpg" },
        { title: "Сверлильный станок", img: "/img/equipment-list/drilling-machine.jpg" },
        { title: "Thermostatic basin", img: "/img/equipment-list/thermostatic-basin.jpg" },
        { title: "Точильный станок", img: "/img/equipment-list/grinder.jpg" },
    ]
};

export default function EquipmentPage() {
    return (
        <Section size="3" style={{ background: 'var(--gray-1)', minHeight: '100vh' }}>
            <Container size="4" px={{ initial: '5', md: '0' }}>
                <Heading size="9" mb="4" align="center">Парк Оборудования</Heading>
                <Text as="p" size="5" mb="9" align="center" color="gray" style={{ maxWidth: '800px', marginInline: 'auto' }}>
                    Современное цифровое производство в вашем распоряжении. От 3D-печати до прецизионной фрезеровки.
                </Text>

                <Flex direction="column" gap="9" pb="9">
                    {Object.entries(equipmentCategories).map(([category, items], index) => (
                        <Box key={index}>
                            <Flex align="center" gap="4" mb="5">
                                <Heading size="7" color="indigo">{category}</Heading>
                                <Separator size="4" style={{ flex: 1, height: '2px', background: 'var(--gray-a4)' }} />
                            </Flex>

                            <Grid columns={{ initial: '1', sm: '2', md: '3', lg: '4' }} gap="5">
                                {items.map((item, idx) => (
                                    <Card key={idx} size="2" className="equipment-card">
                                        <Inset clip="padding-box" side="top" pb="current">
                                            <div className="card-image-container">
                                                <Image
                                                    src={item.img}
                                                    alt={item.title}
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                />
                                                <div className="card-overlay" />
                                            </div>
                                        </Inset>
                                        <Flex direction="column" justify="between" height="100%">
                                            <Heading size="3" weight="bold" mb="1" style={{ lineHeight: 1.3 }}>
                                                {item.title}
                                            </Heading>

                                            {item.tag && (
                                                <Box mt="2">
                                                    <Badge color={item.tag === 'FDM' ? 'orange' : item.tag === 'SLA' ? 'cyan' : 'indigo'} variant="soft">
                                                        {item.tag}
                                                    </Badge>
                                                </Box>
                                            )}
                                        </Flex>
                                    </Card>
                                ))}
                            </Grid>
                        </Box>
                    ))}
                </Flex>
            </Container>

            <style jsx>{`
                :global(.equipment-card) {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    height: 100%;
                    border: 1px solid transparent;
                    overflow: hidden;
                    background: white;
                }

                :global(.equipment-card:hover) {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15);
                    border-color: var(--indigo-a4);
                }

                .card-image-container {
                    position: relative;
                    height: 200px;
                    overflow: hidden;
                }

                .card-image-container :global(img) {
                    transition: transform 0.5s ease;
                }

                :global(.equipment-card:hover) .card-image-container :global(img) {
                    transform: scale(1.1);
                }

                .card-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%);
                    opacity: 0;
                    transition: opacity 0.3s;
                }

                :global(.equipment-card:hover) .card-overlay {
                    opacity: 1;
                }
            `}</style>
        </Section>
    );
}
