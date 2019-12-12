import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import Footer from "../../../layout/defaultLayout/footer/Footer";
import Headings from "../../common/Headings/Headings/Headings";

const Pictures = {
    "Dimple": "https://d1cyc6cu4jw433.cloudfront.net/team/dimple.jpg",
    "Madhu": "https://d1cyc6cu4jw433.cloudfront.net/team/madhu.jpg",
    "RajLakshmi": "https://d1cyc6cu4jw433.cloudfront.net/team/rajlakshmee.jpg",
    "Rasika": "https://d1cyc6cu4jw433.cloudfront.net/team/rasika.jpg",
    "Roopal": "https://d1cyc6cu4jw433.cloudfront.net/team/roopal.jpg",
    "Vanshika": "https://d1cyc6cu4jw433.cloudfront.net/team/vanshika.jpg",
    "Ainee": "https://d1cyc6cu4jw433.cloudfront.net/team/ainee.jpg",
    "Ajeet": "https://d1cyc6cu4jw433.cloudfront.net/team/ajeet.jpg",
    "Anand": "https://d1cyc6cu4jw433.cloudfront.net/team/anand.jpg",
    "Himanshu": "https://d1cyc6cu4jw433.cloudfront.net/team/himanshu.jpg",
    "Kewal": "https://d1cyc6cu4jw433.cloudfront.net/team/kewal.jpg",
    "Khushboo": "https://d1cyc6cu4jw433.cloudfront.net/team/khushboo2.jpg",
    "Kritiksha": "https://d1cyc6cu4jw433.cloudfront.net/team/kritiksha.jpg",
    "Sachin": "https://d1cyc6cu4jw433.cloudfront.net/team/sachin.jpg",
    "Shivani": "https://d1cyc6cu4jw433.cloudfront.net/team/shivani.jpg",
    "Pranali": "https://d1cyc6cu4jw433.cloudfront.net/team/pranali.jpg",
    "Dimum": "https://d1cyc6cu4jw433.cloudfront.net/team/dimum.jpg",
}


class KoolKanyaTeam extends Component {
    render() {
        return (
            <div className="our-team">
                <Helmet>
                    <title>Kool Kanya | Meet our Team</title>
                    <meta name="description"
                          content="Meet our crazy bunch of problem solvers who are building a platform for the workforce of the future."/>
                </Helmet>
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10">
                                <div className="row justify-content-center">
                                    <div className="col-md-10">
                                        <div className="banner-heading">
                                            <label className="page-title">Our Team</label>
                                            <Headings
                                                HeadingClass=""
                                                tagName="h1"
                                                head="Meet the team"
                                                highlightHead="People who run the show"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-card-wrapper">
                    <div className="container">
                        <div className='row'>
                            <div className="col-lg-4 col-md-6 px-0 px-sm-3">
                                <div className="team-card">
                                    <img alt="team-img" src={Pictures.Vanshika}
                                         className="team-picture-card"/>
                                    <div className='image-caption'>
                                        <h2>Vanshika Goenka</h2>
                                        <label>Founder</label>
                                        <p>She loves creating products that impact people. With organisational skills
                                            that
                                            keep everyone on their toes and a disciplined routine that would put anyone
                                            to
                                            shame, Vanshika is the millennial entrepreneur with an old soul. Interested
                                            in
                                            all things vegan and spiritual, she sports a style that matches her vibrant
                                            laughter that makes the Kool Kanya office glint in sunshine. Don’t go by her
                                            soft demeanour. You wouldn’t believe it if you look at her but she is also a
                                            weight-lifter you don’t mess with.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 px-0 px-sm-3">
                                <div className="team-card">
                                    <img alt="team-img" src={Pictures.RajLakshmi}
                                         className="team-picture-card"/>
                                    <div className='image-caption'>
                                        <h2>RajLakshmee</h2>
                                        <label>Chief Operations Officer</label>
                                        <p>A thoughtful design entrepreneur with a tenacious approach to solving
                                            everyday
                                            business problems. A food lover and a fitness enthusiast, Raj perfects the
                                            art
                                            of balance. The voice of sanity at work, Raj comes with a no-nonsense
                                            attitude
                                            but she's also the rock that supports you on your tough days. She is deeply
                                            passionate about understanding consumers and creating solutions that balance
                                            people, profit and the planet.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 px-0 px-sm-3">
                                <div className="team-card">
                                    <img alt="team-img" src={Pictures.Himanshu}
                                         className="team-picture-card"/>
                                    <div className='image-caption'>
                                        <h2>Himanshu Kapoor</h2>
                                        <label>Chief Technical Officer</label>
                                        <p>A silent warrior soldiering through the toughest of the tech issues hurled at
                                            him, Himanshu is an engineer turned product person. He loves everything
                                            technology and finding automated solutions to things that people wouldn't
                                            even be aware could be automated. While squandering away with tech codes, he
                                            dreams of travelling to exotic destinations and finding ways to give back to
                                            the society. He recently moved to Mumbai but loves Delhi and all the food
                                            magic that it provided a lot more.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 px-0 px-sm-3">
                                <div className="team-card">
                                    <img alt="team-img" src={Pictures.Khushboo}
                                         className="team-picture-card"/>
                                    <div className='image-caption'>
                                        <h2>Khushboo</h2>
                                        <label>Product Manager</label>
                                        <p>Khushboo is passionate about building products that use technology for social
                                            impact. She is a techie at heart but often doubles up as a translator
                                            between
                                            teams deciphering jargons from each function and breaking to down in
                                            laywoman
                                            terms for the whole team. An ardent foodie, Khushboo loves to hang out at
                                            the
                                            newest places in town. Her joie di vivre is known to light up the dark
                                            days.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 px-0 px-sm-3">
                                <div className="team-card">
                                    <img alt="team-img" src={Pictures.Roopal}
                                         className="team-picture-card"/>
                                    <div className='image-caption'>
                                        <h2>Roopal</h2>
                                        <label>Content Head</label>
                                        <p>Roopal is an empath – a trait that lends itself to her storytelling skills
                                            and
                                            her ability to foster teams that build each other through their work. A
                                            skilled
                                            communicator passionate about stories, she believes everything can be solved
                                            through a healthy dose of humour, a trait she borrows from her 6-year-old
                                            son.
                                            As a published author, screenwriter and filmmaker, she wears multiple hats.
                                            As a
                                            social changemaker, she also conducts workshops with children and adults on
                                            creative writing, gender sensitisation and empathy.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 px-0 px-sm-3">
                                <div className="team-card">
                                    <img alt="team-img" src={Pictures.Madhu}
                                         className="team-picture-card"/>
                                    <div className='image-caption'>
                                        <h2>Madhu Priya</h2>
                                        <label>UX Designer</label>
                                        <p>Enthusiastic about Design and all things Digital. When not in front of a
                                            screen,
                                            you can find her with a book, a drawing pad or even trying to learn a new
                                            skill.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 px-0 px-sm-3">
                                <div className="team-card">
                                    <img alt="team-img" src={Pictures.Dimple}
                                         className="team-picture-card"/>
                                    <div className='image-caption'>
                                        <h2>Dimple</h2>
                                        <label>Full Stack Developer</label>
                                        <p>An avid problem solver. She can be found experimenting with new technologies
                                            and
                                            in her spare time reviewing scented candles and books.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 px-0 px-sm-3">
                                <div className="team-card">
                                    <img alt="team-img" src={Pictures.Anand}
                                         className="team-picture-card"/>
                                    <div className='image-caption'>
                                        <h2>Anand Lakkaraju</h2>
                                        <label>Marketing Head</label>
                                        <p>An avid marketer & learner in the quest for seeking adventure every day.
                                            While he
                                            crunches the marketing numbers and social media jargon for the team day in
                                            and
                                            day out, he also moonlights as a photographer who loves to capture landscape
                                            and
                                            beautiful sunsets. He has made an easy transition from his strong Sales
                                            background to Marketing and has demonstrated history of working in the
                                            services
                                            industry.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 px-0 px-sm-3">
                                <div className="team-card">
                                    <img alt="team-img" src={Pictures.Ainee}
                                         className="team-picture-card"/>
                                    <div className='image-caption'>
                                        <h2>Ainee Nizami</h2>
                                        <label>Content Strategist</label>
                                        <p>Ainee Nizami has been in the writing industry since the last 10 years,
                                            understanding the science behind 'viral content'. She has worked with some
                                            of the top media brands across the country, including Times of India, CNBC,
                                            iDiva, Hindustan Times and Zee. At Kool Kanya, her main focus is to create
                                            content that is inclusive, relatable and relevant.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 px-0 px-sm-3">
                                <div className="team-card">
                                    <img alt="team-img" src={Pictures.Shivani}
                                         className="team-picture-card"/>
                                    <div className='image-caption'>
                                        <h2>Shivani Kowadkar</h2>
                                        <label>Marketing Trainee</label>
                                        <p>Having completed her Bachelor’s in Economics and Master’s in Development
                                            studies,
                                            Shivani loves working at the intersections of disciplines. She is also a
                                            closet
                                            writer and passionate about working with different communities and consumers
                                            and
                                            finding solutions through extensive research. Behind Shivani’s quiet
                                            demeanour
                                            is her silent magnetism and an empathetic heart – a quality that adds to her
                                            people skills. She received the Bharat Karandak in her very first attempt at
                                            Marathi theatre. </p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 px-0 px-sm-3">
                                <div className="team-card">
                                    <img alt="team-img" src={Pictures.Dimum} className="team-picture-card"/>
                                    <div className='image-caption'>
                                        <h2>Dimum Pertin</h2>
                                        <label>Marketing Trainee</label>
                                        <p>Dimum is a marketing meteor. She has completed master’s in development
                                            studies
                                            from TISS and landed at Kool Kanya with unique ideas and a sense of style
                                            that
                                            would shame a fashionista. While she figures out stories for our Instagram
                                            page
                                            and devises the next set of audiences for marketing, she dabbles into
                                            different
                                            fields to remain in a state of intrigue. She hates drama, breaks into peals
                                            of
                                            laughter at the smallest of excuses and believes in embracing confusion.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 px-0 px-sm-3">
                                <div className="team-card">
                                    <img alt="team-img" src={Pictures.Kritiksha}
                                         className="team-picture-card"/>
                                    <div className='image-caption'>
                                        <h2>Kritiksha</h2>
                                        <label>Content Writer</label>
                                        <p>As the baby of the office, Kritiksha gets away with anything. Her enthusiasm
                                            for pop culture fought its way as a weekly column on our blog. As a
                                            part-time theatre actor, drama comes easily to her. Armed with an honours'
                                            degree in Liberal Arts, she races to her deadlines at the speed of an
                                            Olympic sprinter. She is opinionated, hardcore, a firebrand with a heart of
                                            gold who dreams to create something magical with her words someday. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 px-0 px-sm-3">
                                <div className="team-card">
                                    <img alt="team-img" src={Pictures.Pranali} className="team-picture-card"/>
                                    <div className='image-caption'>
                                        <h2>Pranali Borkar</h2>
                                        <label>Admin/Accounts manager</label>
                                        <p>Unassuming at first, Pranali is a simmering volcano of silent strength. A
                                            sudden
                                            onslaught of quick- wittedness followed by her rich laughter that makes
                                            Accounts
                                            and Administration jobs less dreary. A quick learner with clarity of
                                            thought,
                                            Pranali believes there is always something to learn in each opportunity. She
                                            is
                                            constantly on a look out for challenges that help her achieve her
                                            organisational
                                            and personal goals. </p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 px-0 px-sm-3">
                                <div className="team-card">
                                    <img alt="team-img" src={Pictures.Sachin} className="team-picture-card"/>
                                    <div className='image-caption'>
                                        <h2>Sachin Sharma</h2>
                                        <label>Full Stack Developer</label>
                                        <p>
                                            A Gamer, Traveller and a Full Stack Developer. He looks for positivity in
                                            all
                                            things around him and follows his Heart.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 px-0 px-sm-3">
                                <div className="team-card">
                                    <img alt="team-img" src={Pictures.Ajeet} className="team-picture-card"/>
                                    <div className='image-caption'>
                                        <h2>Ajeet Jaiswar</h2>
                                        <label>UI Developer</label>
                                        <p>
                                            A friendly introvert, Ajeet is very punctual of time. He loves playing
                                            cricket,
                                            sleeping, watching south Indian movies and likes to do Ganpati dance.

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 px-0 px-sm-3">
                                <div className="team-card">
                                    <img alt="team-img" src={Pictures.Kewal} className="team-picture-card"/>
                                    <div className='image-caption'>
                                        <h2>Kewal Botadara</h2>
                                        <label>Quality Analyst</label>
                                        <p>
                                            A competent result oriented software automation engineer specializing in web
                                            and
                                            mobile automation testing with 4+ years of experience. Kewal has lead teams
                                            to
                                            deliver automation test suite to stakeholders. He is enthusiastic to learn
                                            and
                                            always has desire to gain more knowledge.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="cta d-flex align-items-center justify-content-center">
                    <div className="caption text-center">
                        <label>Contact</label>
                        <h3>We’d love to hear from you</h3>
                        <p>Write to us at <a href="mailto:care@koolkanya.com"><span>care@koolkanya.com</span></a></p>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default KoolKanyaTeam;
