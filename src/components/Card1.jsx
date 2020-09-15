import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import styles from '../styles/cardbox.module.css'
import bike from '../images/bike.jpg'

function Card1() {

  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogContainer {
      edges {
        node {
          image {
            file {
              url
            }
          }
          title
          description {
            description
          }
          date
        }
      }
    }
  }
  `)

    return (
        <>
        {/*<section style={{marginTop: '12%'}} classNames="text-gray-700 body-font">
        <div classNames="container px-5 py-24 mx-auto">
        <div classNames="flex flex-wrap -m-4">
        <div classNames="p-4 md:w-1/3">
            {data.allContentfulBlogContainer.edges.map((edge) => {
              return (
                <div style={{border: '2px solid black'}} classNames="h-full border-2 border-black-600 rounded-lg overflow-hidden">
                 <img src={edge?.node?.image?.[0]?.file?.url} classNames="lg:h-48 md:h-36 w-full object-cover object-center" alt="pic" />
                  <div classNames="p-6">
                    <h2 classNames="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{edge.node.date}</h2>
                    <h1 classNames="title-font text-lg font-medium text-gray-900 mb-3">{edge.node.title}</h1>
                    <p classNames="leading-relaxed mb-3">{edge.node.description.description}</p>
                  </div>
                </div>
                )
              })}
              </div>
            </div>
        </div>
      </section>*/}
      <div className={styles.mainboxes}>
      {data.allContentfulBlogContainer.edges.map((edge) => {
        return (
         <div className={styles.boxes}>
         <img height={200} src={edge?.node?.image?.[0]?.file?.url} alt="bike" />
          <div className={styles.innertext}>
          <h1 style={{fontWeight: '600'}}> {edge.node.title} </h1>
          <p style={{fontFamily: 'Roboto Condensed, sans-serif', letterSpacing: '1px', wordSpacing: '2px'}}>
            {edge.node.description.description}
          </p>
        </div>
      </div>
      )
      })}
      </div>
      </>
    )
}

export default Card1
