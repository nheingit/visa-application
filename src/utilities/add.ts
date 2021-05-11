import React, {useContext} from 'react';

import { Contact } from '../types/Types';
import {ContactListContext} from "../context"


export const AddCard = (context:any) =>{

    console.log("Here is contacts passed from useContext: ", context);
    let newContact = {context}

    console.log("this is the variable that we passed contacts into: ", context)


}
