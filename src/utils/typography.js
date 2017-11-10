import Typography from 'typography';
require('typeface-lato');
require('typeface-josefin-sans');

const typography = new Typography({
  scaleRatio: 3,
  headerFontFamily: ['Josefin Sans', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
});

export default typography;
