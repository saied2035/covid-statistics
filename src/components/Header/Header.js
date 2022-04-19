import { IoMdSettings } from 'react-icons/io';
import './Header.css';
import gillSans from '../../fonts';

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
      <div id="headline" className="flex ma0 justify-end items-center relative">
        <h1 className="white f2-l f3-m f4-ns f4" style={gillSans}>Covid Statistics around the world</h1>
        <div className="absolute" />
      </div>
    </>
  );
};
export default Header;
