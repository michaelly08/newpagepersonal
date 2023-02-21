import React, {useEffect} from 'react'

const Skillsets = () => {


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("skillset-show");
                }
                // else {
                //     entry.target.classList.remove("skillset-show");
                // }
            })
        })
    
        const hiddenElements = document.querySelectorAll(".skillset-hidden");
        hiddenElements.forEach((el) => observer.observe(el))
    })




  return (
    <div className="skillset-container">
        <div className="skillset-wrapper">

            <div className="skillset-titles">
                <div className="skillset-title">
                    SKILLSET
                </div>

                <div className="skillset-subtitle">
                    Equiped with a diverse and promising skill-set. Results-driven web developer dedicated to building and optimizing user-focused websites and applications.
                </div>
            </div>

            <div className="skillset-lists">
                <div className="skillset-item skillset-hidden">
                    <div>
                        <i className="skillset-icon ri-window-fill"></i>
                    </div>
                    <div>
                        Web Development
                    </div>
                    <div>
                        I ensure every website built is unique and can provide a flexible custom web development solution to meet your requirements.
                    </div>
                </div>

                <div className="skillset-item skillset-hidden">
                    <div>
                        <i className="skillset-icon ri-smartphone-line"></i>
                    </div>
                    <div>
                        App Development
                    </div>
                    <div>
                        Capable of delivering high-quality, functional and visually appealing applications. Proven track record of success in both standalone and team projects.
                    </div>
                </div>


                <div className="skillset-item skillset-hidden">
                    <div>
                        <i className="skillset-icon ri-calculator-line"></i>
                    </div>
                    <div>
                        Problem Solving
                    </div>
                    <div>
                    Skilled in analyzing complex problems and developing effective solutions using creative thinking. Adept at identifying root causes and delivering results.
                    </div>
                </div>

                <div className="skillset-item skillset-hidden">
                    <div>
                        <i className="skillset-icon ri-pen-nib-line"></i>
                    </div>
                    <div>
                        Web Design
                    </div>
                    <div>
                        Eager web design learner with focus on aesthetics and user experience. Committed to skill improvement and successful designs.
                    </div>
                </div>

                
            </div>
          

        </div>
    </div>
  )
}

export default Skillsets