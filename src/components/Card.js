import React from 'react';
import { useFetchUserData } from '../utils/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faUser, 
    faEnvelope, 
    faCalendarDays, 
    faMapLocationDot, 
    faPhone, 
    faLock, 
    } from '@fortawesome/free-solid-svg-icons'

const Card = () => {
  
  const { data } = useFetchUserData();

  return(
    <>
      <section className='cardSection'>
        {/* Destructuring user data api response */}
        {data.map((data) => {
          const {
            name: { first, last},
            email,
            dob: { date },
            location: {
              street: { number, name }
            },
            phone,
            login: { uuid, username },
            picture: { large }

          } = data
          return(
            <div className='userCard'
                 key={uuid}
            >
              <img
                className='userPhoto'
                src={large}
                alt={first}
              />
              <div className='userDetails'>
                  <FontAwesomeIcon className='icon' icon={faUser} />
                  <h3 className='title'>Name:</h3>
                  <p className='userInfo'>{first} {last}</p>
              </div>
              <div className='userDetails'>
                  <FontAwesomeIcon className='icon' icon={faEnvelope} />
                  <h3 className='title'>Email:</h3>
                  <p className='userInfo'>{email}</p>
              </div>
              <div className='userDetails'>
                  <FontAwesomeIcon className='icon' icon={faCalendarDays} />
                  <h3 className='title'>Birthday:</h3>
                  <p className='userInfo'>{date.substring(0, 10)}</p>
              </div>
              <div className='userDetails'>
                  <FontAwesomeIcon className='icon' icon={faMapLocationDot} />
                  <h3 className='title'>Address:</h3>
                  <p className='userInfo'>{number} {name}</p>
              </div>
              <div className='userDetails'>
                  <FontAwesomeIcon className='icon' icon={faPhone} />
                  <h3 className='title'>Phone:</h3>
                  <p className='userInfo'>{phone}</p>
              </div>
              <div className='userDetails'>
                  <FontAwesomeIcon className='icon' icon={faLock} />
                  <h3 className='title'>password:</h3>
                  <p className='userInfo'>{username}</p>
              </div>
            </div>
          )

        })}

      </section>
    </>
  )
};

export default Card;

/*  <div className="UserCard">

      <img className='userPhoto'
      src={elem.picture.medium} 
      key={index} 
      alt="beautyful user profile picture" 
      />
      <h2 className='userName'>Name:</h2>
    </div>
  */
    