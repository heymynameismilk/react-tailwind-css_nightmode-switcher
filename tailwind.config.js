module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class',
    theme: {
        extend: {},
        boxShadow: {
            lg: ' 0px 0px 10px rgba(0, 0, 0, 0.1)',
            md: '0px 2px 4px rgba(57, 61, 69, 0.06)'
        },
        spacing: {
            zero: '0px',
            full: '100%',
            sm: '9px',
            md: '20px',
            lg: '30px'
        },
        fontSize: {
            'tiny': '0.75rem'
        },
        colors: {
            gray: {
                900: '#171717',
                800: '#262626',
                700: "#A0A0A0",
                400: '#A3A3A3',
                300: '#F5F5F5',
                200: '#E5E7EB',
                100: '#F4F4F5',
            },
            white: {
                DEFAULT: '#FFFFFF'
            },
            black: {
                DEFAULT: '#000000'
            },
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
