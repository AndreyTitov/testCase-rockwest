/**
 * @file
 * Contains Stores.
 */

import CountriesStore from '../_common/stores/countries.store';

export {
    CountriesStore,
};

const countriesStore = new CountriesStore();

export default {
    countriesStore,
};