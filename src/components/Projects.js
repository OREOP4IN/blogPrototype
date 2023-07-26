import React, { useState } from 'react';
import Image11 from '../images/pr11.png';
import Image12 from '../images/pr12.png';
import Image13 from '../images/pr13.png';
import Image2 from '../images/pr2.png';
import Image3 from '../images/pr3.png';
import Image4 from '../images/pr4.png';
import Image5 from '../images/pr5.png';


// const Projects = ({completedProjects}, {totalProjects}) => {  //harusny kyk gini, ngecall const dari luar
const Projects = () => {
  const projectsPoster = [Image2, Image3, Image4, Image5, Image11, Image12, Image13];


  const completedProjects=4; //tapi for now manual dulus
  const totalProjects=7;


  const [uploadedImage, setUploadedImage] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const imageFile = event.dataTransfer.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setUploadedImage(e.target.result);
    };

    reader.readAsDataURL(imageFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDelete = () => {
    setUploadedImage(null);
  };



  return (
    <div className="App">
      <header className="App-header">
        <h1>Projects ({completedProjects}/{totalProjects})</h1>
      </header>
      <div className="App-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus gravida,
          sagittis mauris id, mattis turpis. Mauris nec ligula auctor, scelerisque leo vitae,
          fringilla nunc. Fusce in tortor dapibus, consectetur lectus sit amet, convallis sapien.
        </p>
        <br/>
        </div>
        <div className="Projects-container">
          <div className="Projects-poster">
            {projectsPoster.map((image, index) => (
              <div className="Projects-img" key={index}>
                <img src={image} alt={`Image ${index + 1}`} 
                  title={`Project img ${index + 1}`}
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

      <div
        style={{
          margin: '20px',
          border: '2px dashed #aaa',
          padding: '20px',
          textAlign: 'center',
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {uploadedImage ? (
          <div>
            <img className='App-photo'
              src={uploadedImage}
              alt="Uploaded"
              style={{ maxWidth: '40%' }}
            />
            <button
              style={{
                position: 'relative',
                bottom: '10px',
                right: '10px',
                padding: '5px 10px',
              }}
              className='Home-delButton'
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        ) : (
          <p>Drag and drop an image here</p>
        )}
      </div>

    </div>
  );
};

export default Projects;
