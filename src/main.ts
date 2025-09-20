import './style.css'
import { setupIntersectionObserver } from './helpers/setupIntersectionObserver'
import { toggleTheme } from './helpers/themeToggle'
import { content } from './content'
import { navbar } from './navbar'

document.addEventListener('DOMContentLoaded', () => {
  setupIntersectionObserver()
  toggleTheme()
})

const template = `
 <button aria-label="Toggle theme" id="theme-toggle" class="theme-toggle">

 </button>
 <div class="container" >
 
  ${navbar}
  ${content}
 </div>

`

const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = template
