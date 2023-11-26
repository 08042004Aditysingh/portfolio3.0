import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpeg'
import IMG3 from '../../assets/portfolio2.jpg'
import IMG2 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const List=[{id:0,image:IMG1,title:'AcadMix: This is a website developed with React frontend to provide students a common platform to grow in acadmics and technology',Github:'https://github.com/08042004Aditysingh/Acadmix',livedemo:'https://velvety-manatee-46c706.netlify.app/'
},{id:0,image:IMG2,title:'Saathi: A skin disease detecting website for helping people living in rular areas by using a trained ML mode (not deployed)',Github:'https://github.com/08042004Aditysingh/Sathi',livedemo:'https://www.figma.com/file/a8TRlWFRFB646oGbCUsQKf/Untitled?type=design&node-id=1-4&mode=design'
},{id:0,image:IMG3,title:'E-commerse Dashboard: An ecommerse dashboard developed using React Js and syncfusion APIs',Github:'https://github.com/08042004Aditysingh/Dashboard',livedemo:'https://08042004aditysingh.github.io/Dashboard/'
},{id:0,image:IMG6,title:'Portfolio:  A website for showcasing my projects using React Js',Github:'https://github.com/08042004Aditysingh/Portfolio',livedemo:''
},{id:0,image:IMG5,title:'Memory Game: A simple game using Javascript',Github:'https://github.com/08042004Aditysingh/Memory_game',livedemo:''
},{id:0,image:IMG4,title:'RPC game: A simple rock paper scissor game using javascript',Github:'https://github.com/08042004Aditysingh/rock-paper-scissor-game',livedemo:''
}]
const Portfolio = () => {
  const article=List.map(listItem=><article className="portfolio_item">
  <div className="portfolio_item-image">
  <img src={listItem.image} alt="" />
  </div>
  <br></br>
  <p>{listItem.title}</p>
  <br></br>
  <div className='portfolio_item-cta'><a href={listItem.Github} className='btn'target='_blank'>Github</a>

  {listItem.livedemo!=''?<a href={listItem.livedemo} className='btn btn-primary' target='_blank'>Live Demo</a>:""}</div>
</article>);
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        
        
        {article}
        
      </div>

    </section>
  )
}

export default Portfolio
