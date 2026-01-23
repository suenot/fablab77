import { Container, Grid, Box, Heading, Text, Section, Card, Flex, Avatar } from "@radix-ui/themes";
import Link from "next/link";

const team = [
    { name: "Владимир Евгеньевич Кузнецов", role: "Директор учебно-производственного центра \"ARTCAD\"", email: "fablab@misis.ru", phone: "+7 (495) 955-01-20" },
    { name: "Вакулик Анна", role: "Заместитель директора", email: "anna.vakulik@gmail.com", phone: "+7 (915) 077-04-84" },
    { name: "Барменкова Ярослава Андреевна", role: "Инженер-дизайнер", email: "fablab@misis.ru" },
    { name: "Михалин Михаил Викторович", role: "Инженер", email: "fablab@misis.ru" },
    { name: "Егоров Филипп Владимирович", role: "Техник", email: "fablab@misis.ru" },
];

export default function TeamPage() {
    return (
        <Section size="3">
            <Container size="3" px={{ initial: "4", sm: "6", md: "8" }}>
                <Heading size={{ initial: "7", md: "9" }} mb="6" align="center">Наша команда</Heading>
                <Flex direction="column" gap="4">
                    {team.map((member, idx) => (
                        <Card key={idx} size="3">
                            <Flex gap="4" align="center">
                                <Avatar
                                    size="6"
                                    fallback={member.name[0]}
                                    color="indigo"
                                />
                                <Box>
                                    <Heading size="5">{member.name}</Heading>
                                    <Text as="p" size="2" color="gray" mb="2">{member.role}</Text>
                                    <Flex gap="4">
                                        {member.email && (
                                            <Link href={`mailto:${member.email}`} style={{ fontSize: 'var(--font-size-2)', color: 'var(--accent-9)' }}>
                                                {member.email}
                                            </Link>
                                        )}
                                        {member.phone && (
                                            <Text size="2" color="gray">{member.phone}</Text>
                                        )}
                                    </Flex>
                                </Box>
                            </Flex>
                        </Card>
                    ))}
                </Flex>
            </Container>
        </Section>
    );
}
