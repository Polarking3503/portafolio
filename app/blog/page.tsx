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
          title="Full-Stack Developer"
          subtitle={
            <span className="text-xs text-default-500">
              Vulcanics • <strong>Remoto — San Luis Potosí, México</strong>
            </span>
          }
        >
          <div className="mt-2">
            <ul className="list-disc ps-5 space-y-3 text-small leading-relaxed text-default-600">
              <li>
                <span className="text-lg">Plataforma SaaS (Automatización de bots):</span> dashboard en Next.js + TypeScript con backend en TypeScript (Node.js)
                ; componentes reutilizables, listado de bots/usuarios y vistas de detalle.
              </li>
              <li>
                <span className="text-lg">Trabajo en equipo:</span> Refinamiento de historias, code reviews y pair programming.
              </li>
              <li>
                <span className="text-lg">Simulador de conversaciones:</span> Consola con WebSocket/Socket.io,
                asignación/toma de conversaciones (<em>human takeover</em>), asegurando sincronización en tiempo real y manejo óptimo de estado.
              </li>
              <li>
                <span className="text-lg">OCR y validaciones:</span> Extracción de documentos (estructurados y no),
                checklist dinámico según tipo de cliente (PF/PM) y flujos de onboarding/seguimiento.
              </li>
              <li>
                <span className="text-lg">Autenticación y seguridad:</span> JWT con expiración/renovación, hash de contraseñas <Code>Passlib</Code>,
                CORS para WebSockets y control de roles.
              </li>
              <li>
                <span className="text-lg">Reportes:</span> Generación de PDF/Word (docx) con datos de bots y clientes.
              </li>
              <li>
                <span className="text-lg">Cálculo financiero:</span> Tasas y reglas de arrendamiento movidas a base de datos para gestión dinámica;
                uso en cotizador y respuestas del bot (residuales, plazos, etc.).
              </li>
              <li>
                <span className="text-lg">Integraciones externas:</span> Consumo de APIs (p. ej. consultas a buró de Mexico y Listas Negras),
                almacenamiento de respuestas en BD <Code>buro.Response</Code>, detección de riesgo y cumplimiento para empresas y usuarios <Code>blacklist.Response</Code>
                y manejo de archivos en <Code>Bases de Datos</Code>.
              </li>
              <li>
                <span className="text-lg">Apps móviles:</span> Implementación de módulos nuevos e integración de funcionalidades, con React Native y Expo, consumiendo REST APIs.
              </li>
              <li>
                <span className="text-lg">Empresa automotriz global — Gestión de vacaciones: </span>
                Migración de un proceso sindical en papel a plataforma web con roles de
                <em>empleado</em>, <em>jefe de área</em> y <em>administrador</em>, con flujo de solicitud/aprobación
                y panel de seguimiento.
              </li>

              <li>
                <span className="text-lg">Gestión de producto & stakeholders: </span>
                Levantamiento de requerimientos con clientes, redacción de historias de usuario
                (con criterios de aceptación), priorización conjunta y seguimiento continuo;
                planificación de hitos y entregables mediante cronogramas/Gantt.
              </li>

              <li>
                <span className="text-lg">DevOps/Despliegue:</span> Servidores Ubuntu con <Code>Nginx</Code>, <Code>PM2</Code> y alta disponibilidad, variables de entorno seguras
                y observabilidad básica mediante logs.
              </li>
            </ul>

            <div className="mt-3 text-sm text-default-400">
              Stack: React, Next.js, TypeScript, Tailwind, Node.js (Express), JavaScript, Python, FastAPI, Socket.io, JWT, Docx/PDF.
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          key="2"
          aria-label="Desarrollador Frontend"
          title="Desarrollador Frontend"
          subtitle={
            <span className="text-xs text-default-500">
              Freelancer • <strong>Autlán de Navarro, Jalisco</strong>
            </span>
          }
        >
          <div className="mt-2">
            <ul className="list-disc ps-5 space-y-3 text-small leading-relaxed text-default-600">
              <li>
                <span className="text-lg">PROESDE:</span> plataforma para evaluación del desempeño docente.
                Garantiza estímulos correctos al subir evidencias. <strong>200+ usuarios</strong>.
              </li>
              <li>
                <span className="text-lg">RMRY (equinos):</span> digitalicé procesos que eran en papel, con
                notificaciones de eventos en ciclo de vida y reportes detallados. <strong>100 usuarios</strong>.
              </li>
              <li>
                <span className="text-lg">ExentoPlus:</span> alertas tempranas para reducir reprobación, nuevos roles,
                filtros de admin y sincronización alumnos–clases–horarios. <strong>1,000+ usuarios</strong>.
              </li>
              <li>
                <span className="text-lg">Sistema de Horas Prácticas:</span> registro de entradas/salidas para evitar fraudes,
                hoy con <strong>400+ usuarios</strong> en el CU Costa Sur (UdeG), con control más riguroso y transparente.
              </li>
              <li>
                <span className="text-lg">Apptlan (web):</span> sitio orientado a promoción de servicios y chatbots, optimizado para SEO;
                +<strong>20%</strong> de tráfico orgánico en 3 meses.
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
