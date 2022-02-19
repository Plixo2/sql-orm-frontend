const colors = require('tailwindcss/colors');
module.exports = {
    mode: 'jit',
    prefix: '',
    purge: {
        content: ['./src/**/*.{html,ts,js}'],
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#7952B3',
                halfBlack: 'rgba(0,0,0,0.5)',
                hoverBlack: 'rgba(0,0,0,0.05)',
                primaryText: '#FFFFFF',
            },
            boxShadow: {
                equals: '0 0 10px 1px rgba(#000000,0.5)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
