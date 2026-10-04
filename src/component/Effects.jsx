import React, { useEffect, useRef, useState } from 'react'

// Card that tilts in 3D toward the pointer, with a moving glare highlight.
export function TiltCard({ children, className = '', max = 10 }) {
    const ref = useRef(null)
    const onMove = (e) => {
        const el = ref.current
        const rect = el.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width
        const py = (e.clientY - rect.top) / rect.height
        el.style.setProperty('--rx', `${(0.5 - py) * max}deg`)
        el.style.setProperty('--ry', `${(px - 0.5) * max}deg`)
        el.style.setProperty('--gx', `${px * 100}%`)
        el.style.setProperty('--gy', `${py * 100}%`)
    }
    const onLeave = () => {
        const el = ref.current
        el.style.setProperty('--rx', '0deg')
        el.style.setProperty('--ry', '0deg')
    }
    return (
        <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`tilt-card ${className}`}>
            {children}
            <div className="tilt-glare" aria-hidden="true" />
        </div>
    )
}

// Fades and lifts its children into view the first time they scroll on screen.
export function Reveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const el = ref.current
        if (!('IntersectionObserver' in window)) {
            setVisible(true)
            return
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.12 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])
    return (
        <div
            ref={ref}
            className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}

// Falls back to a static gradient if WebGL is unavailable or the scene crashes.
export class SceneBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { failed: false }
    }
    static getDerivedStateFromError() {
        return { failed: true }
    }
    render() {
        return this.state.failed ? this.props.fallback : this.props.children
    }
}
