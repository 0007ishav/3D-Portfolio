import React, { forwardRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import AlertModal from "../components/AlertModal ";

const Contact = forwardRef((_, ref) => {
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false)
    try {
      await emailjs.send(
        "service_cy31kq4",
        "template_jfpex8w",
        {
          from_name: form.name,
          to_name: "Ishav",
          to_email: "workwithishav@gmail.com",
          from_email: form.email,
          message: form.message,
        },
        "wP2BV13LY2ifam7Kh"
      );
      setLoading(false);
      setSuccess(true)
      setShowModal(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      setShowModal(true);
    }
  };
  return (
    <section className="c-space my-20" id="contact" ref={ref}>
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen hidden sm:block"
        />
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Looking to enhance your platform, build a responsive web
            application, or implement a custom ServiceNow solution? Let’s
            collaborate and make it happen.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={3}
                autoCorrect="on"
                className="field-input max-h-[160px]"
                placeholder="Hi, I'm interested in learning more about your services or solutions..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
      <AlertModal 
                isOpen={showModal} 
                 message={loading ? 'Sending your message... Please wait.' : (success ? 'Your message has been sent! I\'ll get back to you soon.' : 'Oops! There was an issue sending your message. Please try again.')}  
                onClose={() => setShowModal(false)}
            />
    </section>
  );
});

export default Contact;