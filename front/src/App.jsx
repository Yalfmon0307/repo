function App() {
  return (
  <div className="min-h-screen bg-gray-950 text-gray-100 font-sans px-4 py-8 md:px-16 md:py-12">
      {/* Inicio / Presentación */}
  <section id="inicio" className="mb-20">
  <div className="flex items-center justify-between mb-4">
  <h1 className="text-4xl font-bold text-cyan-400">Yalfred Montes 🧑‍💻</h1>
    <div className="flex gap-4">
      <a href="https://wa.me/50581022202" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="hover:scale-110 transition">
        <img src="icons/whatsapp.svg" alt="WhatsApp" className="w-8 h-8 text-cyan-400" style={{ filter: 'invert(52%) sepia(99%) saturate(747%) hue-rotate(140deg) brightness(97%) contrast(101%)' }} />
      </a>
      <a href="mailto:montesyalfred0@gmail.com" target="_blank" rel="noopener noreferrer" title="Gmail" className="hover:scale-110 transition">
        <img src="icons/mail.svg" alt="Gmail" className="w-8 h-8 text-cyan-400" style={{ filter: 'invert(52%) sepia(99%) saturate(747%) hue-rotate(140deg) brightness(97%) contrast(101%)' }} />
      </a>
      <a href="https://github.com/Yalfmon0307" target="_blank" rel="noopener noreferrer" title="GitHub" className="hover:scale-110 transition">
        <img src="icons/github.svg" alt="GitHub" className="w-8 h-8 text-cyan-400" style={{ filter: 'invert(52%) sepia(99%) saturate(747%) hue-rotate(140deg) brightness(97%) contrast(101%)' }} />
      </a>
    </div>
  </div>
  <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-800 p-6 rounded-lg shadow-lg mb-12">
          <img
            src="perfil.jpg"
            alt="Foto de perfil de Yalfred Montes"
            className="w-32 h-32 rounded-full object-cover border-4 border-cyan-500 shadow"
          />
          <p className="text-lg md:text-xl text-gray-300">
            Desarrollador web con experiencia en React, Node.js, PostgreSQL y ciberseguridad. Creando proyectos que incluyen automatización de procesos, la gestión de VPS y el despliegue en Linux. Con mucha curiosidad intelectual y tecnológica, aprendizaje continuo y capacidad para resolver problemas complejos. Buscando crear soluciones eficientes y seguras, integrando las mejores practicas y tecnologías. 
          </p>
        </div>
      </section>
      {/* Proyectos */}
  <section id="proyectos" className="mb-20">
  <h2 className="text-2xl font-semibold mb-4 mt-12 text-cyan-300 text-center">Proyectos</h2>
  <div className="grid gap-6 md:grid-cols-3">
          {/* Proyecto Carnes */}
          <article>
            <h3 className="text-xl font-bold mb-2 text-teal-200">Programa de registro de Operaciones para una Carniceria</h3>
            <div className="w-full aspect-video overflow-hidden flex items-center justify-center bg-gray-900 rounded mb-2">
              <img src="carnes.png" alt="Proyecto Carnes" className="object-cover w-full h-full" />
            </div>
            <p className="mb-2">Contiene apartados para registrar movimientos y ventas, todo vinculado con el área de caja. El proyecto fue creado con React, Node.js y PostgreSQL como base de datos.</p>
            <div className="flex justify-center">
              <a href="https://yal99.com/carniceria/" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 rounded bg-cyan-700 text-cyan-100 font-semibold shadow hover:bg-cyan-600 transition">Visitar proyecto</a>
            </div>
          </article>
          {/* Proyecto Rentacar */}
          <article>
            <h3 className="text-xl font-bold mb-2 text-teal-200">Programa de alquiler de vehículos</h3>
            <div className="w-full aspect-video overflow-hidden flex items-center justify-center bg-gray-900 rounded mb-2">
              <img src="rentacar.png" alt="Proyecto Rentacar" className="object-cover w-full h-full" />
            </div>
            <p className="mb-2">Aplicación para automatizar el proceso de alquiler de vehículos, donde se puede seleccionar el vehículo y los días que se desea alquilar para hacer la reserva mediante WhatsApp.</p>
            <div className="flex justify-center">
              <a href="https://yal99.com/rentacar/" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 rounded bg-cyan-700 text-cyan-100 font-semibold shadow hover:bg-cyan-600 transition">Visitar proyecto</a>
            </div>
          </article>
          {/* Proyecto Shortlinks */}
          <article>
            <h3 className="text-xl font-bold mb-2 text-teal-200">Programa de acortamiento de enlaces</h3>
            <div className="w-full aspect-video overflow-hidden flex items-center justify-center bg-gray-900 rounded mb-2">
              <img src="shortlinks.png" alt="Proyecto Shortlinks" className="object-cover w-full h-full" />
            </div>
            <p className="mb-2">Permite acortar enlaces largos y compartirlos fácilmente. Incluye un sistema de seguimiento de clics y direcciones IP de los visitantes, además de autenticación de usuarios.</p>
            <div className="flex justify-center">
              <a href="https://yal99.com/shortlinks/" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 rounded bg-cyan-700 text-cyan-100 font-semibold shadow hover:bg-cyan-600 transition">Visitar proyecto</a>
            </div>
          </article>
        </div>
      </section>
      {/* Habilidades */}
  <section id="habilidades" className="mb-20">
  <h2 className="text-2xl font-semibold mb-8 text-indigo-400 text-center">Tecnologías</h2>
  <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-12">
          <li className="bg-gray-800 rounded px-3 py-1 text-indigo-200">React</li>
          <li className="bg-gray-800 rounded px-3 py-1 text-indigo-200">JavaScript</li>
          <li className="bg-gray-800 rounded px-3 py-1 text-indigo-200">CSS</li>
          <li className="bg-gray-800 rounded px-3 py-1 text-indigo-200">Node.js</li>
          <li className="bg-gray-800 rounded px-3 py-1 text-indigo-200">PostgreSQL</li>
          <li className="bg-gray-800 rounded px-3 py-1 text-indigo-200">Ciberseguridad</li>
          <li className="bg-gray-800 rounded px-3 py-1 text-indigo-200">Manejo de VPS</li>
          <li className="bg-gray-800 rounded px-3 py-1 text-indigo-200">Linux</li>
          <li className="bg-gray-800 rounded px-3 py-1 text-indigo-200">TailwindCSS</li>
          <li className="bg-gray-800 rounded px-3 py-1 text-indigo-200">Autenticación de usuarios con JWT</li>
        </ul>
      </section>
      {/* Habilidades blandas */}
  <section id="habilidades-blandas" className="mb-20">
  <h2 className="text-2xl font-semibold mb-8 text-indigo-400 text-center">Habilidades blandas</h2>
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-12">
          <li className="bg-gray-800 rounded px-3 py-1 text-indigo-200">Comunicación y oratoria: habilidad para transmitir ideas técnicas de forma clara y persuasiva en equipos multidisciplinarios.</li>
          <li className="bg-gray-800 rounded px-3 py-1 text-indigo-200">Aprendizaje continuo: capacidad para adaptarse rápidamente a nuevas tecnologías y metodologías en entornos cambiantes.</li>
          <li className="bg-gray-800 rounded px-3 py-1 text-indigo-200">Resolución de problemas: enfoque creativo y analítico para superar obstáculos y encontrar soluciones eficientes.</li>
          <li className="bg-gray-800 rounded px-3 py-1 text-indigo-200">Curiosidad intelectual y tecnológica: capacidad para investigar, aprender y explorar nuevas herramientas, lenguajes o soluciones por iniciativa propia.</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
