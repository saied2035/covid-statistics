import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import gillSans from '../../fonts';
import './Navbar.css';

const Header = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <header className="flex justify-between items-center pa3 white">
      <p className="f4 fw5 items-center">
        <Link to="/"><IoIosArrowBack className="white f4 fw5 mr3 mb1 v-mid" /></Link>
        {year}
      </p>
      <p className="f4 fw3" style={gillSans}>most views</p>
      <IoMdSettings className="f4" />
    </header>
  );
};
export default Header;
