export const calculateQuicksItemPosition = (index, isActive = true) => {
  const buttonSize = 68
  const multiplier = index + 1
  const offset = 7 * index

  if (index > 0) {
    return buttonSize * multiplier + offset
  }

  return buttonSize * multiplier
}

export const resolveHideQuicks = (elements) => {
  elements.forEach((element, index) => {
    setTimeout(
      () => {
        element.style.marginRight = '0px'
        element.style.pointerEvents = 'none'
        element.style.visibility = 'hidden'
        element.style.opacity = 0
      },
      50 * (index + 1)
    )
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
