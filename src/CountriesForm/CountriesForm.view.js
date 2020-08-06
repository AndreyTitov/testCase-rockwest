/**
 * @file
 * Contains countries form.
 * */

import React, { useEffect, useState } from 'react';
import {
    CountriesFormContainer,
    CountriesFormWrapper
} from './CountriesForm.style';
import { compose } from 'recompose';
import { inject, observer } from 'mobx-react';
import SelectCountry from '../_common/components/SelectCountry';

const CountriesForm = (props) => {
    const { countriesStore } = props;
    /**
     * Data of Countries.
     * */
    const [countriesData, setCountriesData] = useState([]);

    /**
     * Data of selected Country
     */
    const [countrySelected, setCountrySelected] = useState({});

    /**
     * Fetching data Countries from api
     * */
    useEffect(() => {
        const fetchData = async () => {
            await countriesStore.getCountriesAction();
        };
        fetchData();
    }, [countriesStore]);

    /**
     * Catching Countries data form store.
     */
    useEffect(() => {
        const data = countriesStore.getCountries;
        if (data) setCountriesData(data);
    }, [countriesStore.getCountries]);

    /**
     * Get Selected Country
     */
    useEffect(() => {
    setCountrySelected(countriesStore.getSelectedCountry);
    }, [countriesStore.getSelectedCountry]);

    return (
        <CountriesFormContainer>
            <SelectCountry
                data={countriesData} />
            <CountriesFormWrapper>
                <form>
                    <input
                        type="text"
                        placeholder="Country"
                        defaultValue={countrySelected.name}
                        readOnly={true}
                    />
                    <input
                        type="text"
                        placeholder="Capital"
                        defaultValue={countrySelected.capital}
                        readOnly={true} />
                    <input
                        type="text"
                        placeholder="Region"
                        defaultValue={countrySelected.region}
                        readOnly={true} />
                    <input
                        type="text"
                        placeholder="ISO country code 2 letters"
                        defaultValue={countrySelected.alpha2Code}
                        readOnly={true} />
                    <input
                        type="text"
                        placeholder="ISO country code 3 letters"
                        defaultValue={countrySelected.alpha3Code}
                        readOnly={true} />
                </form>
            </CountriesFormWrapper>
        </CountriesFormContainer>
    );
};

export default compose(
    inject(
        'countriesStore'
    ),
)(observer(CountriesForm));
