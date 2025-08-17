import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-white dark:bg-slate-900 dark:text-white overflow-x-hidden">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-20">
          
          <h1 className="text-2xl font-semibold md:text-4xl text-center">
            Contact Us
          </h1>

          <p className="mt-6 text-center">
            If you have any questions or feedback, feel free to reach out to us!
          </p>

          <form className="mt-10 max-w-md mx-auto bg-gray-100 dark:bg-slate-800 p-6 rounded-lg shadow-md">
            {/* Name */}
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-slate-700 dark:text-white"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-slate-700 dark:text-white"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block mb-2">Message</label>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-slate-700 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-secondary w-full mt-4 hover:bg-pink-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
