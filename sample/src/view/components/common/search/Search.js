import React from 'react';
import { SearchMobile } from '../../../../assets/images';
import AsyncSelect from 'react-select/async';
import { searchCompany } from '../../../../services/searchService';
import ReactHtmlParser from 'react-html-parser';

const loadOptions = (inputValue, callback) => {
    let query = inputValue;
    searchCompany(query).then((response) => {
        callback(createOptions(response.data.hits.hits, query))
    });
};
const createOptions = (searchArray, selectedValue) => {
    let result = searchArray.map((i) => {
        if (i._source.type == "COMPANYLOCATION" || i._source.type == "COMPANYINDUSTRY") {
            return ({ value: ReactHtmlParser(i._source.keyword), label: ReactHtmlParser(i._source.description), type: i._source.type, url: i._source.url })
        }
        return ({ value: ReactHtmlParser(i._source.keyword), label: ReactHtmlParser(i._source.keyword), type: i._source.type, url: i._source.url })
    });
    if (typeof (Storage !== undefined) && selectedValue.length > 0) {
        localStorage.setItem('search-result', JSON.stringify(result || []));
        localStorage.setItem('search-value', selectedValue)

    }
    return result
}

const onKeyDown = (event) => {
    switch (event.key) {
        case 'Enter':
            event.preventDefault();
            let searchval = localStorage.getItem("search-value");
            if (searchval && searchval.length > 1) {
                window.location.href = "/search";
            }
            break;
    }
}
const handleSearchButton = () => {
    let searchval = localStorage.getItem("search-value");
    if (searchval && searchval.length > 1) {
        window.location.href = "/search";
    }
}

const getValue = (selectedOption) => {
    window.location.href = window.origin + selectedOption.url;
}

const Search = props => {
    return (
        <div className={props.searchClass}>
            {/* <InputBox inputType={props.inputType} inputClass={props.inputClass} inputName={props.inputName} inputPlaceholder={props.inputPlaceholder}/>*/}
            <img className="search-icon" src={SearchMobile}
                onClick={handleSearchButton}
                alt="search" />
            <AsyncSelect
                cacheOptions
                loadOptions={loadOptions}
                getOptionValue={loadOptions => loadOptions.value}
                defaultOptions
                onKeyDown={onKeyDown}
                placeholder="Search by companies, location, industry"
                styles={props.inputClass}
                onChange={getValue}
                noOptionsMessage={() => "No Results Found"}
            />
        </div>
    );
}

export default Search;
