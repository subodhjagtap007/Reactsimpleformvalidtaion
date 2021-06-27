import React, {useState , useEffect} from "react";
import { uuid } from 'uuidv4';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList"
// import './App.css';

function App() {
   const LOCAL_STORAGE_KEY= "contacts";

   const [contacts, setContacts] = useState([]);
   const addContactHandler=(contact) => {
     console.log(contact);
     setContacts([...contacts, {id:uuid(), ...contacts} ]);
   };

   const removeContactHandler = (id) => {
     const newContactList = contacts.filter((contact) => {
       return contact.id!==id;
     });

     setContacts(newContactList);
   }
   useEffect(() => {
    const retriverContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)));
    if(retriverContacts) setContacts(retriverContacts);
  }, [contacts]);


   useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


  return (
   <div className="ui container">
   <Header/>
   <AddContact addContactHandler={addContactHandler}/>
   <ContactList contacts={contacts} getContactId={removeContactHandler}/>
   </div>
  );
};

export default App;
