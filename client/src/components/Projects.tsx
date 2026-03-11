import { motion } from "framer-motion";
import { ExternalLink, Github, Brain, Mic, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Ritmolabs.co: Content Automation Platform",
      description: "Multi-tenant pipeline that scrapes YouTube videos, uses LLMs to select clips, and automates editing—cropping, speaker-tracking, Whisper captions, and effects—then schedules uploads to TikTok via API. Includes a social listening system with parallel multi-platform collectors, AI trend analysis with sentiment scoring, and real-time WebSocket alerts.",
      tech: ["FastAPI", "FFmpeg", "OpenAI", "Whisper", "WebSocket"],
      period: "Jan 2026 -- Present",
      links: {
        demo: "https://ritmolabs.co",
        github: "#"
      },
      icon: <Video className="w-8 h-8 text-white" />,
      color: "bg-rose-500"
    },
    {
      title: "Cognos AI Platform",
      description: "On-premise AI web application for local LLM deployment. Features document verification with claim decomposition, RAG-based fact-checking, and confidence-scored citations. Integrates with OpenAI, Ollama, and Perplexity API.",
      tech: ["React", "LLMs", "RAG", "Docker"],
      period: "May 2025 -- Dec 2025",
      links: {
        demo: "https://cognos.me",
        github: "#"
      },
      icon: <Brain className="w-8 h-8 text-white" />,
      color: "bg-orange-500"
    },
    {
      title: "Neuro Necklace: Local Memory Store",
      description: "Built a voice-first memory pipeline for the Limitless Pendant: local transcription, speaker diarization, and conversation summarization without cloud dependencies. Uses Whisper-based transcription with Pyannote voice ID and MCP integration.",
      tech: ["Whisper", "VAD", "Ollama", "MCP", "Python"],
      period: "Jun 2024 -- Apr 2025",
      links: {
        demo: "#",
        github: "#"
      },
      icon: <Mic className="w-8 h-8 text-white" />,
      color: "bg-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30 relative overflow-hidden">
       {/* Decorative Blob */}
       <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">Personal Projects</h2>
          <p className="text-gray-600 max-w-2xl text-lg">
            Building tools for privacy-first AI and local processing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full whimsical-card border-none overflow-hidden group">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl ${project.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-black/5" asChild>
                        <a href={project.links.github} target="_blank" rel="noreferrer">
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-black/5" asChild>
                        <a href={project.links.demo} target="_blank" rel="noreferrer">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{project.title}</CardTitle>
                  <p className="text-sm text-gray-500 font-mono">{project.period}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="bg-white/50 hover:bg-white text-gray-700 border border-gray-100">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}