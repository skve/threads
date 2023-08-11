const plugin = require("tailwindcss/plugin");

/**
 * Adds `bg-stripes-{color}` utilities for all colors. This has been adapted
 * from Tailwind's documentation website.
 */
const stripes = plugin(() => {
  return function ({ addUtilities }) {
    let backgroundSize = "7.07px 7.07px";

    let backgroundImage = (color) =>
      `linear-gradient(135deg, ${color} 10%, transparent 10%, transparent 50%, ${color} 50%, ${color} 60%, transparent 60%, transparent 100%)`;

    let baseColors = Object.keys(radix).filter(
      (name) => !name.endsWith("A") && !name.endsWith("Dark") // filtering out alpha or dark-specific colors
    );

    addUtilities(
      Object.fromEntries(
        baseColors.map((baseColorName) => {
          let backgroundColor = `hsl(var(--${baseColorName}2))`;
          let stripeColor = `var(--${baseColorName}A4)`; // 50% opacity

          return [
            `.bg-stripes-${baseColorName}`,
            {
              backgroundColor,
              backgroundImage: backgroundImage(stripeColor),
              backgroundSize,
            },
          ];
        })
      )
    );
  };
});

module.exports = stripes;
