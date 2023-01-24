import { Text, Button, Stack, Paper, Loader, MantineProvider } from "@mantine/core";
import { ThemeProvider } from "./ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Paper>
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
        </Stack>
      </Paper>
    </ThemeProvider>
  );
}
