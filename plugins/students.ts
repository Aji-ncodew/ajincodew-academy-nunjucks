import axios from "axios";

function isCTAData(data: unknown):data is {url: string} {
  if (typeof data !== "object") return false;
  if (typeof (data as {url: string}).url !== "string") return false;
  return true;
}
const defErrors = {
  coupon: "errors.coupon",
  generic: "errors.generic",
  invalidFields: "errors.invalidFields",
};

document.addEventListener("alpine:init", () => {
  // Define your form variables and state
  const formElm = document.getElementById("cta-form") as HTMLFormElement;
  let translations = {
    strings: [],
    discount: "",
    errors: defErrors
  };  
  const dialog = Alpine.reactive({
    show: false,
    error: "",
    name: "", // Matched to 'full_name' in the database
    email: "",
    phone: "",
    student: "", // Matched to 'student' in the database
    faculty: "", // Matched to 'faculty' in the database
    study: "", // Matched to 'study' in the database
    semester: "",
    algorithmique: 0,
    programmation: 0,
    algorithmiqueAvancee: 0,
    systemeExploitation: 0,
    technologieWeb: 0,
    python: 0,
    customOption: "", // Matched to 'customOption' in the database
    paid: "", // Matched to 'paid' (boolean) in the database
    // Add other form fields as necessary
  });
  // Expose the dialog state to Alpine.js
  Alpine.magic("dialog", () => dialog);
  Alpine.magic("dialog", (el) => {
    const elem = el as HTMLDivElement;
    const tran = elem.querySelector("script[type='application/json']")?.textContent;
    const content = elem.querySelector(".dialog-content")!;
    elem.addEventListener("click", ({ target }) => {
      if (!dialog.show || content?.contains(target as Node)) return;
      dialog.show = false;
    });
    return dialog;
  });
  // Alpine.js directive for form submission
  Alpine.directive("cta", (el, { value, expression }, { evaluate }) => {
    if (value === "submit") {
      const data = evaluate(expression);
      if (!isCTAData(data)) return;
      el.addEventListener("click", (e) => {
        e.preventDefault();
        console.log({
          name: dialog.name,
          email: dialog.email,
          phone: dialog.phone,
          student: dialog.student,
          faculty: dialog.faculty,
          study: dialog.study,
          semester: dialog.semester,
          algorithmique: dialog.algorithmique,
          programmation: dialog.programmation,
          algorithmiqueAvancee: dialog.algorithmiqueAvancee,
          systemeExploitation: dialog.systemeExploitation,
          technologieWeb: dialog.technologieWeb,
          python: dialog.python,
          customOption: dialog.customOption,
          paid: dialog.paid
        });
        if(!formElm.reportValidity()) {
          dialog.error = translations.errors.invalidFields
          return
        }
        dialog.error = ""
        axios
          .post(data.url, {
            name: dialog.name,
            email: dialog.email,
            phone: dialog.phone,
            student: dialog.student,
            faculty: dialog.faculty,
            study: dialog.study,
            semester: dialog.semester,
            algorithmique: dialog.algorithmique,
            programmation: dialog.programmation,
            algorithmiqueAvancee: dialog.algorithmiqueAvancee,
            systemeExploitation: dialog.systemeExploitation,
            technologieWeb: dialog.technologieWeb,
            python: dialog.python,
            customOption: dialog.customOption,
            paid: dialog.paid,
          })
          .then((res) => {
            if (res.data.ok) {
              location.href = `/${document.documentElement.lang}/ThankyouStudent/`;
            } else {
              dialog.error = translations.errors.generic;
            }
          })
          .catch(() => {
            dialog.error = translations.errors.generic;
          });
      })
    } else {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        dialog.show = true;
      });
    }
  });
});
