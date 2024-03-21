import React from "react";
import "./community.css";

import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { FaMedium } from "react-icons/fa6";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { SiGitbook } from "react-icons/si";
import dex from "../../assets/dextools.svg";

const SocialLinks = ({ link, icon, linkTitle, linkSubText }) => {
  return (
    <a href={link} target="_blank" className="social-links">
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
    <div className="community-container" id="community">
      <section className="community-email-container">
        <h3>Join our Community</h3>
        <p>
          Learn more about Aqua Stake, chat with us and have your say in the
          future of the Aqua ecosystem
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
          link="https://t.me/aquastakeportal"
          linkTitle="Telegram"
          linkSubText="Join Chat"
        />
        <SocialLinks
          icon={<FaXTwitter size={IconSize} color={IconColor} />}
          link="https://twitter.com/Aqua_Stake"
          linkTitle="Twitter"
          linkSubText="Follow us"
        />
        <SocialLinks
          icon={<SiGitbook size={IconSize} color={IconColor} />}
          link="https://aqua-stake.gitbook.io/aquastake/"
          linkTitle="Git Book"
          linkSubText="Contribute"
        />
        <SocialLinks
          icon={<FaMedium size={IconSize} color={IconColor} />}
          link="#"
          linkTitle="Medium"
          linkSubText="Learn More"
        />
        <SocialLinks
          icon={<img src={dex} className="social-links-svg-image" />}
          link="https://www.dextools.io/app/en/ether/pair-explorer/0x94fb70fb1aa99e1ee7675d7ab73bbdd776b901bf?t=1710885293321"
          linkTitle="DexTools"
          linkSubText="View Chart"
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
