'use client';

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function AnimeWrapper({
    children,
    animationType = 'fadeUp',
    delay = 0,
    duration = 800,
    className = ''
}) {
    const elementRef = useRef(null);

    useEffect(() => {
        const el = elementRef.current;
        if (!el) return;

        // Use IntersectionObserver to trigger animation when visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Play animation
                    let animConfig = {
                        targets: el,
                        duration: duration,
                        easing: 'easeOutExpo',
                        delay: delay
                    };

                    if (animationType === 'fadeUp') {
                        animConfig = {
                            ...animConfig,
                            translateY: [50, 0],
                            opacity: [0, 1]
                        };
                    } else if (animationType === 'fadeIn') {
                        animConfig = {
                            ...animConfig,
                            opacity: [0, 1]
                        };
                    } else if (animationType === 'scaleUp') {
                        animConfig = {
                            ...animConfig,
                            scale: [0.8, 1],
                            opacity: [0, 1]
                        };
                    } else if (animationType === 'slideLeft') {
                        animConfig = {
                            ...animConfig,
                            translateX: [50, 0],
                            opacity: [0, 1]
                        };
                    } else if (animationType === 'slideRight') {
                        animConfig = {
                            ...animConfig,
                            translateX: [-50, 0],
                            opacity: [0, 1]
                        };
                    }

                    anime(animConfig);

                    // Unobserve after animating once
                    observer.unobserve(el);
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% visible
            rootMargin: '0px 0px -50px 0px' // Slightly before it completely enters
        });

        observer.observe(el);

        return () => {
            if (el) observer.unobserve(el);
        };
    }, [animationType, delay, duration]);

    const useInitialOpacity = animationType.includes('fade') || animationType.includes('slide') || animationType === 'scaleUp';

    return (
        <div ref={elementRef} className={className} style={{ opacity: useInitialOpacity ? 0 : 1 }}>
            {children}
        </div>
    );
}
