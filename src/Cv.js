import "./Cv.css";
import { useState } from "react";
let idiomes = ["CAT", "ES", "EN", "FR", "RU", "DE", "IT", "PT", "ZH"];
let titolsH1 = [
  {
    CAT: "Experiència Professional",
    ES: "Experiencia Profesional",
    EN: "Professional Experience",
    FR: "Expérience Professionnelle",
    RU: "Профессиональный опыт",
    DE: "Berufserfahrung",
    IT: "Esperienza professionale",
    PT: "Experiência profissional",
    ZH: "专业经验",
  },
];

export default function Cv() {
  const [language, setLanguage] = useState("CAT");
  function changeLanguage() {
    let tmp = idiomes.indexOf(language);
    if (tmp >= idiomes.length - 1) tmp = -1;
    let next = idiomes[tmp + 1];
    setLanguage(next);
    return next;
  }
  return (
    <div className="cv">
      <header>
        <div id="barraMenu">
          <div id="logo"></div>
          <div id="titol">JordiAlonso.com</div>
          <div id="idioma" onClick={() => changeLanguage()}>
            {language}
          </div>
        </div>
        <div id="fotoMain">
          <div id="texte">
            foto de perfil, amb una animació que va canviant-la segons temàtica:
            <br />
            -(APD, Huawei, NEOM)
            <br />
            -conferències
            <br />
            -formació i congressos
            <br />
            -afeccions
          </div>
        </div>
      </header>
      <section>
        <h1>{titolsH1[0][language]}</h1>
        <h2>CTO</h2>
        <h2>Project Manager</h2>
        <h2>Service Account Manager</h2>
        <h2>Ensenyament donant classes</h2>
        <h3>ESADE Mentor alumnes del Màster</h3>
        <h3>La Salle</h3>
        <h3>ERAM</h3>
        <h3>MSc UPC</h3>
        <h3>Mediapro AutomaticTV</h3>
        <h3>Mediapro 3D</h3>
        <h3>RTVE Catalunya</h3>
        <h3>ESCAC</h3>
        <h2>Web developement</h2>
        <h2>Empresari</h2>
        <h3>Serveis de formació</h3>
        <h3>crypto mining</h3>
        <h3>Domainer 1.200 dominis -ara 110-</h3>
        <h3>cine.com descàrregues legals de vídeo</h3>
        <h3>Iberseller e-commerce solutions</h3>
        <h3>CADAT Informàtica importacions, muntatge de PC's</h3>
      </section>
      <section>
        <h2>Entrevistes</h2>
        <h3>VR</h3>
        <h3>Canal+ estrena simultània</h3>
        <h3>TV3</h3>
        <h3>internet video a cine.com</h3>
        <h3>e-commerce a reg2.net</h3>
      </section>
      <section>
        <h2>Conferències</h2>
        <h3>APD XR: the next big thing?</h3>
        <h3>GITEX Huawei 5G Keynote</h3>
        <h3>La Liga Technology Showcase Shanghai</h3>
        <h3>La Liga Technology Showcase BCN</h3>
        <h3>COEIC media &amp; IT</h3>
        <h3>Mediapro 2020 3D Media</h3>
        <h3>IBC 2020 3D Media</h3>
        <h3>CGIx Glory Day</h3>
        <h3>Festival de cinema de Sitges cine.com</h3>
        <h3>Torre Agbar cine.com</h3>
        <h3>Santiago de Compostela cine.com</h3>
      </section>
      <section>
        <h1>Formació</h1>
        <h2>MSc Photonics a UPC</h2>
        <h2>MBA a ESADE</h2>
        <h2>MA Computer Animation a ESCAC</h2>
        <h2>BSc Computer Graphics a UAB</h2>
        <h3>Cursos i Certificacions</h3>
        <h4>Front-end web developer</h4>
        <h4>Coursera ML</h4>
        <h4>ITIL</h4>
        <h4>PMI</h4>
        <h4>Softimage 3D</h4>
        <h4>Avid DS</h4>
      </section>
      <section>
        <h3>Congressos</h3>
        <h4>SIGGRAPH</h4>
        <h4>NAB</h4>
        <h4>IBC</h4>
        <h4>MWC</h4>
        <h4>Suècia</h4>
        <h4>Helsinki</h4>
      </section>
      <section>
        <h1>Afiliacions</h1>
      </section>
      <section>
        <h1>Idiomes</h1>
        <h2>Català</h2>
        <h3>Idioma Matern</h3>
        <h3>Certificació C1</h3>
        <h2>Castellà</h2>
        <h3>Idioma Matern</h3>
        <h2>Anglès</h2>
        <h3>Nivell negociació</h3>
        <h3>Michigan Proficiency</h3>
        <h2>Francès</h2>
        <h3>Estudiat durant 7 anys a l'escola</h3>
        <h3>Cal refrescar-lo</h3>
        <h2>Rus</h2>
        <h3>Principiant</h3>
        <h3>Estudiat fins 2on curs a l'EOI Barcelona-Drassanes</h3>
        <h2>Alemany</h2>
        <h3>Principiant</h3>
        <h3>Curs online d'iniciació</h3>
        <h2>Italià</h2>
        <h3>Principiant</h3>
        <h3>Curs online d'iniciació</h3>
        <h2>Portugués</h2>
        <h3>Principiant</h3>
        <h3>Curs online d'iniciació</h3>
        <h2>Xinès</h2>
        <h3>Principiant</h3>
        <h3>Curs online d'iniciació i classes particulars</h3>
      </section>
      <section>
        <h2>Afeccions</h2>
        <h3>Tennis</h3>
        <h3>Tennis taula</h3>
        <h3>Golf</h3>
        <h3>Esquí</h3>
        <h3>Trekking</h3>
        <h3>Beat Saber</h3>
        <h3>Música: Guitarra i Piano</h3>
        <h3>Lectura</h3>
        <h3>Fotografia de viatges</h3>
      </section>
      <footer>
        <section>
          <h1>Xarxes Socials</h1>
          <h2>LinkedIn</h2>
          <h2>Twitter</h2>
          <h2>Instagram</h2>
          <h2>Facebook</h2>
          <h2>Pinterest</h2>
        </section>
        <section>
          <h1>Contacte</h1>
          <h2>Email</h2>
          <h2>Telèfon</h2>
        </section>
        <section>
          <h5 id="copy">&copy; 2022 Jordi Alonso</h5>
        </section>
      </footer>
    </div>
  );
}
