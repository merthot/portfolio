declare module 'lenis' {
    export interface LenisOptions {
        duration?: number;
        easing?: (t: number) => number;
        orientation?: 'vertical' | 'horizontal';
        gestureOrientation?: 'vertical' | 'horizontal';
        smoothWheel?: boolean;
        smoothTouch?: boolean;
        touchMultiplier?: number;
    }

    export default class Lenis {
        constructor(options?: LenisOptions);
        raf(time: number): void;
        destroy(): void;
    }
} 