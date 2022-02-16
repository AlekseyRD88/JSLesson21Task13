export function getSection(num) {
  let elem = document.querySelector(`span[data-number="${num}"]`);
  let parentClass = elem.parentNode.class;
  return parentClass.closest('.box').dataset.number;
}
