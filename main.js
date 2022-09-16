
document.addEventListener('headerDone',fileDetails)
document.addEventListener('footerDone',fileDetails)

function fileDetails() {
  const url = location.href
  const fileName = url.substring(url.lastIndexOf('/')+1);
  const file = fileName.split('.')[0]
  // console.log(file)
  const arr = document.querySelectorAll(".page-links")
  // console.log(arr)
  arr.forEach(navLink => {
    if(navLink.classList.contains(file)) {
      navLink.classList.add('bold-text')
      // console.log(navLink.classList)
    }
  })
}