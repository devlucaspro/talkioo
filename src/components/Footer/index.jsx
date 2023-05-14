import React from 'react'
import './footer.css'

const Footer = () => {

  const date = new Date().getFullYear();

  return (
    <footer>
      <div>
        <ul>
          <li><a target='blank' href="https://www.linkedin.com/in/devlucaspro"><i className="fa-brands fa-linkedin fa-lg"></i></a></li>
          <li><a target='blank' href="https://github.com/devlucaspro"><i className="fa-brands fa-github fa-lg"></i></a></li>
          <li><a target='blank' href="https://lucasdeveloper.netlify.app/"><i className="fa-solid fa-code fa-lg"></i></a></li>
        </ul>
      </div>
      <div>
        <p>&copy; All rights reserved, Lucas Ribeiro. {date}</p>
      </div>
    </footer>
  )
}

export default Footer