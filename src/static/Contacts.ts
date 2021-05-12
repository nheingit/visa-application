import { Contact } from "../types/Types";
import { v4 as uuid } from "uuid";

export const Contacts: Array<Contact> = [
  {
    id: uuid(),
    firstName: "Noah",
    lastName: "Hein",
    phoneNumber: 15124009351,
    email: "me@nhein.dev",
  },
  {
    id: uuid(),
    firstName: "Ana",
    lastName: "Solis",
    phoneNumber: 15122632955,
    email: "ASolis@outlook.com",
  },
  {
    id: uuid(),
    firstName: "Lamar",
    lastName: "Brown",
    phoneNumber: 3134567819,
    email: "LBrown@thunderbird.com",
  },
  {
    id: uuid(),
    firstName: "Jane",
    lastName: "Doe",
    phoneNumber: 1234567890,
    email: "JDoe@yahoo.com",
  },
];
