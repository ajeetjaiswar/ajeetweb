import React, {PureComponent} from 'react';
import classNames from 'classnames';
import {Profile, ProfileDetail, FlatDropdown} from '..';
import {ProfileImage} from '../../../../assets/images';
import Description from './Resources/Description/Description';
import Tags from './Resources/Tags/Tags';
import ImageCard from './Resources/Collage/Image/ImageCard';
import Aminities from './Resources/Aminities/Aminities';
import VideoCard from './Resources/Collage/Video/VideoCard';
import {Dropdown, DropdownToggle} from 'reactstrap';

class WrapperCard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            line: false,
            feedActionDropdown: false
        }
    }

    feedActionDropdownToggle = () => {
        this.setState(prevState => ({
            feedActionDropdown: !prevState.feedActionDropdown
        }));
    }

    // change see more property
    seeMore = () => {
        this.setState({line: !this.state.line})
    }

    componentDidMount() {
        const width = this.divElement.clientWidth;
        this.setState({height: width});

    }

    componentDidUpdate() {
        const width = this.divElement.clientWidth;
        this.setState({height: width});

    }

    // more than 5 resource
    combineResource = (data) => {
        const totalResource = [...data.resource.videoUrl, ...data.resource.image]
        const totalLength = totalResource.length
        const displayResource = totalResource.slice(0, 4);
        return displayResource.map(data => {
            let displayResourceData;
            if (data.type) {
                displayResourceData = <div className="source-wrapper"
                                           ref={(divElement) => this.divElement = divElement}
                                           style={{height: this.state.height}}
                >
                    <VideoCard
                        Video={data.url}
                    />
                </div>
            } else {
                displayResourceData = <div className="source-wrapper flex-wrap"
                                           ref={(divElement) => this.divElement = divElement}
                                           style={{height: this.state.height}}>
                    <ImageCard url={data}/>
                </div>
            }

            return (
                <>
                    {displayResourceData}
                    {
                        totalLength > 4 ?
                            <div className="source-wrapper counting-extra"
                                 style={{height: this.state.height, width: this.state.height}}>
                                <div className="counting-extra-inner d-flex align-items-center justify-content-center">
                                    {`+${totalLength - 4}`}
                                </div>
                            </div>
                            :
                            null
                    }

                </>
            )
        });
    }

    answerPost = (data) => {
        return data.resource.link.map(data => {
            let displayLinks;
            displayLinks = <div className="post-link">
                <div className="link-thumb">
                    <img src={data.meta.thumbNail} alt={data.meta.title}/>
                </div>
                <div className="link-url">
                    <a href={data.url} className="text-truncate">
                        {data.url}
                    </a>
                </div>
                <p>{data.meta.title}</p>
            </div>
            return (
                displayLinks
            )
        })
    }

    resourceCount = (data) => {
        const videoCount = data.resource.videoUrl.length;
        const imageCount = data.resource.image.length;

        return videoCount + imageCount;
    }

    render() {
        const {data, dataKey} = this.props;
        return (
            <div className="card-wrapper" key={dataKey}>
                <div className="card-head">
                    <ul className="d-flex align-items-center list-unstyled">
                        <li>
                            <div className="profile-wrapper">
                                <Profile srcImage={ProfileImage} alt={ProfileImage}/>
                            </div>
                        </li>
                        <li>
                            <ProfileDetail
                                {...data} />
                        </li>
                        <li className="ml-auto">
                            <Dropdown className="actions" isOpen={this.state.feedActionDropdown}
                                      toggle={this.feedActionDropdownToggle}>
                                <DropdownToggle>
                                    <i className="kool-more" aria-haspopup="true" aria-expanded="false"></i>
                                </DropdownToggle>
                                <FlatDropdown
                                    FlatDropdownWrapClass={'flat-dropdown-wrapper'}
                                    listWrapClass={'flat-list'}
                                    itemClass={'flat-item'}
                                />
                            </Dropdown>
                        </li>
                    </ul>
                </div>
                {/* if text */}
                <div className="description">
                    {/* text */}
                    <Description/>
                </div>
                {/* if tag */}
                <div className="tags">
                    <ul className="list-unstyled">
                        {/* tags */}
                        <Tags/>
                    </ul>
                </div>
                {/* aminities */}

                <div className="resources">
                    {/* if image/video*/}
                    <div className="collage">
                        <div className={classNames({
                            single: this.resourceCount(data) === 1,
                            double: this.resourceCount(data) === 2,
                            triple: this.resourceCount(data) === 3,
                            four: this.resourceCount(data) === 4,
                            'more-then-four': this.resourceCount(data) > 4
                        })}>
                            <div className="resource-wrapper flex-wrap d-flex">
                                {this.combineResource(data)}
                            </div>
                        </div>
                    </div>

                    {/* if links */}
                    {/* <div className="feed-links">
                        <Links />
                    </div> */}
                </div>

                {/* link if any */}
                {/* <div className="post-link-wrapper">
                    {this.answerPost(data)}
                </div> */}

                {/*if reply */}
                <div className="aminities">
                    {/* aminites will be there */}
                    <Aminities
                        likes="kool-Applaud-clicked"
                        comments="kool-Respond"
                        share="kool-Share"
                        bookmark="kool-bookmark"
                    />
                </div>
                <div className="reply">
                    {/* comment header */}
                    <div className="comment-header">
                        <h3>04 Responses</h3>
                    </div>
                    {/* comment body */}
                    <div className="comment-body d-flex">
                        <div className="profile-wrapper">
                            <Profile srcImage={ProfileImage} alt={ProfileImage}/>
                        </div>
                        <div className="comment-content">
                            <div className="reply-user-name">
                                <h4>Riya Malhotra</h4>
                            </div>
                            <div className="reply-description">
                                <p className={classNames('white-space-pre-wrap', {'comment-text': this.state.line === true})}>
                                    I think you should talk about your concern with your human resource executive.

                                    They might be able to help you. So, I think you should talk about your concern with
                                    your human resource executive.
                                    They might be able to help you. So, That will be th
                                </p>
                                <span
                                    className={classNames('see-more', 'expand', {'hide-see-more': this.state.line === true})}
                                    onClick={() => this.seeMore()}>Read more</span>

                            </div>
                            <div className="reply-aminities">
                                <ul className="list-unstyled d-flex align-items-center">
                                    <li className="d-flex align-items-center">
                                        <i className={'kool-Applaud-clicked'}></i>
                                        <span>1</span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <i className={'kool-Respond'}></i>
                                        <span>5</span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <span>3h</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WrapperCard;
