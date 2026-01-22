import { Container, Grid, Box, Heading, Text, Section, Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export default function WhereFromPage() {
    return (
        <Section size="3">
            <Container size="4">
                <Heading size="9" mb="6">Откуда это</Heading>

                <Grid columns={{ initial: '1', md: '2' }} gap="8" mb="8">
                    <Box position="relative" style={{ height: '400px' }}>
                        <Image
                            src="/img/fablab/neil-gershenfeld.jpg"
                            alt="Neil Gershenfeld"
                            fill
                            className="article-image"
                            style={{ objectFit: 'cover' }}
                        />
                    </Box>
                    <Box>
                        <Text as="p" size="4" mb="4">
                            Рожденный как университетский проект в Центре битов и атомов Массачусетского технологического института (MIT), ФАБЛАБ превратился в глобальную сеть лабораторий цифрового производства по всему миру.
                        </Text>
                        <Text as="p" size="4" mb="4">
                            Основатель программы — профессор Нил Гершенфельд (Neil Gershenfeld), автор курса «Как сделать (почти) все, что угодно» и книги FAB.
                        </Text>
                    </Box>
                </Grid>

                <Box className="glass-card">
                    <Heading size="6" mb="4">Профессор Нил Гершенфельд о Fablab:</Heading>
                    <Text as="p" size="3" mb="4" style={{ fontStyle: 'italic' }}>
                        «В мире уже произошла цифровая революция... Сегодня же пришла пора говорить о революции в области цифрового производства. Мы хотели показать, как тесно мир цифровых технологий связан с физическим материальным миром.»
                    </Text>
                    <Text as="p" size="3" mb="4" style={{ fontStyle: 'italic' }}>
                        «Массачусетский технологический институт тратит миллионы долларов на оборудование, благодаря которому люди могут сами создавать то, чего хотят. И кто знает — лет через двадцать подобное оборудование будет стоять у вас дома.»
                    </Text>
                    <Text as="p" size="3" style={{ fontStyle: 'italic' }}>
                        «Мы встречаем людей с удивительным творческим потенциалом, которые могут создавать уникальные вещи. Наша цель — делиться знанием и опытом.»
                    </Text>
                </Box>
            </Container>
        </Section>
    );
}
