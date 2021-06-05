import React from "react";
import ExperienceItem from "./ExperienceItem";

function MainBody() {
  return (
    <div className="mainBody">
      <div className="mainBody__experience">
        <h2 className="experience__heading textAccent">Projects</h2>
        <ExperienceItem>
          <h3 className="experience__item__name">
            House Rental CRUD App:
            <em>
              {" "}
              <a
                target="_blank"
                href="https://nextlevelnextjs-course-app.vercel.app"
              >
                nextlevelnextjs-course-app.vercel.app
              </a>
            </em>
          </h3>
          <ul className="experience__item__list">
            <li>
              App that allows logged in user to create, edit, and delete house
              listings. Listed houses are shown on a mapbox map on the home
              page. Built with <b>Typescript, React.js, and Next.js</b>
            </li>
            <li>
              House listings are stored in a <b>PostgreSQL</b> database deployed
              on Heroku which is modeled and accessed through <b>Prisma</b>
            </li>
            <li>
              Data from the database is served to the front-end via a
              <b> TypeGraphQL</b> layer using Next.js serverless functions
            </li>
            <li>
              Firebase login implemented with HTTPOnly, sameSite cookies stored
              on the server
            </li>
            <li>
              Google Places API search with Geocoding implemented for house
              listing creation form and map
            </li>
            <li>
              Styled using <b>TailwindCSS</b> which is a utility-first CSS
              framework
            </li>
          </ul>
        </ExperienceItem>
        <ExperienceItem>
          <h3 className="experience__item__name">
            Blog Website:{" "}
            <em>
              <a target="_blank" href="https://datatodev.netlify.app">
                datatodev.netlify.app
              </a>
            </em>
          </h3>
          <ul className="experience__item__list">
            <li>
              Blog website for a data science project made using
              <b> HTML, CSS, and Javascript</b> with <b>Hugo</b> as the static
              site generator
            </li>
          </ul>
        </ExperienceItem>
        <ExperienceItem>
          <h3 className="experience__item__name">
            Resume:{" "}
            <em>
              <a target="_blank" href="https://manan-gup.github.io/resume">
                manan-gup.github.io/resume
              </a>
            </em>
          </h3>
          <ul className="experience__item__list">
            <li>
              This resume was made using <b>React.js</b> and <b>CSS</b>
            </li>
          </ul>
        </ExperienceItem>
        <h2 className="experience__heading textAccent">Previous Experience</h2>
        <ExperienceItem>
          <ul className="experience__item__list">
            <li>
              <b>Senior Research Fellow</b> at Jawaharlal Nehru Centre for
              Advanced Scientific Research, Bangalore <b>(2015-2019)</b>
            </li>
            <li>
              Produced <b>4 publications</b> pertaining to Computational
              Ecology, Evolutionary Theory, Philosophy of Evolution, Population
              Ecology using skills like <b>programming in MATLAB and R</b>,
              statistical modelling, mathematical modelling, and literature
              research
            </li>
          </ul>
        </ExperienceItem>
        <h2 className="experience__heading textAccent">
          Research Publications and Media Coverage
        </h2>
        <ExperienceItem>
          <ul className="experience__item__list">
            <li>
              <b>Publications:</b>{" "}
              <a
                target="_blank"
                href="https://scholar.google.com/citations?user=8Gzkfj0AAAAJ"
              >
                scholar.google.com/citations?user=8Gzkfj0AAAAJ
              </a>
            </li>
            <li>
              <b>Media Coverage:</b>{" "}
              <a
                target="_blank"
                href="https://indiadst.wordpress.com/2017/04/08/indian-contribution-to-debates-on-the-conceptual-foundations-of-evolutionary-biology/"
              >
                DST, Govt of India
              </a>
              ,{" "}
              <a
                target="_blank"
                href="https://www.thehindu.com/sci-tech/science/a-brewing-debate-on-evolution-theory-picks-up-in-india/article17663944.ece"
              >
                The Hindu
              </a>
              , Audio Interview:{" "}
              <a
                target="_blank"
                href="https://indscicomm.blog/podcast/a-soupcon-of-scicomm-with-manan-gupta-on-evolution-and-niche-construction/"
              >
                IndSciComm
              </a>
              /
              <a
                target="_blank"
                href="https://thewire.in/the-sciences/listen-walking-with-elephants-with-manan-gupta"
              >
                The Wire
              </a>
              ,{" "}
              <a
                target="_blank"
                href="https://www.researchmatters.in/as/node/207"
              >
                Research Matters
              </a>
              ,{" "}
              <a
                target="_blank"
                href="https://whyevolutionistrue.com/2017/02/22/niche-construction-does-it-represent-a-vastly-neglected-phenomenon-in-evolutionary-thought/"
              >
                Why Evolution is True Blog
              </a>
            </li>
          </ul>
        </ExperienceItem>
        <h2 className="experience__heading textAccent">Workshops</h2>
        <ExperienceItem>
          <ul className="experience__item__list">
            <li>
              India Complex Systems Winter School (2015) conducted by the Santa
              Fe Institute at IISER, Mohali
            </li>
            <li>
              Workshop on Non-Linear Dynamics in Biology (2013) conducted by the
              National Mathematics Initiative, IISc, Bangalore
            </li>
          </ul>
        </ExperienceItem>
      </div>
      <div className="mainBody__sideBar">
        <h2 className="experience__heading textAccent">Skills</h2>
        <ExperienceItem>
          <h3 className="experience__item__name">Programming Languages</h3>
          <p className="experience__item__text">
            Javascript, Typescript, HTML, CSS, GraphQL, R, Python, MATLAB
          </p>
        </ExperienceItem>
        <ExperienceItem>
          <h3 className="experience__item__name">
            Libraries, Frameworks and Tools
          </h3>
          <p className="experience__item__text">
            React.js, Node.js, Next.js, Express, Hugo, Git/Github, Netlify,
            Vercel, Webpack, TailwindCSS, BEM CSS
          </p>
        </ExperienceItem>
        <ExperienceItem>
          <h3 className="experience__item__name">Other Skills</h3>
          <p className="experience__item__text">
            Teaching, mentorship, data analysis, data visualization, machine
            learning, numerical and agent-based simulations
          </p>
        </ExperienceItem>
        <h2 className="experience__heading textAccent">Education</h2>
        <ExperienceItem>
          <p className="experience__item__text">
            <b>MS (by Research)</b> in Biology from{" "}
            <b>Jawaharlal Nehru Centre for Advanced Scientific Research</b>,
            Bangalore (2012-2015)
          </p>
          <p className="experience__item__text">
            <b>BSc (Honours)</b> in Chemistry from
            <b> Hindu College, Delhi University</b> (2009-2012)
          </p>
        </ExperienceItem>
        <h2 className="experience__heading textAccent">Interests</h2>
        <ExperienceItem>
          <p className="experience__item__text">
            Evolutionary Biology, Philosophy of Biology, football, reading
          </p>
        </ExperienceItem>
      </div>
    </div>
  );
}

export default MainBody;
