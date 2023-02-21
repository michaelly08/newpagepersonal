import React, {useEffect} from 'react'

const WorkExperience = () => {
    


    

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("workexperience-show");
                }
                // else {
                //     entry.target.classList.remove("show");
                // }
            })
        })
    
        const hiddenElements = document.querySelectorAll(".workexperience-hidden");
        hiddenElements.forEach((el) => observer.observe(el))
    })
    

    




    return (
    <section className="workexperience-container" id="experience">
        <div className="workexperience-wrapper">


            <div className="workexperience-title">
                WORK EXPERIENCE
            </div>

            <div className="workexperience-subtitle">
                Companies I have worked for in the past.
            </div>

            <div className="workexperience-numbers">
                <div className="workexperience-number workexperience-hidden">
                    <div>01</div>
                    <div><span style={{color: "yellow"}}>Grow More Properties & Investments</span>, Front-End Developer</div>
                    <div>My role involved designing and developing the front-end of the website, ensuring that it was visually appealing and user-friendly. I worked closely with a back-end developer to integrate the necessary functionality and ensure seamless operation of the website.</div>
                </div>

                <div className="workexperience-number workexperience-hidden">
                    <div>02</div>
                    <div><span style={{color: "limegreen"}}>Reesby</span>, Front-End/App Developer</div>
                    <div>During my internship at Reesby, I took on several important projects that helped the company and their clients. My main focus was on developing applications using JavaScript, I was able to contribute to the success of Reesby by providing innovative and effective solutions through my work on these projects.</div>
                </div>
            </div>

        </div>

    </section>
    )
}

export default WorkExperience