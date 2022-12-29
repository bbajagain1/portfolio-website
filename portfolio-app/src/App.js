import './index.css';
import styles from "./styles";
import { Navbar,Hero } from "./components";

const App = () => (
  <div className="bg-green-200 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-green-200 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
       <Hero />
      </div>
    </div>
    
    <div className={`bg-green-200 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        
      </div>
    </div>
  </div>
);

export default App;