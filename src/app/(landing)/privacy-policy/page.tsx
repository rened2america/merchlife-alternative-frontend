import React from "react";
import SubHeaderCard from "../_components/SubHeaderCard";
import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"] });

const HowItWorks = () => {
  const Links = [
    { text: "HOME", href: "/" },
    { text: "PRIVACY-POLICY", href: "#", icon: true },
  ];

  return (
    <>
      <div className={`${raleway.className}`}>
        <SubHeaderCard title="PRIVACY POLICY" links={Links} />
        <div className="mb-5 flex w-full flex-col bg-white p-4 text-center leading-normal">
          <h5 className="mb-6 font-bold leading-normal tracking-tight text-gray-900 md:text-3xl lg:text-4xl xl:mt-24 xl:text-5xl">
            PRIVACY POLICY
          </h5>
          <div className=" mx-auto w-5/6 space-y-8 text-left text-sm font-normal text-gray-700 md:text-base lg:text-lg xl:mb-6 xl:text-xl">
            <p>Effective as of August 13, 2024.</p>

            <p>
              D2 America/Merchlife (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), the
              owner and operator of merchlife.co has developed this Privacy Policy to demonstrate
              its commitment to protecting your privacy.
            </p>

            <p>
              This privacy policy is intended to explain what information we collect, how our
              organization uses that information, with whom it may be shared, and your choices about
              such uses and disclosures.
            </p>

            <p>
              We encourage you to read this Privacy Policy carefully when using our website or
              services or transacting business with us. By using our website, you are accepting the
              practices described in this Privacy Policy.
            </p>

            <p>Topics:</p>

            <p>
              What data do we collect?
              <br />
              How do we collect your data?
              <br />
              How will we use your data?
              <br />
              How do we protect your information?
              <br />
              Marketing
              <br />
              Use of Cookies
              <br />
              Information collected by third parties
              <br />
              How to Opt-Out
              <br />
              How to manage your cookies
              <br />
              Privacy policies of other websites
              <br />
              The California Consumer Privacy Act
              <br />
              Amendments
              <br />
              How to contact us
              <br />
            </p>

            <p>
              <strong>What data do we collect?</strong>
              <br />
              We may collect personal information that can identify you such as your name and email
              address and other information that does not identify you. When you provide personal
              information through any of our websites, the information may be sent to servers
              located in the United States and other countries around the world.
            </p>

            <p>
              We may collect and store any personal information you enter or provide to us in some
              other manner. This includes:
            </p>

            <p>
              Your name
              <br />
              Address
              <br />
              Email
              <br />
              Phone number. <br />
              If you transact business with us, we may also collect and store financial information
              such as your payment method and billing address. <br />
              We may also request information about your interests, age, gender, and purchase
              history.
            </p>

            <p>
              <strong>How do we collect your data?</strong>
              <br />
              We may collect these data if you directly provide your information to us or we may
              obtain it from our business partners, contractors, and other third parties. We collect
              data and process data when you:
            </p>

            <p>
              Register online or place an order for any of our products.
              <br />
              Voluntarily complete a customer survey, or provide feedback on any of our message
              boards or via email.
              <br />
              Use or view our website via your browser&rsquo;s cookies.
              <br />
            </p>

            <p>
              <strong>How will we use your data?</strong>
              <br />
              We may collect your data so that we can:
            </p>

            <p>
              <strong>Process your order</strong>
              <br />
              Deliver the products and/or services you requested
              <br />
              Manage your account
              <br />
              Better service you in responding to your customer service requests
              <br />
              Email you with special offers on our products we think you might be interested
              <br />
              Develop and display content and advertising campaigns
              <br />
              <br />
              <strong>How do we protect your information?</strong>
              <br />
              We implement a variety of security measures to maintain the safety of your personal
              information. Your personal information is contained behind secured networks and is
              only accessible by a limited number of persons who have special access rights to such
              systems, and are required to keep the information confidential. When you place orders
              or access your personal information, we offer the use of a secure server. All
              sensitive/credit information you supply is transmitted via Secure Socket Layer (SSL)
              technology and then encrypted into our databases to be only accessed as stated above.
            </p>

            <p></p>

            <p>
              Marketing
              <br />
              We would like to send you information about other products and services that we offer
              and that we think you might like, as well as those of our partner companies:
              <br />
              D2 America
              <br />
              If you have agreed to receive marketing, you may always opt out at a later date. You
              have the right, at any time, to stop Merchlife from contacting you for marketing
              purposes or giving your data to other members of Merchlife.
            </p>

            <p>
              To Opt-Out of receiving our direct mail, you can click the unsubscribe button at the
              footer of any of our emails, you may send us an email to support@merchlife.co, or
              call us at (408) 418 5217. We will be happy to help you.
            </p>

            <p></p>

            <p>
              <strong>Use of Cookies</strong>
              <br />
              Cookies are small files that a site or its service provider transfers to your
              computer's hard drive through your Web browser (if you allow) that enables the site's
              or service provider's systems to recognize your browser and capture and remember
              certain information.
            </p>

            <p>
              We use cookies to collect information from your computer that can help us evaluate
              your activity on our website. This, for analytics purposes to understand how people
              use our website so that we can make it more intuitive.
            </p>

            <p>
              When you visit our website, we may collect information from your browser that include
              your IP address, browser type, language, access times, the content of any undeleted
              cookies that your browser previously accepted from us, and the referring website
              address.
            </p>

            <p>
              For instance, we use cookies to help us remember and process the items in your
              shopping cart. They are also used to help us understand your preferences based on
              previous or current site activity, which enables us to provide you with improved
              services. We also use cookies to help us compile aggregate data about site traffic and
              site interaction so that we can offer better site experiences and tools in the future.
            </p>

            <p>
              <strong>Information collected by third parties</strong>
              <br />
              We may contract with third-party service providers to assist us in better
              understanding our site visitors, and to serve advertisements on our Site and on
              third-party websites or other media (Social Media Platforms). This allows us to target
              advertisements to you for products in which you might be interested.
            </p>

            <p>
              These companies may use tracking technologies to collect information about users who
              view or interact with their advertisements or use their applications and services. We
              would not provide any personal information to these third parties, but they may
              collect information about where you saw and/or clicked on the advertisements they
              deliver.
            </p>

            <p>
              One of our advertising service partners is AdRoll Group. To learn more about them and
              the information they collect, please visit their privacy policy clicking here.
            </p>

            <p>
              These service providers are not permitted to use the information collected on our
              behalf except to help us conduct and improve our business.
            </p>

            <p>
              <strong> How to Opt-Out</strong>
              <br />
              You may Opt-Out of receiving further information from us and third-party ad networks
              at any time by contacting our team at support@merchlife.co In your email, please give
              us your full name, email address, and statement that you do not want to receive
              further information from us.
            </p>

            <p>
              You can also visit Network Advertising Initiative for more information, clicking here.
              If you want to Opt-Out from receiving cross-device site advertising, you can access
              your device setting or visit and employ the controls described on the NAI&rsquo;s
              Mobile Choices page.
            </p>

            <p>
              <strong>How to manage your cookies</strong>
              <br />
              It is possible to restrict or block the cookies which are set by this website through
              your browser settings. You can choose to have your computer warn you each time a
              cookie is being sent, or you can choose to turn off all cookies. You do this through
              your browser (like Netscape Navigator or Internet Explorer) settings. Each browser is
              a little different, so look at your browser Help menu to learn the correct way to
              modify your cookies. If you turn cookies off, you won't have access to many features
              that make your site experience more efficient and some of our services will not
              function properly.
            </p>

            <p>For more information, you can visit http://www.allaboutcookies.org/.</p>

            <p>
              <strong>Privacy Policies of other Websites</strong>
              <br />
              Our website may contain links to other websites of interest. Once you have used these
              links to leave our website, we do not have any control over that other site.
              Therefore, we cannot be responsible for the protection and privacy of any information
              which you provide to that other website.
            </p>

            <p>
              Also, such sites are not governed by this privacy statement. You should exercise
              caution and look at the privacy statement applicable to the website you&rsquo;re
              visiting.
            </p>

            <p>
              <strong>The California Consumer Privacy Act</strong>
              <br />
              The California Consumer Privacy Act (CCPA) provides California resident users with
              specific rights regarding their personal information. These rights include:
            </p>

            <p>
              The right to request us to disclose what personal information is collected and how it
              is used;
              <br />
              The right to request us to disclose how it sells your personal information;
              <br />
              The right of non-discrimination if you make a request about your personal information;
              and <br />
              The right to Opt-Out of having your personal information sold. <br />
              You can submit requests about your information to the email address
              support@merchlife.co. California consumers have the right to request information about
              Merchlife collection and use of their personal information over the past 12 months. We
              will respond to your request within 45 calendar days. You must provide sufficient
              information that allows us to reasonably verify identity, and you must describe the
              request in detail so we can properly understand it, evaluate it, and respond to it.
            </p>

            <p>
              You can also check this section in NextRoll&rsquo;s (AdRoll) Privacy Notice clicking
              here.
            </p>

            <p>
              {" "}
              <br />
              <strong>Amendments</strong> <br />
              Merchlife reserves the right to make changes to this Privacy Policy from time to time.
              Your continued use of our website and services constitutes agreement with the new
              policies and acceptance of the changes.
            </p>

            <p>This version was last updated on August 13, 2024.</p>

            <p>
              <strong>Contact Us</strong>
              <br />
              Send us an email to support@merchlife.co or call us at 408 418 5217. We&rsquo;re
              always happy to hear from you.
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;