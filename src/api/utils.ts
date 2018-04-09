export const collectErrorMessages = (errors: {
  message?: string
}): string[] => {
  const excludeKey = (key: string) => (entries: [string, string | undefined]) =>
    entries[0] !== key
  const definedValues = (entries: [string, string | undefined]): boolean =>
    typeof entries[1] === 'string'

  return Object.entries(errors)
    .filter(definedValues)
    .filter(excludeKey('error'))
    .map((entries: [string, string]) => {
      if (entries[0] === 'message') {
        return entries[1]
      }

      return `${entries[0]} ${entries[1]}`
    })
}
