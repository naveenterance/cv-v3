export function setupIntersectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const menuItem = document.querySelector(
          `a[href="#${entry.target.id}"]`,
        ) as HTMLAnchorElement

        if (entry.isIntersecting) {
          document.querySelectorAll('.menu-item').forEach((item) => {
            item.classList.remove('active')
          })

          menuItem?.classList.add('active')
        }
      })
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    },
  )

  const sections = document.querySelectorAll<HTMLElement>('.content section')

  sections.forEach((section) => {
    observer.observe(section)
  })
}
