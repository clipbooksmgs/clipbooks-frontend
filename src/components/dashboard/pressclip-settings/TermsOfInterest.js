import { Fragment, useState } from 'react';
import AddButton from './AddButton';
import PersonCard from './PersonCard';
import AddModal from './AddModal';



const TermsOfInterest = (props) => {

    const modalState= useState(false);
    const [modal, setModal] = modalState;
    
    
    const [errMsg, setErrMsg] = useState();


    let termCards;

    if(props.terms.length>0){
         termCards = props.terms.map((person,index) => {
            return <PersonCard key={index} personName={person}/>
        });
    }


    const addButtonHandler  = () => {
        setModal(true);
        //setPersons([...persons, name]);
    }

    const addNameHandler = (term) => {
        let terms = ([...props.terms,term]);
        props.saveTermsHandler(terms);
    }



    return (
        <Fragment>
            {termCards && termCards }
            <AddButton buttonHandler={addButtonHandler} label='Add Term'/>
            <AddModal label="New Term" buttonHandler={addNameHandler} modalState = {modalState}/>
        </Fragment>
    );
}


export default TermsOfInterest;