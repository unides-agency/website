import React from 'react'
import ContentSection from './ContentSection'

const contactSubtitle = (
    <>
      <span className="text-primary unides-brand">UNIDES</span> stands for{" "}
      <span className="text-primary">united</span>. {`We're crafting `}
      <span className="text-primary">more</span> than just a team.
    </>
  )

export default function ContactUs() {
  return (

      <ContentSection id="contact" title="Contact" subtitle={contactSubtitle}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2 text-purple-600">Get in Touch</h3>
                <p className="text-offset">
                  {`Your idea is the spark we'll help turn it into reality. Send us a message and
                  we'll respond as soon as possible.`}
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm md:text-base">Email</h4>
                  <p className="text-offset text-sm md:text-base font-medium">
                    info@unides-agency.com
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base">Phone</h4>
                  <p className="text-offset text-sm md:text-base font-medium">+49 (172) 802 7395</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base">Address</h4>
                  <p className="text-offset text-sm md:text-base font-medium leading-6">
                    Soldiner Straße 72
                    <br />
                    13359 Berlin
                  </p>
                </div>
              </div>
            </div>
            <form id="contact-form" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-[#0a353a] border border-[#c6a2ff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9fd12] text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-[#0a353a] border border-[#c6a2ff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9fd12] text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project or idea..."
                  className="w-full px-4 py-3 bg-[#0a353a] border border-[#c6a2ff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9fd12] text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <button
                type="submit"
                id="submit-btn"
                className="w-full bg-primary text-white px-4 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                Send Message
              </button>
              <div
                id="form-status"
                className="hidden text-center text-sm md:text-base font-medium mt-3"
              ></div>
            </form>
          </div>
        </div>
      </ContentSection>
  )
}
