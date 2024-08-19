function calculateQuicksItemPosition(index) {
  const multiplier = index + 1
  const buttonSize = 60
  const spacing = 20
  const position = (buttonSize + spacing) * -1
  const result = position * multiplier
  return `translateX(${result}px)`
}

export const resolveQuicksReveal = (isReveal, elements) => {
  elements.forEach((element, index) => {
    if (isReveal) {
      element.style.transform = 'translateX(0px)'
      element.style.pointerEvents = 'none'
      element.style.visibility = 'hidden'
      element.style.opacity = 0
    } else {
      element.style.transform = calculateQuicksItemPosition(index)
      element.style.pointerEvents = 'all'
      element.style.visibility = 'visible'
      element.style.opacity = 1
    }
  })
}
