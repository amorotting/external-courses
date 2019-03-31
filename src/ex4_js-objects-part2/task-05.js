function substringInString(str, newStr) {
  if (str.indexOf(newStr) !== -1) {
    return true;
  }
  return false;
}

module.exports = substringInString;