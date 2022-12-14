import './Error404.scss';

import { Link } from 'react-router-dom';

/**
 * Error 404
 * Display the error 404 page
 */
function Error404() {
  return (
    <section className="error404">
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
      <span>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </span>
    </section>
  );
}

export default Error404;
