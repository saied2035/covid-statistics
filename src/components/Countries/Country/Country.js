import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Country = ({
  name, image, total, newCases, pageUrl,
}) => (
  <NavLink
    to={`${pageUrl}`}
    className="country-card grow pointer flex flex-column justify-end items-end"
    style={{ minHeight: '25vh' }}
  >
    <div
      style={{
        width: '100%',
        height: '70%',
        background: ` url(${image}) no-repeat 50% 50%`,
        backgroundSize: '50% 80%',
        opacity: '0.2',
      }}
    />
    <p className="pr3 white f4 b" style={{ marginLeft: '100%' }}>{name}</p>
    <span className="db pr3 white f5 b">
      Total:
      {` ${total}`}
    </span>
    <span className="db pr3 white f5 b">
      New Cases:
      {` ${newCases}`}
    </span>
  </NavLink>
);
Country.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  newCases: PropTypes.number.isRequired,
  pageUrl: PropTypes.string.isRequired,
};
export default Country;
