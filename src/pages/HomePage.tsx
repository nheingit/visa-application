import { useState }from 'react';
import { Contact } from '../types/Types';
import { ContactCards } from '../components/ContactCards';

export const HomePage = (({ contacts }:{contacts:Contact[]})=>{
    return (

        <ContactCards contacts={contacts}/>
    )

})