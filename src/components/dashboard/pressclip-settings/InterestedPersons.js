import { Fragment, useState } from 'react';
import AddButton from './AddButton';
import PersonCard from './PersonCard';
import AddModal from './AddModal';



const InterestedPersons = (props) => {

    const modalState= useState(false);
    const [modal, setModal] = modalState;


    let personCards;

    if(props.persons.length>0){
         personCards = props.persons.map((person,index) => {
            return <PersonCard key={index} personName={person}/>
        });
    }


    const addButtonHandler  = () => {
        setModal(true);
        //setPersons([...persons, name]);
    }

    const addNameHandler = (name) => {
        const persons = [...props.persons,name];
        props.savePersonsHandler(persons);

    }



    return (
        <Fragment>
            {personCards && personCards }
            <AddButton buttonHandler={addButtonHandler} label='Add Name'/>
            <AddModal label="New Name" buttonHandler={addNameHandler} modalState = {modalState}/>
        </Fragment>
    );
}


export default InterestedPersons;