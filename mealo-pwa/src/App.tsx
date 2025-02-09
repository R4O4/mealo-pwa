import { Colors } from "./variables";
import "./App.css";

function App() {
  
  console.log(screen.width);

  return (
    <div style={styles.container}>
      <img style={styles.ellipse} src="/src/assets/views/welcome/ellipse.png" alt="background" />
      <img style={styles.pasta} src="/src/assets/views/welcome/pasta.png" alt="pasta" />
      <img style={styles.salad} src="/src/assets/views/welcome/salad.png" alt="salad" />
      <img style={styles.pepper} src="/src/assets/views/welcome/pepper.png" alt="pepper" />
      <img style={styles.bread} src="/src/assets/views/welcome/bread.png" alt="bread" />
      <img style={styles.tomato} src="/src/assets/views/welcome/tomato.png" alt="tomato" />
      <img style={styles.mango} src="/src/assets/views/welcome/mango.png" alt="mango" />
      <div style={styles.logoTitle}>
        <img style={styles.logo} src="/src/assets/logo_mealo.png" alt="Logo Mealo" />
        <h1 style={styles.title}>Mealo</h1>
        <p style={styles.slogan}>Votre assistant culinaire intelligent</p>
      </div>
    </div>
  );
}

const styles = ({
  startButton: {
    position: "absolute" as const,
    bottom: 80,
    height: 50,
  },
  container: { 
    position: 'relative' as const,
    width: "100%",
    height: "100vh",
    backgroundColor: Colors.background,
    overflow: 'hidden',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    fontFamily: "Roca",
    marginTop: 20,
    color: Colors.primaryColor,
    margin: 0,
    letterSpacing: 4,
  },
  logoTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column' as const,
    position: "relative" as const,
    top: -47,
  },
  logo: {
    alignItem: 'center',
    margin: "0 auto",
    objectFit: 'cover' as const,
    
  },
  ellipse: {
    top: 0,
    width: "100%",
    height: "47%",
  },
  pasta: {
    position: 'absolute' as const,
    top: '8%',
    left: '-18%',
    width: '200px',
    height: '120px',
    flexShrink: 0,
    transform: 'rotate(10.181deg)',
  },
  salad: {
    position: 'absolute' as const,
    top: '12%',
    right: '-23%',
    width: '200px',
    transform: 'rotate(10deg)'
  },
  pepper: {
    position: 'absolute' as const,
    top: "8%",
    left: "45%",
    transform: 'rotate(165deg)',
    width: '90px',
    height: 'auto',
  },
  bread: {
    position: 'absolute' as const,
    top: "20%",
    left: "27%"
  },
  tomato: {
    position: 'absolute' as const,
    zIndex: 1,
    top: "36%",
    right: 30,
    width: "80px"
  },
  mango: {
    position: 'absolute' as const,
    zIndex: 1,
    top: "31%",
    width: "150px",
    left: 0,
  },
  slogan: {
    color: Colors.text,
    fontSize: 17,
    fontFamily: "Roca-Light",
  },
});


export default App;
