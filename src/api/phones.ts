import { Phone } from "../types/Phone"
import { service } from "../utils/service"

export const getPhones = () => {
  return service.get<Phone[]>('/phones')
}

export const getOnePhone = (id: string) => {
  return service.get<Phone>(`/phones/${id}`)
}