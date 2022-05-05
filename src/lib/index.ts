import type {AspectRatio} from "./components/CarouselContext";

export const uppercase = (val: string) => {
    return val.toUpperCase();
};

export const getDemoImages = (
    numberOfImages: number,
    aspectRatio: AspectRatio
) => {
    return [...Array(numberOfImages)].map((_value, index) => {
        const maxWidth = 1024;
        const regex = new RegExp(/([0-9])\/([0-9])/)
        const matches: any = regex.exec(aspectRatio)
        const ratio = matches && matches.length ? matches[1] / matches[2] : 3 / 2

        const height = Math.round(ratio * maxWidth);
        const width = Math.round(height * ratio);

        return `https://picsum.photos/${width}/${height}?random=${index}`;
    });
};

