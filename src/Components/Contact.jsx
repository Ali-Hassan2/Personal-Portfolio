import { CONTACT } from '../constants';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl text-white">
        Get in Touch
      </h1>

      <div className="text-center tracking-tighter text-white mb-12">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="my-4 border-b text-neutral-400">
          {CONTACT.email}
        </a>
      </div>

      <div className="max-w-md mx-auto p-8">
        <form className="space-y-6">
          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-white">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="mt-2 p-4 bg-black text-white rounded-lg border-none focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium text-white">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mt-2 p-4 bg-black text-white rounded-lg border-none focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-medium text-white">Message</label>
            <textarea
              id="message"
              placeholder="Your message here..."
              rows="4"
              className="mt-2 p-4 bg-black text-white rounded-lg border-none focus:ring-2 focus:ring-purple-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Infinite Gradient Animation */}
      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        input, textarea {
          background-color: #111;
          position: relative;
          overflow: hidden;
        }

        input:focus, textarea:focus {
          outline: none;
        }

        input::after, textarea::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #ff6b6b, #f2c94c, #6ab04c, #2980b9, #8e44ad);
          background-size: 400% 400%;
          animation: gradientAnimation 6s ease infinite;
          z-index: -1;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default Contact;
