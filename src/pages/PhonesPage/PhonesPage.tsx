import { useEffect, useState } from "react"
import phonesFromServer from "../../api/phones.json";
import { Phone } from "../../types/Phone";

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([])

  useEffect(() => {
    setPhones(phonesFromServer)
  }, []);

  return (
    <>
      <h1>Mobile phones</h1>
      <p>{phones.length} models</p>
      <p>sort and pagination</p>
      <div className="phones">
        {phones.map(phone => <p>{phone.name}</p>)}
      </div>
    </>
  )
}