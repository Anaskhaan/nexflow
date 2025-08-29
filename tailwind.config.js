// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Open Sans", "sans-serif"], // For body text
//         display: ["Roboto", "sans-serif"], // For h1 headings
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // Body text
        display: ["Roboto", "sans-serif"], // Headings
      },
      colors: {
        brand: "#3FA69B", // Optional named color for easier reuse
      },
    },
  },
  safelist: [
    // Keep dynamic patterns that might appear in variables
    { pattern: /rounded(-\w+)?/ },
    { pattern: /(w|h)-\d+/ },
    { pattern: /opacity-\d{1,3}/ },
    { pattern: /blur(-\w+)?/ },
    { pattern: /backdrop-blur(-\w+)?/ },
    { pattern: /text-(white|gray-\d{1,3}|brand)/ },
    { pattern: /bg-(white|gray-\d{1,3}|brand)/ },
    { pattern: /border-(white|gray-\d{1,3}|brand)/ },
  ],
  plugins: [],
};
