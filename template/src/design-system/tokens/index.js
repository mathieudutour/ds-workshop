import { colors } from './colors.json'
import { shadows, defaultShadowName } from './shadows.json'
import { textStyles, defaultStyleName } from './textStyles.json'

export function getColor(id) {
  return colors.find(color => color.id === id) || id
}

export function getShadow(id = defaultShadowName) {
  const shadow = shadows.find(shadow => shadow.id === id)
  if (!shadow) {
    return {}
  }

  return {
    shadowColor: getColor(shadow.color),
    shadowRadius: shadow.blur,
    shadowOffset: {
      width: shadow.x,
      height: shadow.y
    }
  }
}

export function getTextStyle(id = defaultStyleName) {
  const textStyle = textStyles.find(textStyle => textStyle.id === id)
  if (!textStyle) {
    return
  }

  return {
    color: getColor(textStyle.color),
    fontFamily: textStyle.fontFamily,
    fontSize: textStyle.fontSize,
    fontWeight: textStyle.fontWeight,
    lineHeight: textStyle.lineHeight
  }
}
