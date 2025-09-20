import { lightModeIcon, darkModeIcon } from '../svgIcons'

export function toggleTheme() {
  const themeToggler = document.getElementById('theme-toggle')

  if (!themeToggler) return

  applyStoredTheme()
  updateThemeIcon()

  themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark_mode')
    const isDark = document.body.classList.contains('dark_mode')

    localStorage.setItem('website_theme', isDark ? 'dark_mode' : 'default')
    updateThemeIcon()
  })

  window.addEventListener(
    'storage',
    () => {
      applyStoredTheme()
      updateThemeIcon()
    },
    false,
  )

  function applyStoredTheme() {
    let storedTheme = localStorage.getItem('website_theme')

    if (storedTheme === null) {
      storedTheme = getSystemTheme()
      localStorage.setItem('website_theme', storedTheme)
    }

    document.body.classList.remove('default', 'dark_mode')
    document.body.classList.add(storedTheme)
  }

  function getSystemTheme(): 'dark_mode' | 'default' {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    return isDarkMode ? 'dark_mode' : 'default'
  }

  function updateThemeIcon() {
    const isDark = document.body.classList.contains('dark_mode')
    themeToggler &&
      (themeToggler.innerHTML = isDark ? lightModeIcon : darkModeIcon)
  }
}
