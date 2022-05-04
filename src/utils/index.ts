declare const IS_SUB: string | undefined;
declare const SUB_STR: string | undefined;

export function trueImgSrc(src: string) {
  return IS_SUB === 'true' ? SUB_STR + src : src;
}
