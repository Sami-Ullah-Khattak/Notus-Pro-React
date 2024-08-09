import React from 'react'

import PropTypes from 'prop-types'

import './article-card.css'

const ArticleCard = (props) => {
  return (
    <div className="article-card-container">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="article-card-image"
      />
      <div className="article-card-container1">
        <h3 className="article-card-text Healine">{props.newProp}</h3>
        <div className="article-card-container2">
          <span className="article-card-text1">{props.description}</span>
        </div>
        <div className="article-card-container3">
          <img
            alt={props.avatarAlt}
            src={props.avatarSrc}
            className="article-card-image1"
          />
          <div className="article-card-container4">
            <span className="article-card-text2">{props.name}</span>
            <div className="article-card-container5">
              <span className="article-card-text3 TextSM">{props.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ArticleCard.defaultProps = {
  avatarSrc: '15958451-f790-4024-a70e-cc38b82637f2',
  name: 'Laura Hanks',
  newProp: 'Portofino one of the best for remote working',
  imageSrc: '/city-1-1400w.jpg',
  time: 'Published 3 days ago',
  avatarAlt: 'avatar',
  description:
    "Finding temporary housing should be as easy as renting an Airbnb. That's th e idea behinf portofino, which raised $65 million to expand its pet sitting businesses. This come as the right move for the investment while the planet is moving on work from home...",
  imageAlt: 'image',
}

ArticleCard.propTypes = {
  avatarSrc: PropTypes.string,
  name: PropTypes.string,
  newProp: PropTypes.string,
  imageSrc: PropTypes.string,
  time: PropTypes.string,
  avatarAlt: PropTypes.string,
  description: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default ArticleCard
