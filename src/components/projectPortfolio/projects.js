import React from "react"
import ImageSlider from "./imageSlider"
import ProjectFeatures from "./projectFeatures"
import { ThemeProvider } from "../contexts/themeContext"

const Projects = ({ details }) => {
  const { title, github, page, description, img, facts } = details
  const ms = window.matchMedia("(max-width: 570px)")
  return (
    <ThemeProvider>
      {ms.matches && <h1 className="project-title">{title}</h1>}
      <ImageSlider images={img} />
      <ProjectFeatures
        title={title}
        github={github}
        page={page}
        description={description}
        facts={facts}
      />
    </ThemeProvider>
  )
}
export default Projects