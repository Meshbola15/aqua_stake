import React from "react";
import "./community.css";

import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { FaBloggerB } from "react-icons/fa6";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { PiGithubLogoFill } from "react-icons/pi";

const SocialLinks = ({ link, icon, linkTitle, linkSubText }) => {
  return (
    <a href={link} className="social-links">
      <div className="social-icon-container">{icon}</div>
      <div className="social-link-text">
        <h2>{linkTitle}</h2>
        <p>{linkSubText}</p>
      </div>
    </a>
  );
};

const IconSize = 30;
const IconColor = "#ffffff";

const Community = () => {
  return (
    <div className="community-container">
      <section className="community-email-container">
        <h3>Join our Community</h3>
        <p>
          Learn more about Aqua Stake, chat with us and have your <br /> say in
          the future of the Lido ecosystem
        </p>

        <form action="submit" className="community-email">
          <input
            type="email"
            name="Email"
            id="community-email-id"
            placeholder="Email address"
          />
          <button>Subcribe</button>
        </form>
        <p className="">
          By subscribing you accept our <a href="#"> Privacy Notice </a>
        </p>
      </section>
      <section className="community-social-container">
        <SocialLinks
          icon={<BiLogoTelegram size={IconSize} color={IconColor} />}
          link="#"
          linkTitle="Telegram"
          linkSubText="Join Chat"
        />
        <SocialLinks
          icon={<FaXTwitter size={IconSize} color={IconColor} />}
          link="#"
          linkTitle="Twitter"
          linkSubText="Follow us"
        />
        <SocialLinks
          icon={<FiSearch size={IconSize} color={IconColor} />}
          link="#"
          linkTitle="Research Forum"
          linkSubText="Join discussions"
        />
        <SocialLinks
          icon={<PiGithubLogoFill size={IconSize} color={IconColor} />}
          link="#"
          linkTitle="Github"
          linkSubText="Contribute"
        />
        <SocialLinks
          icon={<FaBloggerB size={IconSize} color={IconColor} />}
          link="#"
          linkTitle="Blog"
          linkSubText="Learn about Aqua Stake"
        />
        <SocialLinks
          icon={<HiMiniChatBubbleLeftRight size={IconSize} color={IconColor} />}
          link="#"
          linkTitle="Contact us"
          linkSubText="Get in touch with us"
        />
      </section>
    </div>
  );
};

export default Community;
