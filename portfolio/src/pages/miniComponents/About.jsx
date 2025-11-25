import React, { useEffect, useState } from "react";

const About = () => {
  return (
    <div className="w-full relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          <span className="gradient-text">ABOUT ME</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Allow me to introduce myself
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div className="flex justify-center">
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
        
        <div className="flex flex-col gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border 
            border-border hover:border-orange-500/50 transition-all duration-300">
            <p className="text-lg leading-relaxed text-muted-foreground">
              My name is <span className="font-semibold text-foreground">Iqra Iqbal</span>, a passionate Full Stack Developer. 
              I will graduate in Software Engineering from SMIU around 2024. I work as a web developer 
              and freelancer. My hobbies include watching movies, series, playing video games, and 
              occasionally cooking.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border 
            border-border hover:border-orange-500/50 transition-all duration-300">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I have interests not only in technology but also in movies, series, video games, 
              and cooking. I excel in meeting deadlines for my work.
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/5 to-orange-600/5 border 
        border-orange-500/20">
        <p className="text-lg leading-relaxed text-center text-muted-foreground">
          My dedication and perseverance in timely delivery of work are integral to me. 
          I maintain the courage to face any challenges for extended periods.
        </p>
      </div>
    </div>
  );
};

export default About;
