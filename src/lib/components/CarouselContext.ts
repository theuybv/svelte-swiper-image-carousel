export const CarouselContextKey = Symbol()
export const CarouselCurrentIndexKey = Symbol()
export type AspectRatio = 'aspect-[1/1]' | 'aspect-[3/2]' | 'aspect-[4/3]'
export type CarouselOptions = {
    images: string[],
    thumbAspectRatio: AspectRatio,
    imageAspectRatio: AspectRatio,
    maxImageHeight: number
    thumbsPerView: number
    sourceImageAspectRatio: AspectRatio,
    autoPlay: {
        delay: number
    } | boolean
}
export const defaultCarouselOptions: CarouselOptions = {
    imageAspectRatio: "aspect-[3/2]",
    maxImageHeight: 500,
    images: [],
    thumbAspectRatio: "aspect-[4/3]",
    thumbsPerView: 3,
    sourceImageAspectRatio: "aspect-[3/2]",
    autoPlay: false
}
