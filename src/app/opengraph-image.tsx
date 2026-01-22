import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Fablab Moscow';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 64,
                    background: 'linear-gradient(135deg, #4f46e5 0%, #312e81 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Simple Logo Representation */}
                    <div style={{
                        display: 'flex',
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'white',
                        marginRight: '20px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#4f46e5',
                        fontSize: '48px',
                        fontWeight: 'bold'
                    }}>
                        F
                    </div>
                    <div style={{ fontSize: 96, fontWeight: 900 }}>ФАБЛАБ</div>
                </div>
                <div style={{ fontSize: 32, marginTop: 20, fontWeight: 400, opacity: 0.8 }}>
                    Лаборатория цифрового производства НИТУ МИСИС
                </div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
        }
    );
}
