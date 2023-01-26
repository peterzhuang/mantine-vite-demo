import { Text, Button, Stack, Paper, Loader, MantineProvider } from "@mantine/core";
import AppShellExample from "./Components/AppShell";
import Buttons from "./Components/Buttons";
import Cards from "./Components/Cards";
import ChipsExample from "./Components/ChipsExample";
import InputExample from "./Components/InputExample";
import LightAndDarkModeButton from "./Components/LightDarkButton";
import TableExample from "./Components/TableExample";
import TitleAndTextExample from "./Components/TextAndTitleExample";
import { ThemeProvider } from "./ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Paper p="md" radius={0} style={{ minHeight: "100vh"}}>
      <AppShellExample>
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
          {/* <LightAndDarkModeButton /> */}
          <Buttons />
        </Stack>
        <TableExample />
        <ChipsExample />
        <InputExample />
        <TitleAndTextExample />
        </AppShellExample>
      </Paper>
    </ThemeProvider>
  );
}
