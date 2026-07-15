import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, CircleAlert } from "lucide-react";

const Contact = () => {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    success: true,
    message: "",
  });

  const showToast = (success, message) => {
    setToast({
      show: true,
      success,
      message,
    });

    setTimeout(() => {
      setToast((prev) => ({
        ...prev,
        show: false,
      }));
    }, 3500);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        formRef.current.reset();

        showToast(true, "Your message has been sent successfully!");
      })
      .catch(() => {
        showToast(false, "Something went wrong. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {/* Toast */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className={`
              fixed
              top-4
              left-4
              right-4
              sm:left-auto
              sm:right-6
              sm:top-6
              md:right-8
              md:top-8
              z-50
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              sm:px-5
              py-3
              sm:py-4
              shadow-xl
              text-white
              max-w-sm
              ${
                toast.success
                  ? "bg-green-600"
                  : "bg-red-600"
              }
            `}
          >
            {toast.success ? (
              <CheckCircle2 size={22} />
            ) : (
              <CircleAlert size={22} />
            )}

            <p className="text-sm sm:text-base">
              {toast.message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact */}
      <section className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-10 lg:mb-12 text-center sm:text-left">
          Hire <span className="text-accent">Me....</span>
        </h2>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-secondary/20 p-5 sm:p-8">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 sm:gap-5 lg:gap-6"
          >
            <input
              name="name"
              placeholder="Your Name"
              required
              className="
                w-full
                border
                border-secondary/20
                rounded-lg
                px-4
                py-3
                sm:py-4
                text-sm
                sm:text-base
                outline-none
                focus:border-accent
                transition-colors
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="
                w-full
                border
                border-secondary/20
                rounded-lg
                px-4
                py-3
                sm:py-4
                text-sm
                sm:text-base
                outline-none
                focus:border-accent
                transition-colors
              "
            />

            <input
              name="subject"
              placeholder="Subject"
              required
              className="
                w-full
                border
                border-secondary/20
                rounded-lg
                px-4
                py-3
                sm:py-4
                text-sm
                sm:text-base
                outline-none
                focus:border-accent
                transition-colors
              "
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Your Message"
              required
              className="
                w-full
                border
                border-secondary/20
                rounded-lg
                px-4
                py-3
                sm:py-4
                text-sm
                sm:text-base
                outline-none
                resize-none
                focus:border-accent
                transition-colors
              "
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="
                w-full
                sm:w-fit
                bg-accent
                text-white
                rounded-lg
                px-8
                py-3
                sm:py-4
                font-semibold
                text-sm
                sm:text-base
                flex
                items-center
                justify-center
                gap-3
                disabled:opacity-70
                disabled:cursor-not-allowed
                transition-all
              "
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;