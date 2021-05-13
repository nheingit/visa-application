import { Contact } from "../types/Types";
import { useState, useContext, ChangeEvent } from "react";
import { useHistory } from "react-router";
import { v4 as uuid } from "uuid";
import { ContactCard } from "../components/ContactCard";
import { ContactListContext } from "../context";

export const CreateContact = ({ contacts }: { contacts: Contact[] }) => {
  const [contact, setContact] = useContext(ContactListContext);
  const history = useHistory();
  const [formState, setFormState] = useState({
    firstName: "New",
    lastName: "Card",
    email: "new@card.io",
    phoneNumber: 4325551243,
  });

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const createdContact = {
      firstName: formState.firstName,
      lastName: formState.lastName,
      phoneNumber: formState.phoneNumber,
      email: formState.email,
      id: uuid(),
    };
    const newArray = contacts.concat(createdContact);
    //@ts-ignore
    setContact(newArray);
    alert("Card Created Successfully!");
    history.push("/");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-2">Create a New Contact</h1>

      <ContactCard
        id={uuid()}
        lastName={formState.lastName}
        firstName={formState.firstName}
        phoneNumber={formState.phoneNumber}
        email={formState.email}
      />

      <div className="max-w-2xl py-4 px-8 mt-10 bg-gray-200 shadow-lg rounded-lg">
        <form onSubmit={HandleSubmit}>
          <div>
            <label> First Name: </label>
            <input
              name="firstName"
              className="mb-4"
              type="text"
              value={formState.firstName}
              onChange={handleChange}
            />
            <br />
            <label>Last Name:</label>
            <input
              name="lastName"
              type="text"
              value={formState.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="flex align-middle my-4">
            <label>Email: </label>
            <input
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <label> Phone Number: </label>
            <input
              name="phoneNumber"
              type="Number"
              value={formState.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <button className="bg-red-400 mb-5 py-2 px-11" type="submit">
            Submit Card
          </button>
        </form>
      </div>
    </div>
  );
};
