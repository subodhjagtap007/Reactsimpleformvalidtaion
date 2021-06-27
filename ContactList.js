import React from "react";
import ContactCard from "./ContactCard";


const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={BaseAudioContext}></ContactCard>
        );
    });  
    return ( 
        
        <div className="ui celled List">
           {renderContactList}
        </div>);
    
};
export default ContactList;