import { useContext } from "react"
import { ContactListContext } from "../context"
import { ContactCard } from "../components/ContactCard"

import { useLocation } from "react-router"
import { Contact } from "../types/Types"


export const EditContact = (({ contacts }:{contacts:Contact[]}) => {
    const location = useLocation()
    // the 6 will take care of  the /edit/ portion of the pathname leaving me with the contact id that we clicked on.
    const cardId = location.pathname.substring(6)
    const editedCard = contacts.find( contact => contact.id == cardId)
    console.log(editedCard)

    return (
        <div className="p-8">
        <ContactCard
        id={editedCard!.id}
        lastName={editedCard!.lastName}
        firstName={editedCard!.firstName}
        phoneNumber={editedCard!.phoneNumber}
        email={editedCard!.email}/>
       </div>
        )
}) 