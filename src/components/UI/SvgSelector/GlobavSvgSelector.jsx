import React from 'react'

const GlobalSvgSelector = ({ id }) => {
    switch (id) {
        case 'ring':

            return (
                <svg width="31" height="30" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="25" height="32" rx="12.5" fill="#fff" />
                    <ellipse cx="15.5" cy="2.43243" rx="2.65652" ry="2.43243" fill="#fff" />
                    <ellipse cx="15.5" cy="36.2838" rx="2.65652" ry="3.04054" fill="#fff" />
                    <rect y="21" width="31" height="14" rx="7" fill="#fff" />
                </svg>
            );
        case 'poligon':
            return (
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.8294 7.76866C6.43303 8.35712 5.56697 8.35712 5.1706 7.76867L0.987699 1.55866C0.540292 0.894435 1.01624 0 1.81709 0H10.1829C10.9838 0 11.4597 0.894433 11.0123 1.55866L6.8294 7.76866Z" fill="#fff" />
                </svg>
            )
        case 'searchIcon':
            return (
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0267 7.91964C15.0267 11.7302 11.8978 14.8393 8.01334 14.8393C4.12886 14.8393 1 11.7302 1 7.91964C1 4.10908 4.12886 1 8.01334 1C11.8978 1 15.0267 4.10908 15.0267 7.91964Z" stroke="#9B9A97" stroke-width="2" />
                    <rect width="8.24377" height="2.84947" rx="1.42473" transform="matrix(0.615259 0.788325 -0.795274 0.606251 12.928 11.7737)" fill="#9B9A97" />
                    <mask id="path-3-inside-1_1_24" fill="white">
                        <path d="M8.5902 4.84987C8.62053 3.90348 9.44341 3.13157 10.3006 3.53318V3.53318C10.8217 3.7773 11.2911 4.12591 11.682 4.5591C12.0729 4.99228 12.3777 5.50157 12.5789 6.05787V6.05787C12.9125 6.97998 12.0601 7.77644 11.0798 7.74576L10.6774 7.73316C9.47487 7.69553 8.53124 6.69016 8.56977 5.48762L8.5902 4.84987Z" />
                    </mask>
                    <path d="M8.5902 4.84987C8.62053 3.90348 9.44341 3.13157 10.3006 3.53318V3.53318C10.8217 3.7773 11.2911 4.12591 11.682 4.5591C12.0729 4.99228 12.3777 5.50157 12.5789 6.05787V6.05787C12.9125 6.97998 12.0601 7.77644 11.0798 7.74576L10.6774 7.73316C9.47487 7.69553 8.53124 6.69016 8.56977 5.48762L8.5902 4.84987Z" stroke="#9B9A97" stroke-width="4" mask="url(#path-3-inside-1_1_24)" />
                    <circle cx="8.5" cy="7.5" r="2.5" fill="black" />
                </svg>
            )
        case 'filter':
            return (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_1_32" fill="white">
                        <rect width="8.88889" height="8.88889" rx="1" />
                    </mask>
                    <rect width="8.88889" height="8.88889" rx="1" stroke="#9B9A97" stroke-width="3" mask="url(#path-1-inside-1_1_32)" />
                    <mask id="path-2-inside-2_1_32" fill="white">
                        <rect y="11.1111" width="8.88889" height="8.88889" rx="1" />
                    </mask>
                    <rect y="11.1111" width="8.88889" height="8.88889" rx="1" stroke="#9B9A97" stroke-width="3" mask="url(#path-2-inside-2_1_32)" />
                    <rect x="14.4445" y="11.1111" width="2.22222" height="8.88889" rx="1.11111" fill="#9B9A97" />
                    <rect x="20" y="14.4444" width="2.22222" height="8.88889" rx="1.11111" transform="rotate(90 20 14.4444)" fill="#9B9A97" />
                    <mask id="path-5-inside-3_1_32" fill="white">
                        <rect x="11.1111" width="8.88889" height="8.88889" rx="1" />
                    </mask>
                    <rect x="11.1111" width="8.88889" height="8.88889" rx="1" stroke="#9B9A97" stroke-width="3" mask="url(#path-5-inside-3_1_32)" />
                </svg>
            )
        
        default:
            break;
    }
}

export default GlobalSvgSelector