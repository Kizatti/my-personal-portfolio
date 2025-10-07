import RevealOnScroll from "../Ui/RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen font-mono flex items-center justify-center py-14 sm:py-20 "
    >
      <RevealOnScroll>
  <div className="px-8 w-full max-w-3xl">
          <h2 className="max-w-2xl text-4xl sm:text-5xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            Get In touch
          </h2>

          <form
            action="https://formsubmit.co/kaybee437@gmail.com"
            method="POST"
            className="space-y-7"
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name..."
                required
                className="w-full bg-white/10 border border-r-white/10 rounded px-10 py-5 text-white text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required
                className="w-full bg-white/10 border border-r-white/10 rounded px-10 py-5 text-white text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
              />
            </div>
            <div className="relative">
              <textarea
                type="message"
                id="message"
                name="message"
                rows={6}
                placeholder="Type your message..."
                required
                className="w-full bg-white/10 border border-r-white/10 rounded px-10 py-5 text-white text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r flex justify-center cursor-pointer from-teal-500 to-indigo-600 px-12 rounded font-medium text-lg transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] py-5 "
            >
              {" "}
              Submit{" "}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

