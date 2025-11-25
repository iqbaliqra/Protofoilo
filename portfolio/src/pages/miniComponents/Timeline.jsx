import axiosInstance from "@/lib/axios";
import React, { useEffect, useState } from "react";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  useEffect(() => {
    const getMyTimeline = async () => {
      try {
        const { data } = await axiosInstance.get("/api/v1/timeline/getall");
        setTimeline(data.timelines || []);
      } catch (error) {
        console.error("Error loading timeline:", error);
        setTimeline([]);
      }
    };
    getMyTimeline();
  }, []);
  return (
    <div className="relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          <span className="gradient-text">TIMELINE</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          My professional journey and milestones
        </p>
      </div>
      
      <div className="relative">
        <div className="space-y-12">
          {timeline &&
            timeline.map((element, index) => {
              return (
                <div className="relative" key={element._id}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full 
                      bg-orange-500 shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">
                      {element.title}
                    </h3>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border 
                    border-border hover:border-orange-500/50 transition-all duration-300 hover-lift">
                    <time className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full 
                      bg-orange-500/10 text-orange-500">
                      {element.timeline.from} - {element.timeline.to ? element.timeline.to : "Present"}
                    </time>
                    <p className="text-muted-foreground leading-relaxed">
                      {element.description}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent my-12"></div>
    </div>
  );
};

export default Timeline;
