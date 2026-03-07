import React from 'react';
import './Skills.css';
import SectionHeading from '../SectionHeading/SectionHeading';
import {
  FaCode,
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaLeaf,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaCloud,
  FaCogs,
} from 'react-icons/fa';
import { technicalSkills } from '../../constants/portfolioData';

const iconMap = {
  java: FaJava,
  python: FaPython,
  c: FaCode,
  javascript: FaJs,
  react: FaReact,
  express: FaNodeJs,
  fastapi: FaLeaf,
  mysql: FaDatabase,
  git: FaGitAlt,
  github: FaGithub,
  'github-actions': FaCogs,
  putty: FaCogs,
  winscp: FaCogs,
  aws: FaCloud,
};

const groupedSkillNames = {
  'Programming Languages': ['Java', 'Python', 'C', 'JavaScript'],
  'Frameworks and Backend': ['React JS', 'Express JS', 'FastAPI', 'MySQL'],
  'Tools and Cloud': ['Git', 'GitHub', 'GitHub Actions', 'PuTTY', 'WinSCP', 'AWS'],
};

const Skills = () => {
  const skillsByName = new Map(technicalSkills.map((skill) => [skill.name, skill]));

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <SectionHeading heading="Skills" />

        <div className="skills-groups">
          {Object.entries(groupedSkillNames).map(([groupTitle, names]) => {
            const groupSkills = names
              .map((name) => skillsByName.get(name))
              .filter(Boolean);

            return (
              <section className="skills-group" key={groupTitle}>
                <h3 className="skills-group-title">{groupTitle}</h3>
                <div className="skills-grid">
                  {groupSkills.map((skill) => {
                    const Icon = iconMap[skill.icon] || FaCode;

                    return (
                      <article className="skill-card reveal-card" key={skill.name}>
                        <span className="skill-icon" aria-hidden="true">
                          <Icon />
                        </span>
                        <p className="skill-name">{skill.name}</p>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
