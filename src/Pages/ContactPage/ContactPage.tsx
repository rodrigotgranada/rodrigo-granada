import CardList from "../../Components/CardList/CardList"
import { contacts } from "../../Utils/constants"

const ContactPage = () => {
    return (
        <>
            <div className="text-3xl text-center">Entre em contato comigo:</div>
            {contacts && contacts.length > 0 && (
                <CardList skills={contacts} ListClasses="social" CardClasses="py-4 px-2 w-full mx-auto flex flex-col cursor-pointer justify-between gap-2 rounded-lg bg-cardBgColor text-center ring-4 ring-textColor ring-400 hover:ring-textColor hover:ring-500 transition ease-in-out hover:-translate-y-1 hover:scale-105" />
            )}

        </>
    )
}

export default ContactPage