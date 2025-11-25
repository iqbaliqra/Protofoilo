import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import axiosInstance from "@/lib/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getMyProjects = async () => {
      try {
        const { data } = await axiosInstance.get("/api/v1/project/getall");
        setProjects(data.projects || []);
      } catch (error) {
        console.error("Error loading projects:", error);
        setProjects([]);
      }
    };
    getMyProjects();
  }, []);
  return (
    <div className="relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          <span className="gradient-text">MY PORTFOLIO</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore my latest projects and creative work
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {viewAll
          ? projects &&
            projects.map((element) => {
              return (
                <Link to={`/project/${element._id}`} key={element._id} 
                  className="group relative overflow-hidden rounded-2xl hover-lift">
                  <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-orange-500/10 to-orange-600/10">
                    <img
                      src={element.projectBanner && element.projectBanner.url}
                      alt={element.title}
                      className="w-full h-full object-cover transition-transform duration-500 
                        group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{element.title}</h3>
                      <p className="text-sm opacity-90 line-clamp-2">{element.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })
          : projects &&
            projects.slice(0, 9).map((element) => {
              return (
                <Link to={`/project/${element._id}`} key={element._id} 
                  className="group relative overflow-hidden rounded-2xl hover-lift">
                  <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-orange-500/10 to-orange-600/10">
                    <img
                      src={element.projectBanner && element.projectBanner.url}
                      alt={element.title}
                      className="w-full h-full object-cover transition-transform duration-500 
                        group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{element.title}</h3>
                      <p className="text-sm opacity-90 line-clamp-2">{element.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
      {projects && projects.length > 9 && (
        <div className="w-full text-center mt-12">
          <Button 
            size="lg"
            className="rounded-full px-8 py-6 text-base font-semibold bg-orange-500 
              hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 
              hover:scale-105 glow-orange" 
            onClick={() => setViewAll(!viewAll)}>
            {viewAll ? "Show Less" : "Show More Projects"}
          </Button>
        </div>
      )}
      
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent my-12"></div>
    </div>
  );
};

export default Portfolio;
