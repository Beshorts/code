import React from 'react';
import { useFetchUserData } from '../utils/hooks';
import { userCardDetails } from '../utils/functions';
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
  
  // destructuring custom hook
  const { isLoading, data, error } = useFetchUserData();

  return(
    <>
    {isLoading ?  <h2 className='message'>Loading Data</h2> :
      <section className='cardSection'>
        {/* Destructuring function */}
        {data.map((elem) => {
         const {
           firstName, 
           lastName, 
           email, 
           dob, 
           streetName, 
           streetNumber, 
           phone, 
           loginUuid, 
           loginUsername, 
           picture
          } = userCardDetails(elem)

          return(            
            <div className='userCard'
                 key={loginUuid}
            >
              <img
                className='userPhoto'
                src={picture}
                alt={firstName}
              />
              <div className='userDetails'>
                  <FontAwesomeIcon className='icon' icon={faUser} />
                  <h3 className='title'>Name:</h3>
                  <p className='userInfo'>{firstName} {lastName}</p>
              </div>
              <div className='userDetails'>
                  <FontAwesomeIcon className='icon' icon={faEnvelope} />
                  <h3 className='title'>Email:</h3>
                  <p className='userInfo'>{email}</p>
              </div>
              <div className='userDetails'>
                  <FontAwesomeIcon className='icon' icon={faCalendarDays} />
                  <h3 className='title'>Birthday:</h3>
                  <p className='userInfo'>{dob}</p>
              </div>
              <div className='userDetails'>
                  <FontAwesomeIcon className='icon' icon={faMapLocationDot} />
                  <h3 className='title'>Address:</h3>
                  <p className='userInfo'>{streetNumber} {streetName}</p>
              </div>
              <div className='userDetails'>
                  <FontAwesomeIcon className='icon' icon={faPhone} />
                  <h3 className='title'>Phone:</h3>
                  <p className='userInfo'>{phone}</p>
              </div>
              <div className='userDetails'>
                  <FontAwesomeIcon className='icon' icon={faLock} />
                  <h3 className='title'>password:</h3>
                  <p className='userInfo'>{loginUsername}</p>
              </div>
            </div>
          )

        })}
      </section> }
      {error && <h2 className='message'>{error}</h2>}
    </>
  )
};

export default Card;

    