import { useEffect, useState } from 'react';
import { getPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';
import { Carousel } from '../../components/Carousel';
import './AccessoriesPage.scss';

export const AccessoriesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([])

  const loadPhones = async () => {
    try {

      const loadedPhones = await getPhones();
      setPhones(loadedPhones);

    } catch (error) {

    } finally {

    }
  }

  useEffect(() => {
    loadPhones();
  }, []);

return (
  <>
  <div className="accessories-page">
    <h1 className="heading--h1">Accessories Page</h1>
      <Carousel phones={phones} title="Brand new models"/>
  </div>
  </>
  )
}