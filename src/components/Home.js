import React from 'react';
import Image1 from '../images/image1.png';
import Image2 from '../images/image2.png';
import Image3 from '../images/image3.JPG';
import Image4 from '../images/image4.jpg';
import Image5 from '../images/image5.jpg';
import Image6 from '../images/image6.jpg';

const Home = () => {
  // Instagram post URLs
  // const instagramPosts = [
  //   'https://www.instagram.com/p/CtoDI_oPpbo/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
  //   'https://www.instagram.com/p/CuOZ7iLPciH/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
  //   'https://www.instagram.com/p/CuOZ7iLPciH/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
  //   'https://www.instagram.com/p/CuOZ7iLPciH/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
  //   'https://www.instagram.com/p/CuOZ7iLPciH/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
  //   'https://www.instagram.com/p/CuOZ7iLPciH/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
  //   'https://www.instagram.com/p/CuOZ7iLPciH/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
  // ];


  const instagramPosts = [Image1, Image2, Image3, Image4, Image5, Image6];


  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
      </header>
      <div className="App-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus gravida,
          sagittis mauris id, mattis turpis. Mauris nec ligula auctor, scelerisque leo vitae,
          fringilla nunc. Fusce in tortor dapibus, consectetur lectus sit amet, convallis sapien.
        </p>
        <p>
          In eleifend dignissim metus aliquam pretium. Aliquam erat volutpat. Morbi semper diam id
          neque accumsan tempor. Donec justo libero, semper non hendrerit eget, volutpat vel orci.
          Cras a bibendum justo, in bibendum odio. Nunc eget ipsum id mauris cursus fringilla non ut
          metus. In pharetra venenatis ullamcorper. Pellentesque neque lorem, maximus a aliquam sit
          amet, semper vulputate urna. Aenean eu tempor lacus. Vivamus sit amet nibh dignissim,
          dictum felis et, ullamcorper sem. Pellentesque sollicitudin purus nec feugiat pellentesque.
          Nullam in ligula vel velit ultricies placerat vitae a nibh. Aenean vel urna et velit mollis
          porta.
        </p>
        <br/>
        </div>
        <div className="instagram-posts-container">
          <div className="instagram-posts">
            {instagramPosts.map((image, index) => (
              <div className="instagram-post" key={index}>
                <img src={image} alt={`Image ${index + 1}`} 
                  title={`Instagram Post ${index + 1}`}
                  style={{width: 'auto', height: '200px', objectFit: 'cover'}}
                />          
              </div>
            ))}
          </div>
        </div>
        <div className="App-content">
        <p>
        Cras viverra, diam a sollicitudin accumsan, libero libero aliquam nunc, eget dapibus nulla lorem sit amet est. Ut vitae quam vel sem viverra feugiat at non justo. Maecenas hendrerit pretium eros, nec posuere est cursus at. Curabitur consequat dui dolor, at pharetra lacus bibendum vitae. Aenean quam libero, scelerisque in pharetra vel, laoreet viverra elit. Sed imperdiet diam fermentum lacus dapibus dapibus. Vivamus efficitur porta rhoncus. Mauris posuere lacus quis tortor ornare vulputate. Fusce laoreet ultrices turpis ac hendrerit. Sed non odio justo. Fusce in fermentum lectus, vel ultricies sem. Sed mi velit, laoreet et sodales sollicitudin, pretium sit amet ante. Integer sed blandit magna.
        </p>
        <p>
        Praesent hendrerit nunc eget eros sollicitudin finibus. Aliquam erat volutpat. Aenean interdum interdum ultricies. Nulla facilisi. Proin nec nisi consequat, blandit augue id, tincidunt lorem. Ut sed magna sed libero varius aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam convallis est sed dolor ullamcorper, tempor suscipit nibh porta. Quisque consequat enim quis massa ultricies, vitae consequat felis dictum. Suspendisse potenti. Sed quam felis, mollis et vestibulum et, pretium eget dui. Suspendisse a libero eu diam tristique interdum suscipit vel nulla. Curabitur semper, eros ut lobortis dapibus, libero nibh blandit arcu, vel mollis nisi massa ut sem. Proin volutpat dignissim condimentum. Morbi vitae lorem lacinia, varius magna quis, egestas nibh.
        </p>
      </div>
    </div>
  );
};

export default Home;
