import { Container, Grid, Box, Heading, Text, Section, Flex } from "@radix-ui/themes";
import Image from "next/image";
import { creativityData } from "@/data/creativity";
import { notFound } from "next/navigation";

export default async function CreativityPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = creativityData[slug as keyof typeof creativityData];

    if (!data) {
        notFound();
    }

    return (
        <Section size="3">
            <Container size="4" px={{ initial: "4", sm: "6", md: "8" }}>
                <Heading size={{ initial: "7", md: "9" }} mb="8" align="center">{data.title}</Heading>

                <Flex direction="column" gap="8">
                    {data.sections.map((section, idx) => (
                        <Grid key={idx} columns={{ initial: '1', md: '2' }} gap="8" align="center">
                            {/* On mobile, always show content then image or vice-versa? 
                                Let's say Image then Text on mobile for better visual flow.
                                On desktop we alternate.
                            */}
                            {(idx % 2 === 0) ? (
                                <>
                                    <Box>
                                        {section.title && <Heading size="6" mb="4">{section.title}</Heading>}
                                        <Text as="p" size="4" mb="4">
                                            {section.text}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Box position="relative" style={{ height: '400px' }}>
                                            <Image
                                                src={section.img}
                                                alt={section.title || "Creativity"}
                                                fill
                                                className="article-image"
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </Box>
                                        {section.caption && (
                                            <Text size="1" color="gray" mt="2" align="center" style={{ display: 'block' }}>
                                                {section.caption}
                                            </Text>
                                        )}
                                    </Box>
                                </>
                            ) : (
                                <>
                                    <Box>
                                        <Box position="relative" style={{ height: '400px' }}>
                                            <Image
                                                src={section.img}
                                                alt={section.title || "Creativity"}
                                                fill
                                                className="article-image"
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </Box>
                                        {section.caption && (
                                            <Text size="1" color="gray" mt="2" align="center" style={{ display: 'block' }}>
                                                {section.caption}
                                            </Text>
                                        )}
                                    </Box>
                                    <Box>
                                        {section.title && <Heading size="6" mb="4">{section.title}</Heading>}
                                        <Text as="p" size="4" mb="4">
                                            {section.text}
                                        </Text>
                                    </Box>
                                </>
                            )}
                        </Grid>
                    ))}
                </Flex>
            </Container>
        </Section>
    );
}

export async function generateStaticParams() {
    return Object.keys(creativityData).map((slug) => ({
        slug,
    }));
}
