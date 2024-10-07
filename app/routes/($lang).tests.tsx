import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <header className="bg-green-800 text-white p-4 md:p-6 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">El Yunque Rainforest</div>
          <ul className="flex space-x-6 text-lg">
            <li>
              <a href="#hero" className="hover:text-green-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-400">
                About
              </a>
            </li>
            <li>
              <a href="#flora-fauna" className="hover:text-green-400">
                Biodiversity
              </a>
            </li>
            <li>
              <a href="#visit" className="hover:text-green-400">
                Plan Your Visit
              </a>
            </li>
            <li>
              <a href="#conservation" className="hover:text-green-400">
                Conservation
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full h-[30vh] bg-cover bg-center flex items-center justify-center p-6 md:p-6 md:p-8"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1200x600')",
        }}
      >
        <div className="bg-black bg-opacity-50 text-white p-4 md:p-6 md:p-16 rounded-lg">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            El Yunque Rainforest
          </h1>
          <p className="text-xl md:text-2xl">
            Discover the heart of Puerto Rico - A natural treasure of
            biodiversity.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition-all">
            Learn More
          </button>
        </div>
      </section>

      {/* Quick Links */}
      <section
        id="flora-fauna"
        className="p-10 md:p-20 grid gap-10 grid-cols-1 md:grid-cols-3"
      >
        <div className="bg-white p-10 rounded-lg shadow-md text-left hover:shadow-xl transition-all">
          <h2 className="text-3xl font-bold mb-4">Explore Biodiversity</h2>
          <img
            src="https://via.placeholder.com/300"
            alt="Flora & Fauna"
            className="mb-4 rounded-lg"
          />
          <p className="mb-6">
            Discover the diverse species that call El Yunque home.
          </p>
          <a
            href="/flora-fauna"
            className="text-green-700 hover:text-green-900 font-semibold"
          >
            Learn More &rarr;
          </a>
        </div>
        <div className="bg-white p-10 rounded-lg shadow-md text-left hover:shadow-xl transition-all">
          <h2 className="text-3xl font-bold mb-4">Plan Your Visit</h2>
          <img
            src="https://via.placeholder.com/300"
            alt="Plan Your Visit"
            className="mb-4 rounded-lg"
          />
          <p className="mb-6">
            Make the most out of your trip with our detailed visitor's guide.
          </p>
          <a
            href="/plan-your-visit"
            className="text-green-700 hover:text-green-900 font-semibold"
          >
            Learn More &rarr;
          </a>
        </div>
        <div className="bg-white p-10 rounded-lg shadow-md text-left hover:shadow-xl transition-all">
          <h2 className="text-3xl font-bold mb-4">Learn About Conservation</h2>
          <img
            src="https://via.placeholder.com/300"
            alt="Conservation"
            className="mb-4 rounded-lg"
          />
          <p className="mb-6">
            See how you can get involved and help protect El Yunque.
          </p>
          <a
            href="/conservation"
            className="text-green-700 hover:text-green-900 font-semibold"
          >
            Learn More &rarr;
          </a>
        </div>
      </section>

      {/* Featured Content */}
      <section className="p-10 md:p-20">
        <h2 className="text-4xl font-bold mb-12 text-left">Recent Updates</h2>
        <div className="bg-white p-10 rounded-lg shadow-md md:flex items-start">
          <img
            src="https://via.placeholder.com/400"
            alt="Puerto Rican Parrot"
            className="mb-6 md:mb-0 md:mr-8 rounded-lg"
          />
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Spotlight: The Puerto Rican Parrot
            </h3>
            <p className="mb-6">
              Learn about the efforts to protect the critically endangered
              Puerto Rican Parrot and the conservation initiatives that are
              making a difference.
            </p>
            <a
              href="/blog/spotlight-puerto-rican-parrot"
              className="text-green-700 hover:text-green-900 font-semibold"
            >
              Read More &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* History & Significance Section */}
      <section id="about" className="p-10 md:p-20 bg-green-100">
        <h2 className="text-4xl font-bold mb-12 text-left">
          History & Significance
        </h2>
        <div className="bg-white p-10 rounded-lg shadow-md text-left">
          <p className="mb-6">
            El Yunque Rainforest holds great historical and ecological
            importance. From its cultural value to its role in sustaining
            biodiversity, it remains a vital part of Puerto Rico's natural
            heritage.
          </p>
          <a
            href="/about"
            className="text-green-700 hover:text-green-900 font-semibold"
          >
            Learn More &rarr;
          </a>
        </div>
      </section>

      {/* Ecology & Conservation Section */}
      <section id="conservation" className="p-10 md:p-20">
        <h2 className="text-4xl font-bold mb-12 text-left">
          Ecology & Conservation
        </h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          <div className="bg-white p-10 rounded-lg shadow-md text-left">
            <h3 className="text-3xl font-bold mb-4">Conservation Efforts</h3>
            <p className="mb-6">
              Discover ongoing conservation projects, including the partnerships
              and initiatives focused on protecting El Yunque's unique
              biodiversity.
            </p>
            <a
              href="/conservation"
              className="text-green-700 hover:text-green-900 font-semibold"
            >
              Learn More &rarr;
            </a>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-md text-left">
            <h3 className="text-3xl font-bold mb-4">Get Involved</h3>
            <p className="mb-6">
              Find out how you can participate in conservation efforts,
              volunteer opportunities, or donate to support El Yunque.
            </p>
            <a
              href="/get-involved"
              className="text-green-700 hover:text-green-900 font-semibold"
            >
              Learn More &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section className="p-10 md:p-20 bg-green-100">
        <h2 className="text-4xl font-bold mb-12 text-left">
          Educational Resources
        </h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          <div className="bg-white p-10 rounded-lg shadow-md text-left">
            <h3 className="text-3xl font-bold mb-4">Activities for Kids</h3>
            <p className="mb-6">
              Printable activities, coloring pages, and interactive quizzes that
              help children learn about the rainforest in a fun way.
            </p>
            <a
              href="/educational-resources/kids"
              className="text-green-700 hover:text-green-900 font-semibold"
            >
              Learn More &rarr;
            </a>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-md text-left">
            <h3 className="text-3xl font-bold mb-4">Teacher Resources</h3>
            <p className="mb-6">
              Lesson plans, video materials, and other tools for educators who
              want to teach students about rainforest ecology.
            </p>
            <a
              href="/educational-resources/teachers"
              className="text-green-700 hover:text-green-900 font-semibold"
            >
              Learn More &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Contact & Support Section */}
      <footer id="contact" className="bg-green-800 text-white p-10 md:p-16">
        <div className="container mx-auto text-left">
          <h2 className="text-3xl font-bold mb-6">Contact & Support</h2>
          <p className="mb-6">
            Have questions or want to get in touch? Use the contact form below
            to ask questions, suggest content, or get more information. You can
            also follow us on social media to stay updated with the latest news.
          </p>
          <a
            href="/contact"
            className="text-green-400 hover:text-green-500 font-semibold"
          >
            Contact Us &rarr;
          </a>
          <div className="mt-8">
            <p>Follow us:</p>
            <div className="flex justify-start space-x-4 mt-4">
              <a href="#" className="hover:text-green-500">
                Facebook
              </a>
              <a href="#" className="hover:text-green-500">
                Twitter
              </a>
              <a href="#" className="hover:text-green-500">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

/* Tailwind CSS Styles Used:
1. **Hero Section Background:** The class `bg-hero-pattern` can be defined in Tailwind config to add a hero image pattern.
2. **Shadow, Padding & Rounded Styles:** Utility classes like `p-10`, `rounded-lg`, and `shadow-md` keep a clean and engaging design.
3. **Transitions:** Classes like `hover:shadow-xl` and `transition-all` add smooth interaction effects.
4. **Images:** Placeholder images used to represent visual elements. Replace with actual photos later.
5. **Color Scheme Adjustments:** Updated colors for better contrast and readability.
*/
