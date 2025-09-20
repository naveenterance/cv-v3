(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();function c(){const s=new IntersectionObserver(o=>{o.forEach(t=>{const e=document.querySelector(`a[href="#${t.target.id}"]`);t.isIntersecting&&(document.querySelectorAll(".menu-item").forEach(n=>{n.classList.remove("active")}),e?.classList.add("active"))})},{root:null,rootMargin:"0px",threshold:.5});document.querySelectorAll(".content section").forEach(o=>{s.observe(o)})}const l=`
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="lucide lucide-moon-icon lucide-moon"
>
  <path
    d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
  />
</svg>
`,d=`
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="lucide lucide-sun-icon lucide-sun"
>
  <circle cx="12" cy="12" r="4" />
  <path d="M12 2v2" />
  <path d="M12 20v2" />
  <path d="m4.93 4.93 1.41 1.41" />
  <path d="m17.66 17.66 1.41 1.41" />
  <path d="M2 12h2" />
  <path d="M20 12h2" />
  <path d="m6.34 17.66-1.41 1.41" />
  <path d="m19.07 4.93-1.41 1.41" />
</svg>

`,a=`
<svg
  id="linkIcon"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 18"
  fill="none"
  stroke="currentColor"
  stroke-width="4"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
>
  <path d="M7 7h10v10" />
  <path d="M7 17 17 7" />
</svg>

    `;function p(){const s=document.getElementById("theme-toggle");if(!s)return;i(),t(),s.addEventListener("click",()=>{document.body.classList.toggle("dark_mode");const e=document.body.classList.contains("dark_mode");localStorage.setItem("website_theme",e?"dark_mode":"default"),t()}),window.addEventListener("storage",()=>{i(),t()},!1);function i(){let e=localStorage.getItem("website_theme");e===null&&(e=o(),localStorage.setItem("website_theme",e)),document.body.classList.remove("default","dark_mode"),document.body.classList.add(e)}function o(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark_mode":"default"}function t(){const e=document.body.classList.contains("dark_mode");s&&(s.innerHTML=e?d:l)}}const h=`

<div class="links-list">
  <a class='link' href="mailto:naveenterance@gmail.com" target="_blank"> naveenterance@gmail.com${a} </a>
  <a class='link' href="https://www.linkedin.com/in/naveen-terance/" target="_blank"> linkedin.com/in/naveen-terance${a} </a>
  <a class='link' href="https://github.com/naveenterance" target="_blank"> github.com/naveenterance${a} </a>
</div>


`,u=`  
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
        >Vanilla Networks${a}
      </a>
    </h3>
    <h3 class="resume">
      <a href='./Naveen_Terance_Resume.pdf' target="_blank"> View Résumé ${a} </a>
    </h3>
    <h3 class="skills">Skills : [ JavaScript/TypeScript, HTML ,CSS, React, React Native, ElectronJS, Svelte]</h3>

  ${h}
  </header>

</section>
    
    
    `,m=[{title:"DJ Software .",dateRange:"March 2025 – present",skills:["ElectronJS","React","Ionic","Redux","NestJS"],description:[`Contributed to the successful release of version 11 by assisting in
      troubleshooting, ensuring smooth integration of new features such as the
      new local music library features, and addressing critical bug fixes.
      Increased test coverage on the NestJS backend from 10% -> 80 % `]},{title:"Svelte Component library . In-house .",dateRange:"Nov 2024 – present",skills:["Svelte","SvelteKit","Tailwind","Vitest","Zod"],description:[`Implemented over 50+ reusable UI components reducing the need for custom solutions in 80% of UI cases. 
    Used configurable props, snippets, unit tests, prop validation, flexible tailwind based styling system, 
    and wrote comprehensive documentation allowing seamless integration and easy customization for users.
    `]},{title:"Cipher Chat . CircuitID .",dateRange:"April 2024 – Nov/2024",skills:["React Native","Zustand","SQLite"],description:[`The goal here was to create a instant messaging app for android and IOS with VoIP and social media capabilities. 
      Implemented major UI elements, optimized it for responsiveness and a steady 60FPS on various IOS and android devices`]}],g=m.map(s=>{const i=s.skills.map(t=>`<li class="skill-pill">${t}</li>`).join(""),o=s.description.map(t=>`<p> - ${t}</p>`).join("");return`
      <div class="experience-list-item">
        <h3>
          ${s.title}
          <span class="date-range">${s.dateRange}</span>
        </h3>
        <ul class="skill-list">
          ${i}
        </ul>
        ${o}
      </div>
    `}).join(""),v=`
<section id="experience" class="experience">
<h2>Vanilla Networks . <span class="date-range"> Jan 2024 – present</span> </h2>
${g}
</section>



`,f=`
<section id="other" class="experience top-padding">
  <h2 >Other Experiences/Internships</h2>

   <div class="experience-list-item">
    <h3>Engineering Intern @ Kollam Municipal Corporaton . <span class="date-range"> Sept 2022 - Dec 2023</span></h3>
    <p>
     Provided IT support, clerical work in Sulekha and Saankhya portals
    </p>

   </div>

    <div class="experience-list-item">
    <h3>Assistant EDP @ Quilon Beach Hotel . <span class="date-range"> May 2022 - June 2022</span></h3>
    <p>
     Provided support for CCTV, Wifi, electronic doors and lockers, worked with
     Hotsoft billing and Vingcard software
    </p>

   </div>

    <div class="experience-list-item">
    <h3>Intern @ Vanilla Networks . <span class="date-range"> March 2021 - April 2021</span></h3>
    <p>
     Completed training for PHP-Codeignitor
    </p>

   </div>
    <div class="experience-list-item">
    <h3>Trainee @ Networkz Systems . <span class="date-range"> July 2018 - Jan 2019</span></h3>
    <p>
     Completed training for Python/Django
    </p>

   </div>

     
   
   <h2 class="top-padding">Education</h2>

    <div class="experience-list-item ">
    <h3> MES Institute of Technology & Management . Chathannoor, Kerala . <span class="date-range">  2014 - 2018</span></h3>
    <p>
     B.Tech Computer Science and Engineering
    </p>

   </div>


</section>



`,k=`    

<div class="content">
  ${u}
  ${v}
  ${f}


</div>


`,w=`
<nav class="menu" id="navbar">
  <ul>
    <li><a href="#home" class="menu-item">About</a></li>
    <li><a href="#experience" class="menu-item">Experience</a></li>
    <li><a href="#other" class="menu-item">Other</a></li>

  </ul>
  
</nav>



`;document.addEventListener("DOMContentLoaded",()=>{c(),p()});const b=`
 <button aria-label="Toggle theme" id="theme-toggle" class="theme-toggle">

 </button>
 <div class="container" >
 
  ${w}
  ${k}
 </div>

`,y=document.querySelector("#app");y.innerHTML=b;
