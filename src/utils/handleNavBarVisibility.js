export const handleNavBarVisibility = () => {
  if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
  ) {
    const onIntersection = entries => {
      if (!entries[0].isIntersecting) {
        // If #header IS NOT in viewport anymore:
        document.querySelector("#nav-bar").classList.remove("absolute")
        document
          .querySelector("#nav-bar")
          .classList.add("fixed", "bg-indigo-100")
      } else {
        // If #header IS in viewport anymore:
        document
          .querySelector("#nav-bar")
          .classList.remove("fixed", "bg-indigo-100")
        document.querySelector("#nav-bar").classList.add("absolute")
      }
    }
    const observer = new IntersectionObserver(onIntersection);
    observer.observe(document.querySelector("#header"))
  }
}
