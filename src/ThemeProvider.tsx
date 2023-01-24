import { MantineProvider, MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "dark",
  fontFamily: "Open Sans",
  fontSizes: { md: 90 },
  radius: { sm: 100},
  colors: {
    'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
  },
  primaryColor: 'ocean-blue',
  components: {
    Button: {
      styles: (theme) => ({
        root: {
          backgroundColor: theme.colors['ocean-blue'][9]
        }
      })
    }
  },
  loader: 'oval'
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      {children}
    </MantineProvider>
  );
}
