import { ColorScheme, ColorSchemeProvider, MantineProvider, MantineThemeOverride } from "@mantine/core";
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { useState } from "react";

export const theme: MantineThemeOverride = {
  colorScheme: "dark",
  fontFamily: "Open Sans",
  fontSizes: { md: 32 },
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
    },
    Grid: {
      styles: () => ({
        root: {
          textAlign: 'center'
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
  // const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  // const toggleColorScheme = (value?: ColorScheme) =>
  //   setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{...theme, colorScheme}}>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
