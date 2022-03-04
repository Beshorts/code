
// create function to get only usefull fields to fill user card
export const userCardDetails = (data) => {
  
  return(
     {
        firstName: data.name.first, 
        lastName: data.name.last,
        email: data.email,
        dob: data.dob.date.substring(0, 10),
        streetNumber: data.location.street.number,
        streetName: data.location.street.name,
        phone: data.phone,
        loginUuid: data.login.uuid,
        loginUsername: data.login.username,
        picture: data.picture.large
      }  
   );
}