import gillSans from '../../fonts';
import image from './world-map.png';
import './Headline.css';

const Header = () => (
  <div id="headline" className="flex ma0 justify-center items-center">
    <img className="o-50 w-auto-ns w-50 h-100-ns h-50" alt="world map" src={image} />
    <h1 className="white f2-l f4-m f4-ns f5" style={gillSans}>
      Covid Statistics
      <span className="db">around the world</span>
    </h1>
  </div>
);
export default Header;
