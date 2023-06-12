import { Link } from 'react-router-dom';
import './PageNotFound.scss'

export const PageNotFound = () =>
  <>
    <div className='not_found_section'>
      <p className='not_found_section__error_code'>404</p>
      <h1 className='not_found_section__title'>page not found</h1>
      <p className='not_found_section__message'>The Page you’re looking for was not found. Probably It’s Deleted, click the button below to go Home.</p>
      <Link className='not_found_section__back_to_home' to={`/home`}>Go to home</Link>
    </div>
  </>