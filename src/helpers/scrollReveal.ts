import type { ObjectDirective } from 'vue'

type RevealElement = Element & { __revealObserver?: IntersectionObserver }

export const revealDirective: ObjectDirective = {
  mounted(el, binding) {
    const opts = binding.value || { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    const once = binding.value ?? true

    // ensure a base class with transition rules stays on the element
    el.classList.add('reveal')
    el.classList.add('reveal--hidden')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal--visible')
          el.classList.remove('reveal--hidden')
          if (once && observer) observer.unobserve(el)
        } else if (!once) {
          // if not once, hide again when leaving viewport
          el.classList.remove('reveal--visible')
          el.classList.add('reveal--hidden')
        }
      })
    }, opts)

    ;(el as RevealElement).__revealObserver = observer
    observer.observe(el)
  },
  beforeUnmount(el) {
    const obs = (el as RevealElement).__revealObserver
    if (obs && typeof obs.disconnect === 'function') obs.disconnect()
  },
}

export default revealDirective
