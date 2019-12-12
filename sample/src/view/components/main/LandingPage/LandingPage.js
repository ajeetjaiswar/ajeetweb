import React, {Component} from 'react';
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import ReactHtmlParser from 'react-html-parser';
import {addEmailInMailChimp} from './../../../../services/zapierHook'
import {Modal, ModalBody, ModalFooter} from 'reactstrap';
import {Email, Invite, ModalCross, ConfirmIcon, ErrorIcon} from '../../../../assets/images';
import Headings from '../../common/Headings/Headings/Headings';
import CommonCard from './CommonCard/CommonCard';
import {CustomBackground, ReactMultiCarousel} from '../../common';
import {fetchPowerReads} from '../../../../actions/ArticlesAction';
import data from '../../../data/landingPageCarousel'
import Footer from "../../../layout/defaultLayout/footer/Footer";
import Spinner from '../../common/Spinner/Spinner';
import {constants} from "../../../../constants/constant";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handleJoinNow = this.handleJoinNow.bind(this);
        this.state = {
            isOpen: false,
            email: '',
            notifyMsg: null,
            isNotifyError: false,
            showNotifyMsg: false,
            notifyApiSuccess: false,
            showModal: false,
            modalData: '',
            notifyLoader: false,
        };
    }

    componentDidMount() {
        this.props.dispatch(fetchPowerReads());
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.handleJoinNow();
        }
    }

    handleEmailInput(e) {
        let emailId = e.target.value
        this.setState({email: emailId})
    }

    hideNotifyMsg() {
        setTimeout(() => {
            this.setState({showNotifyMsg: false})
        }, 4000)
    }

    handleJoinNow() {
        let {email} = this.state;
        email = email ? email.trim() : '';
        if (!email) {
            this.setState({
                showNotifyMsg: true,
                isNotifyError: true,
                notifyMsg: constants.Errors.BlankEmailError
            });
            this.hideNotifyMsg();
        } else {
            if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                this.setState({
                    showNotifyMsg: true,
                    isNotifyError: true,
                    notifyMsg: constants.Errors.EmailFormatError
                });
                this.hideNotifyMsg();
            } else {
                this.setState({notifyLoader: true})
                addEmailInMailChimp({email: email}).then(response => {
                    if (typeof window !== "undefined") {
                        if (window.fbq) {
                            window.fbq('track', 'CompleteRegistration')
                        }
                        if (window.ga) {
                            window.ga('send', 'event', {
                                eventCategory: 'notification',
                                eventAction: 'notify submit',
                                eventLabel: 'home page'
                            })
                        }
                    }
                    this.setState({
                        notifyApiSuccess: true,
                        isNotifyError: false,
                        showNotifyMsg: true,
                        notifyMsg: constants.SUCCESS_MESG.Notify_Mesg,
                        notifyLoader: false
                    });
                }).catch(err => {
                    this.setState({
                        isNotifyError: true,
                        showNotifyMsg: true,
                        notifyMsg: constants.Errors.DefaultError,
                        notifyLoader: false
                    });
                    this.hideNotifyMsg();
                })
            }
        }
    }

    goToBlogs = () => {
        window.location.href = '/blogs';
    }

    toggleModal = (showModal = false, data) => {
        this.setState({showModal, modalData: data})
    }

    scrollToTop = () => {
        this.toggleModal();
        if (!('scrollBehavior' in document.documentElement.style)) {
            //safari does not support smooth scroll
            (async () => {
                const {default: smoothScroll} = await import(
                    /* webpackChunkName: 'polyfill-modern' */
                    'smoothscroll-polyfill'
                    )
                smoothScroll.polyfill()
                window.scroll({top: 0, left: 0, behavior: 'smooth'})
            })()
        } else {
            window.scroll({top: 0, left: 0, behavior: 'smooth'})
        }
    }

    getNormalText(text) {
        if (text) {
            return text.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&39;/g, "'")
        }
        return ''
    }

    render() {
        const {showModal, modalData, notifyMsg, showNotifyMsg, isNotifyError, notifyLoader, notifyApiSuccess, email} = this.state;
        let powerReads = this.props.article.items.powerReads ? this.props.article.items.powerReads.Trending.slice(0, 3).map(
            (element, index) => {
                let media = this.props.article.items.powerReads.Media.find(o => o.id === element.featured_media);
                let catidslist = this.props.article.items.powerReads.Categories.map(e => {
                    return e.id
                });
                let catid = (element.categories).filter(function (obj) {
                    return catidslist.indexOf(obj) !== -1;
                });
                let catObj = this.props.article.items.powerReads.Categories.find(o => o.id === catid[0]);
                let catname = catObj ? this.getNormalText(catObj.name) : '';
                var today = new Date(Date.parse(element.date)).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });
                let articleUrl = window.location.href;
                articleUrl = element.link
                return (
                    <div className="col-md-4" key={index}>
                        {/* <img src={ media.mediadetails.td_265x198.source_url} /> */}
                        <CommonCard
                            hrefTo={articleUrl}
                            imgSrc={media ? media.mediadetails.td_265x198 ? media.mediadetails.td_265x198.source_url : media.sourceurlImage ? media.sourceurlImage : null : null}
                            heading={catname}
                            description={ReactHtmlParser(element.title)}
                            subDetail={today}
                        />
                    </div>)
            }
        ) : null;
        return (
            <>
                {/* landing page */}
                <div className="">
                    <Helmet>
                        <meta charSet="utf-8"/>
                        <title>Kool Kanya | Community, Career Advice, Support for Women </title>
                        <meta name="description" content="Women supporting women  community for careers they love."/>
                        <meta name="description"
                              content="We empower you with Career Advice, Support & Network that will help you excel in your professional life."/>
                    </Helmet>
                    <div className="landing-page">
                        {/* Modal Start */}
                        <Modal size="xl" isOpen={showModal} centered={true} toggle={() => this.toggleModal()}
                               className='game-changer'>
                            {/* <ModalHeader >{modalData ? modalData.heading : ''}</ModalHeader> */}
                            {/* <ModalHeader toggle={() => this.toggleModal()}>{modalData ? modalData.heading : ''}</ModalHeader> */}
                            <div class="modal-header" onClick={() => this.toggleModal()}>
                                <button type="button" class="close" aria-label="Close">
                                    <span aria-hidden="true"><img src={ModalCross} alt="cross-modal"/></span>
                                </button>
                            </div>
                            <ModalBody>
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="image-wrapper h-100">
                                            <img src={modalData ? modalData.imageSrc : ''} alt="modal-pic"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 d-flex align-items-center">
                                        <div className="game-changer-profile">
                                            <h3>{modalData ? modalData.name : ''}</h3>
                                            <label>{modalData ? modalData.designation : ''}</label>
                                            <p>{modalData ? modalData.description : ''}</p>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter className="justify-content-center sticky-footer">
                                <p>Connect with Game Changers</p>
                                <button className="btn btn-primary-fill" onClick={() => this.scrollToTop()}>Join Now
                                </button>
                            </ModalFooter>
                        </Modal>
                        {/* Modal End */}

                        {/* header */}

                        <main className="main">
                            {/* banner start */}
                            <div className="banner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <span className="coming-title">
                                                Coming in December 2019
                                            </span>
                                            <Headings
                                                HeadingClass="banner-heading-wrapper"
                                                tagName="h1"
                                                head="Step Into Your"
                                                highlightHead="Power"
                                                description="A career platform for women who build each other."
                                            />
                                            <div className="subscribe">
                                                <div className="input-group position-relative rounded-border">
                                                    <img src={Email} className="icon" alt=""/>
                                                    <input disabled={notifyApiSuccess} value={email} type="text"
                                                           onChange={this.handleEmailInput}
                                                           onKeyDown={this.handleKeyDown}
                                                           placeholder="Your email address" className="form-control"/>
                                                    <div className="input-group-append cursor-pointer">
                                                        {
                                                            !notifyApiSuccess ?
                                                                (notifyLoader ?
                                                                        <span
                                                                            className="input-group-text d-flex align-items-center justify-content-center text-uppercase progressing"><Spinner/><span
                                                                            className="pl-2">ADDING...</span></span>
                                                                        :
                                                                        <span
                                                                            className="input-group-text d-flex align-items-center justify-content-center text-uppercase primary"
                                                                            onClick={this.handleJoinNow}>Notify Me</span>
                                                                )
                                                                :
                                                                <span
                                                                    className="input-group-text d-flex align-items-center justify-content-center text-uppercase success">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                         height="24" viewBox="0 0 24 24"><path
                                                                        fill="none" d="M0 0h24v24H0z"/><path
                                                                        fill="#ffffff"
                                                                        d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                                                                </span>

                                                        }
                                                    </div>
                                                </div>
                                                <div className="messages d-flex">
                                                    {
                                                        showNotifyMsg
                                                            ?
                                                            (isNotifyError ?
                                                                    <span className="custom-alert d-flex w-100">
                                                                    <span className="icon">
                                                                        <img src={ErrorIcon} alt="error-icon"/>
                                                                    </span>
                                                                    <span className="text">{notifyMsg}</span>
                                                                </span>
                                                                    :
                                                                    <span className="custom-alert success d-flex w-100">
                                                                    <span className="icon">
                                                                        <img src={ConfirmIcon} alt="confirm-icon"/>
                                                                    </span>
                                                                    <span className="text">{notifyMsg}</span>
                                                                </span>
                                                            )
                                                            :
                                                            <div>
                                                                <span><img src={Invite} alt="invite"/></span>

                                                                <span className="pl-1">An exclusive community for the first<span
                                                                    className="font-weight-bold pl-2">1000</span> signups</span>
                                                            </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-image">
                                    <img src="https://d1cyc6cu4jw433.cloudfront.net/landingPage/banner.png"
                                         alt="Banner"/>
                                </div>
                            </div>
                            {/* banner ends */}

                            {/* conversation section start */}
                            <div className="conversation d-sm-flex align-items-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-6 offset-sm-6">
                                            <div className="caption">
                                                <Headings
                                                    tagName="h2"
                                                    head="Find Your"
                                                    highlightHead="Cheering Squad"
                                                    description="A community of women that support you."
                                                />

                                                <div className="btn-wrapper">
                                                    <button className="btn btn-purple-fill"
                                                            onClick={() => this.scrollToTop()}>Join Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="conversation-image">
                                    <img src="https://d1cyc6cu4jw433.cloudfront.net/landingPage/mobileapp.png"
                                         alt="MobileApp"/>
                                </div>
                                <CustomBackground
                                    className="bg-1"
                                />
                                <CustomBackground
                                    className='bg-2'
                                />
                                <CustomBackground
                                    className='bg-3'
                                />
                            </div>
                            {/* ends */}

                            {/* connect section starts */}
                            <div className="connect-wrapper">
                                <div className="container-wrapper">
                                    <div className="row">
                                        <div className="mx-auto col-md-10 col-lg-6">
                                            <Headings
                                                HeadingClass="text-center"
                                                tagName="h2"
                                                head="Connect"
                                                highlightHead="with Gamechangers"
                                                description="Get advice from women who have walked in your shoes"
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 pl-lg-5 ml-4 ml-lg-5 pl-0">
                                            <ReactMultiCarousel
                                                data={data}
                                                toggleModal={this.toggleModal}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <CustomBackground
                                    className="bg-4"
                                />
                                <CustomBackground
                                    className='bg-5'
                                />
                            </div>
                            {/* connect section ends */}


                            {/* power reads section start */}
                            <div className="power-reads position-relative">
                                <div className="container">
                                    <div className="row">
                                        <div className="mx-auto col-md-10 col-lg-6">
                                            <Headings
                                                HeadingClass="text-center"
                                                tagName="h2"
                                                head="Power"
                                                highlightHead="Reads"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        {powerReads}
                                    </div>
                                </div>
                                <CustomBackground
                                    className="bg-6"
                                />
                                <CustomBackground
                                    className='bg-7'
                                />
                            </div>
                            {/* power reads section ends*/}
                        </main>

                        {/* footer starts */}
                        <Footer/>

                        {/* footer ends */}
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    article: state.articleReducer
});
export default connect(mapStateToProps)(LandingPage);
