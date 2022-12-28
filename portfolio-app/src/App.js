import './index.css';
import styles from "./style";
import { Navbar } from "./components";

const App = () => (
  <div className="bg-black-gradient w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-black-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
       
      </div>
    </div>
    
    <div className={`bg-black-gradient ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        
      </div>
    </div>
  </div>
);

export default App;