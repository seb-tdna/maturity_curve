import { useEffect } from 'react'
import styles from '../styles/SingleElement.module.css'
export default function SingleElement(props) {
    const slideInfo = COMPONENT_DATA[props.selectedComponent]
    return (
        <div id="abc" className={styles.wrapper}>
            <a className={styles.back} onClick={props.onBack} href="#">Back to Maturity Curve</a>
            <div>
                <div>
                    <h2>{slideInfo.title}</h2>
                    <span>{slideInfo.subTitle}</span>
                    <div className={styles.descriptionContainer}>
                        <p>{slideInfo.description}</p>
                        <div className={styles.listWrapper}>
                            <ul>
                                {slideInfo.list.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const COMPONENT_DATA = {
    Informational: {
        title: 'Informational',
        subTitle: 'Level One',
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        list: ['Data influenced decition culture', 'Data influenced decition culture', "Data influenced decition culture"]
    },
    Integrated: {
        title: 'Integrated',
        subTitle: 'Level Three',
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        list: ['Data influenced decition culture', 'Data influenced decition culture', "Data influenced decition culture"]
    },
    Digitalized: {
        title: 'Digitalized',
        subTitle: 'Level Two',
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        list: ['Data influenced decition culture', 'Data influenced decition culture', "Data influenced decition culture"]
    },
    Automated: {
        title: 'Automated',
        subTitle: 'Level Four',
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        list: ['Data influenced decition culture', 'Data influenced decition culture', "Data influenced decition culture"]
    }
}
