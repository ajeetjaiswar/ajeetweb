import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import classNames from 'classnames';
import Footer from "../../layout/defaultLayout/footer/Footer";
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import Headings from "../common/Headings/Headings/Headings";
import { DropArrow } from "../../../assets/images";
import { CTA } from '../common';


class FAQContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseBanner: 1
        };

    }

    toggleAccordian = event => {
        event.target.classList.toggle('active');

    }

    toggle = (event) => {
        this.setState({ collapseBanner: event })
    }

    render() {
        let { collapseBanner } = this.state;
        return (
            <>
             <Helmet>
                    <title>Kool Kanya | Frequently Asked Questions</title>
                    <meta name="description" content="Kool Kanya has created a nurturing eco system for women to connect with like minded women, and find the resources are needed to level up. Ask questions, get answers, and share your knowledge." />
                </Helmet>
                <div className="our-team faq">
                    <div className="banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10">
                                            <div className="banner-heading">
                                                <Headings
                                                    HeadingClass="text-center"
                                                    tagName="h1"
                                                    head="Frequently Asked "
                                                    highlightHead="Questions"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <Card style={{ marginBottom: '1rem' }}
                                    className={classNames('card', { 'card-white-header': collapseBanner === 1 })}>
                                    <CardHeader className='d-flex justify-content-between'
                                        onClick={() => this.toggle(1)}
                                        data-type="collapseBanner">
                                        <span>What is Kool Kanya?</span>
                                        <span>
                                            <img src={DropArrow}  alt="arrow-icon"/>
                                        </span>
                                    </CardHeader>
                                    <Collapse isOpen={collapseBanner === 1}>
                                        <CardBody>
                                            <p>
                                                We are here to create a nurturing ecosystem for women to connect
                                                with each other and build the careers they love. We help young women
                                                become financially independent by cultivating a successful career while
                                                simultaneously navigating life challenges.
                                                Our digital platform utilises tools that enable women to access sound
                                                career guidance, community support and approaching mentors or other
                                                Kool Kanyas who have led a similar career trajectory. We also
                                                endeavour to create safe and stimulating workplaces for women in
                                                order to include, retain and develop women in the workforce.
                                        </p>
                                        </CardBody>
                                    </Collapse>
                                </Card>

                                <Card style={{ marginBottom: '1rem' }}
                                    className={classNames('card', { 'card-white-header': collapseBanner === 2 })}>

                                    <CardHeader className='d-flex justify-content-between'
                                        onClick={() => this.toggle(2)}
                                        data-type="collapseBanner">
                                        <span>What am I signing up for on the homepage?</span>
                                        <span>
                                            <img src={DropArrow}  alt="arrow-icon"/>
                                        </span>
                                    </CardHeader>

                                    <Collapse isOpen={collapseBanner === 2}>
                                        <CardBody>
                                            <p>
                                                Our Kool Kanya networking platform is coming out for the first 1000
                                                people who sign up. When we go live in December, you will be the first
                                                ones to be notified!
                                        </p>
                                        </CardBody>
                                    </Collapse>
                                </Card>

                                <Card style={{ marginBottom: '1rem' }}
                                    className={classNames('card', { 'card-white-header': collapseBanner === 3 })}>


                                    <CardHeader className='d-flex justify-content-between'
                                        onClick={() => this.toggle(3)}
                                        data-type="collapseBanner">
                                        <span>What is the Kool Kanya networking platform?</span>
                                        <span>
                                            <img src={DropArrow}  alt="arrow-icon"/>
                                        </span>
                                    </CardHeader>


                                    <Collapse isOpen={collapseBanner === 3}>
                                        <CardBody>
                                            <p>
                                                Kool Kanya networking platform is where you can express your fears
                                                and vulnerabilities about your career. You will be able to connect with
                                                people from your field who have walked the same journey as you,
                                                experienced similar setbacks and overcome problems to come out
                                                victorious.
                                        </p>
                                        </CardBody>
                                    </Collapse>
                                </Card>

                                <Card style={{ marginBottom: '1rem' }}
                                    className={classNames('card', { 'card-white-header': collapseBanner === 4 })}>


                                    <CardHeader className='d-flex justify-content-between'
                                        onClick={() => this.toggle(4)}
                                        data-type="collapseBanner">
                                        <span>Who is the Kool Kanya platform for?</span>
                                        <span>
                                            <img src={DropArrow}  alt="arrow-icon"/>
                                        </span>
                                    </CardHeader>

                                    <Collapse isOpen={collapseBanner === 4}>
                                        <CardBody>
                                            <p>
                                                The Kool Kanya platform is for entrepreneurs, freelancers, side-hustlers
                                                or any woman who is ambitious and looking to be successful. We want
                                                you to be yourself on this platform, express your problems, find
                                                answers and also use your experience to help others. We believe we
                                                are better together.
                                        </p>
                                        </CardBody>
                                    </Collapse>
                                </Card>

                                <Card style={{ marginBottom: '1rem' }}
                                    className={classNames('card', { 'card-white-header': collapseBanner === 5 })}>

                                    <CardHeader className='d-flex justify-content-between'
                                        onClick={() => this.toggle(5)}
                                        data-type="collapseBanner">
                                        <span>Why is it only for 1000 people?</span>
                                        <span>
                                            <img src={DropArrow}  alt="arrow-icon"/>
                                        </span>
                                    </CardHeader>
                                    <Collapse isOpen={collapseBanner === 5}>
                                        <CardBody>
                                            <p>
                                                We have capped it at 1000 people for multiple reasons. The first is we
                                                want to work closely with you and we want your feedback on what we
                                                have built. We want you to advise us on how we can improve the
                                                platform. We want you to be the first ones who achieve and succeed so
                                                you can then help many women out there to raise their power.
                                        </p>
                                        </CardBody>
                                    </Collapse>
                                </Card>

                                <Card style={{ marginBottom: '1rem' }}
                                    className={classNames('card', { 'card-white-header': collapseBanner === 6 })}>
                                    <CardHeader className='d-flex justify-content-between'
                                        onClick={() => this.toggle(6)}
                                        data-type="collapseBanner">
                                        <span>How can I become a Gamechanger?</span>
                                        <span>
                                            <img src={DropArrow}  alt="arrow-icon"/>
                                        </span>
                                    </CardHeader>

                                    <Collapse isOpen={collapseBanner === 6}>
                                        <CardBody>
                                            <p>
                                                You are already a Gamechanger. All you have to do is sign up to help
                                                yourself and others succeed in their careers.
                                        </p>
                                        </CardBody>
                                    </Collapse>
                                </Card>

                                <Card style={{ marginBottom: '1rem' }}
                                    className={classNames('card', { 'card-white-header': collapseBanner === 7 })}>
                                    <CardHeader className='d-flex justify-content-between'
                                        onClick={() => this.toggle(7)}
                                        data-type="collapseBanner">
                                        <span>What can I do on the platform until December?</span>
                                        <span>
                                            <img src={DropArrow}  alt="arrow-icon"/>
                                        </span>
                                    </CardHeader>
                                    <Collapse isOpen={collapseBanner === 7}>
                                        <CardBody>
                                            <p>
                                                You are free to look at our blogs and information on companies to get
                                                Company Scores that will help you understand which company is better
                                                suited for your needs.
                                        </p>
                                        </CardBody>
                                    </Collapse>
                                </Card>


                                <Card style={{ marginBottom: '1rem' }}
                                    className={classNames('card', { 'card-white-header': collapseBanner === 8 })}>
                                    <CardHeader className='d-flex justify-content-between'
                                        onClick={() => this.toggle(8)}
                                        data-type="collapseBanner">
                                        <span>What is the Kool Kanya company score?</span>
                                        <span>
                                            <img src={DropArrow}  alt="arrow-icon"/>
                                        </span>
                                    </CardHeader>
                                    <Collapse isOpen={collapseBanner === 8}>
                                        <CardBody>
                                            <p>
                                                Kool Kanya score is an aggregate rating of a company in terms of
                                                maternity benefits, safety, work-life balance, job satisfaction, work
                                                culture, salary benefits, learning opportunity and female
                                                representation.
                                        </p>
                                        </CardBody>
                                    </Collapse>
                                </Card>


                                <Card style={{ marginBottom: '1rem' }}
                                    className={classNames('card', { 'card-white-header': collapseBanner === 9 })}>
                                    <CardHeader className='d-flex justify-content-between'
                                        onClick={() => this.toggle(9)}
                                        data-type="collapseBanner">
                                        <span>How is the data for the Kool Kanya score gathered?</span>
                                        <span>
                                            <img src={DropArrow}  alt="arrow-icon"/>
                                        </span>
                                    </CardHeader>
                                    <Collapse isOpen={collapseBanner === 9}>
                                        <CardBody>
                                            <p>
                                                Data for the score is collected from women who are currently
                                                employed in the company and are aware of the company provisions
                                                and work environment.
                                        </p>
                                        </CardBody>
                                    </Collapse>
                                </Card>
                            </div>
                        </div>
                    </div>

                    {/* cta */}
                    <CTA/>
                </div>
                <Footer />
            </>
        );
    }
}

export default FAQContainer;
