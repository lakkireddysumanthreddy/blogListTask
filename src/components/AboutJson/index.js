import './index.css'

const About = () => {
  const convertDataIntoJSON = event => {
    event.preventDefault()
    const form = document.querySelector('form')
    form.addEventListener('submit', convertDataIntoJSON)
    console.log(form.innerText)
  }
  return (
    <div className="about-container">
      <h1 className="about-heading">AboutJson</h1>
      <form onSubmit={convertDataIntoJSON}>
        <p className="question">
          which monkey would you rather have as a pet ?
        </p>
        <input name="name" id="capuchin" type="radio" />
        <label htmlFor="capuchin">Capuchin</label>
        <br />
        <input name="name" id="mandril" type="radio" />
        <label htmlFor="mandril">Mandril</label>
        <br />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default About
