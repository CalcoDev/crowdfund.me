/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            'cfm-lighter-grey': '#7B7C7F',
            'cfm-light-grey': '#0F1014',
            'cfm-dark-grey': '#0B0C10',
            'cfm-white': '#FFFFFF',
            'cfm-transparent': 'transparent',
            red: '#FF0000',
        },
        fontFamily: {
            'cfm-hammersmith': 'Hammersmith One, sans-serif',
            'cfm-spartan': 'League Spartan, sans-serif',
            'cfm-cormorant': 'Cormorant Garamond, serif',
        },
        letterSpacing: {
            'cfm-0': '0',
            'cfm-1': '0.1em',
            'cfm-2': '0.2em',
            'cfm-3': '0.3em',
            'cfm-4': '0.4em',
        },
        textIndent: {
            'cfm-0': '0',
            'cfm-1': '0.1em',
            'cfm-2': '0.2em',
            'cfm-3': '0.3em',
            'cfm-4': '0.4em',
        },
        extend: {
            height: {
                'screen-fill': '92vh',
            },
            fontSize: {
                xxs: '0.7rem',
            },
            gridTemplateRows: {
                9: 'repeat(9, minmax(0, 1fr))',
            },
        },
    },
    plugins: [],
}
