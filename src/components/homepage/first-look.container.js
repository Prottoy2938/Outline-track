import React, { useContext } from "react"
import AutoTyping from "../features/auto-typing"
import SearchInput from "./search-bar.js"
import { withStyles } from "@material-ui/core/styles"
import styles from "../../styles/homepagetreeStyles"
import { ThemeContext } from "../common/theme.context"
import Example from "../features/rotate-animation"
import PropTypes from "prop-types"

const HomepageTree = ({ classes }) => {
  const { isDarkMode } = useContext(ThemeContext)

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className={classes.container}>
      <div
        className={classes.formContainer}
        style={{ backgroundColor: isDarkMode && "rgba(81, 89, 105, 0.76)" }}
      >
        <form className={classes.form} onSubmit={handleSubmit}>
          <AutoTyping
            strings={[
              "<span>Here are some small web apps that I had created</span>",
              "<span>like: <span style='border-bottom: 2px solid #000000'>Lightsout Game</span></span>",
              "<span>like: <span style='border-bottom: 2px solid #004ade'>Weather App</span></span>",
              "<span>like: <span  style='border-bottom: 2px solid #6b492f'>Pokemon Game</></span>",
              "<span>like: <span style='border-bottom: 2px solid #560059'>Video on scroll - Nayump</></span>",
              "<span>like: <span style='border-bottom: 2px solid #2a2e64'>SignIn Page</></span>",
              "<span>like: <span style='border-bottom: 2px solid #f0c220'>Dad Jokes</></span>",
              "<span>like: <span style='border-bottom: 2px solid #e24645'>TodoList</></span>",
              "<span>like: <span style='border-bottom: 2px solid #724e42'>Vending Machine</></span>",
              "<span>like: <span style='border-bottom: 2px solid #fa5d4b'>Hangman Game</></span>",
              "<span><span style='border-bottom: 2px solid #007165'>I'm tired, search anything you like</></span>",
            ]}
          />

          <SearchInput />
        </form>
      </div>

      <Example isDarkMode={isDarkMode} />
    </div>
  )
}

HomepageTree.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HomepageTree)
