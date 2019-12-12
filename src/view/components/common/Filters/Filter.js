import React, { Component } from 'react';
import classNames from 'classnames';
import { getOr } from 'lodash/fp';
import { CrossIcon } from '../../../../assets/images';
import DropArrow from "../../../../assets/images/company/drop-arrow.svg";


class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            industryMore: false,
            locationMore: false,
            industryOpen: true,
            locationOpen: true,
            industryMoreOpen: false,
            locationMoreOpen: false,
            industryList: [],
            locationList: [],
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount() {
        const { categoryHeadText } = this.props;
        const industryList = getOr([], 'industry', categoryHeadText);
        const locationList = getOr([], 'location', categoryHeadText);
        let industryMore = false, locationMore = false;
        if (industryList.length > 6) {
            industryMore = true;
        }
        if (locationList.length > 6) {
            locationMore = true;
        }
        this.setState({
            industryList,
            locationList,
            industryMore,
            locationMore
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { categoryHeadText: {
            industry,
            location
        } } = nextProps
        return {
            industryList: industry,
            locationList: location
        }
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.checked;
        const id = target.id;
        const name = target.name;
        let currentState = {
            "name": id,
            "isChecked": value,
            "category": name
        };
        this.props.onFilterChange(currentState);
    }

    handleReset() {
        this.props.onResetClick();
    }

    toggleIndustryMore() {
        this.setState({ industryMoreOpen: !this.state.industryMoreOpen })
    }

    toggleLocationMore() {
        this.setState({ locationMoreOpen: !this.state.locationMoreOpen })
    }

    toggleIndustryView() {
        this.setState({ industryOpen: !this.state.industryOpen })
    }

    toggleLocationView() {
        this.setState({ locationOpen: !this.state.locationOpen })
    }

    renderIndustryList() {
        let { industryMoreOpen, industryList, industryMore, industryOpen } = this.state;
        let listData = []
        if (industryMoreOpen) {
            listData = industryList
        } else {
            listData = industryList.slice(0, 6);
        }
        let filterList = this.getFilterList(listData, 'industry')
        return (<div className="category-wrapper">
            <div className="d-flex justify-content-between">
                <h3 className="d-flex align-items-center justify-content-between  w-100">
                    <span>Industry</span>
                    <span
                        onClick={() => this.toggleIndustryView()}
                        className={classNames("cursor-pointer drop-arrow", { 'rotate': !industryOpen })}
                    >
                        <img src={DropArrow} alt="drop-arrow" />
                    </span>
                </h3>
                {/* <img src={DropArrow} style={{color:'black'}}/>*/}
            </div>
            {industryOpen ?
                <ul className="list-unstyled">
                    {filterList}
                    {
                        industryMore ?
                            (
                                !industryMoreOpen ?
                                    <li className="cursor-pointer more-less" onClick={() => this.toggleIndustryMore()}>+{industryList.length - listData.length} more</li>
                                    :
                                    <li className="cursor-pointer more-less" onClick={() => this.toggleIndustryMore()}> show less</li>
                            )
                            :
                            null
                    }
                </ul>
                : null
            }

        </div>)
    }

    renderLocationList() {
        let { locationMoreOpen, locationList, locationMore, locationOpen } = this.state;
        let listData = []
        if (locationMoreOpen) {
            listData = locationList
        } else {
            listData = locationList.slice(0, 6);
        }
        let filterList = this.getFilterList(listData, 'location')
        return (<div className="category-wrapper">
            <h3 className="d-flex align-items-center justify-content-between w-100">
                <span>Location</span>
                <span
                    onClick={() => this.toggleLocationView()}
                    className={classNames("cursor-pointer drop-arrow", { 'rotate': !locationOpen })}
                >
                    <img src={DropArrow} alt="dorp-arrow" />
                </span>
            </h3>
            {
                locationOpen ?
                    <ul className="list-unstyled">
                        {filterList}
                        {
                            locationMore ?
                                (
                                    !locationMoreOpen ?
                                        <li className="cursor-pointer more-less" onClick={() => this.toggleLocationMore()}>+{locationList.length - listData.length} more</li>
                                        :
                                        <li className="cursor-pointer more-less" onClick={() => this.toggleLocationMore()}> show less</li>
                                )
                                :
                                null
                        }
                    </ul>
                    :
                    null
            }

        </div>)
    }

    getFilterList(data, key) {
        return data.map((element, index) => {
            return (
                <li className="d-flex align-items-center" key={index}>
                    <div className="custom-control custom-checkbox">
                        <input
                            checked={element.isChecked}
                            name={key}
                            type="checkbox"
                            className="custom-control-input"
                            id={element.name}
                            onChange={this.handleInputChange} />
                        <label className="custom-control-label" htmlFor={element.name}>
                            <span className={classNames({ 'font-weight-bold': element.isChecked })}>{element.name}</span>
                        </label>
                    </div>
                </li>
            )
        });
    }

    render() {
        return (
            <div className={this.props.filterClass}>
                <div className="filter-header d-flex align-items-center justify-content-between">
                    <h2>{this.props.headerText} </h2>
                    <p onClick={this.handleReset}>{this.props.resetText}</p>
                    <div className={classNames("cross-icon")} onClick={this.props.filterToggle}>
                        <img src={CrossIcon} className="icons" alt="home" />
                    </div>
                </div>
                {this.renderIndustryList()}
                {this.renderLocationList()}
            </div>
        )
    }
}

export default Filter;
