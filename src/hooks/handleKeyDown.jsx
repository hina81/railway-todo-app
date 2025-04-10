export const handleKeyDown = (e, index, lists, listRefs, handleSelectList) => {
  if (!['ArrowRight', 'ArrowLeft', 'Enter', ' '].includes(e.key)) return

  e.preventDefault()
  let newIndex = index

  if (e.key === 'ArrowRight') {
    newIndex = (index + 1) % lists.length
  } else if (e.key === 'ArrowLeft') {
    newIndex = (index - 1 + lists.length) % lists.length
  } else if (e.key === 'Enter' || e.key === ' ') {
    handleSelectList(lists[index].id)
    return
  }

  listRefs.current[newIndex]?.focus()
}
