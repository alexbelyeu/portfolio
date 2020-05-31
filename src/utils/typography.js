import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'

lincolnTheme.overrideThemeStyles = () => ({
  a: {
    textShadow: "none",
    backgroundImage: "none"
  },
});

lincolnTheme.headerFontFamily = ['Montserrat', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'];
lincolnTheme.bodyFontFamily = ['Montserrat', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'];

const typography = new Typography(lincolnTheme)


export default typography;
