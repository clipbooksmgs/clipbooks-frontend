import { useState } from "react";
import SettingsLayout from "../SettingsLayout";
import InterestedPersons from "./InterestedPersons";
import styles from './Pressclips.module.css';
import TermsOfInterest from "./TermsOfInterest";



const Pressclips = () => {

    const initPressclips = {
        "persons":[],
        "terms":[]
    }

    const [pressclips, setPressclips] = useState(initPressclips);


    const savePersonsHandler = (persons) => {
        console.log(pressclips);
        const {terms,...others} = pressclips; 
        setPressclips({terms,persons});
    }

    const saveTermsHandler = (terms) => {
        const {persons,...others} = pressclips; 
        setPressclips({terms,persons});
    }




    return (
        <SettingsLayout heading="Press Clip Settings">
               <div className={styles.item}>
                    <div className={styles.label}>
                        <p>
                            <span className={styles.question}>Who are a few important public figures / politicians that you want to track?</span>
                            <span className={styles.hint}> For example, you might want to track the names of other elected officials in your geography</span>
                        </p>
                    </div>
                    <div className={styles.values}>
                        <InterestedPersons persons={pressclips.persons} savePersonsHandler={savePersonsHandler}/>
                    </div>
               </div>
               <div className={styles.item}>
                    <div className={styles.label}>
                        <p>
                            <span className={styles.question}>What are 3-4 important issues that you’d like to track press mentions for on a daily basis?</span>
                            <span className={styles.hint}> (These might include important pieces of legislature, policy items, or similar)</span>
                        </p>
                    </div>
                    <div className={styles.values}>
                        <TermsOfInterest terms={pressclips.terms} saveTermsHandler={saveTermsHandler}/>
                    </div>
               </div>
               <div className={styles.item}>
                    <div className={styles.label}>
                        <p>
                            <span className={styles.question}>What are 3-4 news outlets that you want to track headlines from?</span>
                            <span className={styles.hint}> (Try to balance local and national news for the best results)</span>
                        </p>
                    </div>
                    <div className={styles.values}></div>
               </div>
        </SettingsLayout>  
    )
}

export default Pressclips;