import { useLocation } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import gillSans from '../../fonts';
import Search from '../Search/Search';
import { getImage } from '../../Redux/apiFunctions';
import './Headline.css';

const Headline = () => {
  const { pathname } = useLocation();
  const mapCondition = pathname.replace('/', '');
  const newCases = useSelector((state) => state.regionsReducer.newCases, shallowEqual);
  const countryName = mapCondition.replace(/[_]/g, '-').replace('*', '').replace(',', '').toUpperCase();
  return (
    <div id="headline" className="flex ma0 justify-center items-center relative">
      <img
        className={`${!mapCondition.length ? 'db' : 'dn'} o-30 w-auto-ns w-50 h-100-ns h-50`}
        alt="map"
        src={getImage('world-map')}
      />
      <img
        className={`${mapCondition.length ? 'db' : 'dn'} o-30 w-auto-ns w-50 h-100-ns h-50`}
        alt="map"
        src={mapCondition.length ? getImage(mapCondition) : '#'}
      />

      <h1 className="white f2-l f4-m f4-ns f5" style={gillSans}>
        {!mapCondition.length ? 'Covid Statistics' : countryName}
        <span className="db">
          {!mapCondition.length ? 'around the world' : `Confirmed New Cases: ${newCases}`}
        </span>
      </h1>
      <Search />
    </div>
  );
};
export default Headline;
