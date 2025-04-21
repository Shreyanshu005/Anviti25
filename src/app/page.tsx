import Aurora from "@/components/Aurora";
import PixelTrail from "@/components/PixelTrail";
import RotatingText from "@/components/RotatingText";
import Particles from "@/components/Particles";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">AVINITI</div>
          <nav className="hidden md:flex space-x-6">
            {['Home', 'About', 'Events', 'Schedule', 'Speakers', 'Gallery', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-white hover:text-purple-300 transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center">
        <Aurora
          colorStops={["#6E00FF", "#FF0099", "#00DDFF"]}
          blend={0.7}
          amplitude={1.2}
          speed={0.4}
        />
        
        <Particles
          particleCount={180}
          particleSpread={15}
          speed={0.04}
          particleColors={["#ffffff", "#00ffcc", "#ff00aa"]}
          moveParticlesOnHover={true}
          particleHoverFactor={2.5}
          alphaParticles={true}
          className="absolute inset-0 z-0"
        />
        
        <div className="relative z-10 text-center max-w-5xl px-4 py-12">
          <div className="relative mb-8">
            <h1 className="font-['Montserrat'] text-7xl sm:text-8xl md:text-9xl font-extrabold mb-2 tracking-tighter leading-none">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300">
                AVINITI
              </span>
            </h1>
            <div className="absolute -inset-1 blur-3xl opacity-30 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 rounded-full -z-10"></div>
            <p className="text-xl md:text-2xl text-cyan-100 mt-4 font-light tracking-wide">
              INTRA-COLLEGE FESTIVAL
            </p>
          </div>
          
          <div className="mb-10 flex justify-center">
            <RotatingText
              texts={[
                'Innovate',
                'Collaborate',
                'Celebrate',
                'Compete',
                'Create'
              ]}
              mainClassName="px-5 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md text-white text-2xl md:text-3xl overflow-hidden rounded-xl border border-white/20"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
          </div>
          
          <div className="text-xl md:text-2xl mb-12 bg-black/20 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-white max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-sm -z-10"></div>
            <div className="font-['Poppins']">
              <p className="mb-3 text-cyan-200 font-light">MARK YOUR CALENDAR</p>
              <p className="text-3xl md:text-4xl font-bold mb-4">8-9 MAY, 2023</p>
              <p className="mb-4 text-pink-100 font-medium">Main Auditorium & Sports Complex</p>
              <p className="text-sm md:text-base text-gray-300">Coordinated by Student Council & Department of Cultural Affairs</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 font-['Inter']">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-4 px-10 rounded-full text-xl hover:from-cyan-600 hover:to-purple-700 transition-all w-full sm:w-auto shadow-lg shadow-purple-700/30 hover:shadow-xl hover:shadow-purple-700/40">
              Register Now
            </button>
            <button className="bg-transparent border-2 border-white/30 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-white/10 transition-all w-full sm:w-auto mt-4 sm:mt-0 backdrop-blur-sm">
              View Schedule
            </button>
          </div>
          
          <div className="mt-16 animate-bounce">
            <a href="#about" className="text-white/70 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-purple-900/80 to-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">About Aviniti</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden h-80 relative">
              <div className="absolute inset-0 bg-blue-500/20 backdrop-blur-sm rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Festival Highlight Image</span>
              </div>
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">Celebrating Innovation and Creativity</h3>
              <p className="mb-4">Aviniti is our college's premier annual fest that brings together the brightest minds to compete, collaborate, and celebrate. For two exhilarating days, our campus transforms into a hub of innovation, creativity, and talent.</p>
              <p className="mb-6">From technical competitions that push boundaries to cultural performances that inspire, Aviniti offers something for everyone. Join us for an unforgettable experience of learning, networking, and fun!</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-300">20+</div>
                  <div className="text-sm">Events</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-300">1000+</div>
                  <div className="text-sm">Participants</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-300">15+</div>
                  <div className="text-sm">Workshops</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-300">₹50K</div>
                  <div className="text-sm">Prize Pool</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Carousel Section */}
      <section id="events" className="py-20 bg-gradient-to-b from-black/80 to-purple-900/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Featured Events</h2>
          
          <div className="relative overflow-hidden">
            {/* Carousel dots would go here in a real implementation */}
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {[
                { name: "Hackathon", desc: "24-hour coding competition to solve real-world problems" },
                { name: "Robowars", desc: "Battle of robots in an epic showdown of engineering skills" },
                { name: "Cultural Night", desc: "Showcase your talent in music, dance, and theater" },
                { name: "Debate Competition", desc: "Express your views and win through persuasive arguments" },
                { name: "Business Plan", desc: "Present your startup idea to industry experts" }
              ].map((event, index) => (
                <div key={index} className="min-w-[300px] snap-center flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                  <div className="h-40 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{event.name}</span>
                  </div>
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                    <p className="mb-4">{event.desc}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm bg-white/20 rounded-full px-3 py-1">8 May, 10:00 AM</span>
                      <button className="text-sm text-purple-300 hover:text-white transition-colors">Learn More →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gradient-to-b from-purple-900/80 to-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Event Schedule</h2>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-full p-1">
              <button className="px-4 py-2 rounded-full bg-purple-600 text-white">Day 1 (8th May)</button>
              <button className="px-4 py-2 rounded-full text-white">Day 2 (9th May)</button>
            </div>
          </div>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { time: "9:00 AM", event: "Inauguration Ceremony", location: "Main Auditorium" },
              { time: "10:30 AM", event: "Hackathon Kickoff", location: "Computer Lab" },
              { time: "12:00 PM", event: "Technical Paper Presentation", location: "Seminar Hall" },
              { time: "2:00 PM", event: "Lunch Break", location: "College Cafeteria" },
              { time: "3:00 PM", event: "Robotics Workshop", location: "Electronics Lab" },
              { time: "5:00 PM", event: "Gaming Tournament", location: "Recreation Center" },
              { time: "7:00 PM", event: "Cultural Night", location: "Open Air Theater" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white">
                <div className="min-w-[80px] text-center">
                  <div className="text-lg font-bold">{item.time}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{item.event}</h3>
                  <p className="text-white/70">{item.location}</p>
                </div>
                <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded-full text-sm">
                  Add to Calendar
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Download Full Schedule
            </button>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 bg-gradient-to-b from-black/80 to-purple-900/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Featured Speakers</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden group">
                <div className="h-64 bg-gradient-to-br from-purple-500 to-blue-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold">Speaker {item}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex gap-3">
                      <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Dr. John Smith</h3>
                  <p className="text-white/70">AI Researcher, Tech Innovations</p>
                  <p className="mt-2 text-sm">Leading expert in artificial intelligence and machine learning applications.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-purple-900/80 to-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Event Gallery</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold">Image {item}</span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              View More Images
            </button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 bg-gradient-to-b from-black/80 to-purple-900/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Our Sponsors</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center h-32">
                <span className="text-white font-bold">Sponsor {item}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Become a Sponsor</h3>
            <p className="max-w-2xl mx-auto mb-8">Join our growing list of sponsors and get your brand in front of hundreds of talented students and professionals.</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Contact for Sponsorship
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-purple-900/80 to-black/90">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Get in Touch</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6 text-white">
                <div className="flex items-start gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-white/70">info@aviniti.edu</p>
                    <p className="text-white/70">support@aviniti.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-white/70">+91 9876543210</p>
                    <p className="text-white/70">+91 1234567890</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-white/70">College Campus, Tech Avenue</p>
                    <p className="text-white/70">Innovation District, City - 123456</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-semibold mb-3">Follow Us</h4>
                  <div className="flex gap-4">
                    {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                      <a key={social} href="#" className="p-2 bg-white/20 rounded-full hover:bg-purple-600 transition-colors">
                        <span className="text-white">{social[0].toUpperCase()}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500" placeholder="Your Email" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white mb-2">Subject</label>
                  <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500" placeholder="Message Subject" />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 h-32" placeholder="Your Message"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-3 px-8 rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AVINITI</h3>
              <p className="text-white/70">The annual techno-cultural fest of our college, celebrating innovation and creativity.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Events', 'Schedule', 'Gallery', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                {['Event Rules', 'FAQ', 'Terms & Conditions', 'Privacy Policy', 'Refund Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Subscribe</h3>
              <p className="text-white/70 mb-4">Stay updated with the latest information about Aviniti.</p>
              <div className="flex">
                <input type="email" className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white focus:outline-none focus:border-purple-500" placeholder="Your Email" />
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70">© 2023 Aviniti. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <a key={item} href="#" className="text-white/70 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
