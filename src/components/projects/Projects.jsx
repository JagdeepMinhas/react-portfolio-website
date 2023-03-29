import React from 'react'
import IMG1 from '../../assets/arcadegame.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/Machinemodel.jpg'

import './projects.css'
const data = [
  {
    id: 1,
    image: IMG1,
    title: "2D arcade game",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id:2,
    image: IMG3,
    title: "Supervied Machine Learning Model",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 3,
    image: IMG2,
    title: "Portfolio Website",
    github: "https://github.com",
    demo: "https://github.com"
  }
 

]
const Projects = () => {
  return (
    <section id="projects">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className='container projects__container'>
        {
          data.map(({ id, image, title, github, deom }) => {
            return (
              <article key ={id} className='projects_item'>
                <div className='projects__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3> {title}</h3>
                <div className='project__item-cta'>
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={deom} className='btn btn-primary' target="_blank">Live Demo</a>
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