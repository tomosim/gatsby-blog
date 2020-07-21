const formatTag = tag => {
  return tag
    .replace("-", " ")
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1, word.length))
    .join(" ")
}

export default formatTag
