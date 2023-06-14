import { Link, useLocation } from "react-router-dom";
import { PhoneDetails } from "../../types/PhoneDetails";
import './Breadcrumbs.scss';

interface Props {
  item: PhoneDetails | null;
}

export const Breadcrumbs: React.FC<Props> = ({ item }) => {
  const location = useLocation();
  
  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter(Boolean)
    .map(crumb => {
      currentLink += `/${crumb}`
      let name = ''
      if (item && crumb.includes('apple')) {
        name = item.name
      } 

      return (
        <div className="breadcrumbs__crumb" key={crumb}>
          <Link to={currentLink} className="breadcrumbs__crumb-link">{name || crumb}</Link>
        </div>
      )
    })
  return (
    <>
      {crumbs}
    </>
  );
}