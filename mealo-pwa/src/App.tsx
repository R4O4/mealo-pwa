import { Colors, Effects } from "./variables";
function App() {

  const styles = ({
    circle: {
      borderRadius: '50%',
      width: '500px',
      height: '500px',
      backgroundColor: Colors.primaryColor,
      display: 'flex',
      position: "absolute",
      top: '10%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: Effects.boxShadow,
    },
  });

  return (
    <>
      <span style={{...styles.circle, position: 'absolute' as const}}></span>
      <p>roca</p>
    </>
  )
}

export default App
