import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import BikeCard from "../../images/bike.jpg";
import styles from "../../styles/page2.module.css";

function Cards() {

  const data = useStaticQuery(graphql`
  query {
    allContentfulPage02Container {
      edges {
        node {
          image {
            file {
              url
            }
          }
          date
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
    <div className={styles.maindiv}>
      <h1 style={{fontWeight: 600}}> MORE LIKE THIS </h1>
      {data.allContentfulPage02Container.edges.map((edge) => {
        console.log(edge)
        return (
          <div className={styles.cardDiv}>
            <img height={220} src={edge?.node?.image?.file?.url} alt="bike" />
            <div className={styles.cardContent}>
              <h2 style={{fontWeight: '700'}}>{edge.node.heading}</h2>
              <p>{edge.node.date}</p>
              <p style={{fontFamily: 'Roboto Condensed, sans-serif', letterSpacing: '1px', wordSpacing: '2px', fontSize: '14px'}}>
                {edge.node.paragraph.paragraph}
              </p>
            </div>
          </div>
        )
     })}
    <br />
    </div>
  );
}

export default Cards;