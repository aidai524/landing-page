module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#00D6AF',
        secondary: '#F9FAFB',
        dark: '#001320',
        'dark-70': 'rgba(0, 19, 32, 0.7)',
        'dark-border': 'rgba(8, 97, 81, 0.39)',
        // darkText: colors.gray['600'],
        // inputBg: colors.gray['100'],
        // inputText: '#374151',
        // hoverGray: '#F3F4F6',
        // buttonBg: '#10B981',
        // buttonText: '#F9FAFB',
        // greenOpacity100: 'rgba(2, 109, 97, 1)',
        // whiteOpacity85: 'rgba(255, 255, 255, 0.85)',
        // blackLight: '#003648',
        'green-dark': '#1AA189',
        'gray-text': '#73818B'
      },
      backgroundImage: {
        'btn-gradient-1': 'linear-gradient(289.57deg, rgba(255, 255, 255, 0.08) 8.01%, rgba(255, 255, 255, 0.03) 100%)',
        'btn-gradient-2':
          'linear-gradient(248.59deg, rgba(0, 198, 162, 0.83) 1.57%, rgba(115, 129, 139, 0.56) 56.66%, rgba(0, 186, 152, 0.28) 95.17%)',
        'btn-gradient-3': 'linear-gradient(85.5deg, #00D6AF 6.31%, #1AA289 99.02%)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
