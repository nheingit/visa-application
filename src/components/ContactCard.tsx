import { object } from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { ContactListContext } from "../context";
import { Contact, Props } from "../types/Types";
import { formatPhoneNumber } from "../utilities/formatPhoneNumber";

//Displays information about the Contact
const CardContents = (props: Props): JSX.Element => <div>{props.children}</div>;

//Displays various interactive options available for the Contact
const CardActions = (props: Props): JSX.Element => (
  <div className="flex justify-end mt-4">{props.children}</div>
);

//Contact Card Border
const Card = (props: Props): JSX.Element => {
  return (
    <div className="max-w-md py-4 px-8 bg-gray-200 shadow-lg rounded-lg">
      {props.children}
    </div>
  );
};

export const ContactCard = ({
  firstName,
  lastName,
  phoneNumber,
  email,
  id,
}: Contact) => {
  const [contact, setContact] = useContext(ContactListContext)

  const deleteCard = () => {
    
    const confirmation = window.confirm("are you sure you want to delete?")

     if(confirmation){
    const arr:Contact[] = []
    //This will Loop through contact and turn it from an object of objects to an array of objects
    Object.keys(contact).forEach(key => Object.keys(key).forEach( object => arr.push(
      //@ts-ignore
      contact[key[object]]
    ))) 
    const contactListWithoutDeletedContact = arr.filter((item)=> item.id !== id)
    //@ts-ignore
    setContact(contactListWithoutDeletedContact)
     }
    
}


  return (
    <Card>
      <CardContents>
        <h2 className="text-gray-800 text-3xl font-semibold">
          {[firstName, " ", lastName]}
        </h2>
        <p className="mt-2 text-gray-600">{formatPhoneNumber(phoneNumber)}</p>
      </CardContents>
      <CardActions>
        <Link onClick={deleteCard} className="mr-3 mt-1" to="#">
          Delete
        </Link>
        <Link className="mr-3 mt-1" to={`/edit/${id}`}>
          Edit
        </Link>
        <a
          href={"mailto:" + email}
          className="text-xl font-medium text-indigo-500 z-20"
        >
          <span data-content={email} aria-hidden="true"></span>
          {email}
        </a>
      </CardActions>
    </Card>
  );
};
