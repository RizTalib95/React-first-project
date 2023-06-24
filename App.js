import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistance</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                img={AlexaImage}
                style={{ alignItems: 'center' }}
                description="Alexa was created by Amazon"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                img={CortanaImage}
                style={{ alignItems: 'center' }}
                description="Cortana was made by Microsoft"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                img={SiriImage}
                style={{ alignItems: 'center' }}
                description="Siri was made by Apple, she never really works though, even though you try to call her name 100000000 times. But hey, life goes on..."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
