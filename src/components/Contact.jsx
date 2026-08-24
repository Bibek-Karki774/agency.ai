import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 px-6 bg-white dark:bg-black text-black dark:text-white">
      {/* TITLE */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Reach out to us</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          From strategy to execution, we craft digital solutions that move your
          business forward.
        </p>
      </div>

      {/* FORM */}
      <div className="max-w-2xl mx-auto">
        <form className="space-y-5">
          {/* ROW 1 - TWO INPUTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-800 
                         bg-white dark:bg-black text-black dark:text-white 
                         outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-800 
                         bg-white dark:bg-black text-black dark:text-white 
                         outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ROW 2 - TEXTAREA */}
          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-800 
                       bg-white dark:bg-black text-black dark:text-white 
                       outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* ROW 3 - BUTTON */}
          <div className="flex justify-start">
            <button
              type="submit"
              className="px-6 py-2 text-white rounded-lg font-medium transition hover:opacity-90"
              style={{ backgroundColor: "#5044E5" }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
