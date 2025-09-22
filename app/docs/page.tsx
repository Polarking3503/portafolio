'use client'

import React from "react";
import {Card, CardBody, CardFooter, Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@heroui/react";

interface Project {
  title: string;
  img: string;
  price: string;
  description: string;
  technologies: string[];
}

export default function DocsPage() {
   const {isOpen, onOpen, onOpenChange} = useDisclosure();
   const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

   const list = [
    {
      title: "RMRY",
      img: "/images/equinos.jpeg",
      price: "WEB",
      description: "Sistema de gestión para crianza y registro de equinos. Incluye control genealógico, historial médico y seguimiento de competencias.",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "CSS"],

    },
    {
      title: "ExentoPlus",
      img: "/images/academy.jpeg",
      price: "WEB",
      description: "Sistema Integral Académico para gestión escolar completa: notas, asistencia, horarios y comunicación padres-profesores.",
      technologies: ["Laravel", "JavaScript", "Bootstrap", "PHP", "Blade", "MySQL"],

    },
    {
      title: "SIA",
      img: "/images/school.png",
      price: "WEB",
      description: "Sistema de gestión de estimulos y evaluaciones para los profesores.",
      technologies: ["Laravel", "Vue.js", "MySQL", "Bootstrap"],

    },
    {
      title: "Plataforma SaaS",
      img: "/images/saas.png",
      price: "WEB + IA",
      description: "Plataforma SaaS multi-tenant con IA integrada para automatización de procesos empresariales y análisis predictivo.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL", "WebSocket", "PostCSS", "NextAuth", "Integracion con WABA", "LLM", "Express.js"],

    },
    {
      title: "Brokers Financieros",
      img: "/images/brokers.png",
      price: "App Móvil",
      description: "Aplicación móvil para análisis financieros. Cotizaciones en tiempo real y alertas personalizadas.",
      technologies: ["React Native", "TypeScript", "Expo", "Redux", "Firebase", "Node.js", "Rest API"],

    },
    {
      title: "Bot de Finanzas",
      img: "/images/bot.jpg",
      price: "IA",
      description: "Bot inteligente para asesoramiento financiero personal, análisis de gastos y recomendaciones de inversión.",
      technologies: ["Node.js", "Express", "MySQL", "Axios", "LLM", "Rest API"],

    },
    {
      title: "Dashboard para Arrendamientos",
      img: "/images/dash_arrendamiento.png",
      price: "WEB",
      description: "Dashboard para gestión de arrendamientos: cotizaciones, precalificaciones, accionistas y reportes financieros.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL", "Rest API", "PostCSS", "NextAuth"],

    },
    {
      title: "Dashboard de Chatbot",
      img: "/images/bot-dash.webp",
      price: "WEB + IA",
      description: "Panel de control para gestión de chatbots con IA, análisis de conversaciones y optimización automática.",
      technologies: ["React", "Python", "FastAPI", "LLM", "WebSocket", "Tailwind CSS"],

    },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    onOpen();
  };
  return (
    <>
      <div>
        <h1 className="text-5xl mb-6">Proyectos Destacados</h1>
      </div>

      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card key={index} isPressable shadow="sm" onPress={() => handleProjectClick(item)}>
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[150px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>

    <Modal 
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      size="2xl"
      scrollBehavior="inside"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {selectedProject?.title}
              <span className="text-sm text-default-500 font-normal">
                {selectedProject?.price}
              </span>
            </ModalHeader>
            <ModalBody>
              <Image
                alt={selectedProject?.title}
                className="w-full object-cover max-h-80"
                radius="lg"
                src={selectedProject?.img}
              />
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2">Descripción</h4>
                <p className="text-default-700 mb-4">
                  {selectedProject?.description}
                </p>
                
                <h4 className="text-lg font-semibold mb-2">Tecnologías utilizadas</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject?.technologies?.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-default-100 text-default-700 rounded-small text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
    </>
  );
}
