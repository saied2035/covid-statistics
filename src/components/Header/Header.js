import { IoMdSettings } from 'react-icons/io';
import './Header.css';
import gillSans from '../../fonts';
import image from './world-map.png';

const Header = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <header className="flex justify-between items-center pa3 white">
        <p className="f4 fw5">{year}</p>
        <p className="f4 fw3" style={gillSans}>most views</p>
        <IoMdSettings className="f4" />
      </header>
      <div id="headline" className="flex ma0 justify-center items-center">
        <img className="w-auto-ns w-50 h-100-ns h-50" alt="world map" src={image} />
        <h1 className="white f2-l f4-m f4-ns f5" style={gillSans}>
          Covid Statistics
          <span className="db">around the world</span>
        </h1>
      </div>
    </>
  );
};
export default Header;
