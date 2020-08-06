import React from 'react';
import { observer } from 'mobx-react';
import CountriesForm from './CountriesForm/CountriesForm.view';

function App() {

    return (
        <>
            <div className="App">
                <CountriesForm />
            </div>
        </>
    );
}

export default observer(App);
