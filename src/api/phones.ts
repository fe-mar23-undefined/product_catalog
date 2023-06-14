import { Phone } from "../types/Phone"
import { PhoneDetails } from "../types/PhoneDetails"
import { service } from "../utils/service"

export const getPhones = () => {
  return service.get<Phone[]>('/phones')
}

export const getOnePhone = (phoneId: string) => {
  return service.get<PhoneDetails>(`/phones/${phoneId}`)
}