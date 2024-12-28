import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import Homzy from '../../assets/Homzy_Logo_WhiteBackground.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Viberr"
          p="(Coming Soon)"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Fresh Burger"
          p="(Coming Soon)"
        />
        <ProjectCard
          src={Homzy}
          link="https://real-estate-reactjs-website-project.vercel.app/"
          h3="Homzy"
          p="Real Estate Website"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="(Coming Soon)"
        />
      </div>
    </section>
  );
}

export default Projects;
