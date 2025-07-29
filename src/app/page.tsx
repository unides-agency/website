import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
// import { getCollection } from "@/actions";
import creativesData from "@/data/creatives.json"; 
import talentsData from "@/data/talents.json"; 
import ContentSection from "@/components/ContentSection";

const SUBTITLES = {
  talents: (
    <>
      Discover our <span className="text-primary">exceptional talents</span> ready to bring your
      vision to life.
    </>
  ),
  creatives: (
    <>
      Meet our <span className="text-primary">creative professionals</span> who bring artistic
      vision and technical expertise to every project.
    </>
  ),
  aboutUs: (
    <>
      At <span className="text-primary unides-brand">UNIDES</span>, we bring culture to life through{" "}
      <span className="text-primary">unforgettable events</span> where music, art, and community
      meet. <span className="text-primary">Talent. Culture. Impact.</span>
    </>
  ),
  contactUs: (
    <>
      <span className="text-primary unides-brand">UNIDES</span> stands for{" "}
      <span className="text-primary">united</span>. {`We're crafting `}
      <span className="text-primary">more</span> than just a team.
    </>
  ),
};

export default async function Home() {
  // const creatives = await getCollection("creatives");
  // console.log("🚀 ~ talents:", talents);

  // const talente = await getCollection("talents");
  // console.log("🚀 ~ talente:", talente);

  const { talents, creatives, aboutUs, contactUs } = SUBTITLES;

  const artists = creativesData;
  const juniors = talentsData;

  return (
    <main className="container mx-auto flex flex-col gap-48 py-48">
      <ContentSection id="talents" title="Talents" subtitle={talents}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {juniors.map((talent) => (
            <div
              key={talent.id}
              className="talent-card bg-offset rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[2/3] bg-default/20 flex items-center justify-center relative">
                {talent.image && talent.image.trim() !== "" ? (
                  <Image
                    src={talent.image}
                    alt={`${talent.name}`}
                    className="w-full h-full object-cover"
                    width={200}
                    height={300}
                  />
                ) : (
                  <span className="text-default/60 text-xs">Photo Coming Soon</span>
                )}

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2 text-white">
                  <div className="space-y-1">
                    {/* Name - Featured prominently */}
                    <div className="text-white">
                      <h3 className="font-bold text-sm leading-tight">{talent.name}</h3>
                    </div>

                    {/* Location and Top Specialty Only */}
                    <div className="flex flex-wrap gap-1 items-center min-w-0">
                      {talent.location && (
                        <div className="bg-black/40 text-white text-xs py-0.5 px-1.5 rounded-full backdrop-blur-sm flex items-center min-w-0">
                          <span className="mr-1">📍</span>
                          {talent.location}
                        </div>
                      )}
                      {talent.birth && (
                        <span
                          className="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm min-w-0"
                          title="Birth"
                        >
                          🎂 {talent.birth}
                        </span>
                      )}
                      {talent.specialties && talent.specialties.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {talent.specialties.map((s, i) => (
                            <span
                              key={i}
                              className="text-xs text-white bg-black/30 border border-white/20 px-1.5 py-0.5 rounded-full backdrop-blur-sm min-w-0"
                            >
                              {s.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Personal Details - Compact */}
                    <div className="flex flex-wrap gap-1 min-w-0">
                      {talent.height && (
                        <span
                          className="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm min-w-0"
                          title="Height"
                        >
                          📏 {talent.height}cm
                        </span>
                      )}
                      {talent.shoeSize && (
                        <span
                          className="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm min-w-0"
                          title="Shoe Size"
                        >
                          👟 {talent.shoeSize}
                        </span>
                      )}
                      {talent.dressSize && (
                        <span
                          className="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm min-w-0"
                          title="Dress Size"
                        >
                          👗 {talent.dressSize}
                        </span>
                      )}
                      {talent.eyeColor && (
                        <span
                          className="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm min-w-0"
                          title="Eye Color"
                        >
                          👁️ {talent.eyeColor}
                        </span>
                      )}
                      {talent.hairColor && (
                        <span
                          className="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm min-w-0"
                          title="Hair Color"
                        >
                          💇 {talent.hairColor}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="mb-2">
                  {/* Skills/Experience Tags */}
                  <div className="flex flex-wrap gap-1 min-w-0">
                    {talent.skills &&
                      talent.skills
                        .split(",")
                        .map((skill) => (
                          <span className="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded-full hover:bg-primary/30 transition-colors min-w-0">
                            {skill.trim()}
                          </span>
                        ))}
                  </div>
                </div>

                <button
                  className="view-profile-btn w-full bg-primary text-white px-3 py-1.5 rounded-md hover:bg-primary/80 hover:bg-purple-600 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all duration-300 text-xs font-medium relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  data-talent-id={talent.id}
                  data-talent-name={talent.name}
                  data-talent-specialties={
                    talent.specialties ? talent.specialties.join(", ") : talent.specialty || ""
                  }
                  data-talent-description={talent.description}
                  data-talent-image={talent.image || ""}
                  data-talent-location={talent.location || ""}
                  data-talent-birth={talent.birth || ""}
                  data-talent-age={talent.age || ""}
                  data-talent-height={talent.height || ""}
                  data-talent-eyecolor={talent.eyeColor || ""}
                  data-talent-haircolor={talent.hairColor || ""}
                  data-talent-shoesize={talent.shoeSize || ""}
                  data-talent-dresssize={talent.dressSize || ""}
                  data-talent-imgs={talent.imgs ? JSON.stringify(talent.imgs) : ""}
                  data-talent-portfoliourl={talent.portfolioUrl || talent.pdfUrl || ""}
                >
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center min-w-0">
                    <span className="loading-text">View Profile</span>
                    <span className="loading-spinner hidden animate-spin ml-2">⏳</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 arrow-icon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="creatives" title="Creatives" subtitle={creatives}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {artists.map((creative) => (
            <div
              key={creative.id}
              className="talent-card bg-offset rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[3/4] bg-default/20 flex items-center justify-center relative">
                {creative.image && creative.image.trim() !== "" ? (
                  <Image
                    src={creative.image}
                    alt={`${creative.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={600}
                    height={900}
                  />
                ) : (
                  <span className="text-default/60 text-xs">Portfolio Preview</span>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 text-white">
                  <div className="space-y-2">
                    {/* Name - Featured prominently */}
                    <div className="text-white">
                      <h3 className="font-bold text-lg leading-tight">{creative.name}</h3>
                    </div>

                    {/* Location and Specialty */}
                    {/* <div className="flex flex-wrap gap-2 items-center">
                      {creative.location && (
                        <div className="bg-black/40 text-white text-xs py-1 px-2 rounded-full backdrop-blur-sm flex items-center">
                          <span className="mr-1">📍</span>
                          {creative.location}
                        </div>
                      )}
                      {creative.birth && (
                        <span
                          className="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm"
                          title="Birth"
                        >
                          🎂 {creative.birth}
                        </span>
                      )}
                      {creative.specialties &&
                        creative.specialties.length > 0 &&
                        creative.specialties.map((specialty) => (
                          <span key={specialty} className="bg-primary/80 text-white text-xs py-1 px-2 rounded-full">
                            {specialty.trim()}
                          </span>
                        ))}
                      {!creative.specialties && creative.specialty && (
                        <span className="bg-primary/80 text-white text-xs py-1 px-2 rounded-full">
                          {creative.specialty}
                        </span>
                      )}
                    </div> */}

                    {/* Personal Details */}
                    {/* <div className="flex flex-wrap gap-1">
                      {creative.height && (
                        <span
                          className="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm"
                          title="Height"
                        >
                          📏 {creative.height}cm
                        </span>
                      )}
                      {creative.shoeSize && (
                        <span
                          className="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm"
                          title="Shoe Size"
                        >
                          � {creative.shoeSize}
                        </span>
                      )}
                      {creative.dressSize && (
                        <span
                          className="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm"
                          title="Dress Size"
                        >
                          � {creative.dressSize}
                        </span>
                      )}
                      {creative.eyeColor && (
                        <span
                          className="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm"
                          title="Eye Color"
                        >
                          �️ {creative.eyeColor}
                        </span>
                      )}
                      {creative.hairColor && (
                        <span
                          className="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm"
                          title="Hair Color"
                        >
                          � {creative.hairColor}
                        </span>
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-3">
                  {/* Skills/Experience Tags */}
                  {/* <div className="flex flex-wrap gap-1">
                    {creative.skills &&
                      creative.skills.split(",").map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded-full hover:bg-primary/30 transition-colors"
                        >
                          {skill.trim()}
                        </span>
                      ))}
                  </div> */}
                </div>
                <p className="text-default/80 text-xs mb-3 leading-relaxed line-clamp-2">
                  {creative.description}
                </p>

                <button className="view-creative-btn w-full bg-primary text-white px-3 py-2 rounded-md hover:bg-primary/80 transition-all duration-300 text-xs font-medium relative overflow-hidden group">
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center">
                    View Portfolio
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="about" title="About Us" subtitle={aboutUs}>
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

      <ContentSection id="contact" title="Contact" subtitle={contactUs}>
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
    </main>
  );
}
