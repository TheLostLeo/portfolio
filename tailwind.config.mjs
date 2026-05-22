function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          muted: withOpacity("--color-text-muted"),
          inverted: withOpacity("--color-text-inverted"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          "button-accent": withOpacity("--color-button-accent"),
          "button-accent-hover": withOpacity("--color-button-accent-hover"),
          "button-muted": withOpacity("--color-button-muted"),
        },
      },
      colors: {
        skin: {
          hue: withOpacity("--color"),
          muted: withOpacity("--muted"),
        },
      },
      ringColor: {
        skin: {
          fill: withOpacity("--color-fill"),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity("--color-fill"),
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "card-hover": "cardHover 0.4s ease-out forwards",
        glow: "glow 2s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 0.5s ease-in-out",
        "stagger-1": "fadeInUp 0.6s ease-out 0.1s forwards",
        "stagger-2": "fadeInUp 0.6s ease-out 0.2s forwards",
        "stagger-3": "fadeInUp 0.6s ease-out 0.3s forwards",
        "stagger-4": "fadeInUp 0.6s ease-out 0.4s forwards",
        "stagger-5": "fadeInUp 0.6s ease-out 0.5s forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        slideInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        cardHover: {
          "0%": {
            transform: "translateY(0) scale(1)",
          },
          "100%": {
            transform: "translateY(-8px) scale(1.02)",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(var(--color), 0.5)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(var(--color), 0.8)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
