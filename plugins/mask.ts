//@ts-ignore
import Mask from "@ryangjchandler/alpine-mask";

document.addEventListener("alpine:init", () => {
  Alpine.plugin(Mask);
});
