export function getSection(num) {
  let elem = document.querySelector(`span[data-number="${num}"]`);
  elem.closest(`span[data-number="${num}"]`);
}
