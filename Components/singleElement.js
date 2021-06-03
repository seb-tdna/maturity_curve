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
        description: "Small factions of individuals are using data in isolated groups to inform ad-hoc decision making, but core operational decisions are made based on experience",
        list: ['Experiential-driven decision culture', 'Non-continuous hierarchical data flow', "Disparate technologies & applications", "Manual data processing & feedback"]
    },
    Integrated: {
        title: 'Integrated',
        subTitle: 'Level Three',
        description: "Decisions from shop floor to senior leadership are made based on data-driven information through self-service portals",
        list: ['Information-influenced decision culture', 'Cohesive hierarchical data roll-ups', "Seamlessly integrated tech & apps", "Systemized data processing & ETL"]
    },
    Digitalized: {
        title: 'Digitalized',
        subTitle: 'Level Two',
        description: "Leadership has started to adopt digital decision making as the new norm with a central source of truth established for some core metrics. Culture still hampers site-wide adoption",
        list: ['Data-influenced decision culture', 'Continuous hierarchical data flows', "Groupings of integrated technologies & applications", 'Data-capable workforce mixed throughout organization', "Mechanized data process"]
    },
    Automated: {
        title: 'Automated',
        subTitle: 'Level Four',
        description: "Optimized operational decisions are made automatically through digital twins with outputs driving shiftily decision making to maximize site-wide performance",
        list: ['Information-influenced decision culture', 'Ecosystem of applications is utilized to drive improvements', "Workforce leveraging data to drive root cause analysis", 'System model validation and improvement cycles executed regularly by data-capable workforce', 'Central source of truth for all KPIs exists', "Decision making is based on leading indicators"]
    }
}
