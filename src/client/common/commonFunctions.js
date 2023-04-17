export const s2ab = (file) => {
  let buf = new ArrayBuffer(file.length);
  var view = new Uint8Array(buf);
  for (let i = 0; i < file.length; i++) {
    view[i] = file.charCodeAt(i) & 0xff;
  }
  return buf;
};
