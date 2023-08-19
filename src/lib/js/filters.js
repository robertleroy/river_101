
export function titlecase(value) {
  if (!value) return '';
  value = value.toString().toLowerCase();
  return value.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
}
export function sentencecase(value) {
  if (!value) return ''
  value = value.toString()  ;
    return value.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g,function(c){return c.toUpperCase()});
}