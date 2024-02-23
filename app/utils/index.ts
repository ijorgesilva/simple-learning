export function urlEncode(str: string) {
  str = (str + "").toString();
  return encodeURIComponent(str)
    .replace("!", "%21")
    .replace("'", "%27")
    .replace("(", "%28")
    .replace(")", "%29")
    .replace("*", "%2A")
    .replace("%20", "_")
    .toLowerCase();
}
