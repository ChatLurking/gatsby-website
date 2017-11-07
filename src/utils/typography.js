import Typography from 'typography';

const typography = new Typography({
  scaleRatio: 3,
  headerFontFamily: ['Josefin Sans', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
});

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
