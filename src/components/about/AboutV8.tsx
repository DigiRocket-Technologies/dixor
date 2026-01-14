import { useEffect, useRef, useState } from "react";
import ModalVideo from "react-modal-video";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const AboutV8 = () => {
    const [isOpen, setOpen] = useState(false)
    const homeContainerRef = useRef<HTMLDivElement | null>(null)

    const [iframeHeight, setIframeHeight] = useState(790)

    useEffect(() => {
        const handleResize = () => {
            setIframeHeight(window.innerWidth < 700 ? 490 : 790)
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])


    useEffect(() => {
        if (!homeContainerRef.current) return

        const ctx = gsap.context(() => {
            gsap.set(".video-wrapper", {
                width: "50%",
                opacity: 0.5,
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: homeContainerRef.current,
                    start: "top 80%",
                    end: "bottom 40%",
                    scrub: 1,
                    // markers: true,
                },
            })

            tl.to(".video-wrapper", {
                width: "100%",
                opacity: 1,
                ease: "power2.out",
            })
        }, homeContainerRef)

        return () => ctx.revert()
    }, [])

    return (
        <>
            <div style={{ backgroundColor: "black", height: "auto" }} className="overflow-hidden">
                <div className="relative overflow-hidden" style={{ height: "auto" }}>
                    <div className="home-container" ref={homeContainerRef} style={{ width: "100%", height: "auto" }}>
                        <div className="video-wrapper" style={{ width: "100%", maxWidth: "100%", height: "auto" }}>
                            <iframe
                                width="100%"
                                height={iframeHeight}
                                src="https://www.youtube.com/embed/ZSNXdPb2rAU?autoplay=1&mute=1&loop=1&playlist=ZSNXdPb2rAU&playsinline=1&rel=0&modestbranding=1&vq=hd720"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="autoplay; encrypted-media; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div >

            <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                videoId="izTDbJ23_ws"
                onClose={() => setOpen(false)}
            />
        </>
    )
}

export default AboutV8;
