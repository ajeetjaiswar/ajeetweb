import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Footer from "../../layout/defaultLayout/footer/Footer";
import Headings from "../common/Headings/Headings/Headings";
import { CTA } from '../common';


class PrivacyPolicy extends Component {

    render() {
        return (
            <>
             <Helmet>
                    <title>Kool Kanya Privacy Policy</title>
                    <meta name="description" content="The official Privacy Policy for all Kool Kanya website visitors." />
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
                                                    head="Privacy And  "
                                                    highlightHead="Policy"
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
                                <p>
                                    The 'www.koolkanya.com' web site (hereinafter, the "<span
                                        className="color-text">Site</span>") is owned and operated by
                                KoolKanya Private Limited ("KoolKanya" or "<span className="color-text">Company</span>"
                                    or
                                "<span className="color-text">us</span>" or "<span className="color-text">we</span>" or
                                "<span className="color-text">our</span>"). KoolKanya
                                    takes the privacy of its customers seriously. Capitalized terms used but not defined
                                    herein
                                    will have the meaning attributed to it under the Terms and Conditions.
                            </p>
                                <p>
                                    This Privacy Policy governs use of the Site. The policy also covers the online
                                    experiences
                                and services provided by KoolKanya through the Site ("<span
                                        className="color-text">Services</span>"). It is designed to
                                    inform
                                    the user about our practices regarding handling, collection, use, and disclosure of
                                    information that you may provide. Please make sure that you read this entire Privacy
                                    Policy
                                    before using or submitting information to this Site. If you do not agree to the terms of
                                    this Privacy Policy, you are not authorized to use the Site.
                            </p>
                                <p>
                                    By visiting the Sites, registering as a member, or using the Services, you acknowledge
                                    and
                                    accept the practices and policies outlined in this Privacy Policy. Furthermore, by
                                    providing
                                    us with Personal Information (as hereinafter defined) on this Site, you fully understand
                                    and
                                    unambiguously consent to the collection and processing of such information in the India
                                    in
                                    accordance with this Privacy Policy.
                            </p>
                                <p>
                                    The Privacy Policy is subject to change. We reserve the right, at our discretion, to
                                    change,
                                    modify, add, or remove portions of the Privacy Policy at any time. Please check this
                                    page
                                    for updates periodically. If we make any material changes to the Privacy Policy, we will
                                    notify you here. Unless the law otherwise requires, we do not provide notice of changes
                                    to
                                    the Privacy Policy and your use of the Site following any posted changes will indicate
                                    your
                                    acceptance of such changes.
                            </p>
                                <p>
                                    This Privacy Policy explains and summarizes how we collect, use and protect your
                                    personal
                                    information as you interact with us online and through our customer and technical
                                    support.
                                    This Privacy Policy explains:
                            </p>

                                {/*Section*/}
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p>
                                        What information KoolKanya gathers from users of the Site.
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p>
                                        How KoolKanya uses the personal information that you share with us and that we learn
                                        about you because of our relationship.
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p>
                                        How KoolKanya uses "cookies" and "IP Addresses."
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p>
                                        What personal information, if any, KoolKanya may share about you with others and the
                                        conditions that protect your information if it must be shared.
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p>What kind of security measures KoolKanya takes to protect your information from loss
                                        or
                                        disclosure and how KoolKanya will inform you in the event of a security breach.
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> The circumstances under which you can access your personal information you have
                                        shared
                                        with KoolKanya and have that information corrected, restrict KoolKanya 's use of
                                        that
                                        information, and even have it removed from our records.
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p>Your Contact Preferences and Opt-Out Choices
                                </p>
                                </div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p>Our Security Practices</p>
                                </div>

                                <p> This Privacy Policy applies Indian Customers only. Our Websites are hosted in India and
                                    are intended only for Indian visitors. Like almost every website, the Site may be
                                    accessed by an international audience. If you are a non-Indian visitor to our website,
                                    by visiting our website and providing us with data, you acknowledge and agree that your
                                    personal information may be processed for the purposes identified in this Privacy
                                    Policy. In addition, such data may be stored on servers located in India, which may have
                                    less stringent privacy practices than those your own resident jurisdiction. By providing
                                    us with your data, you consent to transfer of such data. KoolKanya will not be
                                    responsible for compliance with the laws of your jurisdiction and makes no
                                    representations, warranties or guarantees that it complies with privacy, data protection
                                    or cyber security laws and regulations outside India.
                            </p>
                                <p> You have choices when it comes to how KoolKanya uses your personal information. When you
                                    register online with our Site or sign-up, you can choose not to receive information
                                    about merchandise, services and special promotional offers from us by direct mail and/or
                                    electronically, including by email and text message. If you elect not to receive such
                                    product marketing information by direct mail or electronically, KoolKanya may continue
                                    to contact you as necessary to service your account and process your transactions. You
                                    can change your preferences by following the instructions for opting out at the end of
                                    the marketing email, or by following the instructions for Account Information on the
                                Site or by contacting Customer Service at <a href="mailto:care@koolkanya.com"
                                        className="color-text">
                                        <span><u>hr@koolkanya.com</u></span>
                                    </a>.
                            </p>

                                <p> Keeping your account information accurate and up to date is very important in order for
                                    us to provide you with excellent service. If your account information is incomplete,
                                    inaccurate or not current, please follow the instructions for My Account on our Websites
                                    to correct or update your account information online, or you may contact Customer
                                Service at <a href="mailto:care@koolkanya.com" className="color-text">
                                        <span><u>hr@koolkanya.com</u></span>
                                    </a>.
                            </p>
                                <p>
                                    You should be careful to maintain the secrecy of your passwords and/or account
                                    information and be responsible about protecting your personal information and identity
                                    whenever you are online.
                            </p>

                                {/*Information that KoolKanya Collects*/}
                                <h4>Information that KoolKanya Collects</h4>
                                <p>
                                    When you register an account on the Site, KoolKanya may collect the information that is
                                    personally identifiable such as names, addresses, e-mail address, phone number, personal
                                URLs, photographs and credit card numbers ("<span className="color-text">Personal Information</span>").
                            </p>

                                <p> In connection with employer reviews, work history information, and other content you may
                                    contribute, KoolKanya (and/or its third party service providers) will collect a wide
                                    variety of employee and salary-related information on a voluntary basis. Please be aware
                                    that while some pieces of information that you provide to us would not be sufficient to
                                    identify you when seen by another user without any context, the combination of different
                                    pieces of information that you have provided for viewing by other users, or any
                                    contextual information, may allow other users to identify you.
                            </p>

                                <p>
                                    As you use the Services, certain information that is not Personal Information may also
                                    be collected passively, including your Internet protocol (IP) address, browser type,
                                    domain name, operating system and referring website. KoolKanya may also use "cookies",
                                    "pixel tags" and other Tracking Technologies (defined hereinafter), to enable
                                    functionality on our websites, as well as a variety of other ways to enhance or
                                    personalize your online browsing.
                            </p>

                                <p> KoolKanya also works with third-party companies that use their tracking technologies
                                    (including cookies and pixel tags) on our websites in order to provide tailored
                                    advertisements on our behalf and on behalf of other advertisers across the Internet.
                                    These companies may collect information about your activity on our sites and your
                                    interaction with our advertising and other communications and use this information to
                                    determine which ads you see on third-party websites and applications.
                            </p>

                                <p> KoolKanya may periodically conduct surveys of visitors to our Site for internal research
                                    purposes that may include marketing. If you choose to respond to such surveys, we may
                                    ask you for some Personal Information and/or may contact you for more information, but
                                    only if you have given us permission to do so.
                            </p>
                                <p>
                                    KoolKanya may also receive Personal Information about you from outside the Site, for
                                    instance, from third parties that provide services for us that are related to the
                                    Services. We may add this information to the information we have already collected from
                                    you via our Services.
                            </p>


                                {/*Public Posting*/}
                                <h4>Public Posting</h4>
                                <p>
                                    One of the purposes of the Services is for Members to share employment-related
                                    information with other Users. Therefore, you should assume that any information that you
                                    post to the publicly available areas of the Sites will be made available to other Users
                                    of the Services and the public at large. We provide you the ability to anonymously post
                                    certain comments under a chosen username, in which case we will not include your contact
                                    information (i.e., email address) on the Sites in connection with such comments.
                                    However, our internal records may associate your contact information with such comments.
                            </p>
                                <p>If you provide feedback about the Services to us, we may use and disclose such feedback
                                    for any purpose, provided we do not associate such feedback with your Personal
                                    Information. We will collect any information contained in such feedback and will treat
                                    the Personal Information in it in accordance with this Privacy Policy.

                            </p>


                                {/*Consent*/}
                                <h4>Consent</h4>
                                <p>
                                    By using the services on this site, you agree to the terms of this Privacy Policy.
                                    Whenever you submit information via this site, you consent to the handling, collection,
                                    use and disclosure of such information (including to third parties) in accordance with
                                    this Privacy Policy and the laws applicable for the time being in the territory of
                                    India. The information collected by KoolKanya through various publications, websites and
                                    other services or such information collected through contests, vote in polls, opinions,
                                    subscriptions such as our online newsletters or participation in one of our online
                                    forums or communities, should be strictly subjected to the application of this Privacy
                                    Policy. We may also collect certain non-personally identifiable information when you
                                    visit many of our web pages such as the type of browser, operating system and the domain
                                    name. Information that we collect has already been elaborated above.
                            </p>

                                {/*Site Usage Information*/}
                                <h4>Site Usage Information</h4>
                                <p>
                                    KoolKanya (including its third party service providers) may inactively collect from
                                    information from you that is not Personal Information. In addition to the information
                                    collected as described above, KoolKanya may also collect information about your browsing
                                    behaviour, such as the date and time you visit the Site, the areas or pages of the Site
                                    that you visit, the amount of time you spend viewing the Site, the number of times you
                                    return to the Site and other click-stream data. This helps us assist you by allowing us
                                    to understand how visitors use our Site. This data also becomes part of your unique
                                    profile and allows us to make your browsing experience beneficial. We, or a third party
                                    designated by us (such as Google Analytics), may also collect information from your
                                    activities on the Site as well as other sites for the purpose of providing
                                    advertisements and other content that is customized to your interests and preferences.
                                    To accomplish all this, and also to allow us to offer our customers streamlined ordering
                                    and other useful features, we, as do many web sites, use and allow our third party
                                    advertising companies to use the technologies listed below and other similar
                                technologies (the "<span className="color-text">Tracking Technologies</span>"):
                            </p>
                                <p> Cookies and Clear GIFs - KoolKanya may use cookies to collect the non-personal
                                    information described above. A cookie is a piece of information that is typically stored
                                    on the hard drive of your computer when you access the Site. KoolKanya may use both
                                    session cookies (which expire once you close your web browser) and persistent cookies
                                    (which stay on your computer until you delete them) for a variety of tasks, for
                                    instance, to store your login information (if any) and your personal preferences for the
                                    Services. You can decline cookies, but by doing so, you may not be able to use certain
                                    features on the Site. Cookies help collect anonymous and aggregate advertising metrics,
                                    such as counting page views, promotion views or advertising responses. Cookies also
                                    track where you travel on a site and what you look at and purchase. Pixel tags in our
                                    emails may be used to track your interactions with those messages, such as when you
                                    receive, open, or click a link in an email message from us. These technologies may also
                                    be used to collect information about your visit, including the pages you view, the
                                    features you use, the links you click, other actions you take in connection with the
                                    sites and our online ads. A clear GIF is typically a small, transparent image located on
                                    a web page or in an e-mail or other type of message, which is retrieved from a remote
                                    site on the Internet enabling the verification of an individual’s viewing or receipt of
                                    a web page or message.
                            </p>
                                <p> IP Address Tracking and Clickstream Data - In addition to cookies, pixel tags and clear
                                    GIFs, KoolKanya also automatically collects information about your server’s Internet
                                    address when you visit our Site. This information, known as an Internet Protocol
                                    address, or "IP Address", is a number that is automatically assigned to your computer by
                                    your Internet service provider whenever you are on the Internet. When you view pages
                                    from our Site, our servers may "log" your IP Address and sometimes your domain name. Our
                                    server also may record the page that linked you to us and related information including
                                    any ads you may have clicked on. Such information is known as "Clickstream Data".
                            </p>
                                <p> Email Interconnectivity - If you receive email from us, we may use certain tools to
                                    capture data related to when you open our message, click on any links or banners it
                                    contains and make purchases.
                            </p>
                                <p> In some cases, we may link the non-Personal information collected through the Tracking
                                    Technologies with certain of your Personal Information. WE WANT TO BE SURE THAT YOU
                                    UNDERSTAND THAT ACCEPTING TRACKING TECHNOLOGIES ONTO YOUR COMPUTER IN NO WAY GIVES US
                                    ACCESS TO YOUR COMPUTER OR ANY PERSONAL INFORMATION ABOUT YOU. YOU MAY SET YOUR WEB
                                    BROWSER SOFTWARE TO REJECT TRACKING TECHNOLOGIES, BUT, IF YOU DO SO, CERTAIN
                                    FUNCTIONALITY OF THE SITE MAY BE AFFECTED. Third parties (including, but not limited to,
                                    software vendors, advertisers and fulfilment companies) may also use Tracking
                                    Technologies by or through the Site. WE HAVE NO CONTROL OVER WHAT INFORMATION SUCH THIRD
                                    PARTIES TRACK OR COLLECT, AND HAVE NO RESPONSIBILITY OR LIABILITY FOR ANY TRACKING, DATA
                                    COLLECTION OR OTHER ACTIVITIES OF SUCH THIRD PARTIES
                            </p>


                                {/*Mobile Device Identifiers*/}
                                <h4>Mobile Device Identifiers</h4>
                                <p> You may be visiting the Site from your mobile device. Certain mobile service providers
                                    uniquely identify mobile devices and we or our third-party service providers may receive
                                    such information if you access the Site through mobile devices. Some features of the
                                    Site may allow for the collection of mobile phone numbers and we may associate that
                                    phone number to mobile device identification information. Furthermore, some mobile phone
                                    service providers operate systems that pinpoint the physical location of devices that
                                    use their service. Depending on the provider, we or our third-party service providers
                                    may receive this information.
                            </p>

                                {/*General use of information*/}
                                <h4>General use of information</h4>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p>All your Personal information will be stored in KoolKanya secured servers and may
                                        be
                                        shared with third parties in accordance with this Privacy Policy. KoolKanya may
                                        use your
                                        transaction or profile data by merging it in a larger set of data without any
                                        specific
                                        references to you as an Individual. This merged data can in turn be used to show
                                        appropriate information which we think may be useful to you on the pages you
                                        visit.
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> KoolKanya may use Personal Information in connection provision of the Services,
                                        respond
                                        to requests that you make, including performing technical support, to improve
                                        the Sites
                                        and Services, to better tailor the features, performance and support of the
                                        Services, to
                                        perform investigations consistent with this Privacy Policy, to provide you with
                                        information we believe may be of interest including mailing our circulars and
                                        special
                                        offers, for editorial and feedback purposes, for internal marketing and
                                        promotional
                                        purposes, for a statistical analysis of your browsing behaviour, for content
                                        improvement, for protection against fraud and error, and to customize the
                                        content and
                                        layout of the Site (collectively, "Information Usage"). KoolKanya will not
                                        knowingly use
                                        a mobile phone number for marketing purposes without first obtaining your
                                        consent. In
                                        connection with Information Usage, we may combine information we collect on the
                                        Site
                                        with information we receive from other sources. We do not sell Personal
                                        Information and
                                        we do not disclose Personal Information to any other party, except as set forth
                                        in this
                                        Privacy Policy. Unless otherwise provided in this Privacy Policy, any
                                        non-Personal
                                        Information you transmit to the Site or we collect from the Site will be treated
                                        as
                                        non-confidential and non-proprietary and you agree that we may use any such
                                        non-Personal
                                        Information (together with any ideas, concepts, know-how, or techniques
                                        contained
                                        therein) in any manner, for any purpose, without credit or compensation to you.
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p>The information KoolKanya collects in connection with our online forums and
                                        communities
                                        is used to provide an interactive experience. The information may also be used
                                        in the
                                        aggregate to analyze site usage, as well as to offer you products, programs, or
                                        services.
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> We may provide your Personal Information to our associates and to companies
                                        acting as
                                        our authorized agents or partners in providing our service or co-branded
                                        services to you
                                        and in connection with Information Usage. We screen and reasonably determine to
                                        be
                                        reputable any third party to whom we disclose such information and we require
                                        such third
                                        parties to agree to use the Personal Information only for such specified
                                        purposes. Each
                                        of our partners must agree to implement and maintain reasonable security
                                        procedures and
                                        practices appropriate to the nature of your Personal Information in order to
                                        protect
                                        your Personal Information from unauthorized access, destruction, use,
                                        modification or
                                        disclosure. If we merge, or sell or otherwise transfer our assets, Site or
                                        operations,
                                        we may disclose or transfer your Personal Information in connection with such
                                        transaction.
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p>In the event KoolKanya goes through a business transition such as a merger,
                                        acquisition
                                        by another company, or sale of all or a portion of its assets, including
                                        pursuant to
                                        bankruptcy, you acknowledge that your Personal Information may be among the
                                        assets
                                        transferred.
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p>KoolKanya shall disclose information we maintain when we believe in good faith
                                        that we
                                        are required to do so by law, for example, in response to a court order or a
                                        subpoena or
                                        to protect the rights, properties or safety of KoolKanya, our users or others.
                                        We also
                                        may disclose such information in response to a law enforcement agency's request.
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p>We may (and you authorize us to) disclose or retain, for as long as is reasonably
                                        necessary to accomplish the below, information we have collected from and about
                                        you
                                        (including Personal Information) if we believe in good faith that such
                                        disclosure or
                                        retention is necessary to:
                                </p>
                                </div>
                                <div className="d-flex flex-column col-11 ml-5">
                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p> Comply with relevant laws or to respond to valid subpoenas or warrants served on
                                            us or
                                            to other government requests;
                                    </p>
                                    </div>
                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p>To enforce our Terms & Conditions and Privacy Policy; or
                                    </p>
                                    </div>
                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p>
                                            To protect and defend the rights or property of us, the users of our Services,
                                            or third
                                            parties
                                    </p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p>
                                        You can login to your account on our Websites if you want to review or change the
                                        information you provide to us. You may also contact us at hr@koolkanya.com.
                                </p>
                                </div>

                                {/*Security of Your Information*/}
                                <h4>Security of Your Information</h4>
                                <p> KoolKanya uses Secure Sockets Layer (SSL) technology to encrypt all of your Personal
                                    Information before it is transmitted to us so that it can be safeguarded as much as
                                    possible from being read or recorded as it travels over the Internet. You can tell you
                                    are sending information securely by the unbroken key icon or closed lock icon that
                                    appears at the bottom of your Internet browser's window. These icons will appear when
                                    you are placing an order on our Site. In addition, you will see our Site address change
                                    slightly, from http: to https: indicating a secure server connection is being used. The
                                    computers that store your Personal Information are located in a separate facility which
                                    employs firewall and security technology. We employ these procedures to protect your
                                    Personal Information from unauthorized access.
                            </p>
                                <p>
                                    You may be able to create an account on our Site with a username and password. We
                                    recommend you exercise extreme care in protecting your password information and do not
                                    publicly share any of your passwords. You are responsible for maintaining the strict
                                    confidentiality of your account password, and you are responsible for any access to or
                                    use of the Site by you or another person or entity using your password, whether or not
                                    such access or use has been authorized by or on behalf of you.
                            </p>
                                <p>
                                    ALTHOUGH WE WILL TAKE (AND REQUIRE OUR THIRD-PARTY PROVIDERS TO TAKE) REASONABLE
                                    SECURITY PRECAUTIONS TO PROTECT THE PERSONAL INFORMATION COLLECTED FROM AND STORED ON
                                    THE SITE, BECAUSE OF THE OPEN NATURE OF THE INTERNET, WE CANNOT GUARANTEE THAT PERSONAL
                                    INFORMATION STORED ON OUR SERVERS, TRANSMITTED TO OR FROM A USER, OR OTHERWISE IN OUR
                                    CARE WILL BE ABSOLUTELY SAFE FROM INTRUSION BY OTHERS, SUCH AS HACKERS. ACCORDINGLY, WE
                                    DISCLAIM ANY LIABILITY FOR ANY THEFT OR LOSS OF, UNAUTHORIZED ACCESS OR DAMAGE TO, OR
                                    INTERCEPTION OF ANY DATA OR COMMUNICATIONS. BY USING THE SITE, YOU ACKNOWLEDGE THAT YOU
                                    UNDERSTAND AND AGREE TO ASSUME THESE RISKS.
                            </p>


                                {/*Security of Your Information*/}
                                <h4>Security of Your Information</h4>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p>
                                        KoolKanya shall be solely responsible for the ensuring that all Sensitive Personal
                                        Information is collected, received, possessed, stored, dealt and handled in
                                        accordance with
                                        all applicable laws.
                                        Indian law requires all entities that collect, receive, possess, store, deal and
                                        handle
                                        personal information, including Sensitive Personal Information, to:
                                </p>
                                </div>

                                <div className="d-flex flex-column col-10 ml-5">
                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p>
                                            Publish a privacy policy to all Users detailing the manner in which KoolKanya
                                            will
                                            handle or dealing in personal information including Sensitive Personal
                                            Information and
                                            ensure that the same are available for view by all Users.
                                    </p>
                                    </div>

                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p>
                                            Obtain consent from all Users in writing through letter or Fax or email [or
                                            otherwise
                                            through any established electronic means] regarding purpose of usage before
                                            collection
                                            of such information.
                                    </p>
                                    </div>

                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p>
                                            Not collect sensitive personal data or information unless (a) the information is
                                            collected for a lawful purpose connected with a function or activity of
                                            KoolKanya or any
                                            person on its behalf; and (b) the collection of the sensitive personal data or
                                            information is considered necessary for that purpose.
                                    </p>
                                    </div>

                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p>
                                            While collecting Sensitive Personal Information, take such reasonable steps to
                                            ensure
                                            that the User knows:
                                    </p>
                                    </div>
                                    <div className="d-flex flex-column col-11 ml-5">
                                        <div className="d-flex">
                                            <h5>+</h5>
                                            <p>
                                                The fact that the information is being collected
                                        </p>
                                        </div>

                                        <div className="d-flex">
                                            <h5>+</h5>
                                            <p>
                                                The purpose for which the information is being collected
                                        </p>
                                        </div>

                                        <div className="d-flex">
                                            <h5>+</h5>
                                            <p>
                                                The intended recipients of the information
                                        </p>
                                        </div>

                                        <div className="d-flex">
                                            <h5>+</h5>
                                            <p>
                                                The name and address of the agency that is collecting the information; and
                                                the
                                                agency that will retain the information.
                                        </p>
                                        </div>
                                    </div>

                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p>
                                            Not retain that information for longer than is required for the purposes for
                                            which the
                                            information may lawfully be used or is otherwise required under any law for the
                                            time
                                            being in force
                                    </p>
                                    </div>
                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p>
                                            Use such information for the purpose for which it has been collected.
                                    </p>
                                    </div>

                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p>
                                            Permit the Users, as and when requested by them, to review the Sensitive
                                            Personal
                                            Information they have provided
                                    </p>
                                    </div>

                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p>
                                            Ensure that any personal information or Sensitive Personal Information found to
                                            be
                                            inaccurate or deficient shall be corrected or amended as feasible.
                                    </p>
                                    </div>

                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p>
                                            Prior to the collection of information, including Sensitive Personal
                                            Information,
                                            provide an option to User to not to provide the data or information sought to be
                                            collected.
                                    </p>
                                    </div>

                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p>
                                            To provide each User, at any time, an option to withdraw its consent given
                                            earlier.
                                    </p>
                                    </div>

                                    <div className="d-flex">
                                        <h5>+</h5>
                                        <p>
                                            To keep all such information secure.
                                    </p>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p>
                                        Please note that disclosure of Sensitive Personal Information by one Party to
                                        another
                                        requires, by law, the prior permission from the provider of such information (such
                                        as
                                        Users), unless such disclosure has been agreed to in the contract between a Party
                                        and the
                                        User. Therefore, if KoolKanya is required to collect, receive, possess, store, deal
                                        or
                                        handle personal information (including any Sensitive Personal Information),
                                        KoolKanya shall
                                        ensure that each such User has consented to (a) KoolKanya’s collection, receipt,
                                        possession,
                                        storage, dealing or handling of all such personal information, and (b) KoolKanya’s
                                        transfer
                                        and disclosure of the of the same.
                                </p>
                                </div>
                                <p>
                                    For the purposes of this document, "Sensitive Personal Information" means personal
                                    relating to any individual’s:(i) password; (ii) financial information such as Bank
                                    account or credit card or debit card or other payment instrument details; (iii)
                                    physical, physiological and mental health condition; (iv) sexual orientation; (v)
                                    medical records and history; (vi) Biometric information; (vii) any detail relating to
                                    the above clauses as provided to any body corporate for providing any service; and any
                                    of the information received under above clauses by body corporate for processing, stored
                                    or processed under lawful contract or otherwise: provided that, any information that is
                                    freely available or accessible in public domain or furnished under any law for the time
                                    being in force shall not be regarded as sensitive personal data or information for the
                                    purposes of these rules.
                            </p>

                                {/*Enforcement of Legal Obligations*/}
                                <h4>Enforcement of Legal Obligations</h4>

                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> The User acknowledges that KoolKanya may terminate the User’s account and remove the
                                        Content and other Network Data, as well as disable the User’s access to any and all
                                        Networks at any time for violations of this policy without notice and without any
                                        liability to the User. The User is solely responsible and liable for failure to
                                        comply
                                        with all applicable laws including privacy laws.
                                </p>
                                </div>
                                <div className="d-flex">
                                    <h5>+</h5>
                                    <p> The User acknowledges that KoolKanya also reserves the right to remove, preserve,
                                        and
                                        disclose any information or Content or account it deems necessary or appropriate to
                                        (a)
                                        satisfy any applicable law, regulation, legal process or governmental request, (b)
                                        enforce this policy, including investigation of potential violations hereof, (c)
                                        detect,
                                        prevent, or otherwise address fraud, security, or technical issues, (d) respond to
                                        User
                                        support requests, (e) protect the rights, property, or safety of KoolKanya, its
                                        Users,
                                        and the general public, or (f) investigate or defend ourselves against third-party
                                        claims or allegations.
                                </p>
                                </div>


                                {/*Links to Third Party Sites*/}
                                <h4>Links to Third Party Sites</h4>
                                <p>
                                    Our Websites may contain links to third party sites. Please be aware, however, that
                                    KoolKanya is not responsible for and cannot control the privacy policies of these other
                                    sites or their practices. We encourage you to read the privacy policies for these other
                                    sites, as they may differ from ours. This Privacy Policy applies solely to personal
                                    information collected by KoolKanya.
                            </p>
                                <p> We may allow advertisers to place advertisements on the Sites. Clicking on such
                                    advertisements will direct you to the website of a third party. These websites may use
                                    tracking technologies in connection with these advertisements and may collect
                                    information from you, which may include Personal Information. This Privacy Policy does
                                    not cover the collection of information by these third-party websites. For information
                                    about our advertising partners, please visit their websites through the links included
                                    in the presentation of the advertisements.

                            </p>

                                {/*How to Opt-Out*/}
                                <h4>How to Opt-Out</h4>
                                <p>
                                    If at any time you wish to stop receiving e-mail from us, you can always remove your
                                name from our mailing list by sending an e-mail to <a href="mailto:care@koolkanya.com" className="color-text">
                                        <span><u>hr@koolkanya.com</u>
                                        </span>
                                    </a> stating that you
                                        wish to unsubscribe and indicating in the subject line of the e-mail "NO E-MAIL".
                                        Although we will promptly remove your name from our e-mail list upon receiving your
                                        request, it is possible that you may still receive e-mails from us that had been
                                        initiated prior to your name being removed from our list.
                            </p>
                                <p> If at any time you do not want to receive offers and/or circulars from us, you can
                                always remove yourself from our mailing list by sending an e-mail to <a
                                        href="mailto:care@koolkanya.com" className="color-text">
                                        <span><u>hr@koolkanya.com</u></span>
                                    </a>,
                                    indicating "NO SNAIL MAIL" in the subject line along with your name, address and zip
                                    code. Please note that our mailings are prepared in advance of their being sent.
                                    Although we will promptly remove your name from our mailing list upon receiving your
                                    request, you may still receive mailings from us that had been initiated prior to your
                                    name being removed from our list.
                            </p>
                                <p> You may change your Personal Information (e.g. password and/or username) by logging into
                                    the Site and editing your account information. We may provide you with the opportunity
                                    to "opt-out" of having your Personal Information used for certain purposes, when we ask
                                    for this information.
                            </p>
                                <p> We may send you service-related announcements when we believe it is necessary to do so.
                                    Generally, you may not opt-out of these announcements, which are not primarily
                                    promotional in nature. If you do not wish to receive these announcements, you have the
                                    option to deactivate your Account.
                            </p>
                                <p> We may notify you when your Personal Information is collected by any third party that is
                                    not our agent/service provider, so you can make an informed choice as to whether or not
                                    to share your information with that party.
                            </p>
                                <p> You may terminate your account by discontinuing your use of the Sites and providing us
                                with a notice of termination by email to <a href="mailto:care@koolkanya.com" className="color-text">
                                        <span><u>hr@koolkanya.com</u></span>
                                    </a>. After we receive this notice
                                    we will delete your account within a commercially reasonable amount of time, however, we
                                    reserve the right not to delete your Account and to retain your Account, including any
                                    Personal Information therein, to establish or defend a legal claim, pursuant to a
                                    government order or for other purposes permitted by law. Any termination of your account
                                    may involve deletion of your Account information from our live databases and all the
                                    information and data stored for such Account in the Services. KoolKanya will not have
                                    any liability whatsoever to you for any termination of your account or related deletion
                                    of you information.
                            </p>
                                <p> If and when we delete Personal Information that we have collected from or about you, it
                                    will be deleted from our active databases but may remain in our archives unless
                                    otherwise required by law.
                            </p>
                                <p> While many current browsers permit you to send a signal to us about your Do Not Track
                                    ("DNT") preferences, we do not respond to DNT signals sent from your browser.

                            </p>

                                {/*Amendment to this policy*/}
                                <h4>Amendment to this policy</h4>
                                <p>
                                    This Privacy Policy may be changed by KoolKanya with or without notice to the user. The
                                    revised Privacy Policy shall be posted to this page so that you are aware of the
                                    information collected, how it is used and under what circumstances it will be disclosed.


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

export default PrivacyPolicy;
