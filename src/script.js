const html = document.querySelector('html')
const translations = document.querySelectorAll('.persian')
const hideTranslation = document.querySelector('#hide-translation')
const darkTheme = document.querySelector('#dark-theme')

darkTheme.addEventListener('change', () => html.classList.toggle('dark'))
hideTranslation.addEventListener('change', e =>
  translations.forEach(t =>
    t.style.display = (e.target.checked) ? 'none' : 'block'
  )
)
