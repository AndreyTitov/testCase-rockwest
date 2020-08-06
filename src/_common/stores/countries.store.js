/**
 * @file
 * Contains Countries store
 */

import {
    decorate,
    observable,
    action,
    computed,
} from 'mobx';
import CountriesService from '../services/countries.service';

class CountriesStore {
    /**
     * Countries data.
     */
    countries = [];

    /**
     * Selected country data.
     */
    selectedCountry = {};

    /**
     * Get Countries Data
     */
    get getCountries() {
        return this.countries;
    }

    /**
     * Get Selected country data.
     */
    get getSelectedCountry() {
        return this.selectedCountry;
    }

    /**
     * Countries data.
     */
    async getCountriesAction() {
        try {
            this.countries = await CountriesService.getCountries();
        } catch (e) {
            throw new Error(e);
        }
    };

    /**
     * Selected country data.
     */
    selectCountry(id) {
        this.selectedCountry = this.countries[id];
    };
}

decorate(CountriesStore, {
    countries: observable,
    selectedCountry: observable,
    getCountries: computed,
    getCountriesAction: action,
    selectCountry: action,
});

export default CountriesStore;
