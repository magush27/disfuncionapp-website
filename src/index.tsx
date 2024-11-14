import React from "react";
import CalendarIcon from "./assets/calendar_disfunction_img.png";
import TasksIcon from "./assets/tasks_disfunction_img.png";
import TimerIcon from "./assets/timer_disfunction_img.png";
import NoteIcon from "./assets/note_disfunction_img.png";
import DownloadIcon from "./assets/download_icon.svg";
import AppPreview from "./assets/app_preview_img.png";
import InstruccionesMobil from "./assets/instrucciones-mobil.png";
import InstruccionesDeskop from "./assets/intrucciones-desktop.png";
import ReactDOM from 'react-dom/client';
import '@fontsource/poppins';
import './index.css';
import Header from "./Header";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white font-['Poppins']">
      <Header />
      <main className="container mx-auto px-4">
        <section className="py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold mb-6">
              Perfeccioná el arte de la procrastinación
            </h2>
            <p className="text-xl mb-8">
              Finalmente, una aplicación que te ayuda a perder el tiempo de un modo efectivo nunca antes visto.
            </p>
            <a
              href="https://github.com/magush27/DisfunctionApp/releases/download/v1.0.2/DisfuncionApp.apk"
              download
              className="inline-flex items-center px-6 py-3 bg-[#39FF14] text-black rounded-full font-semibold hover:bg-opacity-90"
            >
              <img src={DownloadIcon} className="mr-2 w-5" alt="Download icon" />
              Descargar
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src={AppPreview}
              alt="App Preview"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </section>

        <section id="how-to-install" className="">
            <img src={InstruccionesDeskop} alt="APK Installation Instructions for Desktop" className="hidden lg:block" />
            <img src={InstruccionesMobil} alt="APK Installation Instructions for Mobile" className="block lg:hidden" />
          </section>

        <section id="features" className="py-20 relative">
          <h2 className="text-4xl font-bold text-center mb-16">
            Funcionalidades
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-zinc-900 p-8 rounded-xl">
              <img
                src={CalendarIcon}
                className="w-24 h-24 mb-4 mx-auto"
                alt="Calendar icon"
              />
              <h3 className="text-xl font-bold mb-4">Calendario</h3>
              <p>Agendá todos tus eventos de la manera más imprecisa posible. Te sorprenderá la fecha y hora de las actividades que guardes.</p>
              {/* <video
                className="w-full mt-4 rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smart-phone-4925-large.mp4"
                  type="video/mp4"
                />
              </video> */}
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <img
                src={TasksIcon}
                className="w-24 h-24 mb-4 mx-auto"
                alt="Tasks icon"
              />
              <h3 className="text-xl font-bold mb-4">Tareas</h3>
              <p>
              Anotá tus tareas. Ésta aplicación te garantiza que tus listas de tareas sean cambiadas por letras de canciones que hablan acerca del tiempo para que nunca sepas qué tenés que hacer pero sí qué frases recordar en cada momento y cuál es su prioridad.
              </p>
              {/* <img
                src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80"
                alt="Speed Feature"
                className="w-full mt-4 rounded-lg"
              /> */}
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <img
                src={NoteIcon}
                className="w-24 h-24 mb-4 mx-auto"
                alt="Note icon"
              />
              <h3 className="text-xl font-bold mb-4">Notas</h3>
              <p>Toma nota de todo lo que quieras. Desde canciones hasta la lista del supermercado. Con ésta maravillosa funcionalidad podrás ver todo lo que escribiste con las palabras desordenadas y olvidar mejor tus pensamientos. También podrás guardar tus notas en carpetas y ordenarlas como prefieras.</p>
              {/* <video
                className="w-full mt-4 rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-lock-that-closes-and-opens-13098-large.mp4"
                  type="video/mp4"
                />
              </video> */}
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl">
              <img
                src={TimerIcon}
                className="w-24 h-24 mb-4 mx-auto"
                alt="Note icon"
              />
              <h3 className="text-xl font-bold mb-4">Temporizador</h3>
              <p>Medir el tiempo nunca fue más difícil. Con ésta funcionalidad podrás tomar el tiempo como si tuvieras un reloj de arena aleatorio en la palma de la mano y podrás dejarte llevar por la duración que te propongan las arenas de la incertidumbre.</p>
              {/* <video
                className="w-full mt-4 rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-lock-that-closes-and-opens-13098-large.mp4"
                  type="video/mp4"
                />
              </video> */}
            </div>
          </div>
        </section>

        <section id="download" className="py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Experiencia 100% disfuncional</h2>
          <p className="text-xl mb-8">
            Únete a millones de personas improductivas y desorganizadas hoy
          </p>
          <a
            href="https://github.com/magush27/DisfunctionApp/releases/download/v1.0.2/DisfuncionApp.apk"
            download
            className="inline-flex items-center px-8 py-4 bg-[#39FF14] text-black rounded-full font-semibold text-lg hover:bg-opacity-90"
          >
            <img src={DownloadIcon} alt="Download Icon" className="mr-2 w-5" />
            Descargar
          </a>
        </section>
      </main>

      <footer className="w-full px-4 py-6 border-t border-zinc-800">
    
        <div className="container mx-auto text-center">
        <a className="underline github-link" href="https://github.com/magush27/DisfunctionApp">GitHub</a>
          <p>&copy; 2024 DisfuncionApp. Agus Las Peñas.</p>
        </div>
      </footer>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
