import { Contact } from '../types/Types'
import { ContactCard } from '../components/ContactCard'
import { useParams } from 'react-router-dom'

export const ViewPage = ({ contacts }:{contacts:Contact[]}) => {
    const {id}:{id:string} = useParams()
    const cardToView = contacts.find((contact)=> contact.id ==id);

    return(
        <div className="p-10">
        {cardToView ? <ContactCard
        id={id}
        firstName={cardToView.firstName}
        lastName={cardToView.lastName}
        email={cardToView.email}
        phoneNumber={cardToView.phoneNumber}
        /> : <h1>Card Not Found</h1>
        }
        </div>
        
    )

}