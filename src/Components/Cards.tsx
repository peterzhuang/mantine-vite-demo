import { Badge, Button, Card, Grid, Group, Image, Text, useMantineTheme } from "@mantine/core";


function Cards() {

    const theme = useMantineTheme();

    return (
        <div className="App">
            <Grid justify="space-around">
                <Grid.Col style={{maxWidth: 350}} sm={4} xs={4}>
                    <Card shadow="sm" p="lg" radius="md">
                    <Card.Section>
                    <Image
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                        height={160}
                        alt="Norway"
                    />
                    </Card.Section>

                    <Group
                    position="apart"
                    style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                    >
                    <Text size="lg" weight={500}>Norway Fjord Adventures</Text>
                    <Badge color="pink" variant="light">
                        On Sale
                    </Badge>
                    </Group>

                    <Text
                    size="sm"
                    style={{ lineHeight: 1.5 }}
                    >
                    With Fjord Tours you can explore more of the magical fjord
                    landscapes with tours and activities on and around the fjords of
                    Norway
                    </Text>

                    <Button
                    variant="light"
                    color="blue"
                    fullWidth
                    style={{ marginTop: 14 }}
                    >
                    Book classic tour now
                    </Button>
                </Card>
                </Grid.Col>
                <Grid.Col style={{maxWidth: 350}} sm={4} xs={4}>
                    <Card shadow="sm" p="lg" radius="md">
                    <Card.Section>
                    <Image
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                        height={160}
                        alt="Norway"
                    />
                    </Card.Section>

                    <Group
                    position="apart"
                    style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                    >
                    <Text size="lg" weight={500}>Norway Fjord Adventures</Text>
                    <Badge color="pink" variant="light">
                        On Sale
                    </Badge>
                    </Group>

                    <Text
                    size="sm"
                    style={{ lineHeight: 1.5 }}
                    >
                    With Fjord Tours you can explore more of the magical fjord
                    landscapes with tours and activities on and around the fjords of
                    Norway
                    </Text>

                    <Button
                    variant="light"
                    color="blue"
                    fullWidth
                    style={{ marginTop: 14 }}
                    >
                    Book classic tour now
                    </Button>
                </Card>
                </Grid.Col>
                <Grid.Col style={{maxWidth: 350}} sm={4} xs={4}>
                    <Card shadow="sm" p="lg" radius="md">
                        <Card.Section>
                        <Image
                            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                            height={160}
                            alt="Norway"
                        />
                        </Card.Section>

                        <Group
                        position="apart"
                        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                        >
                        <Text size="lg" weight={500}>Norway Fjord Adventures</Text>
                        <Badge color="pink" variant="light">
                            On Sale
                        </Badge>
                        </Group>

                        <Text
                        size="sm"
                        style={{ lineHeight: 1.5 }}
                        >
                        With Fjord Tours you can explore more of the magical fjord
                        landscapes with tours and activities on and around the fjords of
                        Norway
                        </Text>

                        <Button
                        variant="light"
                        color="blue"
                        fullWidth
                        style={{ marginTop: 14 }}
                        >
                        Book classic tour now
                        </Button>
                    </Card>
                </Grid.Col>
                {/* <Grid.Col style={{maxWidth: 350}} sm={4} xs={4}>
                    
                </Grid.Col> */}
            </Grid>
        </div>
    );
}

export default Cards;