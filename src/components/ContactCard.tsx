import {useState} from "react";
import { Contact, Props } from '../types/Types';
import { formatPhoneNumber } from '../utilities/formatPhoneNumber';
import {Link} from "react-router-dom"

//Displays information about the Contact
const CardContents = (props:Props):JSX.Element =>  <div>{props.children}</div>

//Displays various interactive options available for the Contact
const CardActions = (props:Props):JSX.Element => <div className="flex justify-end mt-4">{props.children}</div>
  

    


//Contact Card Border
const Card = (props:Props):JSX.Element => <div className="max-w-md py-4 px-8 bg-gray-200 shadow-lg rounded-lg">{props.children}</div>


export const ContactCard = ({firstName, lastName, phoneNumber, email, id}: Contact) => 
<Card>
  <CardContents>
    <h2 className="text-gray-800 text-3xl font-semibold">{[firstName, " ", lastName]}</h2>
    <p className="mt-2 text-gray-600">{formatPhoneNumber(phoneNumber)}</p>
  </CardContents>
  <CardActions>
    <Link className="mx-3" to={`/edit/${id}`}>Edit</Link>
    <a href={"mailto:"+email} className="text-xl font-medium text-indigo-500 z-20"><span data-content={email} aria-hidden='true'></span>{email}</a>
  </CardActions>
</Card>





