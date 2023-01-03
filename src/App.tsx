import { Text, Button, Stack, Paper, Loader } from "@mantine/core";
import { ThemeProvider } from "./ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Paper>
        <Stack align="center" mt={50}>
          <Text  weight={500}>
            Welcome to Mantine!
          </Text>
          <Button>First button</Button>
          <Button>Second button</Button>
          <Loader />
        </Stack>
      </Paper>
    </ThemeProvider>
  );
}
