import { Container, Heading, Text, Section, Box, Card } from "@radix-ui/themes";
import Link from "next/link";

const networks = [
    { name: "Санкт-Петербург (СПбПУ)", href: "http://fablab.spbstu.ru/" },
    { name: "Томск", href: "http://cmit.ru/" },
    { name: "Красноярск", href: "http://fablab24.ru/" },
    { name: "Уфа (ЦМИТ «Лаборатория инноваций»)", href: "http://fablabufa.ru/" },
    { name: "Уфа (ЦМИТ «Уникум»)", href: "http://fablabion.ru/" },
    { name: "Ростов-на-Дону (ЮФУ)", href: "http://fablab61.ru/" },
    { name: "Ростов-на-Дону (ДГТУ)", href: "http://fablabrostov.ru/" },
    { name: "Тюмень", href: "http://vk.com/fablab_tsu/" },
    { name: "Донецк (ИЗОЛАБ)", href: "http://izolab.org/" },
    { name: "Амстердам (Waag Society)", href: "http://fablab.waag.org/" },
    { name: "Барселона (IAAC)", href: "http://fablabbcn.org/" },
    { name: "Вена (Happylab)", href: "http://www.happylab.at/" },
    { name: "Манчестер", href: "http://www.fablabmanchester.org/" },
];

export default function NetworkPage() {
    return (
        <Section size="3">
            <Container size="3">
                <Heading size="9" mb="6" align="center">Всемирная сеть</Heading>

                <Box mb="8">
                    <Text as="p" size="4" mb="4">
                        В мире уже больше сотни лабораторий цифрового производства Fab Lab. <Link href="https://www.fablabs.io/labs" target="_blank" style={{ color: 'var(--accent-9)' }}>Актуальный список действующих лабораторий</Link> поддерживается на сайте проекта.
                    </Text>
                    <Text as="p" size="4">
                        Не смотря на общую идеологию и основные инструменты, каждая лаборатория уникальна и по своему интересна. Обязательно посетите сайты лабораторий в других городах и странах:
                    </Text>
                </Box>

                <Box>
                    {networks.map((net, idx) => (
                        <Card key={idx} size="1" mb="2" variant="ghost">
                            <Link href={net.href} target="_blank" style={{ color: 'var(--accent-9)', fontSize: 'var(--font-size-3)' }}>
                                {net.name}
                            </Link>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Section>
    );
}
