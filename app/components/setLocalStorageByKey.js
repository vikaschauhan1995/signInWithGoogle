export function setLocalStorageByKey(key, value) {
  if (key && value) {
    localStorage.setItem(key, value);
  }
}
