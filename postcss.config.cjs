// postcss.config.cjs

module.exports = {
  plugins: {
    "@tailwindcss/postcss": {}, // ✅ correct plugin for Tailwind v4
    autoprefixer: {},           // ✅ still needed for vendor prefixes
  },
};
