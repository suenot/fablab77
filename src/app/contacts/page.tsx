import { Container, Grid, Box, Heading, Text, Section, Flex, Card } from "@radix-ui/themes";
import Link from "next/link";
import { EnvelopeClosedIcon, MobileIcon } from "@radix-ui/react-icons";
import { MapPin } from "lucide-react";

export default function ContactsPage() {
    return (
        <Section size="3">
            <Container size="4" px={{ initial: "4", sm: "6", md: "8" }}>
                <Heading size={{ initial: "7", md: "9" }} mb="6" align="center">Контакты</Heading>

                <Grid columns={{ initial: '1', md: '2' }} gap="8">
                    <Box>
                        <Card size="3" variant="surface">
                            <Heading size="5" mb="4">Адрес и местоположение</Heading>
                            <Text as="p" size="4" mb="6">
                                Мы находимся на территории Национального исследовательского технологического университета "МИСиС":
                            </Text>

                            <Flex direction="column" gap="4">
                                <Flex align="center" gap="3">
                                    <MapPin size={20} color="var(--accent-9)" />
                                    <Text size="3">г. Москва, м. Октябрьская, Крымский вал, д. 3</Text>
                                </Flex>

                                <Flex align="center" gap="3">
                                    <EnvelopeClosedIcon width="20" height="20" color="var(--accent-9)" />
                                    <Link href="mailto:fablab@misis.ru" style={{ color: 'var(--accent-9)' }}>
                                        fablab@misis.ru
                                    </Link>
                                </Flex>

                                <Flex align="center" gap="3">
                                    <MobileIcon width="20" height="20" color="var(--accent-9)" />
                                    <Text size="3">+7 (915) 285-13-77</Text>
                                </Flex>
                            </Flex>
                        </Card>

                        <Box mt="8">
                            <Heading size="5" mb="4">Доступ</Heading>
                            <Heading size="3" mb="2">Образовательным учреждениям</Heading>
                            <Text as="p" size="3" mb="4" color="gray">
                                Хочется добавить в образовательный процесс движения, шума фрезерного станка и запаха свежего термопласта? Хочется развить навыки командной и проектной работы? Приходите и приводите своих учащихся в ФАБЛАБ.
                            </Text>
                            <Text as="p" size="3" color="gray">
                                Начните с экскурсии, оставайтесь для реализации проектов.
                            </Text>
                        </Box>
                    </Box>

                    <Box style={{ minHeight: '400px', backgroundColor: 'var(--gray-3)', borderRadius: 'var(--border-radius)', overflow: 'hidden' }}>
                        {/* Map Placeholder - in a real app, integrate Google Maps or Yandex Maps */}
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3AgdcMrFGswe81oTlJu1RvQuWvKtF11xao&amp;source=constructor"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ minHeight: '400px' }}
                        ></iframe>
                    </Box>
                </Grid>
            </Container>
        </Section>
    );
}
