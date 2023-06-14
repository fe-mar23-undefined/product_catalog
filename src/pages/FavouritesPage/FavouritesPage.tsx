import { CardLayout } from "../../components/CardLayout";
import { useGlobalContext } from "../../context/GlovalContextProvider"

export const FavouritesPage = () => {
  const {favourites} = useGlobalContext();
return (
    <div className="favorites-page">
      <h1>Favourites</h1>
      <p>{favourites.length} items</p>
      {favourites.length > 0 ? 
      (<div className="favorites-page__items">
        {favourites.map(favItem => <CardLayout phone={favItem} />)}
      </div>)
      : <p>I dont like anything</p>
      }
    </div>
  )
}