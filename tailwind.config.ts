import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
      typography: ({ theme }: { theme: any }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.foreground / 1'), // Ensures text color inherits from foreground
            a: {
              color: theme('colors.primary.DEFAULT / 1'),
              '&:hover': {
                color: theme('colors.primary.DEFAULT / 0.8'),
              },
            },
            strong: {
              color: 'inherit',
            },
            code: {
              color: theme('colors.accent.foreground / 1'),
              backgroundColor: theme('colors.accent.DEFAULT / 0.1'),
              padding: '0.2em 0.4em',
              borderRadius: theme('borderRadius.sm'),
            },
            pre: {
              backgroundColor: theme('colors.muted.DEFAULT / 1'),
              color: theme('colors.muted.foreground / 1'),
            },
            // Add more styles for other markdown elements as needed
          },
        },
        sm: { // Smaller prose for chat bubbles
          css: {
            fontSize: theme('fontSize.sm'),
            p: {
              marginTop: theme('spacing.2'),
              marginBottom: theme('spacing.2'),
            },
            ul: {
              marginTop: theme('spacing.2'),
              marginBottom: theme('spacing.2'),
            },
            ol: {
              marginTop: theme('spacing.2'),
              marginBottom: theme('spacing.2'),
            },
            // etc.
          }
        },
        invert: { // For dark mode
           css: {
            color: theme('colors.foreground / 1'), // Ensure this works for dark mode foreground
            a: {
              color: theme('colors.primary.DEFAULT / 1'),
              '&:hover': {
                color: theme('colors.primary.DEFAULT / 0.8'),
              },
            },
            code: {
              color: theme('colors.accent.foreground / 1'), // Check if accent works well in dark
              backgroundColor: theme('colors.accent.DEFAULT / 0.2'), // Darker accent bg
            },
             pre: {
              backgroundColor: theme('colors.muted.DEFAULT / 1'), // Check if muted works well
              color: theme('colors.muted.foreground / 1'),
            },
          }
        }
      }),
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
