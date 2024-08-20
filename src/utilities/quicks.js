function calculateQuicksItemPosition(index) {
  const multiplier = index + 1
  const buttonSize = 60
  const spacing = 20
  const position = (buttonSize + spacing) * -1
  const result = position * multiplier
  return `translateX(${result}px)`
}

export const resolveHideQuicks = (elements) => {
  elements.forEach((element, index) => {
    element.style.marginRight = '0px'
    element.style.pointerEvents = 'none'
    element.style.visibility = 'hidden'
    element.style.opacity = 0
  })
}

export const resolveRevealQuicks = (elements) => {
  elements.forEach((element, index) => {
    setTimeout(
      () => {
        element.style.marginRight = '15px'
        element.style.pointerEvents = 'all'
        element.style.visibility = 'visible'
        element.style.opacity = 1
      },
      50 * (index + 1)
    )
  })
}
