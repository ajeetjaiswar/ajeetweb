import React from 'react';
import classNames from 'classnames';
import { Profile } from '../../common';
import { Link } from 'react-router-dom';
import {
    CultureIcon, ReservationIcon, LearningApportunity,
    Maternity, Safety, WorkBalance, WorkSatisfaction, Wallet, CompanyPicture, PaddingMapMarker, Industry
} from '../../../../assets/images';
import ReactImageFallback from "react-image-fallback";
import { Tooltip } from 'reactstrap';
import { hyphenSeparatedUrls } from '../../../../helpers/helperFunction';

var imageDict = {
    "Culture": CultureIcon,
    "Safety": Safety,
    "Learning Opportunity": LearningApportunity,
    "Maternity Benefits": Maternity,
    "Female Representation": ReservationIcon,
    "Job Satisfaction": WorkSatisfaction,
    "Work Life Balance": WorkBalance,
    "Salary Benefits": Wallet
}

class CompanyCard extends React.Component {
    state = {};

    toggle = targetName => {
        if (!this.state[targetName]) {
            this.setState({
                ...this.state,
                [targetName]: {
                    tooltipOpen: true
                }
            });
        } else {
            this.setState({
                ...this.state,
                [targetName]: {
                    tooltipOpen: !this.state[targetName].tooltipOpen
                }
            });
        }
    };

    isToolTipOpen = targetName => {
        return this.state[targetName] ? this.state[targetName].tooltipOpen : false;
    };

    render() {
        let props = this.props;
        let top3personaratings = null;
        if (props.Company.ratings && props.Company.ratings > 0) {
            top3personaratings = props.Company.personas.sort((a, b) => Number(b.rating) - Number(a.rating)).slice(0, 3);
        }
        let personaIcon = top3personaratings ? top3personaratings.filter(e => e.rating > 3.5).map((element, index) => {
            return (
                <li>
                    <div>
                        <span key={`div-${index}`}>
                            <img src={imageDict[element.name]} alt="company-card" id={`btn-${props.Company._id}-${index}`} />
                        </span>
                        <Tooltip
                            placement="bottom"
                            isOpen={this.isToolTipOpen(`btn-${props.Company._id}-${index}`)}
                            target={`btn-${props.Company._id}-${index}`}
                            toggle={() => this.toggle(`btn-${props.Company._id}-${index}`)}>
                            {element.name}
                        </Tooltip>
                    </div>
                </li>
            )
        }) : null;
        let location = props.Company.headoffice ? props.Company.headoffice : (props.Company.otherlocations && props.Company.otherlocations.length > 0) ? props.Company.otherlocations[0] : ''


        return (
            <div className="company-card" key={props.Company._id}>
                <Link to={`/company/about/${hyphenSeparatedUrls(props.Company.name)}/${props.Company._id}`}>
                    <div className="picture-wrapper">
                        <div className="logo-image"
                            className={classNames('company-picture', { 'company-image': props.Company.image || props.Company.images }, { 'company-logo': !props.Company.image })}>
                            <ReactImageFallback
                                fallbackImage={CompanyPicture}
                                src={props.Company.image || (props.Company.images ? (props.Company.images.length > 0 ? props.Company.images[0] : props.Company.logo) : props.Company.logo)} />
                        </div>
                        <ul className="amenities list-unstyled d-flex align-items-center">
                            {personaIcon}
                        </ul>
                        <div className="company-bookmark">
                            <i className="kool-bookmark"></i>
                        </div>
                    </div>
                    <div className="company-card-content">
                        <div className="card-head">
                            <div className="profile-wrapper d-flex align-items-center">
                                <Profile srcImage={props.Company.logo} />
                                <h3 className="text-break text-orange">
                                    {props.Company.name}
                                </h3>
                                <div className="badge koolk-badge-orange-opacity">
                                    <span>{(props.Company.ratings).toFixed(1)}</span>
                                </div>
                            </div>
                        </div>
                        <ul className="list-unstyled company-about">
                            <li className="d-flex align-items-center">
                                <span className="facility-icon">
                                    <img src={PaddingMapMarker} alt="map-marker"/>
                                </span>
                                <span className="facility-text text-truncate">{location}</span>
                            </li>
                            <li className="d-flex align-items-center">
                                <span className="facility-icon"> <img src={Industry} alt="industry-icon"/> </span>
                                <span className="facility-text text-truncate">{props.Company.industry} </span>
                            </li>
                        </ul>
                    </div>
                </Link>
            </div>
        );
    }
};

export default CompanyCard;
