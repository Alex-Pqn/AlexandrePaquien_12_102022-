import './DashboardAside.scss';

import { Link } from 'react-router-dom';

import DefaultIconCard from '../../Default/DefaultIconCard/DefaultIconCard';

import IconYoga from '../../Icon/IconYoga/IconYoga';
import IconSwimming from '../../Icon/IconSwimming/IconSwimming';
import IconCycling from '../../Icon/IconCycling/IconCycling';
import IconAlter from '../../Icon/IconAlter/IconAlter';

/**
 * Dashboard Aside
 */
const DashboardAside = () => {
  const copyrightYear = new Date().getFullYear();

  const YogaIconCard = DefaultIconCard(IconYoga);
  const SwimmingIconCard = DefaultIconCard(IconSwimming);
  const CyclingIconCard = DefaultIconCard(IconCycling);
  const AlterIconCard = DefaultIconCard(IconAlter);

  return (
    <div className="activities-aside">
      <nav className="activities-aside__navbar">
        <ul>
          <li>
            <Link to="/">
              <YogaIconCard iconColor="#FF0101" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <SwimmingIconCard iconColor="#FF0101" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <CyclingIconCard iconColor="#FF0101" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <AlterIconCard iconColor="#FF0101" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="activities-aside__copyright">
        <span>Copyright, SportSee {copyrightYear}</span>
      </div>
    </div>
  );
};

export default DashboardAside;
