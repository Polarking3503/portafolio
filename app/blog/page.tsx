'use client';

import { Accordion, AccordionItem } from "@heroui/react";
import { Code } from "@heroui/code";

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-5xl mb-6">Experiencia Laboral</h1>
      <Accordion defaultExpandedKeys={["1"]}>
        <AccordionItem
          key="1"
          aria-label="Full-Stack Developer"
          title="Full-Stack Developer (11/2024 - 09/2025)"
          subtitle={
            <span className="text-md text-default-500">
              Vulcanics • <strong>Remoto — San Luis Potosí, México</strong>
            </span>
          }
        >
          <div className="mt-2">
            <ul className="list-disc ps-5 space-y-3 text-small leading-relaxed text-default-600">
              <li>
                <span 
                  className="text-xl">
                  Plataforma SaaS (Automatización de bots): dashboard en Next.js + TypeScript con backend en TypeScript (Node.js)
                  ; componentes reutilizables, listado de bots/usuarios y vistas de detalle.
                </span>
              </li>
              <li>
                <span 
                  className="text-xl">
                  Trabajo en equipo: Refinamiento de historias, code reviews y pair programming.
                </span>
              </li>
              <li>
                <span 
                  className="text-xl">
                  Simulador de conversaciones: Consola con WebSocket/Socket.io,
                  asignación/toma de conversaciones (<em>human takeover</em>), asegurando sincronización en tiempo real y manejo óptimo de estado.
                </span>
              </li>
              <li>
                <span 
                  className="text-xl">
                  OCR y validaciones: Extracción de documentos (estructurados y no),
                  checklist dinámico según tipo de cliente (PF/PM) y flujos de onboarding/seguimiento.
                </span>
              </li>
              <li>
                <span 
                  className="text-xl">
                  Autenticación y seguridad: JWT con expiración/renovación, hash de contraseñas <Code>Passlib</Code>,
                  CORS para WebSockets y control de roles.
                </span>
              </li>
              <li>
                <span 
                  className="text-xl">
                  Reportes: Generación de PDF/Word (docx) con datos de bots y clientes.
                </span>
              </li>
              <li>
                <span 
                  className="text-xl">
                  Cálculo financiero: Tasas y reglas de arrendamiento movidas a base de datos para gestión dinámica;
                  uso en cotizador y respuestas del bot (residuales, plazos, etc.).
                </span>
              </li>
              <li>
                <span 
                  className="text-xl">
                  Integraciones externas: Consumo de APIs (p. ej. consultas a buró de Mexico y Listas Negras),
                  almacenamiento de respuestas en BD <Code>buro.Response</Code>, detección de riesgo y cumplimiento para empresas y usuarios <Code>blacklist.Response</Code>
                  y manejo de archivos en <Code>Bases de Datos</Code>.
                </span>
              </li>
              <li>
                <span 
                  className="text-xl">
                  Apps móviles: Implementación de módulos nuevos e integración de funcionalidades, con React Native y Expo, consumiendo REST APIs.
                </span>
              </li>
              <li>
                <span 
                  className="text-xl">
                  Empresa automotriz global — Gestión de vacaciones: 
                  Migración de un proceso sindical en papel a plataforma web con roles de
                  <em>empleado</em>, <em>jefe de área</em> y <em>administrador</em>, con flujo de solicitud/aprobación
                  y panel de seguimiento.
                </span>
              </li>

              <li>
                <span 
                  className="text-xl">
                  Gestión de producto & stakeholders: 
                  Levantamiento de requerimientos con clientes, redacción de historias de usuario
                  (con criterios de aceptación), priorización conjunta y seguimiento continuo;
                  planificación de hitos y entregables mediante cronogramas/Gantt.
                </span>
              </li>

              <li>
                <span 
                  className="text-xl">
                  DevOps/Despliegue: Servidores Ubuntu con <Code>Nginx</Code>, <Code>PM2</Code> y alta disponibilidad, variables de entorno seguras
                  y observabilidad básica mediante logs.
                </span>
              </li>
            </ul>

            <div className="mt-3 text-sm text-default-400">
              Stack: React, Next.js, TypeScript, Tailwind, Node.js (Express), JavaScript, Python, FastAPI, Socket.io, JWT, Docx/PDF.
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          key="2"
          aria-label="Full-Stack Developer"
          title="Full-Stack Developer (08/2020 - 11/2024)"
          subtitle={
            <span className="text-md text-default-500">
              Freelancer • <strong>Autlán de Navarro, Jalisco</strong>
            </span>
          }
        >
          <div className="mt-2">
            <ul className="list-disc ps-5 space-y-3 text-small leading-relaxed text-default-600">
              <li>
                <span 
                  className="text-xl">
                  PROESDE: plataforma para evaluación del desempeño docente.
                  Garantiza estímulos correctos al subir evidencias. <strong>200+ usuarios</strong>.
                </span>
              </li>
              <li>
                <span 
                  className="text-xl">
                  RMRY (equinos): digitalicé procesos que eran en papel, con
                  notificaciones de eventos en ciclo de vida y reportes detallados. <strong>100 usuarios</strong>.
                </span>
              </li>
              <li>
                <span 
                  className="text-xl">
                  ExentoPlus: alertas tempranas para reducir reprobación, nuevos roles,
                  filtros de admin y sincronización alumnos–clases–horarios. <strong>1,000+ usuarios</strong>.
                </span>
              </li>
              <li>
                <span 
                  className="text-xl">
                  Sistema de Horas Prácticas: registro de entradas/salidas para evitar fraudes,
                  hoy con <strong>400+ usuarios</strong> en el CU Costa Sur (UdeG), con control más riguroso y transparente.
                </span>
              </li>
              <li>
                <span 
                  className="text-xl">
                  Apptlan (web): sitio orientado a promoción de servicios y chatbots, optimizado para SEO;
                  +<strong>20%</strong> de tráfico orgánico en 3 meses.
                </span>
              </li>
            </ul>
            <div className="mt-3 text-sm text-default-400">
              Stack: Laravel, PHP, Bootstrap, Tailwind, MySQL, JS, HTML y CSS.
            </div>
          </div>
        </AccordionItem>

      </Accordion>
    </div>
  );
}
