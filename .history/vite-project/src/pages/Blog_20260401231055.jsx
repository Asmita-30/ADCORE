// src/pages/Blog.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import blog images - all using consistent 16:9 ratio with brand colors
import reactImg from "../assets/images/react-blog.jpg";
import springImg from "../assets/images/spring-blog.jpg";
import startupImg from "../assets/images/startup-blog.jpg";
import landingImg from "../assets/images/landing-blog.jpg";
import costImg from "../assets/images/cost-blog.jpg";

gsap.registerPlugin(ScrollTrigger);

// Professional color palette (from audit)
const COLORS = {
  primaryBg: "#0A0F1E",
  cardBg: "#111827",
  hoverBg: "#1E293B",
  primaryText: "#F0F4FF",
  leadText: "#CBD5E1",
  bodyText: "#94A3B8",
  mutedText: "#64748B",
  primaryAccent: "#2563EB",
  accentHover: "#3B82F6",
  secondaryAccent: "#06B6D4",
  borderDefault: "#1F2A3D",
  borderHover: "#2D3F5F",
  success: "#10B981"
};

// Blog Posts Data - with consistent thumbnail structure
const BLOG_POSTS = [
  {
    id: 1,
    title: "How Much Does a Website Cost in India in 2026?",
    slug: "website-cost-india-2026",
    excerpt: "A comprehensive breakdown of website development costs in India. From static sites to e-commerce platforms, understand what you should expect to pay.",
    content: `
      <p>One of the most common questions we get is: "How much does a website cost?" The answer isn't simple because it depends on many factors. This guide will help you understand what goes into website pricing and what you should expect to pay in 2026.</p>
      
      <h2>Types of Websites and Their Costs</h2>
      
      <h3>1. Static Website (₹7,000 – ₹10,000)</h3>
      <p>Perfect for portfolios, small businesses, and informational sites. Includes up to 5 pages, responsive design, contact form, and basic SEO.</p>
      
      <h3>2. Dynamic Website (₹14,000 – ₹17,000)</h3>
      <p>Ideal for startups, blogs, and businesses needing content management. Includes custom design, CMS, user authentication, and database integration.</p>
      
      <h3>3. E-Commerce Website (₹25,000+)</h3>
      <p>Complete online store solution with product catalog, shopping cart, payment integration, and order management.</p>
      
      <h2>Get an Exact Quote</h2>
      <p>Every project is unique. Contact us with your requirements, and we'll provide a detailed, fixed-price quote within 24 hours.</p>
    `,
    author: "Darpan",
    authorRole: "Founder & CEO",
    date: "March 12, 2026",
    readTime: "6 min read",
    category: "Pricing",
    tags: ["Pricing", "Cost Guide", "Website Development"],
    image: costImg,
    featured: true
  },
  {
    id: 2,
    title: "React vs Vue in 2026: Which Should Your Startup Choose?",
    slug: "react-vs-vue-2026",
    excerpt: "A detailed comparison of React and Vue for startup founders. Learn about performance, learning curve, ecosystem, and which one is right for your project.",
    content: `
      <p>Choosing the right frontend framework for your startup is crucial. The decision affects development speed, hiring costs, and long-term maintainability. Let's compare the two most popular options: React and Vue.</p>
      
      <h2>React: The Industry Standard</h2>
      <p>React, developed by Meta, has become the default choice for many companies. It's used by Facebook, Instagram, Netflix, and thousands of other companies.</p>
      
      <h2>Vue: The Progressive Framework</h2>
      <p>Vue was created by Evan You and has gained massive popularity for its simplicity and approachable learning curve.</p>
      
      <h2>Our Recommendation</h2>
      <p>For most startups, we recommend React. Here's why: easier to find developers, unmatched ecosystem, skills transfer to React Native, and corporate backing ensures long-term stability.</p>
    `,
    author: "Darpan",
    authorRole: "Founder & CEO",
    date: "March 8, 2026",
    readTime: "7 min read",
    category: "Technology",
    tags: ["React", "Vue", "Framework Comparison"],
    image: reactImg,
    featured: false
  },
  {
    id: 3,
    title: "Why Your Landing Page Isn't Converting (And How to Fix It)",
    slug: "landing-page-conversion-optimization",
    excerpt: "Common mistakes that kill conversions on landing pages and actionable fixes to increase your conversion rate by 2-3x.",
    content: `
      <p>You've spent money on ads, driven traffic to your landing page, but the conversions aren't coming. What's going wrong? Let's diagnose common issues and fix them.</p>
      
      <h2>1. Slow Loading Speed</h2>
      <p>Every second of delay reduces conversions by 7%. If your page takes more than 3 seconds to load, you're losing customers.</p>
      
      <h2>2. Unclear Value Proposition</h2>
      <p>Visitors need to understand what you offer within 3 seconds. If they don't, they leave.</p>
      
      <h2>3. No Clear Call to Action</h2>
      <p>If visitors don't know what to do next, they won't do anything.</p>
      
      <h2>Take Action</h2>
      <p>Review your landing page against this list. Fix the issues. Then A/B test your changes to see what works best.</p>
    `,
    author: "Darpan",
    authorRole: "Founder & CEO",
    date: "March 5, 2026",
    readTime: "5 min read",
    category: "Marketing",
    tags: ["Conversion", "Landing Page", "CRO"],
    image: landingImg,
    featured: false
  },
  {
    id: 4,
    title: "Spring Boot vs Node.js for SaaS Backends: An Engineer's Honest Take",
    slug: "spring-boot-vs-nodejs-saas-backend",
    excerpt: "A detailed technical comparison of Spring Boot and Node.js for building SaaS applications. Performance, scalability, developer experience, and more.",
    content: `
      <p>Choosing the right backend technology is one of the most important decisions when building a SaaS product. Let's compare two popular choices: Spring Boot (Java) and Node.js (JavaScript).</p>
      
      <h2>Spring Boot (Java)</h2>
      <p>Spring Boot is the go-to framework for enterprise Java applications. It's battle-tested, production-ready, and used by companies like Netflix, Uber, and Amazon.</p>
      
      <h2>Node.js (JavaScript)</h2>
      <p>Node.js has become extremely popular for startups because of its simplicity and the ability to use JavaScript across the stack.</p>
      
      <h2>Our Recommendation</h2>
      <p>At Adrix Core, we use both depending on the project. For most SaaS startups, Node.js with TypeScript is an excellent choice. You can always migrate to Spring Boot later if needed.</p>
    `,
    author: "Darpan",
    authorRole: "Founder & CEO",
    date: "March 1, 2026",
    readTime: "6 min read",
    category: "Technology",
    tags: ["Spring Boot", "Node.js", "Backend", "SaaS"],
    image: springImg,
    featured: false
  },
  {
    id: 5,
    title: "How to Hire a Developer for Your Startup in India (Without Getting Burned)",
    slug: "how-to-hire-developer-india",
    excerpt: "A guide to hiring developers in India. Learn what to look for, red flags to avoid, and how to build a successful working relationship.",
    content: `
      <p>Hiring developers in India can be challenging. The market is flooded with talent, but finding the right fit requires careful evaluation. Here's our guide to hiring successfully.</p>
      
      <h2>What to Look For</h2>
      <p>Portfolio, technical communication, code quality, and problem-solving skills are essential qualities in a good developer.</p>
      
      <h2>Red Flags to Avoid</h2>
      <p>No portfolio, overpromising, no documentation, poor communication, and no questions about your project are all warning signs.</p>
      
      <h2>Working with a Developer</h2>
      <p>Clear requirements, regular communication, using proper tools, and fair payment are key to a successful working relationship.</p>
    `,
    author: "Darpan",
    authorRole: "Founder & CEO",
    date: "February 25, 2026",
    readTime: "5 min read",
    category: "Business",
    tags: ["Hiring", "Startup", "Development Team"],
    image: startupImg,
    featured: false
  }
];

// Categories for filter - removed Case Studies until real case studies exist
const CATEGORIES = [
  { id: "all", label: "All Posts" },
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
    // Hero animations with proper timing
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
    
    tl.fromTo(heroRef.current.querySelectorAll(".hero-animate"), 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8 }
    );

    // Blog grid animations
    gsap.fromTo(".blog-card", 
      { opacity: 0, y: 60 }, 
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1, 
        duration: 0.6,
        scrollTrigger: {
          trigger: ".blog-grid",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
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

  // Consistent thumbnail component
  const BlogThumbnail = ({ image, title, category }) => (
    <div style={{
      height: 200,
      background: `linear-gradient(135deg, ${COLORS.primaryBg}, ${COLORS.cardBg})`,
      position: "relative",
      overflow: "hidden"
    }}>
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.4s ease"
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
      />
      <div style={{
        position: "absolute",
        top: "1rem",
        left: "1rem",
        background: COLORS.primaryAccent,
        padding: "0.25rem 0.75rem",
        borderRadius: 20,
        fontSize: "0.7rem",
        fontWeight: 500,
        color: COLORS.primaryText,
        letterSpacing: "0.05em"
      }}>
        {category}
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap');
        
        .blog-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .blog-card:hover {
          transform: translateY(-4px);
          border-color: ${COLORS.accentHover};
        }
        
        .category-tag {
          transition: all 0.2s ease;
        }
        
        /* Modal content styles */
        .blog-modal-content {
          font-family: 'Inter', sans-serif;
          color: ${COLORS.bodyText};
          line-height: 1.7;
        }
        
        .blog-modal-content h2 {
          font-family: 'Sora', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: ${COLORS.primaryText};
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .blog-modal-content h3 {
          font-family: 'Sora', sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: ${COLORS.leadText};
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        
        .blog-modal-content p {
          margin-bottom: 1rem;
        }
        
        .blog-modal-content ul, .blog-modal-content ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }
        
        .blog-modal-content li {
          margin-bottom: 0.5rem;
        }
        
        .blog-modal-content blockquote {
          border-left: 3px solid ${COLORS.primaryAccent};
          padding: 1rem 1.5rem;
          margin: 1.5rem 0;
          background: rgba(37, 99, 235, 0.05);
          border-radius: 8px;
          font-style: italic;
          color: ${COLORS.leadText};
        }
        
        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${COLORS.primaryBg};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${COLORS.primaryAccent};
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${COLORS.accentHover};
        }
      `}</style>

      {/* Hero Section - Refined with proper typography */}
      <section ref={heroRef} style={{ 
        minHeight: "50vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative",
        padding: "120px 2rem 60px",
        background: COLORS.primaryBg,
        overflow: "hidden"
      }}>
        <motion.div 
          style={{ opacity, scale }} 
          className="hero-animate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ 
                fontFamily: "'Inter', sans-serif", 
                fontSize: "0.75rem", 
                letterSpacing: "0.2em", 
                color: COLORS.primaryAccent, 
                marginBottom: "1rem",
                textTransform: "uppercase"
              }}
            >
              Insights & Stories
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ 
                fontFamily: "'Sora', sans-serif", 
                fontSize: "clamp(2.5rem, 6vw, 4rem)", 
                fontWeight: 700, 
                marginBottom: "1.5rem", 
                color: COLORS.primaryText,
                lineHeight: "1.2"
              }}
            >
              From the Workshop
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ 
                fontSize: "1.125rem", 
                color: COLORS.bodyText, 
                lineHeight: 1.6, 
                maxWidth: 700, 
                margin: "0 auto",
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Stories, tips, and trends from the digital frontier. Learn from our experiences building for startups and enterprises.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Search Bar */}
      <section style={{ padding: "2rem 2rem 0", position: "relative", zIndex: 2, background: COLORS.primaryBg }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                background: COLORS.cardBg,
                border: `1px solid ${COLORS.borderDefault}`,
                borderRadius: 60,
                padding: "1rem 2rem",
                color: COLORS.primaryText,
                fontSize: "1rem",
                fontFamily: "'Inter', sans-serif",
                outline: "none",
                transition: "all 0.2s ease"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = COLORS.primaryAccent;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = COLORS.borderDefault;
              }}
            />
            <svg 
              style={{ 
                position: "absolute", 
                right: "1.5rem", 
                top: "50%", 
                transform: "translateY(-50%)", 
                color: COLORS.mutedText 
              }} 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
            >
              <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ padding: "2rem 2rem", position: "relative", zIndex: 2, background: COLORS.primaryBg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: 40,
                  background: activeFilter === cat.id ? COLORS.primaryAccent : "transparent",
                  border: `1px solid ${activeFilter === cat.id ? COLORS.primaryAccent : COLORS.borderDefault}`,
                  color: activeFilter === cat.id ? COLORS.primaryText : COLORS.bodyText,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease"
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
        <section style={{ padding: "40px 2rem", position: "relative", zIndex: 2, background: COLORS.primaryBg }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ 
              fontFamily: "'Sora', sans-serif", 
              fontSize: "1.5rem", 
              fontWeight: 700, 
              color: COLORS.primaryText, 
              marginBottom: "2rem" 
            }}>
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
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedPost(post)}
                  style={{
                    background: COLORS.cardBg,
                    border: `1px solid ${COLORS.borderDefault}`,
                    borderRadius: 20,
                    overflow: "hidden",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <BlogThumbnail image={post.image} title={post.title} category={post.category} />
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{ display: "flex", gap: "1rem", marginBottom: "0.75rem" }}>
                      <span style={{ 
                        color: COLORS.secondaryAccent, 
                        fontSize: "0.75rem", 
                        textTransform: "uppercase", 
                        letterSpacing: "0.05em",
                        fontFamily: "'Inter', sans-serif"
                      }}>
                        {post.category}
                      </span>
                      <span style={{ 
                        color: COLORS.mutedText, 
                        fontSize: "0.75rem",
                        fontFamily: "'Inter', sans-serif"
                      }}>
                        {post.readTime}
                      </span>
                    </div>
                    <h3 style={{ 
                      fontFamily: "'Sora', sans-serif", 
                      fontSize: "1.25rem", 
                      fontWeight: 600, 
                      marginBottom: "0.75rem", 
                      color: COLORS.primaryText,
                      lineHeight: "1.4"
                    }}>
                      {post.title}
                    </h3>
                    <p style={{ 
                      color: COLORS.bodyText, 
                      fontSize: "0.875rem", 
                      lineHeight: 1.6, 
                      marginBottom: "1.25rem" 
                    }}>
                      {post.excerpt}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <div style={{ 
                          fontSize: "0.75rem", 
                          fontWeight: 600, 
                          color: COLORS.primaryText,
                          fontFamily: "'Inter', sans-serif"
                        }}>
                          {post.author}
                        </div>
                        <div style={{ 
                          fontSize: "0.7rem", 
                          color: COLORS.mutedText,
                          fontFamily: "'Inter', sans-serif"
                        }}>
                          {post.date}
                        </div>
                      </div>
                      <span style={{ 
                        color: COLORS.primaryAccent, 
                        fontSize: "0.875rem", 
                        fontWeight: 500,
                        fontFamily: "'Inter', sans-serif"
                      }}>
                        Read more →
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section style={{ padding: "40px 2rem 80px", position: "relative", zIndex: 2, background: COLORS.primaryBg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {regularPosts.length > 0 && (
            <>
              <h2 style={{ 
                fontFamily: "'Sora', sans-serif", 
                fontSize: "1.5rem", 
                fontWeight: 700, 
                color: COLORS.primaryText, 
                marginBottom: "2rem" 
              }}>
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
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedPost(post)}
                    style={{
                      background: COLORS.cardBg,
                      border: `1px solid ${COLORS.borderDefault}`,
                      borderRadius: 20,
                      overflow: "hidden",
                      cursor: "pointer"
                    }}
                  >
                    <BlogThumbnail image={post.image} title={post.title} category={post.category} />
                    <div style={{ padding: "1.5rem" }}>
                      <div style={{ display: "flex", gap: "1rem", marginBottom: "0.75rem" }}>
                        <span style={{ 
                          color: COLORS.secondaryAccent, 
                          fontSize: "0.7rem", 
                          textTransform: "uppercase", 
                          letterSpacing: "0.05em" 
                        }}>
                          {post.category}
                        </span>
                        <span style={{ color: COLORS.mutedText, fontSize: "0.7rem" }}>
                          {post.readTime}
                        </span>
                      </div>
                      <h3 style={{ 
                        fontFamily: "'Sora', sans-serif", 
                        fontSize: "1.1rem", 
                        fontWeight: 600, 
                        marginBottom: "0.75rem", 
                        color: COLORS.primaryText 
                      }}>
                        {post.title}
                      </h3>
                      <p style={{ 
                        color: COLORS.bodyText, 
                        fontSize: "0.85rem", 
                        lineHeight: 1.6, 
                        marginBottom: "1.25rem" 
                      }}>
                        {post.excerpt.substring(0, 120)}...
                      </p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <div style={{ fontSize: "0.75rem", fontWeight: 600, color: COLORS.primaryText }}>
                            {post.author}
                          </div>
                          <div style={{ fontSize: "0.65rem", color: COLORS.mutedText }}>
                            {post.date}
                          </div>
                        </div>
                        <span style={{ color: COLORS.primaryAccent, fontSize: "0.75rem", fontWeight: 500 }}>
                          Read more →
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          )}
          {filteredPosts.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem" }}>
              <p style={{ color: COLORS.bodyText, fontFamily: "'Inter', sans-serif" }}>
                No articles found. Try a different search term.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ 
        padding: "60px 2rem", 
        background: COLORS.cardBg, 
        position: "relative", 
        zIndex: 2,
        borderTop: `1px solid ${COLORS.borderDefault}`,
        borderBottom: `1px solid ${COLORS.borderDefault}`
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📬</div>
            <h2 style={{ 
              fontFamily: "'Sora', sans-serif", 
              fontSize: "1.75rem", 
              fontWeight: 700, 
              marginBottom: "0.75rem", 
              color: COLORS.primaryText 
            }}>
              Get the <span style={{ color: COLORS.primaryAccent }}>Latest Insights</span>
            </h2>
            <p style={{ color: COLORS.bodyText, marginBottom: "2rem", fontFamily: "'Inter', sans-serif" }}>
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
                  background: COLORS.primaryBg,
                  border: `1px solid ${COLORS.borderDefault}`,
                  borderRadius: 50,
                  padding: "0.85rem 1.5rem",
                  color: COLORS.primaryText,
                  fontSize: "0.9rem",
                  outline: "none",
                  fontFamily: "'Inter', sans-serif",
                  transition: "all 0.2s ease"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = COLORS.primaryAccent;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = COLORS.borderDefault;
                }}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                style={{
                  background: COLORS.primaryAccent,
                  border: "none",
                  padding: "0.85rem 2rem",
                  borderRadius: 50,
                  color: COLORS.primaryText,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = COLORS.accentHover;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = COLORS.primaryAccent;
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
                  color: COLORS.success,
                  fontSize: "0.85rem",
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                ✓ Thanks for subscribing! Check your email for confirmation.
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <>
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(10, 15, 30, 0.95)",
            backdropFilter: "blur(8px)",
            zIndex: 998,
          }} onClick={() => setSelectedPost(null)} />
          
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
                background: COLORS.primaryBg,
                border: `1px solid ${COLORS.borderDefault}`,
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
                  background: "rgba(37, 99, 235, 0.1)",
                  border: "none",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: COLORS.bodyText,
                  zIndex: 10,
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(37, 99, 235, 0.2)";
                  e.target.style.color = COLORS.primaryAccent;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(37, 99, 235, 0.1)";
                  e.target.style.color = COLORS.bodyText;
                }}
              >
                ×
              </button>

              <div style={{ clear: "both", marginBottom: "2rem" }}>
                <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                  <span style={{ 
                    background: COLORS.primaryAccent, 
                    padding: "0.25rem 0.85rem", 
                    borderRadius: 20, 
                    fontSize: "0.75rem", 
                    color: COLORS.primaryText,
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {selectedPost.category}
                  </span>
                  <span style={{ color: COLORS.mutedText, fontSize: "0.8rem" }}>{selectedPost.readTime}</span>
                </div>
                <h1 style={{ 
                  fontFamily: "'Sora', sans-serif", 
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)", 
                  fontWeight: 700, 
                  marginBottom: "1rem", 
                  color: COLORS.primaryText 
                }}>
                  {selectedPost.title}
                </h1>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <div style={{ fontWeight: 600, color: COLORS.primaryText, fontFamily: "'Inter', sans-serif" }}>
                      {selectedPost.author}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: COLORS.mutedText }}>
                      {selectedPost.authorRole}
                    </div>
                  </div>
                  <div style={{ width: 1, height: 30, background: COLORS.borderDefault }} />
                  <div style={{ fontSize: "0.75rem", color: COLORS.mutedText }}>{selectedPost.date}</div>
                </div>
              </div>

              <div style={{
                height: 300,
                background: COLORS.cardBg,
                borderRadius: 16,
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }}>
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>

              <div 
                className="blog-modal-content"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                style={{
                  fontSize: "1rem",
                  marginBottom: "2rem"
                }}
              />

              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ 
                  fontFamily: "'Sora', sans-serif", 
                  fontSize: "1rem", 
                  color: COLORS.primaryAccent, 
                  marginBottom: "0.75rem" 
                }}>
                  Tags
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {selectedPost.tags.map(tag => (
                    <span key={tag} style={{
                      background: "rgba(37, 99, 235, 0.1)",
                      padding: "0.25rem 0.75rem",
                      borderRadius: 20,
                      fontSize: "0.75rem",
                      color: COLORS.secondaryAccent,
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{
                background: "rgba(37, 99, 235, 0.05)",
                borderRadius: 16,
                padding: "1.5rem",
                marginBottom: "2rem",
                borderLeft: `3px solid ${COLORS.primaryAccent}`
              }}>
                <p style={{ fontSize: "0.9rem", color: COLORS.bodyText, marginBottom: "1rem" }}>
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
                      background: COLORS.cardBg,
                      border: `1px solid ${COLORS.borderDefault}`,
                      borderRadius: 50,
                      padding: "0.7rem 1.25rem",
                      color: COLORS.primaryText,
                      fontSize: "0.85rem",
                      outline: "none",
                      fontFamily: "'Inter', sans-serif"
                    }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    style={{
                      background: COLORS.primaryAccent,
                      border: "none",
                      padding: "0.7rem 1.5rem",
                      borderRadius: 50,
                      color: COLORS.primaryText,
                      cursor: "pointer",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500
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
                    border: `1px solid ${COLORS.borderDefault}`,
                    padding: "0.8rem 2rem",
                    borderRadius: 50,
                    color: COLORS.primaryText,
                    fontFamily: "'Inter', sans-serif",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = COLORS.primaryAccent;
                    e.target.style.color = COLORS.primaryAccent;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = COLORS.borderDefault;
                    e.target.style.color = COLORS.primaryText;
                  }}
                >
                  Close
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToContact}
                  style={{
                    background: COLORS.primaryAccent,
                    border: "none",
                    padding: "0.8rem 2rem",
                    borderRadius: 50,
                    color: COLORS.primaryText,
                    fontFamily: "'Inter', sans-serif",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = COLORS.accentHover;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = COLORS.primaryAccent;
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