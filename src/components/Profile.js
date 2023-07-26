import React from 'react';
import ProfilePicture from '../images/PP.png';


const Profile = ({username}) => {
 

  const ProfilePic = [ProfilePicture];


  return (
    <div className="App">
      <header className="App-header">
        <h1>Profile</h1>
      </header>

      <div className='Profile-container'>
      <div className="Profile-picture">
        <img src={ProfilePic} alt={`Profile Picture`} 
          title={`Profile Picture`}
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
          />          
      </div>

      <div className="Profile-data">
        <p>
          <strong>Name      :</strong> {username}
          <br/>
          <strong>Division  :</strong> SBU
          <br/>
          <strong>Role      :</strong> Intern
          <br/>

        </p>

        <div className="Profile-content">
        <p>
          In eleifend dignissim metus aliquam pretium. Aliquam erat volutpat. Morbi semper diam id
          neque accumsan tempor. Donec justo libero, semper non hendrerit eget, volutpat vel orci.
          Cras a bibendum justo, in bibendum odio. Nunc eget ipsum id mauris cursus fringilla non ut
          metus. In pharetra venenatis ullamcorper. Pellentesque neque lorem, maximus a aliquam sit
          amet, semper vulputate urna. Aenean eu tempor lacus. Vivamus sit amet nibh dignissim,
          dictum felis et, ullamcorper sem. Pellentesque sollicitudin purus nec feugiat pellentesque.
          Nullam in ligula vel velit ultricies placerat vitae a nibh. Aenean vel urna et velit mollis
          porta.67
        </p>
        <br/>

        
    </div>
    </div>
    </div>
    </div>
     
  );
};

export default Profile;
