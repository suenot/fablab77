"use client";

import { useEffect, useRef } from 'react';
import { Container, Heading, Section, Box } from "@radix-ui/themes";

export default function EventsPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Clear container to prevent duplication
        container.innerHTML = '';

        const script = document.createElement('script');
        script.src = "https://timepad.ru/js/tpwf/loader/min/loader.js";
        script.async = true;
        // script.defer = true; // Not strictly necessary if appending dynamically
        script.charset = "UTF-8";
        script.setAttribute('data-timepad-customized', '28709');
        script.setAttribute('data-timepad-apidomain', 'timepad.ru');
        script.setAttribute('data-timepad-widget-v2', 'event_list3');

        container.appendChild(script);

        return () => {
            // Cleanup: remove everything from container (script + generated iframe/widget)
            if (container) {
                container.innerHTML = '';
            }
        };
    }, []);

    return (
        <Section size="3">
            <Container size="4">
                <Heading size="9" mb="6" align="center">События</Heading>
                <Box ref={containerRef} id="timepad-widget-container" style={{ minHeight: '600px' }}>
                    {/* Timepad widget will be injected here by the script */}
                </Box>
            </Container>
        </Section>
    );
}
