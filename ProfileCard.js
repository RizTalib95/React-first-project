//In the ProfileCard({title, handle}) section, that is the same as
// this:
//   const title = props.title;
//   const handle = props.handle;

//   const { title, handle } = props; // this code is the same as this code:
//   const title = props.title;
//   const handle = props.handle;

function ProfileCard({ title, handle, img, description }) {
  //   console.log(title, handle); you can put this in your console to see what shows, common mistakes are misspelling the props.
  return (
    <div className="card">
      <div className="card-img">
        <figure className="image is-1by1">
          <img src={img} alt="" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content"> {description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
