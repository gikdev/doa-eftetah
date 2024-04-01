const html = document.querySelector('html')
const translations = document.querySelectorAll('.persian')
const hideTranslation = document.querySelector('#hide-translation')
const darkTheme = document.querySelector('#dark-theme')
const settings = {
  hideTranslation: false,
  darkTheme: false,
}

document.addEventListener('DOMContentLoaded', () => {
  hideTranslation.addEventListener('change', e => {
    settings.hideTranslation = e.target.checked
    apply(settings)
  })
  darkTheme.addEventListener('change', e => {
    settings.darkTheme = e.target.checked
    apply(settings)
  })
})

function apply({ hideTranslation: ht, darkTheme: dt}) {
  if (ht) translations.forEach(t => t.style.display = 'none')
  else    translations.forEach(t => t.style.display = 'block')
  if (dt) html.classList.add('dark')
  else    html.classList.remove('dark')
}