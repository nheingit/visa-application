import { useContext } from "react"
import { ContactListContext } from "../context"


export const EditContact = (() => {
const [contacts, setContacts] = useContext(ContactListContext)

console.log("this is conext:", contacts)

    return (
        <>
    <h1>EditContac</h1>
       <p>{contacts.lastName}</p>
       </>
        )
}) 