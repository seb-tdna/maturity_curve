import styles from '../styles/curve.module.css'
import Curve from '../Components/curve'
import { useState } from 'react';
import SingleElement from '../Components/singleElement';

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState("unset")
  function renderComponent() {
    if (selectedComponent === "unset") /// we can add other conditions
      return (<span className={styles.overlay}><Curve onClick={handleClick} /></span>)
    else
      return (<div className={styles.overlay}><SingleElement onBack={e => setSelectedComponent("unset")} selectedComponent={selectedComponent} /></div>)
  }
  function handleClick(e) {
    console.log(e.name)
    setSelectedComponent(e.name)
  }
  return (
    <div style={{ display: 'flex', alignItems: "center", height: "100vh" }}>
      <div className={styles.wrapper}>
        <div className={styles.img_cont}>
          <img src="/images/informational.jpg" />
        </div>

        <div className={styles.img_cont}>
          <img src="/images/automation.png" />
        </div>

        <div className={styles.img_cont}>
          <img src="/images/integrated.jpg" />
        </div>

        <div className={styles.img_cont}>
          <img src="/images/automated1.jpg" />
        </div>
        {renderComponent()}
      </div>
    </div>
  )
}
