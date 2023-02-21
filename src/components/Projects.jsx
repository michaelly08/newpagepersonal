import React, { useEffect } from 'react'
import Project1 from "./img/Project1.jpg"
import Project2 from "./img/Project2.jpg"
import Project3 from "./img/Project3.jpg"
import Project4 from "./img/Project4.jpg"
import Project5 from "./img/Project5.jpg"





const Projects = () => {

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
    <div className="projects-container" id="projects">
        <div className="projects-wrapper">

            <div className="projects-side">
                <div className="projects-titles">
                    <div className="workexperience-title">
                        MY PROJECTS
                    </div>
                    <div className="workexperience-subtitle">
                        Work that I have done
                    </div>
                </div>

                <div className="projects-box skillset-hidden">
                    <a href="https://www.growmoreproperties.com.au/" target="_blank" className="projects-link">
                        <div className="projects-image">
                            <img src={Project1}></img>
                        </div>
                        <div className="projects-texts">
                            <div className="projects-name">
                                Grow More Properties & Investments
                            </div>
                            <div className="projects-description">
                                Connects clients with expert realtors and makes property search easy with user-friendly interface and advanced search features.
                            </div>
                        </div>
                    </a>
                </div>

                <div className="projects-box skillset-hidden">
                    <a href="https://malihaiapps.netlify.app/" target="_blank" className="projects-link">

                        <div className="projects-image">
                            <img src={Project3}></img>
                        </div>
                        <div className="projects-texts">
                            <div className="projects-name">
                                Extract Contacts App
                            </div>
                            <div className="projects-description">
                                Extracts emails, phone numbers, and websites from any text, making contact collection effortless. Streamline your contacts in seconds!
                            </div>
                        </div>
                    </a>
                </div>


                




                
            </div>

            <div className="projects-side">
                <a href="https://malihaiapps.netlify.app/" target="_blank" className="projects-link">
                    <div className="projects-box skillset-hidden">
                        <div className="projects-image">
                            <img src={Project2}></img>
                        </div>
                        <div className="projects-texts">
                            <div className="projects-name">
                                Email Guesser
                            </div>
                            <div className="projects-description">
                                Revolutionizes email search by guessing based on user input and validating existence for effective communication. Get accurate emails effortlessly!
                            </div>
                        </div>
                    </div>
                </a>



                <a href="https://malihaiapps.netlify.app/" target="_blank" className="projects-link">
                    <div className="projects-box skillset-hidden">
                        <div className="projects-image">
                            <img src={Project4}></img>
                        </div>
                        <div className="projects-texts">
                            <div className="projects-name">
                                XLXS to CSV
                            </div>
                            <div className="projects-description">
                                Simplifies data management by quickly converting xlsx to csv, saving time and improving efficiency. Transform your files with ease!
                            </div>
                        </div>
                    </div>
                </a>



                <a href="https://malihaiapps.netlify.app/" target="_blank" className="projects-link">
                    <div className="projects-box skillset-hidden">
                        <div className="projects-image">
                            <img src={Project5}></img>
                        </div>
                        <div className="projects-texts">
                            <div className="projects-name">
                                Contacts Validator
                            </div>
                            <div className="projects-description">
                                Makes contact validation a breeze by quickly checking the existence of phone numbers and email addresses. Streamline communication with confidence.
                            </div>
                        </div>
                    </div>
                </a>



            </div>
            
        </div>
    </div>
  )
}

export default Projects