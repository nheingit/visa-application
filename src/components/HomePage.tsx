import React from 'react';
import { Contact } from '../types/Types';
import { ContactCards } from './ContactCards';

export const HomePage = (({ contacts }:{contacts:Contact[]})=>{

    return (
        <ContactCards contacts={contacts}/>
    )

})