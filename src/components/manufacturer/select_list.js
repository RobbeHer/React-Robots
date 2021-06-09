import React from 'react';

import store from '../../store';

const SelectList = ( { filterManufacturersUsa, filterManufacturersEu } ) => {
    return (
        <div className="post-container">
                <h1 className="post_heading">Select filter</h1>
                <form className="center">
                    <div className="radio-inline" >
                        <label>
                            <input type="radio" name="optradio" onClick={() => {filterManufacturersUsa(store.getState().manufacturers)}}/>
                            USA
                        </label>
                    </div>
                    <div className="radio-inline">
                        <label>
                            <input type="radio" name="optradio"  onClick={() => {filterManufacturersEu(store.getState().manufacturers)}}/>
                            EU
                        </label>
                    </div>
                </form>
            </div>
    );
};

export default SelectList;