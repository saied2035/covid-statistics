import { useSelector, shallowEqual } from 'react-redux';
import Country from './Country/Country';
import gillSans from '../../fonts';
import loading from '../../loading.gif';
import './Countries.css';

const Countries = () => {
  const countryList = useSelector(
    (state) => (state.countriesReducer.filteredCountries ? state.countriesReducer.filteredCountries
      : state.countriesReducer.countries), shallowEqual,
  );
  const wait = useSelector((state) => state.countriesReducer.wait, shallowEqual);

  return (
    wait ? <img className="db center" width="100" height="100" alt="loading" src={loading} />
      : (
        <>
          <h2 className="white f6 tracked fw3 pa2" style={{ ...gillSans, background: '#35548b' }}>
            STATS BY COUNTRY
          </h2>
          <main id="countries-container">
            {countryList.map((country) => (
              <Country
                key={country.id}
                pageUrl={country.id}
                image={country.image}
                name={country.name}
                total={country.total}
                newCases={country.newCases}
              />
            ))}
            {!wait && !countryList.length
              && <p className="white f4 fw4 tc pa3">No Matching Results</p>}
          </main>
        </>
      )
  );
};

export default Countries;
