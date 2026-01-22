import { MetadataRoute } from 'next';
import { creativityData } from '@/data/creativity';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://fablab77.ru';

    const staticRoutes = [
        '',
        '/contacts',
        '/ctpo',
        '/equipment',
        '/events',
        '/fablab',
        '/fablab/charter',
        '/fablab/network',
        '/fablab/team',
        '/fablab/wherefrom',
        '/covid',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const creativityRoutes = Object.keys(creativityData).map((slug) => ({
        url: `${baseUrl}/creativity/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...creativityRoutes];
}
