import { useState, useRef } from "react";
import { Reveal } from "@/components/utils/Reveal";
import styles from "@/styles/modules/contact.module.css";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { OutlineButton } from "@/components/buttons/OutlineButton";
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const [message, setMessage] = useState('');
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const service_id = process.env.NEXT_PUBLIC_SERVICE_ID;
    const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const user_id = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    emailjs.sendForm(service_id as string, template_id as string, form.current!, user_id as string)
      .then((result) => {
        toast.success('Message sent!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setMessage('');
        form.current!.reset();
      }, (error) => {
        toast.error('Something went wrong', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <ToastContainer />
      <section className="section-wrapper" id="contact">
        <div className={styles.contactWrapper}>
          <Reveal width="100%">
            <h4 className={styles.contactTitle}>
              Contact<span className={styles.contactSpan}>.</span>
            </h4>
          </Reveal>
          <Reveal width="100%">
            <p className={styles.contactCopy}>
              You can also find me on{" "}
              <Link
                href="https://www.instagram.com/therealtoxicdev/"
                target="_blank"
                rel="nofollow"
                className={styles.contactLink}
              >
                Instagram
              </Link>{" "}
              or{" "}
              <Link href="https://www.twitter.com/TheRealToxicDev" target="_blank" rel="nofollow" className={styles.contactLink}>
                Twitter
              </Link>{" "}
              if that&apos;s more your speed.
            </p>
          </Reveal>
          <Reveal width="100%">
            <Link href="mailto:hey@toxicdev.me">
              <div className={styles.contactEmail}>
                <AiFillMail size="2.4rem" />
                <span className={styles.contactSpan}>hey@toxicdev.me</span>
              </div>
            </Link>
          </Reveal>
          <Reveal width="100%">
            <form autoComplete="false" className={styles.contactForm} ref={form} onSubmit={sendEmail}>
              <div className={styles.inputBox}>
                <input type="text" placeholder="Full Name" autoComplete="false" name="to_name" required />
                <input type="email" placeholder="Email Address" autoComplete="false" name="from_name" required />
              </div>
              <textarea placeholder="Your Message"
                autoComplete="false"
                required
                name="message"
                value={message}
                onChange={handleMessageChange}></textarea>
              <br /><br />
              <OutlineButton>
                Send Message
              </OutlineButton>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
};
