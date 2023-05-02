import { useEffect } from "react";


function ImageSlider({ images = [] }) {

    console.log(images);

    let slideIndex = 0;
    function moveToSlide() {
        let i;
        let slides = document.getElementsByClassName("slides");
        if (slides.length >= 1) {
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex - 1].style.display = "block";
        }
    }

    useEffect(() => {
        moveToSlide()
    })

    return (
        <>
            <div className="slide-container">
                {
                    images.map((image) => <div key={image} className="slides fade"> <img src={image} /></div>)
                }
                <a className="prev" onClick={moveToSlide}>&#10094;</a>
                <a className="next" onClick={moveToSlide}>&#10095;</a>
            </div>
        </>
    );
}

export default ImageSlider;