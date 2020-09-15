import { Link } from "gatsby";
import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import styles from "../../styles/page2.module.css";

function CenterBody() {

  const data = useStaticQuery(graphql`
  query {
    allContentfulPage02MainHead {
      edges {
        node {
          mainHeading
        }
      }
    }
    allContentfulPage02Content {
      edges {
        node {
          heading
          paragraph {
            paragraph
          }
        }
      }
    }
    allContentfulPage02Content02 {
      edges {
        node {
          heading
          paragraph {
            paragraph
          }
        }
      }
    }
  }
  `)
  
  return (
    <div className={styles.bodymain}>
      <div className={styles.bodyContent}>
      {data.allContentfulPage02MainHead.edges.map((edge) => {
        return (
            <h1 style={{fontWeight: '700'}}>
            <span>
                {edge.node.mainHeading}
            </span>
            </h1>
        )
      })}
      <br />
        {data.allContentfulPage02Content.edges.map((edge) => {
          return(
            <div>
              <h2 style={{fontWeight: '600'}}>{edge.node.heading}</h2>
              <br />
              <p style={{fontFamily: 'Roboto Condensed, sans-serif', letterSpacing: '1px', wordSpacing: '2px'}}>{edge.node.paragraph.paragraph}</p>
            </div>
          )
        })}
          <ul>
            <li style={{fontFamily: 'Roboto Condensed, sans-serif', letterSpacing: '1px', wordSpacing: '2px'}}> List item one</li>
            <li style={{fontFamily: 'Roboto Condensed, sans-serif', letterSpacing: '1px', wordSpacing: '2px'}}>List item two</li>
            <li style={{fontFamily: 'Roboto Condensed, sans-serif', letterSpacing: '1px', wordSpacing: '2px'}}> List item three</li>
          </ul>
          <br />
        {data.allContentfulPage02Content02.edges.map((edge) => {
            return(
          <div>
            <h2 style={{fontWeight: '600'}}>{edge.node.heading}</h2>
            <br />
            <p style={{fontFamily: 'Roboto Condensed, sans-serif', letterSpacing: '1px', wordSpacing: '2px'}}>{edge.node.paragraph.paragraph}</p>
          </div>
          )
        })}
        </div>
      )
    </div>
  );
}

export default CenterBody;