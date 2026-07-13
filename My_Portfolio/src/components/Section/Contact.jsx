import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, CircleAlert } from "lucide-react";

const Contact = () => {
  const formRef = useRef();

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

        showToast(
          true,
          "Your message has been sent successfully!"
        );
      })
      .catch(() => {
        showToast(
          false,
          "Something went wrong. Please try again."
        );
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
            transition={{ duration: .3 }}
            className={`
              fixed
              top-8
              right-8
              z-50
              flex
              items-center
              gap-3
              rounded-xl
              px-5
              py-4
              shadow-xl
              text-white
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

            <p>{toast.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact */}

      <div className="max-w-3xl mx-auto py-24">

        <h2 className="text-5xl font-black mb-12">
          Hire <span className="text-accent">Me....</span>
        </h2>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-6"
        >
          <input
            name="name"
            placeholder="Your Name"
            required
            className="border border-secondary/20 rounded-lg p-4 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border border-secondary/20 rounded-lg p-4 outline-none"
          />

          <input
            name="subject"
            placeholder="Subject"
            required
            className="border border-secondary/20 rounded-lg p-4 outline-none"
          />

          <textarea
            rows={6}
            name="message"
            placeholder="Your Message"
            required
            className="border border-secondary/20 rounded-lg p-4 outline-none resize-none"
          />

          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: .95,
            }}
            disabled={loading}
            className="
              bg-accent
              text-white
              rounded-lg
              py-4
              font-semibold
              flex
              items-center
              justify-center
              gap-3
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
    </>
  );
};

export default Contact;
