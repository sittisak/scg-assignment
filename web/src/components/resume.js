import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import profile from './images/profile.jpeg'
import { cvData } from '../utils/cv-data' 


const TitleWithList = (props) => {
  const styles = {
    root: {
      marginTop: '16px',
      marginBottom: '24px',
    },
    title: {
      textAlign: 'center',
    },
    list: {
      margin: '0px',
      color: '#555',
      textAlign: 'center',
    },
  }
  return (
    <div style={styles.root}>
      <h6 style={styles.title}>{props.title}</h6>
      {props.list.map(item => (
        <p style={styles.list}>{item}</p>
      ))}
    </div>
  )
}

const TitleXLWithList = (props) => {
  const styles = {
    root: {
      marginTop: '16px',
      marginBottom: '24px',
    },
    title: {
      margin: '0px',
      textAlign: 'center',
    },
    list: {
      margin: '0px',
      color: '#555',
      textAlign: 'center',
    },
  }
  return (
    <div style={styles.root}>
      <h5 style={styles.title}>{props.title}</h5>
      {props.list.map(item => (
        <p style={styles.list}>{item}</p>
      ))}
    </div>
  )
}

const TitleWithParagraph = (props) => {
  const styles = {
    root: {
      marginBottom: '24px',
    },
    title: {
      margin: '0px',
      fontWeight: 'bold',
    },
    paragraph: {
      color: '#555',
      lineHeight: 1.3,
      textIndent: '48px',
    },
  }
  return (
    <div style={styles.root}>
      <h5 style={styles.title}>{props.title}</h5>
      <p style={styles.paragraph}>{props.paragraph}</p>
    </div>
  )
}

const TitleWithChildrenr = (props) => {
  const styles = {
    root: {
      marginBottom: '24px',
    },
    title: {
      margin: '0px',
      fontWeight: 'bold',
    },
  }
  return (
    <div style={styles.root}>
      <h5 style={styles.title}>{props.title}</h5>
      {props.children}
    </div>
  )
}

const Ul = (props) => {
  const styles = {
    li: {
      color: '#555',
      lineHeight: 1.3,
    },
  }
  return (
    <ul>
      {props.list.map((item) => (
        <li style={styles.li} key={item}>{item}</li>
      ))}
    </ul>
  )
}

const SubtitleWithUl = (props) => {
  const styles = {
    root: {
      marginBottom: '24px',
    },
    subTitlePrimary: {
      margin: '0px',
      lineHeight: 1.3,
    },
    subTitleSecordary: {
      margin: '0px',
      lineHeight: 1.3,
      color: '#555',
    },
    li: {
      color: '#555',
      lineHeight: 1.3,
    },
  }
  return (
    <div style={styles.root}>
      {props.subTitlePrimary && 
        <p style={styles.subTitlePrimary}>{props.subTitlePrimary}</p>}
      {props.subTitleSecordary && 
        <p style={styles.subTitleSecordary}>{props.subTitleSecordary}</p>}
      <Ul list={props.list} />
    </div>
  )
}

const Resume = () => {
  const styles = {
    leftInfoContainer: {
      borderRight: '1px solid',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    img: {
      width: '100%',
    },
  }
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col style={styles.leftInfoContainer} md={3} >
            <div>
              <Image style={styles.img} src={profile} rounded />
              <TitleXLWithList
                title={`${cvData.name} (${cvData.nickName})`}
                list={[cvData.educationTitle, `Age ${cvData.age} yaers old`]}/>
              <TitleWithList
                title='Hard Skills'
                list={cvData.hardSkills} />
              <TitleWithList
                title='Soft Skills'
                list={cvData.softSkills} />
              <TitleWithList
                title='Hobbies'
                list={cvData.hobbies} />
            </div>
            <div>
              <TitleWithList
                title='Contact'
                list={[cvData.contact.phone, cvData.contact.email]} />
              <TitleWithList
                title='Reference'
                list={[cvData.reference.linkedin, cvData.reference.github]} />
            </div>  
          </Col>
          <Col md={9}>
            <TitleWithParagraph 
              title='Personal statement'
              paragraph={cvData.personalStatement}/>
            <TitleWithChildrenr title='Technical Skills Highlight'>
              <SubtitleWithUl
                subTitlePrimary='Blockchain'
                list={cvData.technicalSkillsHighlight.blockchain}/>
              <SubtitleWithUl
                subTitlePrimary='Front-end'
                list={cvData.technicalSkillsHighlight.frontEnd}/>
              <SubtitleWithUl
                subTitlePrimary='Back-end'
                list={cvData.technicalSkillsHighlight.backEnd}/>
              <SubtitleWithUl
                subTitlePrimary='Other'
                list={cvData.technicalSkillsHighlight.Other}/>
            </TitleWithChildrenr>
            <TitleWithChildrenr title='Experience Highlight'>
              {cvData.experienceHighlight.map(experience => (
                <SubtitleWithUl
                  subTitlePrimary={`${experience.title}`}
                  subTitleSecordary={`${experience.companyName} - ${experience.time}`}
                  list={experience.experience}/>
              ))}
            </TitleWithChildrenr>
            <TitleWithChildrenr title='Education'>
              {cvData.education.map((education) => (
                <SubtitleWithUl
                  subTitlePrimary={`${education.title}`}
                  list={[education.description]}/>
              ))}
            </TitleWithChildrenr>
            <TitleWithChildrenr title='Activity'>
              <Ul list={cvData.activity} />
            </TitleWithChildrenr>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Resume
