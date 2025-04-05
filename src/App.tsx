import React from 'react'
import './App.css'
// import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { AppNavbar } from './components/Navbar'

function App() {
  const handleEmailClick = () => {
    window.location.href = "mailto:webdev.lincolnbunker@gmail.com?subject=Let's Connect";
  };


  const handleGitHubClick = () => {
      window.open('https://github.com/LincolnJBunker')
  }

  const handleLinkedInClick = () => {
      window.open('https://www.linkedin.com/in/lincoln-bunker-9a13302a9/')
  }

  const handleResumeClick = () => {
      window.open("/portfolio-lincoln/Resume%20-%20Lincoln%20Bunker.pdf", "_blank")
  }

  const styles: any = {
    linksContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        // marginTop: "50px",
        flexWrap: "nowrap", 
        overflowX: "auto", 
    },
    link: {
        // fontSize: "1.3rem",
        cursor: "pointer",
        transition: "color 0.3s",
        padding: "5px 3px",
        whiteSpace: "nowrap",
    },
};

  return (
    <React.Fragment>
      <BrowserRouter basename="/portfolio-lincoln">
        <AppNavbar />
        <div style={styles.linksContainer}>
          <h2 onClick={handleEmailClick} style={styles.link}>Email</h2>
          <h2 onClick={handleGitHubClick} style={styles.link}>GitHub</h2>
          <h2 onClick={handleLinkedInClick} style={styles.link}>LinkedIn</h2>
          <h2 onClick={handleResumeClick} style={styles.link}>Resume</h2>
        </div>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
