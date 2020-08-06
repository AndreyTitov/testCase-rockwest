/**
 * @file
 * Contains SelectCountry component.
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    SelectCountryContainer,
    SelectCountrySelector,
    SelectCountryList,
} from './SelectCountry.style';
import FontAwesome from 'react-fontawesome';
import { compose } from 'recompose';
import { inject, observer } from 'mobx-react';

const SelectCountry = (props) => {
    /**
     * Import data and store.
     */
    const {
        data,
        countriesStore,
    } = props;

    /**
     * Data of selected Country
     */
    const [countrySelected, setCountrySelected] = useState({});

    /**
     * Toggle show/hide countries list.
     */
    const [toggleSelect, setToggleSelect] = useState(false);

    /**
     * Set selected country to store.
     */
    const selectCountry = (i) => {
        countriesStore.selectCountry(i);
        setToggleSelect(!toggleSelect);
    };

    /**
     * Get Selected Country
     */
    useEffect(() => {
        setCountrySelected(countriesStore.getSelectedCountry);
    }, [countriesStore.getSelectedCountry]);


    /**
     * Sort Countries by name.
     */
    const sortCountries = (data) => {
        return data.slice().sort(function(a, b){
            const aName = a.name.toUpperCase();
            const bName = b.name.toUpperCase();
            return aName === bName ? 0 : aName < bName ? -1 : 1;
        });
    };

    return (
        <SelectCountryContainer>
            <SelectCountrySelector onClick={() => setToggleSelect(!toggleSelect)} >
                {countrySelected.name ? countrySelected.name : 'Select Country'}
                {toggleSelect ?
                    <FontAwesome className="fa-chevron-up"
                                 name="chevron-up"
                                 size="lg" /> :
                    <FontAwesome className="fa-chevron-down"
                                 name="chevron-down"
                                 size="lg" />}
            </SelectCountrySelector>
            {toggleSelect && (
                <SelectCountryList>
                    <ul>
                        {sortCountries(data).map((country, i) => (
                            <li
                                key={country.name}
                                onClick={() => selectCountry(i)}
                            >
                                <div className="country-item-image">
                                    <img src={country.flag} alt={country.name}/>
                                </div>
                                <div className="country-item-name">
                                    {country.name}
                                </div>
                            </li>
                        ))}
                    </ul>
                </SelectCountryList>
            )}
        </SelectCountryContainer>
    );
};

SelectCountry.propTypes = {
    data: PropTypes.array.isRequired,
};

export default compose(
    inject(
        'countriesStore'
    ),
)(observer(SelectCountry));

