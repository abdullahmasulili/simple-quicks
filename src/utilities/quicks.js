export const handleRevealQuicks = function () {
  const quicksItems = document.querySelectorAll('.fab__wrap:not(.main__fab)')

  quicksItems.forEach((item, index) => {
    const showStyles = [calculateQuicksItemPosition(index), 'all', 'visible', 1]
    const hideStyles = ['translateX(0px)', 'none', 'hidden', 0]

    if (item.classList.contains('revealed')) {
      return resolveQuicksReveal(true, item, hideStyles)
    }

    resolveQuicksReveal(false, item, showStyles)
  })
}

function calculateQuicksItemPosition(index) {
  const multiplier = index + 1
  const buttonSize = 60
  const spacing = 20
  const position = (buttonSize + spacing) * -1
  const result = position * multiplier

  return `translateX(${result}px)`
}

function resolveQuicksReveal(isRevealed, element, configs) {
  const [transform, pointerEvents, visibility, opacity] = configs || []

  if (isRevealed) {
    element.classList.remove('revealed')
  } else {
    element.classList.add('revealed')
  }

  element.style.transform = transform
  element.style.pointerEvents = pointerEvents
  element.style.visibility = visibility
  element.style.opacity = opacity
}
