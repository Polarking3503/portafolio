'use client';

import {Card, CardBody, Image, Chip, Divider} from "@heroui/react";

const TechCategory = ({ title, technologies, color }: { 
  title: string; 
  technologies: Array<{ name: string; logo: string; description?: string }>;
  color: "primary" | "secondary" | "success" | "warning" | "danger" | "default";
}) => (
  <div className="mb-12">
    <div className="flex items-center justify-center mb-6">
      <Chip size="lg" color={color} variant="flat" className="text-lg font-semibold px-6 py-2">
        {title}
      </Chip>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {technologies.map((tech, index) => (
        <Card 
          key={index} 
          className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-gray-600"
          isPressable
        >
          <CardBody className="flex flex-col items-center justify-center p-4 min-h-[120px]">
            <div className="bg-gray-800 border border-gray-600 rounded-full p-3 mb-3 shadow-lg">
              <Image
                src={tech.logo}
                alt={tech.name}
                className="w-10 h-10 object-contain"
                fallbackSrc="/images/github.png"
              />
            </div>
            <h3 className="text-sm font-semibold text-center text-white">
              {tech.name}
            </h3>
            {tech.description && (
              <p className="text-xs text-gray-400 text-center mt-1">
                {tech.description}
              </p>
            )}
          </CardBody>
        </Card>
      ))}
    </div>
    <Divider className="mt-8" />
  </div>
);

export default function PricingPage() {
  const languages = [
    { name: "JavaScript", logo: "/images/js-logo.png", description: "ES6+" },
    { name: "TypeScript", logo: "/images/TypeScript.png", description: "Typed JS" },
    { name: "Python", logo: "/images/python-logo.png", description: "3.8+" },
    { name: "PHP", logo: "/images/php-logo.png", description: "8.x" },
  ];

  const frameworks = [
    { name: "React", logo: "/images/react-logo.png", description: "18.x" },
    { name: "Next.js", logo: "/images/Next.jpg", description: "Full Stack" },
    { name: "Laravel", logo: "/images/laravel-logo.png", description: "PHP Framework" },
    { name: "Bootstrap", logo: "/images/bootstrap-logo.png", description: "CSS Framework" },
    { name: "Tailwind CSS", logo: "/images/tailwind-logo.png", description: "Utility First" },
    { name: "Expo GO", logo: "/images/expogo.png", description: "Sandbox"}
  ];

  const backend = [
    { name: "Node.js", logo: "/images/Node.png", description: "Runtime" },
  ];

  const databases = [
    { name: "MySQL", logo: "/images/mysql-logo.png", description: "Relational DB" },
    { name: "MariaDB", logo: "/images/mariadb-logo.png", description: "MySQL Fork" },
  ];

  const llms = [
    { name: "OpenAI", logo: "/images/openai.png", description: "GPT Models" },
    { name: "AutoGen", logo: "/images/Autogen.png", description: "Multi-Agent" },
    { name: "LangGraph", logo: "/images/langgraph.png", description: "Agent Framework" },
  ];

  const tools = [
    { name: "Firebase", logo: "/images/firebase.png", description: "BaaS Platform" },
    { name: "GitHub", logo: "/images/github.png", description: "Version Control" },
    { name: "Postman", logo: "/images/postman.webp", description: "API Testing" },
    { name: "Figma", logo: "/images/figma.webp", description: "Design Tool" }
  ];

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="text-center mb-16">
        <div className="mb-6">
          <Chip size="lg" color="primary" variant="shadow" className="text-xl font-bold px-8 py-3">
            ⚡ Habilidades Técnicas
          </Chip>
        </div>
        <h1 className="text-6xl leading-20 font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Stack Tecnológico
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Estas son las tecnologías y herramientas con las que desarrollo soluciones modernas y escalables
        </p>
        <Divider className="mt-8 max-w-xs mx-auto bg-gray-700" />
      </div>

      <div className="max-w-6xl mx-auto">
        <TechCategory title="Lenguajes de Programación" technologies={languages} color="primary" />
        <TechCategory title="Frameworks y Librerías" technologies={frameworks} color="secondary" />
        <TechCategory title="Backend/Runtime" technologies={backend} color="success" />
        <TechCategory title="Base de Datos" technologies={databases} color="warning" />
        <TechCategory title="IA y LLMs" technologies={llms} color="danger" />
        <TechCategory title="Herramientas" technologies={tools} color="default" />
      </div>
    </div>
  );
}
