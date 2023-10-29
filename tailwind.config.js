import tailwindcssForms from "@tailwindcss/forms";
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "purr-text-color": "#060E08",
        "purr-background-color": "#FFFFFF",
        "purr-primary-color": "#D89296",
        "purr-secondary-color": "#F0EFD6",
        "purr-accent-color": "#B84248",
      },
    },
  },
  plugins: [tailwindcssForms],
};
