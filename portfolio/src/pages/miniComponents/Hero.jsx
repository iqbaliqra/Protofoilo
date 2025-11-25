import {
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axios";

const Hero = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const { data } = await axiosInstance.get("/api/v1/user/portfolio/me");
        setUser(data.user || {});
      } catch (error) {
        console.error("Error loading profile:", error);
        // Set default values if API fails
        setUser({
          fullName: "Iqra Iqbal",
          aboutMe: "Full Stack Developer",
          githubURL: "",
          instagramURL: "",
          facebookURL: "",
          linkedInURL: "",
          twitterURL: "",
          resume: { url: "" }
        });
      }
    };
    getMyProfile();
  }, []);
  return (
    <div className="w-full relative">
      {/* Background gradient decoration */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-10 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Available for work</p>
        </div>
        
        {/* Hero Content with Profile Picture - Side by Side Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          {/* Left Side - Text Content */}
          <div>
            <h1 className="overflow-x-hidden text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-extrabold mb-6 leading-tight">
              Hey, I'm <span className="gradient-text">{user.fullName || "Iqra Iqbal"}</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 
              text-orange-500 mb-8 min-h-[3rem]">
              <Typewriter
                words={["FULLSTACK DEVELOPER", "SOFTWARE ENGINEER","FRONTEND ENGINEER"]}
                loop={50}
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-8 max-w-2xl">
              {user.aboutMe || "Full Stack Developer passionate about creating beautiful and functional web applications."}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {user.instagramURL && (
                <Link to={user.instagramURL} target="_blank" 
                  className="p-3 bg-secondary hover:bg-secondary/80 rounded-xl transition-all duration-300 
                  hover:scale-110 border border-border hover:border-orange-500/50">
                  <Instagram className="text-pink-500 w-6 h-6" />
                </Link>
              )}
              {user.facebookURL && (
                <Link to={user.facebookURL} target="_blank" 
                  className="p-3 bg-secondary hover:bg-secondary/80 rounded-xl transition-all duration-300 
                  hover:scale-110 border border-border hover:border-orange-500/50">
                  <Facebook className="text-blue-600 w-6 h-6" />
                </Link>
              )}
              {user.linkedInURL && (
                <Link to={user.linkedInURL} target="_blank" 
                  className="p-3 bg-secondary hover:bg-secondary/80 rounded-xl transition-all duration-300 
                  hover:scale-110 border border-border hover:border-orange-500/50">
                  <Linkedin className="text-blue-600 w-6 h-6" />
                </Link>
              )}
              {user.twitterURL && (
                <Link to={user.twitterURL} target="_blank" 
                  className="p-3 bg-secondary hover:bg-secondary/80 rounded-xl transition-all duration-300 
                  hover:scale-110 border border-border hover:border-orange-500/50">
                  <Twitter className="text-sky-500 w-6 h-6" />
                </Link>
              )}
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              {user.githubURL && (
                <Link to={user.githubURL} target="_blank">
                  <Button className="rounded-full px-8 py-6 text-base font-semibold bg-orange-500 
                    hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 
                    hover:scale-105 glow-orange">
                    <Github className="mr-2" />
                    Github
                  </Button>
                </Link>
              )}
              {user.resume && user.resume.url && (
                <Link to={user.resume.url} target="_blank">
                  <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold 
                    border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10 
                    shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <ExternalLink className="mr-2" />
                    Resume
                  </Button>
                </Link>
              )}
            </div>
          </div>
          
          {/* Right Side - Profile Picture */}
          <div className="flex justify-center md:justify-end md:pt-0 pt-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-orange-500 
                rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 
                group-hover:duration-200 glow-orange"></div>
              <img
                src="/me.jpeg"
                alt="avatar"
                className="relative rounded-full shadow-2xl w-80 h-80 max-w-md object-cover 
                  transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
        
        {/* About Me Details Section */}
        <div className="mt-12">
          {/* About Me Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-center">
            <span className="gradient-text">ABOUT ME</span>
          </h2>
          
          <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/5 to-orange-600/5 border 
            border-orange-500/20 space-y-8">
            {/* Main Introduction */}
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                I don't just write code. I architect scalable, revenue-driven digital products that help startups and businesses launch faster, scale smarter, and stand out in competitive markets.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm <span className="font-semibold text-orange-500">Iqra Iqbal</span>,  a Full-Stack MERN & SaaS Developer with 1 year of professional experience, specializing in building MVPs, web applications, and cross-platform mobile apps that are high-performance, secure, and designed for long-term growth. Throughout my journey, I have developed projects from raw ideas to production-ready platforms, focusing on clean code, scalable architecture, and an exceptional user experience. I have hands-on experience in both web and mobile development, applying my skills to create impactful and user-friendly solutions.
              </p>
            </div>

            {/* Core Expertise */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-500">Core Expertise</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>MERN Stack (MongoDB, Express.js, React.js, Node.js)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>SaaS Product Development & API Integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Flask API</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Scalable Architecture & Secure Authentication (JWT, OAuth)</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>AWS Deployments & CI/CD Pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Conversion-Focused UI/UX with Tailwind CSS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Cross-Platform Mobile Development (React Native)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What I Deliver */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-500">What I Deliver</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>End-to-End Web & Mobile Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>REST API & Backend Integration</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Debugging, Optimization & Code Refactoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Strong Communication & Timely Delivery</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="pt-4">
              <p className="text-lg leading-relaxed text-center text-muted-foreground">
                🤝 Whether you're a startup founder validating your MVP or an enterprise scaling operations, I'll help you go from idea to impact faster, cleaner, and built to last.
              </p>
            </div>
          </div>
        </div>
        
        <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent my-12"></div>
      </div>
    </div>
  );
};

export default Hero;
