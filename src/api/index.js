import { CONTACTS_URL } from "../constants"

//  API call function is defined here

export const getContactsList = async () => {
    const res = await (await fetch(CONTACTS_URL)).json()
    return res;
}