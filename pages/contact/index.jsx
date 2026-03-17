import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import { fadeIn } from "../../variants";
import { useState } from "react";
import { HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";
import Socials from "../../components/Socials";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Thank you. I will get back to you ASAP.");
        } else {
          console.log(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="min-h-screen bg-primary/30 pt-3 pb-6 md:pt-6 md:pb-10">
      <div className="container mx-auto text-center xl:text-left flex items-start justify-center">
        {/* text & form */}
        <div className="flex flex-col xl:flex-row w-full max-w-[920px] gap-6 xl:gap-8">
          {/* text & info */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 rounded-2xl border border-white/10 bg-[rgba(65,47,123,0.18)] px-5 py-6 md:px-7 md:py-8"
          >
            <motion.h2
              className="h2 text-center xl:text-left mb-4"
            >
              Let's <span className="text-accent">connect.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[46ch] mx-auto xl:mx-0 mb-6 text-[14px]"
            >
              Have a project in mind or want to collaborate? Send a message and I’ll reply as soon as possible.
            </motion.p>
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col gap-y-3 text-white/70"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-accent text-lg">
                  <HiOutlineEnvelope aria-hidden />
                </div>
                <div className="text-left">
                  <div className="text-[11px] uppercase tracking-widest text-white/60">
                    Email
                  </div>
                  <a
                    className="hover:text-accent transition-colors"
                    href="mailto:ahzamimam92@gmail.com"
                  >
                    ahzamimam92@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-accent text-lg">
                  <HiOutlinePhone aria-hidden />
                </div>
                <div className="text-left">
                  <div className="text-[11px] uppercase tracking-widest text-white/60">
                    Phone
                  </div>
                  <a
                    className="hover:text-accent transition-colors"
                    href="tel:+923232846795"
                  >
                    +92 323 2846795
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-accent text-lg">
                  <HiOutlineMapPin aria-hidden />
                </div>
                <div className="text-left">
                  <div className="text-[11px] uppercase tracking-widest text-white/60">
                    Location
                  </div>
                  <div>Karachi, Pakistan</div>
                </div>
              </div>
            </motion.div>
            <div className="mt-6 flex justify-center xl:justify-start">
              <Socials />
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 rounded-2xl border border-white/10 bg-[rgba(65,47,123,0.18)] px-5 py-6 md:px-7 md:py-8 flex flex-col gap-4 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            name="contact"
          >
            <div className="text-left">
              <div className="text-white font-semibold text-[16px]">
                Send a message
              </div>
              <div className="text-white/60 text-[13px] mt-1">
                Fill the form below and I’ll get back to you.
              </div>
            </div>

            {/* input group */}
            <div className="flex flex-col md:flex-row gap-3 w-full">
              <input type="hidden" name="form-name" value="contact" />

              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/40 max-w-[180px] px-7 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {isLoading ? "Sending..." : "Let's talk"}
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
