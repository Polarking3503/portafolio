'use client';

import { Button, Card, CardBody, Chip } from "@heroui/react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";

export default function ContactPage() {
  const handleEmailClick = () => {
    window.location.href = "mailto:reynaga_45@icloud.com?subject=Contacto desde Portafolio&body=Hola Luis Jorge,%0D%0A%0D%0AMe gustaría contactarte sobre...";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/luis-jorge-reynaga-56b257235/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/Polarking3503", "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <div className="mb-6">
          <Chip size="lg" color="primary" variant="shadow" className="text-xl font-bold px-8 py-3">
            📧 Contacto
          </Chip>
        </div>
        <h1 className="text-6xl leading-20 font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          ¡Hablemos!
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          ¿Tienes un proyecto en mente? ¿Quieres colaborar? ¡Me encantaría escuchar de ti!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Email Card */}
        <Card className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500/50">
          <CardBody className="flex flex-col items-center justify-center p-8 text-center">
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400 mb-4">reynaga_45@icloud.com</p>
            <Button 
              color="primary" 
              variant="flat"
              onClick={handleEmailClick}
              className="w-full"
            >
              Enviar Email
            </Button>
          </CardBody>
        </Card>

        {/* LinkedIn Card */}
        <Card className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500/50">
          <CardBody className="flex flex-col items-center justify-center p-8 text-center">
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-full p-4 mb-4">
              <LinkedinIcon className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-400 mb-4">Conectemos profesionalmente</p>
            <Button 
              color="primary" 
              variant="flat"
              onClick={handleLinkedInClick}
              className="w-full"
            >
              Ver Perfil
            </Button>
          </CardBody>
        </Card>

        {/* GitHub Card */}
        <Card className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500/50">
          <CardBody className="flex flex-col items-center justify-center p-8 text-center">
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-full p-4 mb-4">
              <GithubIcon className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
            <p className="text-gray-400 mb-4">Revisa mis proyectos</p>
            <Button 
              color="primary" 
              variant="flat"
              onClick={handleGitHubClick}
              className="w-full"
            >
              Ver Código
            </Button>
          </CardBody>
        </Card>
      </div>

      {/* Main CTA */}
      <div className="text-center">
        <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30">
          <CardBody className="p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales.
            </p>
            <Button 
              color="primary" 
              size="lg"
              onClick={handleEmailClick}
              className="text-lg px-8 py-3"
            >
              📧 Enviar un Email
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}