"use client";

import { Paragraph, Title } from "@/components/text";

export default function PrivacyPage() {
  return (
    <div className="container grid justify-center">
      <section className="flex min-h-[50vh] print:min-h-[20vh] flex-col items-center justify-center gap-2">
        <Title>Privacy policy</Title>
        <Paragraph>Last edited: April, 30th 2023</Paragraph>
      </section>
      <section className="max-w-[1240px] text-justify">
        <p>
          Peyronnet Group is committed to protecting the privacy of our
          customers and visitors. This Privacy Policy explains how we collect,
          use, and protect personal information that we may obtain from you
          through our website and applications.
        </p>

        <h2 className="m-4 text-left font-wide text-xl font-bold uppercase leading-tight tracking-tighter">
          Information We Collect
        </h2>

        <p>We may collect the following types of information:</p>
        <ol type="1" className="ml-8 list-decimal">
          <li className="">
            Personal information such as your name, email address, and phone
            number that you provide to us when you register for an account, make
            a purchase, or sign up for our newsletter.
          </li>
          <li>
            Information about your device, such as your IP address, browser
            type, and operating system.
          </li>
          <li>
            Information about your use of our website and applications, such as
            pages visited, time spent, and the features used.
          </li>
          <li>
            Information about your usage of our Windows Desktop apps, only if
            the Synethia experience manager is enabled.
          </li>
        </ol>
        <h2 className="m-4 text-left font-wide text-xl font-bold uppercase leading-tight tracking-tighter">
          How We Use Your Information
        </h2>
        <p>
          We use your personal information to provide you with access to our
          services, process transactions, and communicate with you about our
          products and services. We also use your information to improve our
          website and applications, develop new products and services, and
          conduct market research.
        </p>
        <br />
        <p>
          If the Synethia experience manager is enabled in our Windows Desktop
          apps, we collect usage data to improve the user experience. This data
          is stored locally on your device and is not sent to us. You can delete
          this data at any time.
        </p>
        <br />
        <p>
          We may use cookies and other tracking technologies to collect
          information about your use of our website and applications. Cookies
          are small data files that are stored on your device and enable us to
          recognize your device and remember your preferences.
        </p>
        <p>
          <br />
          We do not sell or rent your personal information to third parties.
        </p>
        <h2 className="m-4 text-left font-wide text-xl font-bold uppercase leading-tight tracking-tighter">
          How We Protect Your Information
        </h2>
        <p>
          We take reasonable measures to protect your personal information from
          unauthorized access, use, and disclosure. We use industry-standard
          security measures to protect your information, including encryption
          and firewalls.
          <br />
          However, no security measures are foolproof, and we cannot guarantee
          the security of your personal information.
        </p>
        <h2 className="m-4 text-left font-wide text-xl font-bold uppercase leading-tight tracking-tighter">
          Your Choices
        </h2>
        <p>
          You can opt-out of receiving marketing emails from us at any time by
          clicking the &quot;unsubscribe&quot; link at the bottom of our emails.
          You can also disable cookies in your browser settings, although this
          may affect your ability to use certain features of our website and
          applications.
        </p>
        <h2 className="m-4 text-left font-wide text-xl font-bold uppercase leading-tight tracking-tighter">
          Links to Other Sites
        </h2>
        <p>
          Our Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by us. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. We have no control
          over, and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </p>
        <h2 className="m-4 text-left font-wide text-xl font-bold uppercase leading-tight tracking-tighter">
          Updates to this Privacy Policy
        </h2>
        <p>
          We may update our Privacy Policy from time to time. Thus, we advise
          you to review this page periodically for any changes. We will notify
          you of any changes by posting the new Privacy Policy on this page.
          These changes are effective immediately, after they are posted on this
          page.
        </p>
        <h2 className="m-4 text-left font-wide text-xl font-bold uppercase leading-tight tracking-tighter">
          Contact Us
        </h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          privacy practices, please contact us at{" "}
          <a className="underline" href="mailto:peyronnet-group@outlook.com">
            peyronnet-group@outlook.com
          </a>
          . <br /> Thank you for choosing Peyronnet Group.
        </p>
      </section>
    </div>
  );
}
