import React from "react";
import { Wrapper, H1, H3 } from "./privacy-disclaimer.style";

const PrivacyDisclaimer = () => {
  return (
    <Wrapper>
      <div className="container px-lg-5">
        <H1>Privacy Policy</H1>
        <p>
          Clubtails is a company owned by Broue Alliance. You must be of legal
          drinking age to visit this website.
        </p>
        <H3>Sharing function</H3>
        <p>
          The sharing feature available on some pages of our website allows you
          to tell your friends by email or social networks about what you are
          interested in. The information you provide is processed by AddThis and
          is therefore subject to their privacy policy, not Broue Alliance. We
          will not add your friends to a mailing list or send them any further
          emails.
        </p>
        <H3>Cookies</H3>
        <p>
          Cookies may be used on the www.groupegeloso.com website. These files
          allow us to identify your web browser from one visit to another and
          from one page to another during a session in order to facilitate your
          access to the site and your navigation within it.
        </p>

        <H3>Links to Other Websites</H3>
        <p>
          Our website may contain links to other websites whose content we do
          not control. We have no control over the content and operation of
          these websites, nor over their privacy policies. Consequently, any
          information you disclose through these sites is subject to their
          privacy policies. It is your responsibility to read their privacy
          policies to ensure the protection of your information.
        </p>

        <H3>Netiquette</H3>
        <p>
          Netiquette is the set of conventions governing the behavior of
          Internet users, particularly during exchanges by e-mail or on social
          networks. All comments will be read and considered. However, here are
          the reasons why we may remove them:
          <ul>
            <li>
              - It is defamatory, hateful, racist, xenophobic, homophobic,
              sexist or disgraceful.
            </li>
            <li>
              - It is advertising in any form, including comments promoting
              products or services.
            </li>
            <li>- It is a message that is repeatedly posted or off-topic.</li>
          </ul>
        </p>
      </div>
    </Wrapper>
  );
};

export default PrivacyDisclaimer;
