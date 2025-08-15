import React from "react";
import img1 from "../../../public/mail.svg";
import img2 from "../../../public/phone.svg";
import img3 from "../../../public/location.svg";

export default function Contact() {
  return (
    <>
      <section id="contact_hero ">
        <div className="flex bg-gray-100 flex-col text-center py-16">
          <h1 className="text-2xl mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-gray-400 px-2 max-w-lg mx-auto md:px-1">
            Get in touch with us for any questions about our products or
            services.
          </p>
        </div>
      </section>
      <section className="" id="contact_form ">
        <div className="container py-14 mx-auto flex flex-col justify-between gap-10 md:flex-row">
          <div className="min-w-[230px] flex flex-col gap-4 mx-4 md:mx-1">
            <h2 className="text-xl font-medium mb-6">Contact Information</h2>
            <div className="flex gap-3">
              <div className="rounded-full h-[36px] flex items-center justify-center flex-shrink-0 w-[36px] bg-gray-200">
                <img src={img1} alt="mail" />
              </div>
              <div>
                <h3 className="font-medium text-sm">Email</h3>
                <p>Information not found</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full h-[36px] flex items-center justify-center flex-shrink-0 w-[36px] bg-gray-200">
                <img src={img2} alt="phone" />
              </div>
              <div>
                <h3 className="font-medium text-sm">Phone</h3>
                <p>
                  Information not found<br></br>
                  Mon-Fri, 9am-6pm
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full h-[36px] flex items-center justify-center flex-shrink-0 w-[36px] bg-gray-200">
                <img src={img3} alt="location" />
              </div>
              <div>
                <h3 className="font-medium text-sm">Address</h3>
                <p>Information not found</p>
              </div>
            </div>
          </div>

          <div className="w-full mx-auto px-4">
            <h2 className="text-xl font-medium mb-6">Contact Information</h2>
            <form className="w-auto space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                  <span className="flex items-center gap-2 px-3 border-r border-gray-300 bg-gray-50">
                    <img
                      src="https://flagcdn.com/w20/us.png"
                      alt="US Flag"
                      className="w-5 h-5"
                    />
                    <span className="text-sm">+1</span>
                  </span>
                  <input
                    type="tel"
                    className="flex-1 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              {/* Button */}
              <div>
                <button
                  type="submit"
                  className="bg-black cursor-pointer text-white px-5 py-2 rounded hover:bg-gray-800 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-gray-100" id="contact_faq ">
        <div className="flex container mx-auto  flex-col text-center py-16">
          <h1 className="text-2xl mb-4">Frequently Asked Questions</h1>
          <p className=" text-muted-foreground text-gray-400 max-w-lg mx-4">
            Information not found
          </p>
        </div>
      </section>
    </>
  );
}
