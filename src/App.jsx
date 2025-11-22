import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Section, FeatureGrid, Timeline } from './components/Sections'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />

        <Section id="que-es" title="¿Qué es el Mundialito?">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-lg">
              <p>El Mundialito es el torneo infantil más emocionante del país, diseñado para niños y niñas que aman el fútbol.</p>
              <p>Une formación deportiva, visorías profesionales y experiencias únicas para miles de familias.</p>
              <p>Su misión es impulsar el talento, fortalecer valores y abrir oportunidades reales a jóvenes futbolistas.</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-[4/3] rounded-xl bg-[url('https://images.unsplash.com/photo-1543322748-33df6d3db806?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              ))}
            </div>
          </div>
        </Section>

        <Section id="herencia" title="Del Juego de Pelota al fútbol moderno" tone="beige">
          <div className="max-w-3xl space-y-4">
            <p>Nuestros ancestros mayas entendían que el balón representa la vida, la unión del pueblo y el honor de la competencia justa.</p>
            <p>Más de mil años después, esa esencia sigue viva.</p>
            <p>El Mundialito honra esta herencia milenaria, conectando el pasado con la pasión deportiva de los niños de hoy.</p>
          </div>
        </Section>

        <Section id="como-funciona" title="¿Cómo funciona el Mundialito?">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ul className="space-y-3 text-lg list-disc pl-6">
              <li>Torneo estatal y nacional para niños de 12 a 14 años.</li>
              <li>Inscripciones abiertas para escuelas, clubes, academias y equipos independientes.</li>
              <li>Todos los participantes reciben una playera oficial del evento.</li>
              <li>Cientos de visorías realizadas por exfutbolistas, entrenadores y scouts profesionales.</li>
            </ul>
            <div className="grid grid-cols-2 gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-emerald-600/20 to-red-600/20" />
              ))}
            </div>
          </div>
        </Section>

        <Section id="beneficios" title="Un proyecto con causa">
          <FeatureGrid
            items={[
              { icon: '🛡️', title: 'Prevención y bienestar', text: 'Alternativas reales contra drogas, violencia, pandillas y conductas de riesgo.' },
              { icon: '⚽', title: 'Formación deportiva', text: 'Detección de talentos y vinculación con academias certificadas.' },
              { icon: '👨‍👩‍👧‍👦', title: 'Tejido social', text: 'Fortalece la convivencia familiar y la participación comunitaria.' },
              { icon: '🌟', title: 'Desarrollo personal', text: 'Fomenta disciplina, trabajo en equipo, resiliencia y valores.' },
            ]}
          />
        </Section>

        <Section id="visorias" title="Visorías profesionales para todos" tone="dark">
          <div className="max-w-3xl space-y-4 text-emerald-50">
            <p>Cada niño inscrito en el Mundialito es visto por visores profesionales.</p>
            <p>Estos visores pertenecen a clubes profesionales, entrenadores certificados y exjugadores.</p>
            <p>Seleccionamos a los mejores talentos para integrarlos a academias y equipos formativos.</p>
            <p>Los jugadores destacados pueden incorporarse a nuestro sistema deportivo dentro de la Federación Mexicana de Fútbol.</p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-600 text-white font-semibold">Oportunidad real para llegar a equipos de Tercera División</div>
          </div>
        </Section>

        <Section id="quien-participa" title="¿Quién puede participar?">
          <ul className="space-y-2 text-lg list-disc pl-6">
            <li>Equipos de 12 a 16 jugadores.</li>
            <li>Escuelas, clubes, academias, ligas municipales o equipos independientes.</li>
            <li>Categoría 12–14 años.</li>
            <li>Participación mixta permitida (niños y niñas).</li>
          </ul>
        </Section>

        <Section id="fases" title="Etapas del torneo" tone="beige">
          <Timeline
            steps={[
              '1) Registro de equipos + entrega de playeras',
              '2) Visorías municipales en 4 sedes por estado',
              '3) Fase estatal final con 48 equipos clasificados',
              '4) La gran final nacional',
            ]}
          />
        </Section>

        <Section id="premios" title="Premios de clase mundial">
          <ul className="space-y-2 text-lg list-disc pl-6">
            <li>Viaje internacional para el equipo campeón (18 personas)</li>
            <li>Partidos amistosos contra academias de élite en España</li>
            <li>Experiencias en clubes como Real Madrid, Atlético de Madrid y más</li>
            <li>Entrega de trofeos y medallas oficiales</li>
          </ul>
          <div className="mt-8 aspect-[3/1] rounded-2xl bg-[url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop')] bg-center bg-cover" />
        </Section>

        <Section id="por-que-importa" title="¿Por qué el Mundialito es tan importante?" tone="dark">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-emerald-50">
              <p>Porque transforma vidas a través del deporte.</p>
              <p>Porque crea oportunidades reales para niños de todos los contextos.</p>
              <p>Porque impulsa valores que forman ciudadanos fuertes y preparados.</p>
              <p>Porque deja un legado deportivo en cada estado donde se realiza.</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <p className="text-emerald-100">Aliados del proyecto: espacio para logos de gobierno, patrocinadores, marcas deportivas y clubes aliados.</p>
            </div>
          </div>
        </Section>

        <Section id="faq" title="Preguntas frecuentes">
          <FAQ
            items={[
              '¿Cuánto cuesta inscribirse?',
              '¿Qué incluye la inscripción?',
              '¿Qué pasa si mi hijo no tiene equipo?',
              '¿Cómo funcionan las visorías?',
              '¿Cómo se eligen las sedes?',
              '¿Cuándo se anuncian los finalistas?',
            ]}
          />
        </Section>

        <Section id="registro" tone="beige">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-6">¡Registra a tu equipo ahora!</h3>
            <p className="text-lg mb-6">El balón sigue rodando. La historia continúa.</p>
            <a href="/registro" className="inline-flex items-center rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-600/30 hover:bg-red-700 transition">
              Iniciar Registro
            </a>
          </div>
        </Section>
      </main>

      <footer className="py-8 bg-black text-white text-center text-sm">
        © {new Date().getFullYear()} Mundialito. Todos los derechos reservados.
      </footer>
    </div>
  )
}

export default App
