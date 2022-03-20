import React from 'react'
import IMG from '../../images/pattern-divider-desktop.svg'
import IconDevice from '../../images/icon-dice.svg'


export const Card = ({ advice, getAdvices, loading }) => {

    return (
        <div className='card'>
            <h1 className="card__title">Advice #{advice.id}</h1>
            <p className="card__text"> {
                loading ? 'Loading...' : `“${advice.advice}”`
            } </p>
            <div className='card__image'>
                <img src={IMG} alt="" />
            </div>
            <button className="card__button" onClick={getAdvices}>
                <img src={IconDevice} alt="" />
            </button>
        </div>
    )
}
