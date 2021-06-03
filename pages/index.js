import styles from '../styles/curve.module.css'
import Curve from '../Components/curve'
import { useState } from 'react';
import SingleElement from '../Components/singleElement';

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState("unset")
  function renderComponent() {
 /*   if (selectedComponent === "unset") /// we can add other conditions
      return (<span className={styles.overlay}><Curve onClick={handleClick} /></span>)
    else
 */
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
          <img src="/images/Informational.jpeg" />
        </div>

        <div className={styles.img_cont}>
          <img src="/images/Digitalized.jpeg" />
        </div>

        <div className={styles.img_cont}>
          <img src="/images/Integrated.jpeg" />
        </div>

        <div className={styles.img_cont}>
          <img src="/images/Automated.jpeg" />
        </div>
        {renderComponent()}
      </div>
    </div>
  )
}
