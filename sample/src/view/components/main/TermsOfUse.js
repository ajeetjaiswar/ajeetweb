import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Footer from "../../layout/defaultLayout/footer/Footer";
import Headings from "../common/Headings/Headings/Headings";
import { CTA } from '../common';


class TermsOfUse extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Kool Kanya | Terms of Use</title>
                    <meta name="description" content="The terms of use  for all Kool Kanya website visitors." />
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
                                                    head="Terms And  "
                                                    highlightHead="Conditions"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container terms-of-use">
                        <div className="row justify-content-center">
                            <div className="col-sm-10">
                                <p>THE FOLLOWING TERMS AND CONDITIONS SHALL APPLY TO THIS WEBSITE <a
                                    href="https://www.koolkanya.com" className="color-text"
                                    target="blank">www.koolkanya.com </a>
                                    (the "Site") which is owned and operated by <span className="color-text">KoolKanya Private Limited </span> ("KoolKanya"
                                    or
                                    "Company" or "we" or "us" or "our").
                                    PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY. IF YOU DO NOT WISH TO BE BOUND BY THE
                                    TERMS AND CONDITIONS MENTIONED HEREIN,
                                    KINDLY REFRAIN FROM ACCESSING THE SITE. ACCESS TO THIS SITE SHALL BE DEEMED TO BE AN
                                    ACCEPTANCE OF THESE TERMS AND CONDITIONS.
                                    BY USING THE SITE, YOU ACCEPT AND AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS AS
                                    APPLIED TO YOUR USE OF THE SITE AND YOU ARE DEEMED TO HAVE READ AND UNDERSTOOD ALL OF
                                    ITS CONTENTS AND IMPLICATIONS.
                            </p>
                                <p> In these Terms, references to "<span className="color-text">You</span>", "<span
                                    className="color-text">User</span>" shall
                                    mean any natural or legal person
                                    accessing the Site,
                                    its contents and using the services offered through the Site.
                            </p>

                                {/*Context*/}
                                <h4>Context</h4>
                                <p> These Terms govern your use of this web site and any content made available from or
                                    through this web site.
                                    By accessing and using the Services, you will comply with and be bound by this
                                    Agreement,
                                whether you are visiting the Sites ("<span className="color-text">Visitor</span>") or
                                            you are a
                                "<span className="color-text">Member</span>" (which means that you have registered on
                                            the Sites).
                                The term "<span className="color-text">User</span>" refers to both Visitors and Members.
                            </p>
                                <p>KoolKanya may change, modify, add or remove portions of these Terms from time to time,
                                    at any time with or without notice to you, by posting such changes on the Site. Please
                                    check this page periodically for such changes.
                                    Your continued use of our Site following the posting of changes to these terms will mean
                                    that you accept those changes.
                            </p>
                                <p>KoolKanya reserves all rights not expressly granted herein.</p>

                                {/*Grant of Access*/}
                                <h4>Grant of Access</h4>
                                <p> In the course of using the Site, you may provide or we may collect information about
                                    you. We are committed to protecting the privacy of our customers’ information and
                                    explain our
                                    policies
                                    with respect to the use and disclosure of such information in our Privacy Policy
                                    incorporated into these Terms.
                                    In using this Site, you may also be subject to the Disclaimer and such other additional
                                    guidelines,
                                    policies or rules formulated in accordance with the laws of India, applicable to
                                    specific services and features,
                                    which may be posted by KoolKanya from time to time (collectively, the
                                "<span className="color-text">Rules</span>").
                                            All of these Rules are part of the terms and are hereby incorporated by reference.
                            </p>

                                {/*Creating an Account*/}
                                <h4>Creating an Account</h4>
                                <p> In order to utilize certain parts of the Services (and to become a Member), you must
                                create an account on the Site ("<span className="color-text">Account</span>").
                                            In order to create an account you may need to
                                            provide certain information and opinions regarding a current or former job or employer
                                ("<span className="color-text">Employment Information</span>").
                                            Any Account you have created by registering on the Site may
                                            be deleted without warning for any reason or no reason, for example, if in our sole
                                            discretion you breach any term, representation or warranty of this Agreement or any
                                            representation or warranty you make is inaccurate.
                            </p>
                                <p><span className="color-text">Username and Password</span>: When you sign up to become a
                                    Member,
                                    you will also be asked to
                                    choose a user name and password for your Account. You are entirely responsible for
                                    maintaining the confidentiality of your password and you should not share it with other
                                    persons. You will not use the Account or password of another Member at any time. You
                                    will notify us immediately if you suspect any unauthorized use of your Account or access
                                    to or use of your password. You are solely responsible for any and all use of your
                                    Account including activities by other persons.
                            </p>

                                {/*Term And Termination*/}
                                <h4>Term And Termination</h4>
                                <p> These Terms shall remain in full force and effect starting upon your first use of the
                                    Sites or Services until termination subject to the provisions hereof.

                            </p>
                                <p> If you terminate your Account but continue to use the Services as a Visitor, your use of
                                    the Services is still subject to these Terms. Unless KoolKanya has terminated your
                                    Account, you can start a new membership by registering and providing new Employment
                                    Information.
                            </p>
                                <p> We may terminate your membership for any or no reason at any time by ceasing to provide
                                    the Services to you. You understand that termination of this Agreement and the Account
                                    you have created with us may involve deletion of your Account information from our live
                                    databases. We will not have any liability whatsoever to you for any termination of your
                                    Account nor related deletion of your information. Deletion of your Account information,
                                    including your Personal Information (as defined in the Privacy Policy) is dictated by
                                    Privacy Policy and will be performed at a time and manner within the sole discretion of
                                    KoolKanya unless otherwise required by applicable law.
                            </p>

                                {/*Restrictions on Use of Our Site*/}
                                <h4>Restrictions on Use of Our Site</h4>
                                <p>
                                    You may access and view the content on the Site on your computer or other device and,
                                    unless otherwise indicated in these Terms or on the Site, make single copies or prints
                                    of the content on the Site for your personal, internal use only. Use of the Site and the
                                    services offered on or through the Site, are only for your personal, non-commercial use.
                                    Under no circumstances may you change or delete any copyright, trademark, or other
                                    proprietary notices. Any modification of the materials on our Site or use of them for
                                    any other purpose will violate our intellectual property rights.
                            </p>
                                <p> The Site and all of its content are copyrighted materials, protected by Indian and
                                    international copyright laws. All content contained on the Site are the exclusive
                                    intellectual property of their respective owners, licensors and/or KoolKanya and may not
                                    be used for any purpose other than browsing, posting content and using the services and
                                    information provided for your own private use. Your use of the Site does not grant you
                                    ownership of any content, code, data or materials you may access on or through the Site.
                            </p>
                                <p> Additionally, the names and logos of KoolKanya are trademarks and/or service marks of
                                    KoolKanya. KoolKanya’s trademarks and service marks may not be used by any other party
                                    without KoolKanya’s express written permission. To the extent that we include certain
                                    trademarks owned by other parties on our Site, these trademarks are property of their
                                    respective owners.
                            </p>
                                <p> Everything you download from the Site remains the exclusive property of KoolKanya. You
                                    cannot redistribute or sell the material or reverse-engineer, disassemble, or otherwise
                                    convert it to any other form. You are not permitted to directly or indirectly alter,
                                    reverse engineer, modify, or create any derivative works of the Site or any other
                                    KoolKanya intellectual property including any software. You shall not, directly or
                                    indirectly, attempt to discover or expose the source code underlying any KoolKanya
                                    intellectual property.
                            </p>
                                <p> You shall also refrain from directly or indirectly, and shall take reasonable steps to
                                    ensure that any third party does not:
                            </p>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> Hack, deface or otherwise misuse the Site or attempt to gain unauthorized access to
                                        any
                                        part of the Site or the technology used to create it;
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> Modify or copy any KoolKanya Intellectual Property;</p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> Access the website to build a product using similar ideas, features, functions,
                                        interface or graphics;
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> Attempt to gain unauthorized access to KoolKanya computer systems or engage in any
                                        activity that disrupts, diminishes the quality of, interferes with the performance
                                        of,
                                        or impairs the functionality of the website;
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> Develop, invoke, or utilize any code to disrupt, diminish the quality of, interfere
                                        with
                                        the performance of, or impair the functionality of the website; or
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> Authorize or encourage or permit any third party to use the website to facilitate
                                        any of
                                        the foregoing prohibited conduct.
                                </p>
                                </div>

                                {/*Share Links*/}
                                <h4>Share Links</h4>
                                <p>
                                    On occasion, KoolKanya provides access from our Site to other web sites that are not
                                    under our control. We don't endorse or approve any products or information offered at
                                    sites you reach through our Site. These links may include the use of so-called "share
                                    links" or similar feature. A "share link" feature is a button and/or text link appearing
                                    on our Site that enables the launch of a sharing mechanism whereby you can post links
                                    to, and content from, the Site onto social networking web sites such as Facebook,
                                    Twitter, Instagram, etc. The terms of use of such other web sites govern your use of
                                    those sites, including your use of share links or other posting of our content on those
                                    web sites. As a result, you are fully responsible for your own use of such web sites
                                    including your use of share links to link our site and/or post its content. As such, you
                                    agree to defend, indemnify and hold KoolKanya, its affiliates, and its and their
                                    directors, officers, employees and agents harmless from any and all claims (including
                                    claims that you violated the policies or terms of use of other sites), liabilities,
                                    costs and expenses, including reasonable attorneys' fees, arising in any way from your
                                    use of such web sites or a share link.
                            </p>

                                {/*User Information*/}
                                <h4>User Information</h4>
                                <p>The User agrees to provide authentic and true information. KoolKanya reserves the right
                                    to confirm and validate the information and other details provided by the User at any
                                    point of time. If upon confirmation such User details are found to be false, not to be
                                    true (wholly or partly), KoolKanya shall in its sole discretion reject the registration
                                    and bar the User from using the Services available on the Site, and / or other
                                    affiliated websites without prior notice.
                            </p>
                                <p>
                                    "Your Information" is defined as any information you provide to us in the registration
                                    or through any email feature. We will protect Your Information in accordance with our
                                    Privacy Policy. If you use the Site, you are responsible for maintaining the
                                    confidentiality of Your Account and Password and for restricting access to your
                                    computer, and you agree to accept responsibility for all activities that occur under
                                    Your Account or Password. We shall not be liable to any person for any loss or damage
                                    which may arise as a result of any failure by you to protect your password or account.
                            </p>

                                <p>
                                    You agree that if You provide any information that is untrue, inaccurate, not current or
                                    incomplete or We have reasonable grounds to suspect that such information is untrue,
                                    inaccurate, not current or incomplete, or not in accordance with the Terms, We shall
                                    have the right to indefinitely suspend or terminate or block access of your membership
                                    on the Website and refuse to provide You with access to the Website.
                            </p>

                                <p>
                                    KoolKanya will not be responsible for any damage suffered by users from use of the
                                    services on this Site. This without limitation includes loss of revenue/data resulting
                                    from delays or service interruptions. This disclaimer of liability also applies to any
                                    damages or injury caused by any failure of performance, error, omission, interruption,
                                    deletion, defect, delay in operation or transmission, computer virus, communication line
                                    failure, theft or destruction or unauthorized access to, alteration of, or use of
                                    record, whether for breach of contract, tortuous behavior, negligence, or under any
                                    other cause of action.
                            </p>


                                {/*User Comments, Feedback, Postcards And Other Submissions*/}
                                <h4>User Comments, Feedback, Postcards And Other Submissions</h4>
                                <p>
                                    All works of authorship or information, including Employment Information, comments,
                                    opinions, postings, messages, text, files, images, photos, e-mail or other materials
                                    feedback, postcards, suggestions, graphics, ideas, and other information, submitted or
                                    offered to KoolKanya on or to this Site or otherwise disclosed, submitted or offered in
                                    connection with your use of this Site (collectively, "Content") shall be and remain
                                    KoolKanya's property even if this Agreement is terminated. Such disclosure, submission
                                    or offer of any Content shall constitute an irrevocable, perpetual, unconditional,
                                    fully-paid and royalty free assignment to KoolKanya of all worldwide rights, titles and
                                    interests in all copyrights and other intellectual properties in the Content. Thus,
                                    KoolKanya will own exclusively all such rights, titles and interests and shall not be
                                    limited in any way in its use, commercial or otherwise, of any Content. Individual
                                    authors own only moral right in their works published on the Site. For everything else,
                                    all rights vests with KoolKanya. By submitting Content, You agree and warrant that (i)
                                    Your entry has not been published before; (ii) Your entry is entirely your own original
                                    work; and (iii) nothing in Your entry is defamatory, private or an infringement of
                                    copyright or other intellectual property right or in any way a breach of another’s
                                    rights.
                            </p>
                                <p>
                                    You may notify KoolKanya about unauthorized copying of Contents posted in the Site.
                                    KoolKanya reserves the right to take any legal action against any unauthorized copying
                                    of the Contents. KoolKanya is and shall be under no obligation (1) to maintain any
                                    Content in confidence; (2) to pay to User any compensation for any Comments; or (3) to
                                    respond to any User submitted Content.
                            </p>
                                <p>
                                    You are and shall remain solely responsible for any Content you contribute. KoolKanya
                                    reserves the right, but does not have an obligation, to monitor and/or review all
                                    Content, and we are not responsible for any such Content posted by users. However, we
                                    reserve the right at all times to disclose any information as necessary to satisfy any
                                    law, regulation or government request, or to edit, refuse to post or to remove any
                                    Content that in our sole discretion is objectionable or in violation of these Terms and
                                    Conditions, our policies or applicable law. Content submitted to the Site may be
                                    recorded and stored in multiple places, both on our Site and elsewhere on the Internet,
                                    which are likely to be accessible for a long time and you have no control over who will
                                    read them eventually. It is therefore important that you are careful and selective about
                                    the personal information that you disclose about yourself and others, and in particular,
                                    you should not disclose sensitive, embarrassing, proprietary or confidential information
                                    in your comments to our public forums.
                            </p>

                                {/*KoolKanya's Communications to You*/}
                                <h4>KoolKanya's Communications to You</h4>
                                <p>
                                    You agree that KoolKanya may, but is not obligated to, send electronic mail to you for
                                    the purpose of advising you of changes or additions to this Site, about any of
                                    KoolKanya's products or services, or for such other purpose(s) as KoolKanya deems
                                    appropriate.
                            </p>


                                {/*Contents/Promotions*/}
                                <h4>Contents/Promotions</h4>
                                <p>
                                    Any contests or promotions described or posted on this Site shall be governed by the
                                    rules regulating such event. You agree that KoolKanya may use and/or disclose
                                    information about your demographics and use of the Site in any manner that does not
                                    reveal your identity. By participating in Site sweepstakes, contests, promotions, and/or
                                    requesting promotional information or product updates, you agree that KoolKanya may use
                                    your information for marketing and promotional purposes
                            </p>

                                {/*Privacy Fundamentals for Profile, Transactions and Sharing Data*/}
                                <h4>Privacy Fundamentals for Profile, Transactions and Sharing Data</h4>
                                <p>
                                    All your information will be held in our secured servers and will be used by us in
                                    strict accordance with our Privacy Policy. However we can use your transaction or
                                    profile data by merging it in a larger set of data without any specific references to
                                    you as an Individual. This merged data can in turn be used to show appropriate
                                    information which we think may be useful to you on the pages you visit. In no case shall
                                    we share your contact information with any third party.
                            </p>

                                {/*Restrictions on Use of Our Site*/}
                                <h4>Restrictions on Use of Our Site</h4>
                                <p>
                                    Any conduct by you that in KoolKanya’s sole discretion restricts or inhibits any other
                                    user from using or enjoying our Site will not be permitted. You agree to use our Site
                                    only for lawful purposes. In your use of the Site, You are prohibited from:
                            </p>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> Posting on or transmitting through the Site any unlawful, harmful, threatening,
                                        abusive, harassing, disparaging, defamatory, vulgar, obscene, sexually explicit,
                                        discriminatory or otherwise objectionable material of any kind, including but not
                                        limited to any material that encourages conduct that would constitute a criminal
                                        offense, give rise to civil liability, or otherwise violate any applicable local,
                                        state, national or international law.
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> Posting any materials that (i) violate, plagiarize or infringe the rights of third
                                        parties including, without limitation, copyright, trademark, trade secret,
                                        confidentiality, contract, patent, rights of privacy or publicity or any other
                                        proprietary right, (ii) contain a virus, spyware, or other harmful component, (iii)
                                        contain embedded links, advertising, chain letters or pyramid schemes of any kind,
                                        or (iv) constitute or contain false or misleading indications of origin, endorsement
                                        or statements of fact.
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> Impersonating any other person or entity, whether actual or fictitious, including
                                        anyone from the Site or KoolKanya and/or intentionally deceive or mislead any third
                                        party.
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> Grossly harmful , harassing, blasphemous, defamatory, obscene, pornographic,
                                        paedophilic, libellous, invasive of another's privacy, hateful, or racially,
                                        ethnically objectionable, disparaging, relating or encouraging money laundering or
                                        gambling, or otherwise unlawful in any manner whatever;
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> Hosting, displaying, uploading, modifying, publishing, transmitting, updating or
                                        sharing any information that:
                                </p>
                                </div>
                                <div className="d-flex flex-column col-11 ml-5">
                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p>
                                            Posting content that harms minors in any way or that violates any law for the
                                            time being in force,
                                    </p>
                                    </div>

                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p> Posting content that harms minors in any way or that violates any law for the
                                            time being in force,
                                    </p>
                                    </div>
                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p> Posting content that contains software viruses or any other computer code, files
                                            or programs designed to interrupt, destroy or limit the functionality of any
                                            computer resource; or
                                    </p>
                                    </div>
                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p> Posting content that threatens the unity, integrity, defence, security or
                                            sovereignty of India, friendly relations with foreign states, or public order or
                                            causes incitement to the commission of any cognisable offence or prevents
                                            investigation of any offence or is insulting any other nation
                                    </p>
                                    </div>
                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p> Restricts or inhibits any other user from using and enjoying the Site or the
                                            Site's services;
                                    </p>
                                    </div>
                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p> Contain embedded links, advertising, chain letters or pyramid schemes of any
                                            kind;
                                    </p>
                                    </div>
                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p> Constitutes or contains false or misleading indications of origin, endorsement
                                            or statements of fact.
                                    </p>
                                    </div>


                                </div>

                                <p> You alone are responsible for the content and consequences of any of your activities.
                            </p>

                                {/*Website Security*/}
                                <h4>Website Security</h4>
                                <p>
                                    You are prohibited from violating or attempting to violate the security of the Site,
                                    including, without limitation, (a) accessing data not intended for you or logging onto a
                                    server or an account which you are not authorized to access; (b) attempting to probe,
                                    scan or test the vulnerability of a system or network or to breach security or
                                    authentication measures without proper authorization; (c) attempting to interfere with
                                    service to any other user, host or network, including, without limitation, via means of
                                    submitting a virus to the Site, overloading, "flooding," "spamming," "mail bombing" or
                                    "crashing;" (d) sending unsolicited email, including promotions and/or advertising of
                                    products or services; or (e) forging any TCP/IP packet header or any part of the header
                                    information in any email or newsgroup posting. Violations of system or network security
                                    may result in civil or criminal liability. We will investigate occurrences that may
                                    involve such violations and may involve, and cooperate with, law enforcement authorities
                                    in prosecuting users who are involved in such violations. You agree not to use any
                                    device, software or routine to interfere or attempt to interfere with the proper working
                                    of this Site or any activity being conducted on this Site. You agree, further, not to
                                    use or attempt to use any engine, software, tool, agent or other device or mechanism
                                    (including without limitation browsers, spiders, robots, avatars or intelligent agents)
                                    to navigate or search this Site other than the search engine and search agents available
                                    from Us on this Site and other than generally available third party web browsers (e.g.,
                                    Netscape Navigator, Microsoft Explorer).
                            </p>

                                {/*User Content On Public Forums*/}
                                <h4>User Content On Public Forums</h4>
                                <p> Content from other Users, advertisers, and other third parties is made available to you
                                    through the Services. Because we do not control such Content, (a) we are not responsible
                                    for any such Content, including advertising and information about third party products
                                    or service, employer and salary-related information provided by other Members through
                                    Employment Information and (b) we make no guarantees about the accuracy, currency,
                                    suitability or quality of the information in such Content and we assume no
                                    responsibility for unintended, objectionable, inaccurate, misleading or unlawful Content
                                    made available by other Users, advertisers and third parties.
                            </p>
                                <p>
                                    Additionally:
                            </p>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> KoolKanya makes no representation or warranty of any kind, express or implied,
                                        regarding
                                        the accuracy, adequacy, validity, reliability, availability, completeness or
                                        non-infringement of any information on the Site.
                                </p>
                                </div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> All views or opinions expressed on the Site are the sole responsibility of their
                                        respective authors. KoolKanya assumes no liability or responsibility for any error
                                        or
                                        omissions in the information contained in the Site or the operation of the Site.
                                </p>
                                </div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> You agree that KoolKanya will not be liable for any content posted by You and You
                                        shall
                                        be solely liable for the same.
                                </p>
                                </div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> KoolKanya may, from time to time, make messaging services, chat services, bulletin
                                        boards, message boards, blogs, other forums and other such services available on or
                                    through the Site.</p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> KoolKanya reserves the right, but does not have an obligation, to monitor and/or
                                        review
                                        all materials posted to the Site or through the Web Site's services or features by
                                        Users, and KoolKanya is not responsible for any such materials posted by users.
                                        However,
                                        KoolKanya reserves the right at all times to disclose any information as necessary
                                        to
                                        satisfy any law, regulation or government request.
                                </p>
                                </div>


                                {/*Representations and Warranties*/}
                                <h4>Representations and Warranties</h4>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> The User represents and warrants to KoolKanya that: </p></div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> it is fully able and competent to enter into the terms, conditions, obligations,
                                    representations and warranties set forth.</p></div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> You shall comply with all applicable local, state, national and international laws,
                                    rules, and regulations in connection with the User’s use of the website.</p></div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> All information you provide to KoolKanya, through the Sites or otherwise, including
                                        registration information and Employment Information (as defined below), is truthful
                                        and
                                    accurate;</p></div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> You will maintain the accuracy of such information;</p></div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> Your use of the Services is not and will not be defamatory, libellous or infringe
                                        the
                                        intellectual property rights, including but not limited to trademarks, copyrights
                                        patents, trade secrets, publicity rights, privacy rights and moral rights, of any
                                        third
                                    party;</p></div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> You own or otherwise have the right to post your Content without seeking the
                                        permission
                                    of a third party, or if such permission is necessary you have obtained it;</p></div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> You have the right to grant the licenses set forth in this Agreement;</p></div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> Your use of the Services does not and will not violate any applicable law, order or
                                        regulation or any other obligation (including contractual obligation) you might have
                                    towards third parties or imposed upon you by law, contract or otherwise;</p></div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> By providing or posting your Content, you do not violate any confidentiality,
                                        non-disclosure or contractual obligations you might have towards a third party,
                                    including your current or former employer or any potential employer; and</p></div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> Any Employment Information you provide, including about your current, past or
                                        potential
                                        status as an employee of a certain employer, is correct and complete in all material
                                        respects
                                        All other representations and warranties, whether express or implied, are explicitly
                                    disclaimed by both Parties hereto.</p></div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> The User warrants and agrees that, while using the Site and the various services
                                        and
                                        features offered on or through the Site, you shall not insert your own or a
                                        third
                                        party's advertising, branding or other promotional content into any of the Web
                                        Site's
                                        content, materials or services, or use, redistribute, republish or exploit such
                                        content
                                    or service for any further commercial or promotional purposes.</p></div>


                                {/*Disclaimer of Warranty*/}
                                <h4>Disclaimer of Warranty</h4>
                                <p> KoolKanya shall not be responsible for any damages or injury, including but not limited
                                    to direct, indirect, incidental, punitive and/or consequential damages that arise from
                                    your use of the Site. These include but are not limited to damages or injury caused by
                                    any use or inability to use the Site or any other site to which you hyperlink from our
                                    site, fair of performance, error, omission, inaccuracy, interruption, defect, delay in
                                    operation or transmission, computer virus or line failure. KoolKanya shall not be liable
                                    on account of any negligence even if KoolKanya’s authorized representative has been
                                    advised of the possibility of such damages.
                            </p>
                                <p> The Site may contain typographical errors or other inaccuracies or may not be complete
                                    or accurate. KoolKanya reserves the rights to correct any errors, inaccuracies or
                                    omissions (including after the submission on any order) and to change or update
                                    information at any time without prior notice to you including errors, accuracies and
                                    omissions related to price and availability.
                            </p>
                                <p>You expressly understand and agree that:</p>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> Your accessing or use of the Website is at your sole risk. We and our licensors,
                                        suppliers, vendors, parent, holding, subsidiary and related companies, affiliates,
                                        officers, agents and employees expressly disclaim all warranties of any kind,
                                        whether
                                        express or implied, including, but not limited to the implied warranties of
                                    merchantability, fitness for a particular purpose and non-infringement.</p></div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> We, our associates and technology partners make no representations or
                                        warranties about
                                        the accuracy, reliability, completeness, current-ness and/or timeliness of any
                                        content,
                                        information, software, text, graphics, links or communications provided on or
                                        through
                                        the use of the Site or that the operation of the Site will be error free and/or
                                        uninterrupted. Consequently, We assume no liability whatsoever for any monetary or
                                        other
                                        damage suffered by you on account of the delay, failure, inaccuracy, interruption,
                                        or
                                        corruption of any data or other information transmitted in connection with use of
                                        the
                                    Site; and/or any interruption or errors in the operation of the Site.</p></div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p>
                                        We and Our licensors, suppliers, vendors, parent, holding, subsidiary and related
                                        companies, affiliates, officers, agents and employees make no warranty that
                                </p>
                                </div>

                                <div className="d-flex flex-column col-11 ml-5">
                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p>
                                            The service will meet your requirements</p></div>

                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p>
                                            The service will be uninterrupted, timely, secure, or error-free</p></div>

                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p>
                                            The service will be accessible at any time or at all times via the channel
                                            selected or
                                        used by you</p></div>

                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p>
                                            The information, content or advertisements (collectively, the "materials")
                                            contained on,
                                            distributed through, or linked, downloaded or accessed from or through the
                                            service, or
                                            the results that may be obtained from the use of the service, will be accurate
                                            or
                                        reliable.</p></div>
                                </div>


                                {/*Linking to third party websites*/}
                                <h4>Linking to third party websites</h4>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> You may be able to link from the Web Site to third party web sites and third party
                                        web
                                        sites may link to the Web Site ("Linked Sites"). You acknowledge and agree that
                                        KoolKanya shall have no responsibility for the information, content, products,
                                        services,
                                        advertising, code or other materials which may or may not be provided by or through
                                    Linked Sites, even if they are owned or run by affiliates of ours.</p></div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> Links to Linked Sites do not constitute an endorsement or sponsorship by us of such
                                        web
                                        sites or the information, content, products, services, advertising, code or other
                                    materials presented on or through such web sites.</p></div>


                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> You are not permitted to link directly to any image hosted on the Site or our
                                        services,
                                        such as using an "in-line" linking method to cause the image hosted by us to be
                                    displayed on another web site.</p></div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> You agree not to download or use images hosted on this Site on another web site, for
                                        any
                                    purpose, including, without limitation, posting such images on another site.</p>
                                </div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> KoolKanya reserves all of our rights under the law to insist that any link to the
                                        Site
                                        be discontinued, and to revoke your right to link to the Site from any other web
                                        site at
                                    any time upon written notice to you.</p></div>

                                {/*Transfer / Sharing of information*/}
                                <h4>Transfer / Sharing of information</h4>
                                <p> KoolKanya may transfer sensitive personal data or information including any information,
                                    to any other body corporate or a person in India, or located in any other country, that
                                    ensures the same level of data protection that is adhered to by the body corporate as
                                    provided for under these Rules. The transfer may be allowed only if it is necessary for
                                    the performance of the lawful contract between the body corporate or any person on its
                                    behalf and provider of information or where such person has consented to data transfer.
                            </p>


                                {/*Mobile version of the website*/}
                                <h4>Mobile version of the website</h4>
                                <p> KoolKanya hereby declares that the "Terms and Conditions", "Privacy Policy" and such
                                    other additional guidelines, policies or rules which may be posted by KoolKanya from
                                    time to time are applicable to the mobile version of the website as well unless
                                    expressly barred.

                            </p>

                                {/*Indemnification*/}
                                <h4>Indemnificationn</h4>
                                <p> You agree to defend, indemnify and hold KoolKanya and its affiliates' directors,
                                    officers, employees and agents harmless from any and all claims, liabilities, costs and
                                    expenses, including attorneys' fees, arising in any way from your use of the Site, your
                                    placement or transmission of any message, content, information, software or other
                                    materials through the Site, or your breach or violation of the law or of these Terms.
                                    KoolKanya reserves the right, at its own expense, to assume the exclusive defence and
                                    control of any matter otherwise subject to indemnification by you, and in such case, you
                                    agree to cooperate with KoolKanya defence of such claim.
                            </p>

                                {/*Termination / Discontinuation of services / website*/}
                                <h4>Termination / Discontinuation of services / website</h4>
                                These Terms constitute an agreement which is effective until terminated by KoolKanya at any
                                time, without notice. KoolKanya may terminate your right to use the Site immediately without
                                notice to you if, in KoolKanya’s sole, you fail to comply with any of these. In the event of
                                termination, you are no longer authorized to access the Site, and the restrictions imposed
                                upon you with respect to material copied or downloaded, and the disclaimers and limitations
                                of liabilities set forth in these Terms, shall survive the termination of this agreement.
                                These Terms constitute the entire agreement between you and KoolKanya relating to the
                                subject matter addressed herein. Upon any termination of this Agreement by either you or
                                KoolKanya, you must promptly destroy all materials, downloaded or otherwise, obtained from
                                this Site, as well as all copies of such materials, whether made under the terms of this
                                Agreement or otherwise./h4>
                            <p>

                                </p>

                                {/*Transfer / Sharing of information*/}
                                <h4>Disputes, Governing Law and Venue</h4>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> KoolKanya shall not be held responsible for disputes arising out of interactions
                                        between
                                        members / users. KoolKanya reserves the right, but has no obligation, to become
                                        involved
                                    in any way with these disputes.</p></div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> Unless otherwise specified, the materials in our Site are presented to provide
                                        information about KoolKanya and to provide related services and information to
                                        visitors.
                                </p></div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> KoolKanya is an Indian corporation, with its corporate headquarters located in
                                        Mumbai.
                                        The Site is intended for use by users located in India. We in no way imply that the
                                        materials on our Site are appropriate or available for use outside of India. If you
                                        use
                                        our Site from locations outside of India, you are responsible for compliance with
                                        any
                                        applicable local laws. The terms shall be governed by the laws of India without
                                        regard
                                    to its conflict of law principles.</p></div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> The User agrees to submit to the personal and exclusive jurisdiction of the courts
                                    of Mumbai, India for the purpose of litigating all such claims or disputes.</p>
                                </div>

                                {/*Limitation of Liability*/}
                                <h4>Limitation of Liability</h4>
                                <p> To the fullest extent permitted under applicable law, We, our associates, parent
                                    companies, or suppliers shall not be liable for any indirect, incidental, special,
                                    incidental, consequential or exemplary damages, including but not limited to, damages
                                    for loss of profits, goodwill, use, data or other intangible losses arising out of or in
                                    connection with the Site, its services or these Terms.
                            </p>


                                {/*Entire Agreement*/}
                                <h4>Entire Agreement</h4>
                                <p> These Terms constitute the entire agreement between you and KoolKanya and govern your
                                    use of the Site, superseding any prior understandings and agreements between you and us
                                    and any previous statements or representations from either party to the other party.
                                    These Terms do not apply to any affiliate services, third-party content or third-party
                                    software that does not or cannot reasonably be deemed to form part of the Website which
                                    may be provided to you by our licensors, suppliers, vendors, parent, holding, subsidiary
                                    or related companies, other affiliates or other third parties, which may be subject to
                                    additional terms and conditions imposed by that party. You also may be subject to
                                    additional terms and conditions that may apply when you use affiliate services,
                                    third-party content or third-party software.
                            </p>

                                {/*Non Transferability*/}
                                <h4>Non Transferability</h4>
                                <p> You agree that your account on the Site is non-transferable and any rights to your
                                    Account ID or contents within your account terminate upon your death. Upon receipt of a
                                    copy of a death certificate, your account may be terminated and all contents therein
                                    permanently deleted.
                            </p>

                                {/*Contact Us*/}
                                <h4>Limitation of Liability</h4>
                                <p>In accordance with Information Technology Act 2000 and rules made there under, contact
                                    details of the Grievance Officer are provided below:
                            </p>
                                <p>
                                    <a href="mailto:care@koolkanya.com" className="color-text">
                                        <span><u>hr@koolkanya.com</u></span>
                                    </a>

                                </p>

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

export default TermsOfUse;
