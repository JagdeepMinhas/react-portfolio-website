import React from 'react'
import IMG1 from '../../assets/arcadegame.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/Machinemodel.jpg'
import IMG4 from '../../assets/CShell.jpg'
import IMG5 from '../../assets/MultiThreadAudioMixer.jpg'
import IMG6 from '../../assets/SweepAi.jpg'
import IMG7 from '../../assets/Deny and Conquer.jpg'
import IMG8 from '../../assets/9MenMorris.jpg'
import IMG9 from '../../assets/ClassificationProject.jpg'
import './projects.css'
const data = [
  {
    id: 1,
    image: IMG4,
    title: "CShell: Command Line interpreter ",
    github: "https://github.com/JagdeepMinhas/Cshell-Command-Line-Interpreter.git",
    demo: "https://github.com/JagdeepMinhas/Cshell-Command-Line-Interpreter.git"
  },
  { 
    id:2,
    image: IMG5,
    title: "MultiThreadAudio-Mixer",
    github: "https://github.com/JagdeepMinhas/ThreadedAudio-Mixer.git",
    demo: "https://github.com/JagdeepMinhas/ThreadedAudio-Mixer.git"
  },
  {
    id: 3,
    image: IMG9,
    title: "Classifiation Project",
    github: "https://github.com/JagdeepMinhas/Classification-Project.git",
    demo: "https://github.com/JagdeepMinhas/Classification-Project.git"
  },
  {
    id: 4,
    image: IMG8,
    title: "9MenMorris",
    github: "https://github.com/JagdeepMinhas/9MenMorris.git",
    demo: "https://github.com/JagdeepMinhas/9MenMorris.git"
  },
  {
    id: 5,
    image: IMG6,
    title: "SweepAI: Intelligent Clenaing System",
    github: "https://github.com/JagdeepMinhas/SweepAI-Intelligent-Cleaning-System.git",
    demo: "https://github.com/JagdeepMinhas/SweepAI-Intelligent-Cleaning-System.git"
  },
  {
    id: 6,
    image: IMG3,
    title: "Intrusion Detection System using R",
    github: "https://github.com/JagdeepMinhas/Intrusion-Detection-system-Using-R.git",
    demo: "https://github.com/JagdeepMinhas/Intrusion-Detection-system-Using-R.git"
  },
  {
    id: 7,
    image: IMG7,
    title: "Deny and Conquer",
    github: "https://github.com/EJNicolas/CMPT371-Project.git",
    demo: "https://github.com/EJNicolas/CMPT371-Project.git"
  },
  {
    id: 8,
    image: IMG1,
    title: "Underwater Adventures: 2D Arcade Game",
    github: "https://github.com/JagdeepMinhas/UnderwaterAdventures.git",
    demo: "https://github.com/JagdeepMinhas/UnderwaterAdventures.git"
  },
  {
    id: 9,
    image: IMG2,
    title: "Portfolio Website",
    github: "https://github.com/JagdeepMinhas/react-portfolio-website.git",
    demo: "https://github.com/JagdeepMinhas/react-portfolio-website.git"
  }
 
 

]
const Projects = () => {
  return (
    <section id="projects">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className='container projects__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key ={id} className='projects_item'>
                <div className='projects__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3> {title}</h3>
                <div className='project__item-cta'>
                  <a href={github} className='btn' target="_blank">Github</a>
            
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Projects