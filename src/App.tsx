import { Text, Button, Stack, Paper, Loader, MantineProvider } from "@mantine/core";
import Cards from "./Components/Cards";
import LightAndDarkModeButton from "./Components/LightDarkButton";
import { ThemeProvider } from "./ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Paper p="md" radius={0} style={{ minHeight: "100vh"}}>
        <Stack align="center" mt={50}>
          <Text  weight={500} color="ocean-blue">
            Welcome to Mantine!
          </Text>
          <Button>First button</Button>
          <Button>Second button</Button>
          <Loader />
          <MantineProvider theme={{ fontFamily: 'Greycliff CF, sans-serif' }}>
            <Button>Greycliff CF button</Button>
          </MantineProvider>
          <Cards />
          <LightAndDarkModeButton />
        </Stack>
      </Paper>
    </ThemeProvider>
  );
}
