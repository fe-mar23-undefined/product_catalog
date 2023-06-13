import { Link } from 'react-router-dom';
import './PageNotFound.scss'

export const PageNotFound = () =>
  <>
    <div className='not-found-section'>
      <p className='not-found-section__error-code'>404</p>
      <h1 className='not-found-section__title'>page not found</h1>
      <p className='not-found-section__message'>The Page you’re looking for was not found. Probably It’s Deleted, click the button below to go Home.</p>
      <Link className='not-found-section__back-to-home' to={`/home`}>Go to home</Link>
    </div>
  </>