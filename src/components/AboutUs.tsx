import React from 'react'
import ContentSection from './ContentSection'
import Image from 'next/image'

const aboutSubtitle = (
    <>
      At <span className="text-primary unides-brand">UNIDES</span>, we bring culture to life through{" "}
      <span className="text-primary">unforgettable events</span> where music, art, and community
      meet. <span className="text-primary">Talent. Culture. Impact.</span>
    </>
  )

export default function AboutUs() {
  return (
      <ContentSection id="about" title="About Us" subtitle={aboutSubtitle}>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="values-card bg-offset p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-purple-600">Our Mission</h3>
              <p className="text-default/80 leading-relaxed">
                {`Elevate the next generation of Latin visionaries from underground musicians to
                boundary-pushing visual artists. Connect authentic creativity with brands and
                audiences hungry for something real. Redefining what "Latin art" means in
                Europe breaking stereotypes with unstoppable innovation.`}
              </p>
            </div>
            <div className="values-card bg-offset p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-purple-600">Our Vision</h3>
              <p className="text-default/80 leading-relaxed">
                Uniting Latinx talent and culture to transform the creative landscape—boldly,
                purposefully, together.
              </p>
            </div>
          </div>

          <div className="text-center py-12">
            <h3 className="font-bold text-xl mb-8 text-purple-600">Our Values</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="values-card bg-offset p-6 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Rooted in Culture</h4>
                <p className="text-sm text-default/80">
                  We honor our Latin American heritage and celebrate the diversity that makes us
                  powerful.
                </p>
              </div>
              <div className="values-card bg-offset p-6 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Together We Rise</h4>
                <p className="text-sm text-default/80">
                  {`Growth means nothing if we don't rise together. We build careers through real
                  collaboration and community.`}
                </p>
              </div>
              <div className="values-card bg-offset p-6 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Support & Elevation</h4>
                <p className="text-sm text-default/80">
                  {`We understand how hard this path can be. That's why we're not just agents we're
                  allies.`}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-1 gap-6 mt-6">
              <div className="values-card bg-offset p-6 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Trust & Respect</h4>
                <p className="text-sm text-default/80">
                  {`Every relationship we build is grounded in mutual respect, transparency, and
                  long-term trust. From day one, our goal has been clear: to unite incredible talent
                  with the right platforms, people, and opportunities, while staying true to who we
                  are.`}
                </p>
              </div>
            </div>
          </div>

          <div className="about-section-divider"></div>

          <div className="text-center py-12">
            <h3 className="font-bold text-xl mb-8 text-purple-600">Meet the Founder</h3>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-offset p-8 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center">
                    <div className="w-full max-w-xs h-110 overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src="https://unides.s3.eu-central-1.amazonaws.com/images/about/_DSC4263.JPG"
                        alt="Grasi"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="font-semibold text-xl mb-1">Grasi</h4>
                    <p className="text-primary text-sm mb-4">Founder</p>
                    <p className="text-sm text-default/80 leading-relaxed">
                      {`With over 7 years of experience in operations and logistics, I bring
                      structure, strategy, and creative problem-solving to the heart of talent
                      management. I'm passionate about building systems that work efficiently,
                      intuitively, and with room to grow. My background in streamlining complex
                      processes is complemented by a lifelong love of art, which inspires fresh,
                      human-centered solutions. At our agency, I focus on making things run smoothly
                      behind the scenes so talent and creativity can take center stage. I'm excited
                      to shape a space where artists thrive and ideas move with intention.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-section-divider"></div>

          <div className="text-center bg-offset p-10 rounded-xl shadow-lg my-12">
            <h3 className="font-bold text-xl mb-6 text-purple-600">
              Ready to Build Something Real?
            </h3>
            <p className="text-default/80 mb-8 max-w-2xl mx-auto">
              {`Whether you're a visionary artist ready to rise or a brand searching for authentic,
              culture-shaping talent—we're here to make powerful, purposeful connections. Let's
              create something unforgettable, together.`}
            </p>
            <button className="cta-button bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all font-medium text-lg shadow-md">
              Apply now
            </button>
          </div>
        </div>
      </ContentSection>

  )
}
