import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import { cvData } from '../utils/cv-data' 


const ProjectTimeline = () => {
  const styles = {
    titleHead: {
      textAlign: 'center',
      margin: '0px',
    },
    row: {
      padding: '16px 48px',
    },
    subtitleHead: {
      textAlign: 'center',
      color: '#555',
    },
    projectName: {
      margin: '0px',
      display: 'inline-block',
    },
    block: {
      width: '100%',
    },
    blockHeader: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    diver: {
      width: '100%',
      margin: '6px 0px',
      borderBottom: '1px solid',
    },
    textInline: {
      display: 'inline-block',
      color: '#555',
      margin: '0px',
      fontWeight: 400,
    },
    textItalic: {
      display: 'inline-block',
      color: '#555',
      fontStyle: 'italic',
      margin: '0px',
    },
    paragraph: {
      color: '#555',
      lineHeight: 1.3,
      textIndent: '48px',
      margin: '0px',
    },
    subtitle: {
      fontWeight: 'bold',
      margin: '0px',
    },
    ul: {
      margin: '0px',
    },
    li: {
      color: '#555',
      margin: '0px',
    },
  }
  return (
    <Card>
      <Card.Body>
        <h3 style={styles.titleHead}>Projects Timeline</h3>
        <p style={styles.subtitleHead}>2012-2019</p>
        {cvData.projectsTimeline.map((project, index) => (
          <Row style={styles.row}>
            <div style={styles.blockHeader}>
              <div>
                <h2 style={styles.projectName}>{project.name}&nbsp;</h2>
                <p style={styles.textInline}>{project.time}</p>
                {project.present && <p style={styles.textItalic}>, Present</p>}
              </div>
              <p style={styles.textInline}>No.{26-index}</p>
            </div>
            <div>
              <p style={styles.textItalic}>
                {project.title}
                at 
                {project.companyName}
              </p>
            </div>
            <div style={styles.diver}></div>
            {project.description.map(des =>(
              <p style={styles.paragraph}>{des}</p>
            ))}
            {project.referent &&
              <div>
                <p style={styles.subtitle}>Referent</p>
                <ul style={styles.ul}>
                  {project.referent.map(item => (
                    <li style={styles.li}>{item}</li>
                  ))}
                </ul>
              </div>
            }
            {project.location &&
              <div style={styles.block}>
                <p style={styles.subtitle}>
                  Location&nbsp;
                  <p style={styles.textInline}>{project.location}</p>
                </p>
              </div>
            }
            {project.technologies &&
              <div style={styles.block}>
                <p style={styles.subtitle}>Technologies</p>
                <ul style={styles.ul}>
                  {project.technologies.map(item => (
                    <li style={styles.li}>{item}</li>
                  ))}
                </ul>
              </div>
            }
            {project.experienceHighlights &&
              <div style={styles.block}>
                <p style={styles.subtitle}>Experience Highlights</p>
                <ul style={styles.ul}>
                  {project.experienceHighlights.map(item => (
                    <li style={styles.li}>{item}</li>
                  ))}
                </ul>
              </div>
            }
            
          </Row>
        ))}
      </Card.Body>
    </Card>
  )
}

export default ProjectTimeline
