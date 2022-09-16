
//Using async function with try catch block
async function loadHeader () {
  try {
    let headerEvent = new CustomEvent('headerDone')
    const res = await fetch('partials/_header.html')
    const text = await res.text()
    document.querySelector('.page-header').innerHTML = text
    // console.log('Header loaded')
    document.dispatchEvent(headerEvent)
  } catch (err) {
    console.log(err)
  }
}
async function loadFooter () {
  try {
    let footerEvent = new CustomEvent('footerDone')
    const res = await fetch('partials/_footer.html')
    const text = await res.text()
    document.querySelector('.page-footer').innerHTML = text
    // console.log('Footer loaded')
    document.dispatchEvent(footerEvent)
  } catch (err) {
    console.log(err)
  }
}

loadHeader()
loadFooter()


/*
// Using Fetch method and inserting the header from separate HTML File
fetch('partials/_header.html')
  .then(res => res.text())
  .then(text => document.querySelector('.page-header').innerHTML = text)
  .catch(err => console.log(err))

fetch('partials/_footer.html')
  .then(res => res.text())
  .then(text => document.querySelector('.page-footer').innerHTML = text)
  .catch(err => console.log(err))
*/

/*
// Adding the HTML content directly from JS
const pageHeader = document.querySelector('.page-header')
pageHeader.innerHTML = `
<nav>
<ul>
  <li><a class="one" href="one.html">One</a></li>
  <li><a class="two" href="two.html">Two</a></li>
  <li><a class="three" href="three.html">Three</a></li>
</ul>
</nav>
`

const pageFooter = document.querySelector('.page-footer')
pageFooter.innerHTML = `
<nav>
<ul>
  <li><a class="four" href="four.html">Four</a></li>
  <li><a class="five" href="five.html">Five</a></li>
  <li><a class="six" href="six.html">Six</a></li>
</ul>
</nav>`
*/