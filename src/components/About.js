import React, { useState } from 'react';

import './About.css';



const About = () => {
  const [showFullContent, setShowFullContent] = useState(false);
  const handleReadMore = () => {
    setShowFullContent(true);
  };
  const handleReadLess = () => {
    setShowFullContent(false);
  };
  const [hover, setHover] = useState(false);

  return (
    
    <div className='App-container'>
      
      <header className='App-header'>
      <h1>About</h1>
      </header>

      <div className='App-content'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
        purus gravida, sagittis mauris id, mattis turpis. Mauris nec ligula
        auctor, scelerisque leo vitae, fringilla nunc. Fusce in tortor dapibus,
        consectetur lectus sit amet, convallis sapien. 
        <br />
      </p>
        {showFullContent ? (
      <p>
        In eleifend dignissim metus aliquam pretium. Aliquam erat volutpat. Morbi 
        semper diam id neque accumsan tempor. Donec justo libero, semper non hendrerit 
        eget, volutpat vel orci. Cras a bibendum justo, in bibendum odio. Nunc eget 
        ipsum id mauris cursus fringilla non ut metus. In pharetra venenatis ullamcorper. 
        Pellentesque neque lorem, maximus a aliquam sit amet, semper vulputate urna. 
        Aenean eu tempor lacus. Vivamus sit amet nibh dignissim, dictum felis et, 
        ullamcorper sem. Pellentesque sollicitudin purus nec feugiat pellentesque. 
        Nullam in ligula vel velit ultricies placerat vitae a nibh. Aenean vel urna 
        et velit mollis porta.In eleifend dignissim metus aliquam pretium. Aliquam erat volutpat. Morbi 
        semper diam id neque accumsan tempor. Donec justo libero, semper non hendrerit 
        eget, volutpat vel orci. Cras a bibendum justo, in bibendum odio. Nunc eget 
        ipsum id mauris cursus fringilla non ut metus. In pharetra venenatis ullamcorper. 
        Pellentesque neque lorem, maximus a aliquam sit amet, semper vulputate urna. 
        Aenean eu tempor lacus. Vivamus sit amet nibh dignissim, dictum felis et, 
        ullamcorper sem. Pellentesque sollicitudin purus nec feugiat pellentesque. 
        Nullam in ligula vel velit ultricies placerat vitae a nibh. Aenean vel urna 
        et velit mollis porta.In eleifend dignissim metus aliquam pretium. Aliquam erat volutpat. Morbi 
        semper diam id neque accumsan tempor. Donec justo libero, semper non hendrerit 
        eget, volutpat vel orci. Cras a bibendum justo, in bibendum odio. Nunc eget 
        ipsum id mauris cursus fringilla non ut metus. In pharetra venenatis ullamcorper. 
        Pellentesque neque lorem, maximus a aliquam sit amet, semper vulputate urna. 
        Aenean eu tempor lacus. Vivamus sit amet nibh dignissim, dictum felis et, 
        ullamcorper sem. Pellentesque sollicitudin purus nec feugiat pellentesque. 
        Nullam in ligula vel velit ultricies placerat vitae a nibh. Aenean vel urna 
        et velit mollis porta.In eleifend dignissim metus aliquam pretium. Aliquam erat volutpat. Morbi 
        semper diam id neque accumsan tempor. Donec justo libero, semper non hendrerit 
        eget, volutpat vel orci. Cras a bibendum justo, in bibendum odio. Nunc eget 
        ipsum id mauris cursus fringilla non ut metus. In pharetra venenatis ullamcorper. 
        Pellentesque neque lorem, maximus a aliquam sit amet, semper vulputate urna. 
        Aenean eu tempor lacus. Vivamus sit amet nibh dignissim, dictum felis et, 
        ullamcorper sem. Pellentesque sollicitudin purus nec feugiat pellentesque. 
        Nullam in ligula vel velit ultricies placerat vitae a nibh. Aenean vel urna 
        et velit mollis porta.In eleifend dignissim metus aliquam pretium. Aliquam erat volutpat. Morbi 
        semper diam id neque accumsan tempor. Donec justo libero, semper non hendrerit 
        eget, volutpat vel orci. Cras a bibendum justo, in bibendum odio. Nunc eget 
        ipsum id mauris cursus fringilla non ut metus. In pharetra venenatis ullamcorper. 
        Pellentesque neque lorem, maximus a aliquam sit amet, semper vulputate urna. 
        Aenean eu tempor lacus. Vivamus sit amet nibh dignissim, dictum felis et, 
        ullamcorper sem. Pellentesque sollicitudin purus nec feugiat pellentesque. 
        Nullam in ligula vel velit ultricies placerat vitae a nibh. Aenean vel urna 
        et velit mollis porta.In eleifend dignissim metus aliquam pretium. Aliquam erat volutpat. Morbi 
        semper diam id neque accumsan tempor. Donec justo libero, semper non hendrerit 
        eget, volutpat vel orci. Cras a bibendum justo, in bibendum odio. Nunc eget 
        ipsum id mauris cursus fringilla non ut metus. In pharetra venenatis ullamcorper. 
        Pellentesque neque lorem, maximus a aliquam sit amet, semper vulputate urna. 
        Aenean eu tempor lacus. Vivamus sit amet nibh dignissim, dictum felis et, 
        ullamcorper sem. Pellentesque sollicitudin purus nec feugiat pellentesque. 
        Nullam in ligula vel velit ultricies placerat vitae a nibh. Aenean vel urna 
        et velit mollis porta.<br /><br />
        <button onClick={handleReadLess} className='App-read'>Read Less</button>
      </p>
      ) : (
        <button onClick={handleReadMore} className='App-read'>Read More</button>
      )}


      </div>

      <footer className="App-footer"
              onMouseEnter={()=> setHover(true)}
              onMouseLeave={()=> setHover(false)}>
        
        <h2>Contact</h2>
        
        <>
        <div className="contact-wrapper">
          <div className="contact-column contact-left">
          <ul>
            <li>Instagram: <a href="https://www.instagram.com/deovie">@deovie</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/lentera/">Lentera</a></li>
          </ul>
          </div>
        <div className="contact-column contact-right">
          <ul>
            <li>Email: <a href="mailto:aretneleivoed@gmail.com">aretneleivoed@gmail.com</a></li>
            <li>Telephone: <a href="tel:08129108888">08129108888</a></li>
          </ul>
        </div>
        </div>
        </>
        
      </footer>
      
    </div>

    
  );
};

export default About;