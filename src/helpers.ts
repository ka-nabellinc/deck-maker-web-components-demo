export const getDMCardThumbnailUrl = (
  thumbnailUrl: string | null, size?: 's' | 'm'
) => {
  if (typeof thumbnailUrl === 'string') {
    if (thumbnailUrl.startsWith('http')) return thumbnailUrl;
    //sizeがsとmの場合
    if (size) return `https://storage.googleapis.com/ka-nabell-card-images/img/${size}/card/` + thumbnailUrl;
    //mより大きい画像の場合
    return 'https://storage.googleapis.com/ka-nabell-card-images/img/card/' + thumbnailUrl;
  } else {
    return ''; // FIXME
  }
};

export const isMobile = () => {
  if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
    return true;
  } else {
    return false;
  }
}
