import { Contact } from "../types/Types";
import { ContactCards } from "../components/ContactCards";
import { Link } from "react-router-dom";

export const HomePage = ({ contacts }: { contacts: Contact[] }) => {
  return (
    <>
      <Link
        className=" ml-10 text-white rounded-lg shadow-lg text-3xl bg-gradient-to-r from-visa-gold via-gray-500 to-visa-blue p-4 py-2 px-4"
        to="/create"
      >
        Create Contact
      </Link>
      <ContactCards contacts={contacts} />
    </>
  );
};
