import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { filerCountries } from '../../Redux/countries/countries';

const Search = () => {
  const notDisplay = useLocation().pathname.replace('/', '');
  const input = useSelector((state) => state.regionsReducer.input);
  const dispatch = useDispatch();
  return (
    <input
      className={`${notDisplay.length ? 'dn' : 'absolute'} f5 b self-end br4 bab--black pa1 pl3 pr2 bg-white`}
      style={{ borderWidth: '2px' }}
      type="text"
      value={input}
      placeholder="Search Country"
      onChange={(e) => {
        dispatch(filerCountries(e.target.value));
      }}
    />
  );
};
export default Search;
