import { extendTheme } from "@mui/material";


// Define custom colors
const colors = {
  brand: {
    50: '#e3f2f9',
    100: '#c5e4f3',
    200: '#a2d4ec',
    300: '#7ac1e4',
    400: '#47a9da',
    500: '#0088cc', // Primary brand color
    600: '#007ab8',
    700: '#005f8e',
    800: '#004471',
    900: '#002a47',
  },
};

// Define fonts
const fonts = {
  heading: `'Roboto', sans-serif`,
  body: `'Open Sans', sans-serif`,
};

// Define global styles
const styles = {
  global: {
    body: {
      bg: 'gray.100',
      color: 'gray.800',
    },
    a: {
      color: 'brand.500',
      _hover: {
        textDecoration: 'underline',
      },
    },
  },
};

// Customize components
const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
    },
    sizes: {
      lg: {
        fontSize: 'lg',
        px: 8,
        py: 6,
      },
    },
    variants: {
      solid: {
        bg: 'brand.500',
        color: 'white',
        _hover: {
          bg: 'brand.600',
        },
      },
      outline: {
        borderColor: 'brand.500',
        color: 'brand.500',
        _hover: {
          bg: 'brand.50',
        },
      },
    },
  },
};

// Create the theme
const theme = extendTheme({ colors, fonts, styles, components });

export default theme;
