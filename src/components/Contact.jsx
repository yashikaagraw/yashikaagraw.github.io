import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "yashika.agrawal23@gmail.com", link: "mailto: yashika.agrawal23@gmail.com", id: "contact-email" },
    { logo: "logo-whatsapp", text: "8126472202", link: "tel: +918126472202", id: "contact-phone" },
    { logo: "logo-github", text: "Github", link: "https://github.com/yashikaagraw", id: "contact-github" },
    { logo: "logo-linkedin", text: "LinkedIn", link: "https://www.linkedin.com/in/yashikareact/", id: "contact-linkedin" }
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form action="https://formsubmit.co/yashika.agrawal23@gmail.com" method="POST" className="flex flex-col flex-1 gap-5">
            <input type="text" required name="name" placeholder="Your Name" />
            <input type="email" required name="email" placeholder="Your Email Address" />
            <input type="text" required name="subject" placeholder="Subject" />
            <textarea name="message" required placeholder="Your Message" rows={6}></textarea>
            <input type="hidden" name="_captcha" value={false} />
            <button type="submit" className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className={`min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full`}>
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p id={contact.id} className="md:text-base text-sm  break-words">
                  <a href={contact.link} target={"_blank"} rel="noreferrer">{contact.text}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
