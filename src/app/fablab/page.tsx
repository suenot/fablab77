import { Container, Grid, Box, Heading, Text, Section, Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export default function FablabPage() {
    return (
        <Section size="3">
            <Container size="4" px={{ initial: "4", sm: "6", md: "8" }}>
                <Grid columns={{ initial: '1', md: '2' }} gap="8" align="center">
                    <Box>
                        <Heading size="9" mb="6">Что такое ФАБЛАБ</Heading>
                        <Text as="p" size="4" mb="4">
                            Сегодня любой материальный продукт изготовленный человеком является результатом обработки природных или синтезированных материалов, но в будущем появятся системы, объединяющие синтез материалов и придание им необходимых формы и структуры.
                        </Text>
                        <Text as="p" size="4" mb="4">
                            В будущем у нас появится возможность изготавливать все, что угодно, сегодня у нас есть возможность изготовить почти все, что угодно. И эта возможность называется <strong>ФАБЛАБ</strong>.
                        </Text>
                        <Text as="p" size="4" mb="4">
                            <strong>ФАБЛАБ</strong> — продукт цифровой революции: вслед за цифровой фотографией и цифровой музыкой приходит цифровое производство. Управляемые компьютерными программами «умные» машины обрабатывают разнообразные материалы, придавая им необходимую форму.
                        </Text>
                    </Box>
                    <Box position="relative" style={{ height: '500px' }}>
                        <Image
                            src="/img/fablab/replicator.jpg"
                            alt="Replicator"
                            fill
                            className="article-image"
                            style={{ objectFit: 'cover' }}
                        />
                    </Box>
                </Grid>

                <Section size="2">
                    <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="4">
                        <Card variant="ghost">
                            <Heading size="4" mb="2">Технологии</Heading>
                            <Text size="3" color="gray">Набор технологических и интеллектуальных ресурсов для превращения идей в функциональные прототипы.</Text>
                        </Card>
                        <Card variant="ghost">
                            <Heading size="4" mb="2">Путь к мечте</Heading>
                            <Text size="3" color="gray">Кратчайший путь от эскиза до готового изделия, от мечты до ее воплощения.</Text>
                        </Card>
                        <Card variant="ghost">
                            <Heading size="4" mb="2">Персональное производство</Heading>
                            <Text size="3" color="gray">Возможность сделать (почти) все, что угодно, доступная каждому.</Text>
                        </Card>
                    </Grid>
                </Section>
            </Container>
        </Section>
    );
}

function Card({ children, variant }: { children: React.ReactNode, variant: "ghost" | "surface" }) {
    return (
        <Box p="4" style={{
            background: variant === 'surface' ? 'var(--gray-3)' : 'transparent',
            border: '1px solid var(--gray-5)',
            borderRadius: 'var(--border-radius)'
        }}>
            {children}
        </Box>
    );
}
