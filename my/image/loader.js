'use client'

export default function myImageLoader({src, width, quality}) {
    if (src.length > 0 && src.charAt(0) === '/') {
        src = src.substring(1)
    }
    return `./${src}?w=${width}&q=${quality || 75}`;
}