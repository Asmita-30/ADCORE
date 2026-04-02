// src/pages/Blog.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import portImg from "../assets/images/portblog.jpg";
import reactImg from "../assets/images/reactblog.jpg";
import springImg from "../assets/images/springbootblog.jpg";
import startupImg from "../assets/images/startupblog.png";
import landingImg from "../assets/images/landingblog.jpg";
import costImg from "../assets/images/costblog.jpg";

gsap.registerPlugin(ScrollTrigger);

const C = {
  cyan: "#00e5ff",
  blue: "#007bff",
  purple: "#6d5cff",
  pink: "#ff5c8a",
  dark: "#020408",
  dark2: "#050a15",
};

// Blog Posts Data
const BLOG_POSTS = [
  {
    id: 1,
    title: "How We Built a Port Management System in 60 Days",
    slug: "port-management-system-case-study",
    excerpt: "A detailed case study on building PMAS - a government portal that reduced processing time by 70%. Learn about the challenges, architecture, and results.",
    content: `
      <p>The Maharashtra Maritime Board needed a digital transformation. Their port operations were managed through manual processes and disconnected systems. Vessel tracking, cargo documentation, and clearance approvals took 3-5 days, causing significant delays and revenue loss.</p>
      
      <h2>The Challenge</h2>
      <p>When we first engaged with the Maharashtra Maritime Board, we discovered a system that was struggling to keep up with modern demands. The port handled hundreds of vessels monthly, but every clearance required physical paperwork, multiple signatures, and manual data entry across different departments.</p>
      
      <p>Key pain points included:</p>
      <ul>
        <li>Vessel tracking was done via phone calls and spreadsheets</li>
        <li>Cargo documentation was paper-based and prone to errors</li>
        <li>Clearance approvals required visiting multiple offices</li>
        <li>No central dashboard for port authorities</li>
        <li>Data was siloed across departments</li>
      </ul>
      
      <h2>Our Solution</h2>
      <p>We built the Port Management Automation System (PMAS) - a unified platform that digitized all port operations. The system includes real-time vessel tracking, automated cargo documentation, digital clearance workflows, and a unified dashboard for port authorities.</p>
      
      <p>Technical Architecture:</p>
      <ul>
        <li>React frontend with TypeScript for type safety</li>
        <li>Spring Boot microservices backend for scalability</li>
        <li>PostgreSQL database with proper indexing</li>
        <li>WebSocket connections for real-time vessel tracking</li>
        <li>JWT authentication with role-based access control</li>
      </ul>
      
      <h2>Results</h2>
      <p>The impact was immediate and significant:</p>
      <ul>
        <li><strong>70% reduction</strong> in processing time (from 3-5 days to 4-6 hours)</li>
        <li><strong>500+ concurrent users</strong> supported during peak hours</li>
        <li><strong>95% automation</strong> of document processing</li>
        <li><strong>Zero downtime</strong> since launch</li>
      </ul>
      
      <h2>Client Testimonial</h2>
      <blockquote>
        "Adlynco Studio transformed our port operations. The system has reduced processing time from days to hours. The team's technical expertise and understanding of our needs was exceptional."
        <br/>— Captain Rajesh Sharma, Port Director
      </blockquote>
    `,
    // author: "Darpan",
    authorRole: "Founder & CEO",
    date: "March 15, 2026",
    readTime: "8 min read",
    category: "Case Study",
    tags: ["Spring Boot", "React", "Government Portal", "Civic Tech"],
    image: portImg,
    featured: true
  },
  {
    id: 2,
    title: "How Much Does a Website Cost in India in 2026?",
    slug: "website-cost-india-2026",
    excerpt: "A comprehensive breakdown of website development costs in India. From static sites to e-commerce platforms, understand what you should expect to pay.",
    content: `
      <p>One of the most common questions we get is: "How much does a website cost?" The answer isn't simple because it depends on many factors. This guide will help you understand what goes into website pricing and what you should expect to pay in 2026.</p>
      
      <h2>Types of Websites and Their Costs</h2>
      
      <h3>1. Static Website (₹7,000 – ₹10,000)</h3>
      <p>Perfect for portfolios, small businesses, and informational sites. Includes up to 5 pages, responsive design, contact form, and basic SEO.</p>
      <ul>
        <li>Up to 5 pages</li>
        <li>Responsive design</li>
        <li>Contact form</li>
        <li>Basic SEO setup</li>
        <li>Timeline: 5-7 days</li>
      </ul>
      
      <h3>2. Dynamic Website (₹14,000 – ₹17,000)</h3>
      <p>Ideal for startups, blogs, and businesses needing content management. Includes custom design, CMS, user authentication, and database integration.</p>
      <ul>
        <li>Unlimited pages</li>
        <li>Custom Figma design</li>
        <li>Admin panel / CMS</li>
        <li>User authentication</li>
        <li>Timeline: 14-21 days</li>
      </ul>
      
      <h3>3. E-Commerce Website (₹25,000+)</h3>
      <p>Complete online store solution with product catalog, shopping cart, payment integration, and order management.</p>
      <ul>
        <li>Product catalog</li>
        <li>Shopping cart</li>
        <li>Payment gateway integration</li>
        <li>Order management</li>
        <li>Timeline: 21-30 days</li>
      </ul>
      
      <h2>What Factors Affect Cost?</h2>
      <ul>
        <li><strong>Number of pages:</strong> More pages mean more development time</li>
        <li><strong>Custom design:</strong> Template-based vs. custom Figma design</li>
        <li><strong>Backend complexity:</strong> Simple contact form vs. complex database systems</li>
        <li><strong>User authentication:</strong> Login systems add complexity</li>
        <li><strong>E-commerce features:</strong> Payment integration, inventory management</li>
        <li><strong>AI features:</strong> Chatbots, recommendation engines</li>
      </ul>
      
      <h2>Ongoing Costs</h2>
      <p>Remember that building the website is just the first step. You'll also need to budget for:</p>
      <ul>
        <li><strong>Domain name:</strong> ₹500-1,000/year</li>
        <li><strong>Hosting:</strong> ₹5,000-15,000/year depending on requirements</li>
        <li><strong>Maintenance:</strong> ₹5,000-15,000/month for updates and support</li>
        <li><strong>SSL certificate:</strong> Free (Let's Encrypt) or paid</li>
      </ul>
      
      <h2>Get an Exact Quote</h2>
      <p>Every project is unique. Contact us with your requirements, and we'll provide a detailed, fixed-price quote within 24 hours.</p>
    `,
    // author: "Darpan",
    authorRole: "Founder & CEO",
    date: "March 12, 2026",
    readTime: "6 min read",
    category: "Pricing",
    tags: ["Pricing", "Cost Guide", "Website Development"],
    image: costImg,
    featured: true
  },
  {
    id: 3,
    title: "React vs Vue in 2026: Which Should Your Startup Choose?",
    slug: "react-vs-vue-2026",
    excerpt: "A detailed comparison of React and Vue for startup founders. Learn about performance, learning curve, ecosystem, and which one is right for your project.",
    content: `
      <p>Choosing the right frontend framework for your startup is crucial. The decision affects development speed, hiring costs, and long-term maintainability. Let's compare the two most popular options: React and Vue.</p>
      
      <h2>React: The Industry Standard</h2>
      <p>React, developed by Meta, has become the default choice for many companies. It's used by Facebook, Instagram, Netflix, and thousands of other companies.</p>
      
      <h3>Pros of React:</h3>
      <ul>
        <li><strong>Massive ecosystem:</strong> Countless libraries, tools, and resources</li>
        <li><strong>Strong job market:</strong> Easy to find React developers</li>
        <li><strong>Corporate backing:</strong> Maintained by Meta</li>
        <li><strong>React Native:</strong> Same skills for mobile development</li>
        <li><strong>Great for large applications:</strong> Scales well</li>
      </ul>
      
      <h3>Cons of React:</h3>
      <ul>
        <li><strong>Steeper learning curve:</strong> JSX, hooks, state management concepts</li>
        <li><strong>More boilerplate:</strong> Requires more setup code</li>
        <li><strong>Fast-paced changes:</strong> Frequent updates require keeping up</li>
      </ul>
      
      <h2>Vue: The Progressive Framework</h2>
      <p>Vue was created by Evan You and has gained massive popularity for its simplicity and approachable learning curve.</p>
      
      <h3>Pros of Vue:</h3>
      <ul>
        <li><strong>Gentle learning curve:</strong> HTML-like templates, easier to start</li>
        <li><strong>Less boilerplate:</strong> Get started with minimal code</li>
        <li><strong>Excellent documentation:</strong> Well-written and comprehensive</li>
        <li><strong>Flexible:</strong> Can be used incrementally</li>
      </ul>
      
      <h3>Cons of Vue:</h3>
      <ul>
        <li><strong>Smaller ecosystem:</strong> Fewer libraries than React</li>
        <li><strong>Smaller job market:</strong> Fewer Vue developers available</li>
        <li><strong>Language barrier:</strong> Some documentation and community is Chinese</li>
      </ul>
      
      <h2>Our Recommendation</h2>
      <p>For most startups, we recommend React. Here's why:</p>
      <ul>
        <li>It's easier to find and hire React developers</li>
        <li>The ecosystem is unmatched</li>
        <li>Skills transfer to React Native for mobile</li>
        <li>Corporate backing ensures long-term stability</li>
      </ul>
      <p>However, if you have a small team with limited React experience, Vue's gentle learning curve might make it the better choice.</p>
      
      <p>Ultimately, both frameworks can build excellent applications. The best choice depends on your team's skills and project requirements.</p>
    `,
    // author: "Darpan",
    authorRole: "Founder & CEO",
    date: "March 8, 2026",
    readTime: "7 min read",
    category: "Technology",
    tags: ["React", "Vue", "Framework Comparison"],
    image: reactImg,
    featured: false
  },
  {
    id: 4,
    title: "Why Your Landing Page Isn't Converting (And How to Fix It)",
    slug: "landing-page-conversion-optimization",
    excerpt: "Common mistakes that kill conversions on landing pages and actionable fixes to increase your conversion rate by 2-3x.",
    content: `
      <p>You've spent money on ads, driven traffic to your landing page, but the conversions aren't coming. What's going wrong? Let's diagnose common issues and fix them.</p>
      
      <h2>1. Slow Loading Speed</h2>
      <p>Every second of delay reduces conversions by 7%. If your page takes more than 3 seconds to load, you're losing customers.</p>
      <p><strong>Fix:</strong> Optimize images, use a CDN, minimize JavaScript, and consider a static site generator like Next.js.</p>
      
      <h2>2. Unclear Value Proposition</h2>
      <p>Visitors need to understand what you offer within 3 seconds. If they don't, they leave.</p>
      <p><strong>Fix:</strong> Your headline should clearly state the benefit. Use a subheadline to add context. Include social proof (logos, testimonials) immediately.</p>
      
      <h2>3. No Clear Call to Action</h2>
      <p>If visitors don't know what to do next, they won't do anything.</p>
      <p><strong>Fix:</strong> Make your CTA button prominent, use contrasting colors, and use action-oriented text like "Get Started" or "Book a Call."</p>
      
      <h2>4. Too Many Distractions</h2>
      <p>Navigation links, multiple CTAs, and unnecessary elements confuse visitors.</p>
      <p><strong>Fix:</strong> Remove navigation links from landing pages. Have one primary CTA. Minimize distractions.</p>
      
      <h2>5. No Social Proof</h2>
      <p>People trust other people more than they trust you.</p>
      <p><strong>Fix:</strong> Include client logos, testimonials, case study snippets, and trust badges.</p>
      
      <h2>6. Form Asking Too Much</h2>
      <p>Long forms scare people away. Every field you add reduces conversion rate.</p>
      <p><strong>Fix:</strong> Ask only for essential information. Name and email are often enough. Add phone later in the process.</p>
      
      <h2>7. Not Mobile Optimized</h2>
      <p>Over 60% of traffic comes from mobile. If your page doesn't work well on mobile, you're losing most of your audience.</p>
      <p><strong>Fix:</strong> Design mobile-first, use responsive layouts, and test on real devices.</p>
      
      <h2>Take Action</h2>
      <p>Review your landing page against this list. Fix the issues. Then A/B test your changes to see what works best.</p>
    `,
    // author: "Darpan",
    authorRole: "Founder & CEO",
    date: "March 5, 2026",
    readTime: "5 min read",
    category: "Marketing",
    tags: ["Conversion", "Landing Page", "CRO"],
    image: landingImg,
    featured: false
  },
  {
    id: 5,
    title: "Spring Boot vs Node.js for SaaS Backends: An Engineer's Honest Take",
    slug: "spring-boot-vs-nodejs-saas-backend",
    excerpt: "A detailed technical comparison of Spring Boot and Node.js for building SaaS applications. Performance, scalability, developer experience, and more.",
    content: `
      <p>Choosing the right backend technology is one of the most important decisions when building a SaaS product. Let's compare two popular choices: Spring Boot (Java) and Node.js (JavaScript).</p>
      
      <h2>Spring Boot (Java)</h2>
      <p>Spring Boot is the go-to framework for enterprise Java applications. It's battle-tested, production-ready, and used by companies like Netflix, Uber, and Amazon.</p>
      
      <h3>Pros:</h3>
      <ul>
        <li><strong>Performance:</strong> Java's JVM is highly optimized, especially for CPU-intensive tasks</li>
        <li><strong>Type safety:</strong> Strong typing catches errors at compile time</li>
        <li><strong>Enterprise features:</strong> Security, transaction management, and monitoring built-in</li>
        <li><strong>Large talent pool:</strong> Many experienced Java developers</li>
        <li><strong>Excellent tooling:</strong> IntelliJ IDEA, Maven/Gradle, debugging</li>
      </ul>
      
      <h3>Cons:</h3>
      <ul>
        <li><strong>Memory footprint:</strong> JVM uses more memory than Node.js</li>
        <li><strong>Startup time:</strong> Slower cold starts</li>
        <li><strong>Boilerplate:</strong> More code to write</li>
      </ul>
      
      <h2>Node.js (JavaScript)</h2>
      <p>Node.js has become extremely popular for startups because of its simplicity and the ability to use JavaScript across the stack.</p>
      
      <h3>Pros:</h3>
      <ul>
        <li><strong>One language:</strong> Use JavaScript for frontend and backend</li>
        <li><strong>Fast development:</strong> Quick to prototype and iterate</li>
        <li><strong>Low memory:</strong> Uses less RAM than Java</li>
        <li><strong>Fast cold starts:</strong> Ideal for serverless deployments</li>
        <li><strong>Huge ecosystem:</strong> npm has the most packages</li>
      </ul>
      
      <h3>Cons:</h3>
      <ul>
        <li><strong>Single-threaded:</strong> CPU-intensive tasks can block the event loop</li>
        <li><strong>Type safety:</strong> JavaScript is dynamically typed (though TypeScript helps)</li>
        <li><strong>Callback hell:</strong> Can lead to nested callbacks (though async/await helps)</li>
      </ul>
      
      <h2>Our Recommendation</h2>
      <p>At Adlynco Studio, we use both depending on the project:</p>
      <ul>
        <li><strong>Spring Boot</strong> for enterprise applications, government systems, and projects requiring high reliability and transaction integrity</li>
        <li><strong>Node.js</strong> for MVPs, prototypes, and projects where time-to-market is critical</li>
      </ul>
      <p>For most SaaS startups, Node.js with TypeScript is an excellent choice. You can always migrate to Spring Boot later if needed.</p>
    `,
    // author: "Darpan",
    authorRole: "Founder & CEO",
    date: "March 1, 2026",
    readTime: "6 min read",
    category: "Technology",
    tags: ["Spring Boot", "Node.js", "Backend", "SaaS"],
    image: springImg,
    featured: false
  },
  {
    id: 6,
    title: "How to Hire a Developer for Your Startup in India (Without Getting Burned)",
    slug: "how-to-hire-developer-india",
    excerpt: "A guide to hiring developers in India. Learn what to look for, red flags to avoid, and how to build a successful working relationship.",
    content: `
      <p>Hiring developers in India can be challenging. The market is flooded with talent, but finding the right fit requires careful evaluation. Here's our guide to hiring successfully.</p>
      
      <h2>What to Look For</h2>
      
      <h3>1. Portfolio and Case Studies</h3>
      <p>Don't just look at the final product. Ask about their role, the challenges they faced, and how they solved them. A good developer can explain their process.</p>
      
      <h3>2. Technical Communication</h3>
      <p>Can they explain complex technical concepts simply? This is crucial for collaboration.</p>
      
      <h3>3. Code Quality</h3>
      <p>Ask to see a code sample. Look for clean structure, comments, and adherence to best practices.</p>
      
      <h3>4. Problem-Solving Skills</h3>
      <p>Give them a small technical challenge. See how they approach the problem.</p>
      
      <h2>Red Flags to Avoid</h2>
      <ul>
        <li><strong>No portfolio:</strong> If they can't show you what they've built, move on</li>
        <li><strong>Overpromising:</strong> "We can do anything" without understanding your requirements</li>
        <li><strong>No documentation:</strong> They should be able to document their work</li>
        <li><strong>Poor communication:</strong> Late responses, vague answers</li>
        <li><strong>No questions:</strong> They should ask questions about your project</li>
      </ul>
      
      <h2>The Hiring Process</h2>
      <ol>
        <li><strong>Discovery call:</strong> Discuss your project and see if they understand your needs</li>
        <li><strong>Technical assessment:</strong> Review portfolio and maybe a small test</li>
        <li><strong>Reference check:</strong> Talk to past clients</li>
        <li><strong>Start with a small project:</strong> Test the working relationship before committing to a large engagement</li>
      </ol>
      
      <h2>Working with a Developer</h2>
      <ul>
        <li><strong>Clear requirements:</strong> Document what you need before starting</li>
        <li><strong>Regular communication:</strong> Weekly calls to review progress</li>
        <li><strong>Use tools:</strong> GitHub, Slack, and project management tools keep everyone aligned</li>
        <li><strong>Pay fairly:</strong> Good developers are worth the investment</li>
      </ul>
    `,
    // author: "Darpan",
    authorRole: "Founder & CEO",
    date: "February 25, 2026",
    readTime: "5 min read",
    category: "Business",
    tags: ["Hiring", "Startup", "Development Team"],
    image: startupImg,
    featured: false
  }
];

// Categories for filter
const CATEGORIES = [
  { id: "all", label: "All Posts" },
  { id: "Case Study", label: "Case Studies" },
  { id: "Technology", label: "Technology" },
  { id: "Pricing", label: "Pricing" },
  { id: "Marketing", label: "Marketing" },
  { id: "Business", label: "Business" }
];

function Blog() {
  const heroRef = useRef();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [showNewsletterSuccess, setShowNewsletterSuccess] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    // Hero animations
    gsap.fromTo(heroRef.current.querySelectorAll(".hero-animate"), 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, scrollTrigger: { trigger: heroRef.current, start: "top 80%" } }
    );

    // Blog grid animations
    gsap.fromTo(".blog-card", 
      { opacity: 0, y: 60 }, 
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, scrollTrigger: { trigger: ".blog-grid", start: "top 80%" } }
    );
  }, []);

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeFilter === "all" || post.category === activeFilter;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = BLOG_POSTS.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setShowNewsletterSuccess(true);
      setEmail("");
      setTimeout(() => setShowNewsletterSuccess(false), 3000);
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        .blog-card {
          transition: all 0.3s ease;
        }
        .blog-card:hover {
          transform: translateY(-8px);
        }
        .category-tag {
          transition: all 0.2s ease;
        }
        /* Fix for modal content */
        .blog-modal-content h2 {
          color: #00e5ff;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
          font-family: 'Orbitron', monospace;
          font-size: 1.5rem;
        }
        .blog-modal-content h3 {
          color: #00e5ff;
          margin-top: 1.2rem;
          margin-bottom: 0.8rem;
          font-family: 'Orbitron', monospace;
          font-size: 1.2rem;
        }
        .blog-modal-content p {
          margin-bottom: 1rem;
          line-height: 1.7;
        }
        .blog-modal-content ul, .blog-modal-content ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }
        .blog-modal-content li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        .blog-modal-content blockquote {
          border-left: 3px solid #00e5ff;
          padding: 1rem 1.5rem;
          margin: 1.5rem 0;
          background: rgba(0,229,255,0.05);
          border-radius: 8px;
          font-style: italic;
        }
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} style={{ 
        minHeight: "50vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative",
        padding: "120px 2rem 60px",
        background: "linear-gradient(135deg, #020408, #050a15)",
        overflow: "hidden"
      }}>
        <motion.div style={{ opacity, scale }} className="hero-animate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.8rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}
            >
              ✦ INSIGHTS & STORIES
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 900, marginBottom: "1.5rem", color: "#fff" }}
            >
              From the <span style={{ color: C.cyan }}>Workshop</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ fontSize: "1.1rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}
            >
              Stories, tips, and trends from the digital frontier. Learn from our experiences building for startups and enterprises.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Search Bar */}
      <section style={{ padding: "2rem 2rem 0", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                background: "rgba(0,20,60,0.85)",
                border: "1px solid rgba(0,229,255,0.3)",
                borderRadius: 60,
                padding: "1rem 2rem",
                color: "#e0f7ff",
                fontSize: "1rem",
                fontFamily: "Rajdhani,sans-serif",
                outline: "none",
                backdropFilter: "blur(25px)"
              }}
            />
            <svg style={{ position: "absolute", right: "1.5rem", top: "50%", transform: "translateY(-50%)", color: C.cyan }} width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ padding: "2rem 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", justifyContent: "center" }}>
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "0.5rem 1.2rem",
                  borderRadius: 50,
                  background: activeFilter === cat.id ? `linear-gradient(135deg, ${C.cyan}, ${C.purple})` : "rgba(0,12,30,0.88)",
                  border: `1px solid ${activeFilter === cat.id ? C.cyan : "rgba(0,229,255,0.2)"}`,
                  color: activeFilter === cat.id ? "#fff" : "rgba(224,247,255,0.7)",
                  fontFamily: "'Orbitron',monospace",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {activeFilter === "all" && featuredPosts.length > 0 && (
        <section style={{ padding: "40px 2rem", position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.5rem", fontWeight: 700, color: C.cyan, marginBottom: "2rem" }}>
              Featured Articles
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", gap: "2rem" }}>
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="blog-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedPost(post)}
                  style={{
                    background: "rgba(0,12,30,0.88)",
                    border: `1px solid rgba(0,229,255,0.2)`,
                    borderRadius: 20,
                    overflow: "hidden",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
<div style={{
  height: 240,
  overflow: "hidden"
}}>
  <img
    src={post.image}
    alt={post.title}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }}
  />


                    <div style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                      padding: "0.3rem 0.8rem",
                      borderRadius: 20,
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: "#fff"
                    }}>
                      Featured
                    </div>
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{ display: "flex", gap: "1rem", marginBottom: "0.8rem" }}>
                      <span style={{ color: C.cyan, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{post.category}</span>
                      <span style={{ color: "rgba(224,247,255,0.5)", fontSize: "0.7rem" }}>{post.readTime}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff" }}>{post.title}</h3>
                    <p style={{ color: "rgba(224,247,255,0.7)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "1rem" }}>{post.excerpt}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#fff" }}>{post.author}</div>
                        <div style={{ fontSize: "0.7rem", color: "rgba(224,247,255,0.5)" }}>{post.date}</div>
                      </div>
                      <span style={{ color: C.cyan, fontSize: "0.8rem", fontWeight: 600 }}>Read more →</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section style={{ padding: "40px 2rem 80px", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {regularPosts.length > 0 && (
            <>
              <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.5rem", fontWeight: 700, color: C.cyan, marginBottom: "2rem" }}>
                Latest Articles
              </h2>
              <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="blog-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedPost(post)}
                    style={{
                      background: "rgba(0,12,30,0.88)",
                      border: `1px solid rgba(0,229,255,0.2)`,
                      borderRadius: 20,
                      overflow: "hidden",
                      cursor: "pointer"
                    }}
                  >
                    <div style={{
  height: 180,
  overflow: "hidden"
}}>
  <img
    src={post.image}
    alt={post.title}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }}
  />
</div>
                    <div style={{ padding: "1.5rem" }}>
                      <div style={{ display: "flex", gap: "1rem", marginBottom: "0.8rem" }}>
                        <span style={{ color: C.cyan, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{post.category}</span>
                        <span style={{ color: "rgba(224,247,255,0.5)", fontSize: "0.7rem" }}>{post.readTime}</span>
                      </div>
                      <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff" }}>{post.title}</h3>
                      <p style={{ color: "rgba(224,247,255,0.7)", fontSize: "0.85rem", lineHeight: 1.5, marginBottom: "1rem" }}>{post.excerpt.substring(0, 120)}...</p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#fff" }}>{post.author}</div>
                          <div style={{ fontSize: "0.65rem", color: "rgba(224,247,255,0.5)" }}>{post.date}</div>
                        </div>
                        <span style={{ color: C.cyan, fontSize: "0.75rem", fontWeight: 600 }}>Read more →</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          )}
          {filteredPosts.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem" }}>
              <p style={{ color: "rgba(224,247,255,0.6)" }}>No articles found. Try a different search term.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ padding: "60px 2rem", background: "rgba(0,5,15,0.3)", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📬</div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff" }}>
              Get the <span style={{ color: C.cyan }}>Latest Insights</span>
            </h2>
            <p style={{ color: "rgba(224,247,255,0.6)", marginBottom: "2rem" }}>
              Subscribe to our newsletter and get the best articles delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  minWidth: "250px",
                  background: "rgba(0,12,30,0.88)",
                  border: `1px solid rgba(0,229,255,0.3)`,
                  borderRadius: 50,
                  padding: "0.8rem 1.5rem",
                  color: "#e0f7ff",
                  fontSize: "0.9rem",
                  outline: "none"
                }}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                style={{
                  background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                  border: "none",
                  padding: "0.8rem 2rem",
                  borderRadius: 50,
                  color: "#fff",
                  fontFamily: "'Orbitron',monospace",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  cursor: "pointer"
                }}
              >
                Subscribe
              </motion.button>
            </form>
            {showNewsletterSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  marginTop: "1rem",
                  color: C.cyan,
                  fontSize: "0.85rem"
                }}
              >
                ✓ Thanks for subscribing! Check your email for confirmation.
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Blog Post Modal - FIXED: Header visible, background content blurred */}
      {selectedPost && (
        <>
          {/* Blur overlay for background content */}
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(8px)",
            zIndex: 998,
          }} onClick={() => setSelectedPost(null)} />
          
          {/* Modal Content */}
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
            overflowY: "auto",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "2rem"
          }} onClick={() => setSelectedPost(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              style={{
                maxWidth: 900,
                width: "100%",
                margin: "80px auto 40px auto",
                background: "#0a0a1a",
                border: `1px solid ${C.cyan}`,
                borderRadius: 24,
                padding: "2rem",
                position: "relative",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPost(null)}
                style={{
                  position: "sticky",
                  top: "0.5rem",
                  float: "right",
                  background: "rgba(0,229,255,0.1)",
                  border: "none",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "rgba(224,247,255,0.7)",
                  zIndex: 10,
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(0,229,255,0.2)";
                  e.target.style.color = "#00e5ff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(0,229,255,0.1)";
                  e.target.style.color = "rgba(224,247,255,0.7)";
                }}
              >
                ×
              </button>

              <div style={{ clear: "both", marginBottom: "2rem" }}>
                <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                  <span style={{ background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.7rem", color: "#fff" }}>
                    {selectedPost.category}
                  </span>
                  <span style={{ color: "rgba(224,247,255,0.5)", fontSize: "0.8rem" }}>{selectedPost.readTime}</span>
                </div>
                <h1 style={{ fontFamily: "'Orbitron',monospace", fontSize: "2rem", fontWeight: 900, marginBottom: "1rem", color: "#fff" }}>
                  {selectedPost.title}
                </h1>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <div style={{ fontWeight: 600, color: "#fff" }}>{selectedPost.author}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(224,247,255,0.5)" }}>{selectedPost.authorRole}</div>
                  </div>
                  <div style={{ width: 1, height: 30, background: "rgba(0,229,255,0.2)" }} />
                  <div style={{ fontSize: "0.8rem", color: "rgba(224,247,255,0.5)" }}>{selectedPost.date}</div>
                </div>
              </div>

              <div style={{
                height: 300,
                background: `linear-gradient(135deg, ${C.dark2}, #0a1a2e)`,
                borderRadius: 16,
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <span style={{ fontSize: "6rem", opacity: 0.5 }}>📖</span>
              </div>

              <div 
                className="blog-modal-content"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "rgba(224,247,255,0.8)",
                  marginBottom: "2rem"
                }}
              />

              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1rem", color: C.cyan, marginBottom: "0.5rem" }}>Tags</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {selectedPost.tags.map(tag => (
                    <span key={tag} style={{
                      background: "rgba(0,229,255,0.1)",
                      padding: "0.2rem 0.8rem",
                      borderRadius: 20,
                      fontSize: "0.75rem",
                      color: C.cyan
                    }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{
                background: "rgba(0,229,255,0.05)",
                borderRadius: 16,
                padding: "1.5rem",
                marginBottom: "2rem",
                borderLeft: `3px solid ${C.cyan}`
              }}>
                <p style={{ fontSize: "0.9rem", color: "rgba(224,247,255,0.7)", marginBottom: "1rem" }}>
                  Enjoyed this article? Get more insights like this delivered to your inbox.
                </p>
                <form onSubmit={handleNewsletterSubmit} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      flex: 1,
                      background: "rgba(0,12,30,0.88)",
                      border: `1px solid rgba(0,229,255,0.3)`,
                      borderRadius: 50,
                      padding: "0.6rem 1.2rem",
                      color: "#e0f7ff",
                      fontSize: "0.85rem",
                      outline: "none"
                    }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    style={{
                      background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                      border: "none",
                      padding: "0.6rem 1.5rem",
                      borderRadius: 50,
                      color: "#fff",
                      cursor: "pointer"
                    }}
                  >
                    Subscribe
                  </motion.button>
                </form>
              </div>

              <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPost(null)}
                  style={{
                    background: "transparent",
                    border: `1px solid ${C.cyan}`,
                    padding: "0.8rem 2rem",
                    borderRadius: 50,
                    color: "#fff",
                    fontFamily: "'Orbitron',monospace",
                    cursor: "pointer"
                  }}
                >
                  Close
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToContact}
                  style={{
                    background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                    border: "none",
                    padding: "0.8rem 2rem",
                    borderRadius: 50,
                    color: "#fff",
                    fontFamily: "'Orbitron',monospace",
                    cursor: "pointer"
                  }}
                >
                  Start a Project →
                </motion.button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
}

export default Blog;