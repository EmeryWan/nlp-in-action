declare var IS_SUB: string;
declare var SUB_STR: string;

export function trueImgSrc(src: string) {
  return IS_SUB ? SUB_STR + src : src;
}
