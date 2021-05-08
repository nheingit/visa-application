import * as React from 'react';
import { Contact } from '../types/Types';

import { formatPhoneNumber } from '../utilities/formatPhoneNumber';

const CardHeader = (Person:{firstName: string; lastName: string}):JSX.Element => {
  return  <h2 className="text-gray-800 text-3xl font-semibold">{[Person.firstName, " ", Person.lastName]}</h2>
} 

const CardNumber = (Person:{phoneNumber: number}): JSX.Element => {
  return  <p className="mt-2 text-gray-600">{formatPhoneNumber(Person.phoneNumber)}</p>
}


export const ContactCard = ({firstName, lastName, phoneNumber, email}: Contact) => 
<div className="max-w-md py-4 px-8 bg-gray-200 shadow-lg rounded-lg">
  <div className="flex justify-center md:justify-end">
  </div>
  <div>
    <CardHeader firstName={firstName} lastName={lastName}/>
    <CardNumber phoneNumber={phoneNumber}/>
  </div>
  <div className="flex justify-end mt-4">
    <a href={"mailto:"+email} className="text-xl font-medium text-indigo-500 z-20"><span data-content={email} aria-hidden='true'></span>{email}</a>
  </div>
</div>





