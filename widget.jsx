export default function Widget() {
    return (
        <body className="bg-background text-foreground">
          
          <nav className="bg-primary text-primary-foreground p-4">
            <div className="container mx-auto flex justify-between items-center">
              <a href="#" className="text-lg font-bold">BrandName</a>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-primary-foreground/80">Home</a></li>
                <li><a href="#" className="hover:text-primary-foreground/80">About</a></li>
                <li><a href="#" className="hover:text-primary-foreground/80">Services</a></li>
                <li><a href="#" className="hover:text-primary-foreground/80">Contact</a></li>
              </ul>
            </div>
          </nav>
          
          <section className="bg-primary text-primary-foreground py-16 text-center">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold mb-4">Welcome to BrandName</h1>
              <p className="text-lg mb-8">We provide top-notch services to meet your needs.</p>
              <a href="#contact" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80">Get in Touch</a>
            </div>
          </section>
          
          <section className="px-4 py-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-lg text-center">
                <img src="https://placehold.co/100" alt="service-1" className="mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Service One</h3>
                <p className="text-sm text-muted-foreground">Description of service one.</p>
              </div>
              <div className="bg-card p-4 rounded-lg text-center">
                <img src="https://placehold.co/100" alt="service-2" className="mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Service Two</h3>
                <p className="text-sm text-muted-foreground">Description of service two.</p>
              </div>
              <div className="bg-card p-4 rounded-lg text-center">
                <img src="https://placehold.co/100" alt="service-3" className="mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Service Three</h3>
                <p className="text-sm text-muted-foreground">Description of service three.</p>
              </div>
            </div>
          </section>
          
          <section className="px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg">
                <img src="https://placehold.co/300" alt="testimonial-1" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold mb-2">Amazing Service!</h3>
                <p className="text-sm text-muted-foreground">The team delivered exceptional results on our project. Highly recommended!</p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <img src="https://placehold.co/300" alt="testimonial-2" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold mb-2">Professional Work</h3>
                <p className="text-sm text-muted-foreground">Their attention to detail and expertise in concrete work is unmatched. Great job!</p>
              </div>
            </div>
          </section>
          
          <section className="px-4 py-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Latest Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-lg">
                <img src="https://placehold.co/400" alt="project-1" className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold mb-2">Residential Patio</h3>
                <p className="text-sm text-muted-foreground">View our latest residential patio project completed with precision and style.</p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <img src="https://placehold.co/400" alt="project-2" className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold mb-2">Commercial Flooring</h3>
                <p className="text-sm text-muted-foreground">Check out our commercial flooring project showcasing durability and aesthetics.</p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <img src="https://placehold.co/400" alt="project-3" className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold mb-2">Industrial Foundations</h3>
                <p className="text-sm text-muted-foreground">Explore our industrial foundation project highlighting strength and reliability.</p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <img src="https://placehold.co/400" alt="project-4" className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold mb-2">Urban Landscaping</h3>
                <p className="text-sm text-muted-foreground">Discover our urban landscaping project that combines beauty and functionality.</p>
              </div>
            </div>
          </section>
          
          <section className="bg-secondary text-secondary-foreground py-16 text-center">
            <div className="container mx-auto">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-lg mb-8">Contact us today to get a free quote and consultation.</p>
              <a href="#contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/80">Contact Us</a>
            </div>
          </section>
          
          <section id="contact" className="px-4 py-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
            <div className="max-w-lg mx-auto bg-card p-6 rounded-lg">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" id="name" className="w-full p-2 border border-input rounded-lg" placeholder="Your Name" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" id="email" className="w-full p-2 border border-input rounded-lg" placeholder="Your Email" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea id="message" className="w-full p-2 border border-input rounded-lg" rows="4" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/80">Send Message</button>
              </form>
            </div>
          </section>
          
          <footer className="bg-primary text-primary-foreground py-4">
            <div className="container mx-auto text-center">
              <p className="text-sm">&copy; 2023 BrandName. All rights reserved.</p>
            </div>
          </footer>
        </body>
    )
}
