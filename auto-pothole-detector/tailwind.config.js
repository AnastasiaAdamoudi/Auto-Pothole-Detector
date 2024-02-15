/** @type {import('tailwindcss').Config} */
export const content = ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      title: ['Luckiest Guy'],
      subtitle: ['Cinzel'],
      body: ['Catamaran'],
      links: ['Neucha'],
      fallbacks: {
        title: ['Roboto', 'Arial', 'sans-serif'],
        body: ['Roboto', 'Arial', 'sans-serif'],
        links: ['Roboto', 'Arial', 'sans-serif']
      }
    },
    colors: {
      background: "#e6ecf0",
      primary:  "#303848",
      secondary: "#607DFA",
      secondaryDark: "#19329e",
      tertiary: "#7BA862",
      tertiaryLight: "#c8f2b1",
      "earth": "#4D3D11",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    },
    boxShadow: {
      title: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      button: "0px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    screens: {
      'xs': '390px',
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
  },
};
export const plugins = [];

