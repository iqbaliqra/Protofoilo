import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "@/lib/axios";
import { Button } from "@/components/ui/button";

const ProjectView = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [stack, setStack] = useState("");
  const [gitRepoLink, setGitRepoLink] = useState("");
  const [deployed, setDeployed] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectBanner, setProjectBanner] = useState("");
  const [projectBannerPreview, setProjectBannerPreview] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getProject = async () => {
      try {
        const res = await axiosInstance.get(`/api/v1/project/get/${id}`);
        setTitle(res.data.project.title || "");
        setDescription(res.data.project.description || "");
        setStack(res.data.project.stack || "");
        setDeployed(res.data.project.deployed || "");
        setTechnologies(res.data.project.technologies || "");
        setGitRepoLink(res.data.project.gitRepoLink || "");
        setProjectLink(res.data.project.projectLink || "");
        setProjectBanner(
          res.data.project.projectBanner && res.data.project.projectBanner.url
        );
        setProjectBannerPreview(
          res.data.project.projectBanner && res.data.project.projectBanner.url
        );
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to load project");
      }
    };
    getProject();
  }, [id]);

  const descriptionList = description ? description.split(". ") : [];
  const technologiesList = technologies ? technologies.split(", ") : [];

  const navigateTo = useNavigate();
  const handleReturnToPortfolio = () => {
    navigateTo("/");
  };

  return (
    <>
      <div className="min-h-screen py-12 px-5 sm:px-8 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Button 
              onClick={handleReturnToPortfolio}
              variant="outline"
              className="rounded-full px-6 hover:scale-105 transition-transform">
              ← Back to Portfolio
            </Button>
          </div>
          
          <div className="space-y-8">
            {/* Project Banner */}
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute -inset-1 bg-orange-500 
                rounded-3xl blur-xl opacity-20 glow-orange"></div>
              <img
                src={projectBannerPreview || "/avatarHolder.jpg"}
                alt={title}
                className="relative w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Project Title */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                <span className="gradient-text">{title}</span>
              </h1>
            </div>
            
            {/* Project Details Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Description */}
              <div className="md:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 
                border border-border">
                <h2 className="text-2xl font-bold mb-4 text-orange-500">Description</h2>
                <ul className="space-y-2 text-muted-foreground">
                  {descriptionList.map((item, index) => (
                    item && <li key={index} className="flex gap-2">
                      <span className="text-orange-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Technologies */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border">
                <h2 className="text-xl font-bold mb-4 text-orange-500">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {technologiesList.map((item, index) => (
                    item && <span key={index} 
                      className="px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 
                        text-sm font-medium border border-orange-500/20">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Stack & Deployment */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border">
                <h2 className="text-xl font-bold mb-4 text-orange-500">Stack & Deployment</h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Stack:</p>
                    <p className="text-foreground font-medium">{stack}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Status:</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      deployed === "Yes" 
                        ? "bg-green-500/10 text-green-600 border border-green-500/20" 
                        : "bg-yellow-500/10 text-yellow-600 border border-yellow-500/20"
                    }`}>
                      {deployed === "Yes" ? "Live" : "In Development"}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Links */}
              {gitRepoLink && (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border">
                <h2 className="text-xl font-bold mb-4 text-orange-500">GitHub Repository</h2>
                  <Link
                    className="text-orange-500 hover:text-orange-600 font-medium break-all hover:underline"
                    target="_blank"
                    to={gitRepoLink}
                  >
                    {gitRepoLink}
                  </Link>
                </div>
              )}
              
              {projectLink && (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border">
                <h2 className="text-xl font-bold mb-4 text-orange-500">Live Project</h2>
                  <Link
                    className="text-orange-500 hover:text-orange-600 font-medium break-all hover:underline"
                    target="_blank"
                    to={projectLink}
                  >
                    {projectLink}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectView;
