import Alpine from 'alpinejs'
 
window.Alpine = Alpine
const mediaQuery = window.matchMedia("(min-width: 768px)");

const obj = Alpine.reactive({
  mobile: !mediaQuery.matches,
});
mediaQuery.addEventListener("change", () => {
  obj.mobile = !mediaQuery.matches;
});
Alpine.magic("mobile", () => {
  return obj.mobile;
});

Alpine.start()