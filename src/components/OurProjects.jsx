import { useState } from "react";
import "../componentStyle.css";

const images = [
    "img.jpg",
    "img_1.jpg",
    "img_2.jpg",
    "img_3.jpg",
    "img_4.jpg",
    "img_5.jpg",
    "img_6.jpg",
    "img_7.jpg"
];

export function OurProjects() {
    const [centerIndex, setCenterIndex] = useState(3); // Start with the 4th image as center

    const handlePrev = () => {
        setCenterIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCenterIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="ourProjects">
            <h2 className="sectionTitle">Դիզայնի օրինակներ</h2>
            <div className="sliderContainer">
                <button className="navBtn" onClick={handlePrev}>‹</button>
                <div className="projectsGallery">
                    {images.map((img, index) => {
                        const offset = (index - centerIndex + images.length) % images.length;
                        const position = offset <= Math.floor(images.length / 2) ? offset : offset - images.length;
                        let className = "projectImage";
                        if (position === 0) className += " center";
                        else if (position === 1) className += " right";
                        else if (position === -1) className += " left";
                        else className += " side";
                        return (
                            <div
                                key={index}
                                className={className}
                                style={{
                                    backgroundImage: `url(./images/projects/${img})`,
                                    transform: `translateX(${position * 220}px)`, // Spacing for side images
                                }}
                            ></div>
                        );
                    })}
                </div>
                <button className="navBtn" onClick={handleNext}>›</button>
            </div>
        </div>
    );
}