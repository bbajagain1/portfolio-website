import './index.css';
import styles from "./styles";
import { Navbar,Hero, Education, Projects } from "./components";

const App = () => (
  <div className=" w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={` ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
       <Hero />
      </div>
    </div>
    
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Education />
      </div>
    </div>

    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Projects />
      </div>
    </div>
  </div>
);

export default App;