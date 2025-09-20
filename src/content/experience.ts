import { experienceData } from './experienceData'

const experienceRender = experienceData
  .map((data) => {
    const skillsHTML = data.skills
      .map((skill) => `<li class="skill-pill">${skill}</li>`)
      .join('')

    const descriptionHTML = data.description
      .map((line) => `<p> - ${line}</p>`)
      .join('')

    return `
      <div class="experience-list-item">
        <h3>
          ${data.title}
          <span class="date-range">${data.dateRange}</span>
        </h3>
        <ul class="skill-list">
          ${skillsHTML}
        </ul>
        ${descriptionHTML}
      </div>
    `
  })
  .join('')

export const experience = `
<section id="experience" class="experience">
<h2>Vanilla Networks . <span class="date-range"> Jan 2024 – present</span> </h2>
${experienceRender}
</section>



`
