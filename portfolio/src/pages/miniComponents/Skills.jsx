import { Card } from "@/components/ui/card";
import axiosInstance from "@/lib/axios";
import React, { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const getMySkills = async () => {
      try {
        const { data } = await axiosInstance.get("/api/v1/skill/getall");
        setSkills(data.skills || []);
      } catch (error) {
        console.error("Error loading skills:", error);
        setSkills([]);
      }
    };
    getMySkills();
  }, []);
  return (
    <div className="w-full relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          <span className="gradient-text">SKILLS</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I work with
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills &&
          skills.map((element) => {
            return (
              <div key={element._id} 
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 
                  border border-border hover:border-orange-500/50 transition-all duration-300 
                  hover-lift flex flex-col items-center justify-center gap-4 min-h-[140px]">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={element.svg && element.svg.url}
                    alt={element.title}
                    className="h-14 w-14 object-contain relative z-10 transition-transform 
                      duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="text-sm font-medium text-center text-muted-foreground 
                  group-hover:text-foreground transition-colors">
                  {element.title}
                </p>
              </div>
            );
          })}
      </div>
      
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent my-12"></div>
    </div>
  );
};

export default Skills;
