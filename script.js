const anchors = document.querySelectorAll('header nav ul li a')

for (let anchor of anchors) {
  const url = window.location.pathname
  const href = anchor.getAttribute('href')
  
  if (href === url ) {
    anchor.classList.add('bold')
  }
}
