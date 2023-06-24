// get the images
const slides = document.querySelectorAll('.slider img')
const imageContainer = document.querySelector('.image-container')
// get controls
const prevBtn = document.querySelector('.controls > button.prev')
const nextBtn = document.querySelector('.controls > button.next')

let cursor = 0

prevBtn.addEventListener('click', prev)
nextBtn.addEventListener('click', next)

let intervel = setInterval(autoSlide, 2000)

function resetIntervel () {
  clearInterval(intervel)
  intervel = setInterval(autoSlide, 2000)
}

function autoSlide () {
  cursor++
  if (cursor > slides.length - 1) {
    cursor = 0
    translateSlide(cursor)
    return
  }
  if (cursor < 0) {
    cursor = slides.length - 1
    translateSlide(cursor)
    return
  }
  translateSlide(cursor)
}

function prev () {
  cursor--
  if (cursor < 0) {
    cursor = slides.length - 1
    translateSlide(cursor)
  } else {
		//   slides[cursor].style.transform = `translateX(${cursor * 100}%)`
    translateSlide(cursor)
  }

  resetIntervel()
}
function next () {
  const slideLength = slides.length
  cursor++

  if (cursor > slideLength - 1) {
    cursor = 0
    translateSlide(cursor)
  } else {
		//   slides[cursor].style.transform = `translateX(-${cursor * 100}%)`
    translateSlide(cursor)
  }
  resetIntervel()
}

function translateSlide (value) {
  console.log({ value })
	// slides.forEach(
	// 	slide => (slide.style.transform = `translateX(${-value * 100}%)`)
	// )
  imageContainer.style.transform = `translateX(${-value * 600}px`
}
