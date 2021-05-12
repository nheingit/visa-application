import { Contact } from "../types/Types"
import { useState, useContext } from "react"
import {useHistory} from "react-router"
import {v4 as uuid} from "uuid";
import { ContactCard } from "../components/ContactCard";
import { ContactListContext } from "../context";

export const CreateContact = (({ contacts }:{contacts:Contact[]})=>{
    const [contact, setContact] = useContext(ContactListContext);
    const history = useHistory();
  const [firstName, setFirstName] = useState("New");
  const [email, setEmail] = useState("new@card.com");
  const [phoneNumber, setPhoneNumber] = useState(12112121212);
  const [lastName, setLastName] = useState("Card");

  const HandleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const createdContact = {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          email: email,
          id:uuid()
      }
      const newArray = contacts.concat(createdContact)
      //@ts-ignore
      setContact(newArray)
      alert("Card Created Successfully!")
      history.push("/")
  }

return (
    <div className="p-10">
    <h1 className="text-3xl mb-2" >Create a New Contact</h1>


    <ContactCard 
          id={uuid()}
          lastName={lastName}
          firstName={firstName}
          phoneNumber={phoneNumber}
          email={email}
        />

    <div className="max-w-2xl py-4 px-8 mt-10 bg-gray-200 shadow-lg rounded-lg">
        <form onSubmit={HandleSubmit}>
          <div>
            <label> First Name: </label>
            <input className="mb-4"
              type="text"
              value={firstName}
              onChange={(e: any) => setFirstName(e.target.value)}
            />
            <br/>
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e: any) => setLastName(e.target.value)}
            />
          </div>

          <div className="flex align-middle my-4">
            <label>Email: </label>
            <input
            type="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
            <label> Phone Number: </label>
<input
            type="Number"
            value={phoneNumber}
            onChange={(e: any) => setPhoneNumber(e.target.value)}
          />
          </div>
          <button className="bg-red-400 mb-5 py-2 px-11" type="submit">Submit Card</button>
        </form>
      </div>
    </div>
)
})