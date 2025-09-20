import { linkIcon } from '../svgIcons'
import { socials } from './socials'

export const home = `  
<section id="home" class="home">
  <header>
    <h1>Naveen<span class="name-dot">_</span>Terance</h1>
    <h2>Frontend Developer</h2>
    <h3 class="current-company">
      Currently @
      <a
        class="current-company-link"
        href="https://vanillanetworks.co.in/"
        target="_blank"
        >Vanilla Networks${linkIcon}
      </a>
    </h3>
    <h3 class="resume">
      <a href='./portfolio/Naveen_Terance_Resume.pdf' target="_blank"> View Résumé ${linkIcon} </a>
    </h3>
    <h3 class="skills">Skills : [ JavaScript/TypeScript, HTML ,CSS, React, React Native, ElectronJS, Svelte]</h3>

  ${socials}
  </header>

</section>
    
    
    `
