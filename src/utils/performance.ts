// Performance optimization utilities

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
    callback: (entries: IntersectionObserverEntry[]) => void,
    options?: IntersectionObserverInit
) => {
    if (typeof window === 'undefined') return null;

    return new IntersectionObserver(callback, {
        rootMargin: '50px',
        threshold: 0.1,
        ...options,
    });
};

// Image preloader
export const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = src;
    });
};

// Critical images to preload
export const CRITICAL_IMAGES = [
    '/images/logos/logo.jfif',
    '/images/logos/acm.jfif',
    '/images/logos/css.jfif',
    '/images/logos/mlsa.png',
];

// Preload critical images
export const preloadCriticalImages = () => {
    if (typeof window !== 'undefined') {
        CRITICAL_IMAGES.forEach(src => {
            preloadImage(src).catch(() => {
                console.warn(`Failed to preload image: ${src}`);
            });
        });
    }
};

// Debounce function for performance
export const debounce = <T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
): T => {
    let timeout: NodeJS.Timeout;
    return ((...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    }) as T;
};

// Resource hints
export const addResourceHints = () => {
    if (typeof document === 'undefined') return;

    // DNS prefetch for external domains
    const domains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
    ];

    domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
    });
};
