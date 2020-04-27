import Typography from 'typography'
import oceanBeachTheme from 'typography-theme-ocean-beach'

oceanBeachTheme.overrideThemeStyles = () => ({
  a: {
    textShadow: "none",
    backgroundImage: "none"
  },
});

const typography = new Typography(oceanBeachTheme)


export default typography;
