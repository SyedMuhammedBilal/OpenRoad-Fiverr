import React from "react";
import BikeCard from "../images/bike.jpg";
import { graphql, useStaticQuery } from 'gatsby';
import styles from "../styles/Card2.module.css";

function Cards() {

  const data = useStaticQuery(graphql`
  query MyQuery {
    allContentfulBlogContainer02 {
      edges {
        node {
          dates
          description {
            description
          }
          image {
            file {
              url
            }
          }
          title
        }
      }
    }
  }
  `)

  return (
    <div className={styles.maindiv1}>
    {data.allContentfulBlogContainer02.edges.map((edge) => {
      console.log(edge)
      return (
      <div className={styles.cardDiv1}>
        <img height={120} src={edge?.node?.image?.[0]?.file?.url} alt="bike" />
        <div className={styles.cardContent1}>
          <h2 style={{fontWeight: '600'}}>{edge.node.title}</h2>
          <p>{edge.node.dates}</p>
          <p style={{fontFamily: 'Roboto Condensed, sans-serif', letterSpacing: '1px', wordSpacing: '2px'}}>
            {edge.node.description.description}
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