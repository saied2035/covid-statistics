import { useSelector } from 'react-redux';
import Country from './Country/Country';
import gillSans from '../../fonts';
import loading from '../../loading.gif';
import './Countries.css';

const Countries = () => {
  const countryList = useSelector((state) => state.countriesReducer.countries);
  return (
    !countryList.length ? <img className="db center" width="100" height="100" alt="loading" src={loading} />
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
          </main>
        </>
      )
  );
};

export default Countries;
