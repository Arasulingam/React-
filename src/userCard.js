const userData = [
  {
    name: "Arasulingam",
    city: "Pondy",
    description: "Front-end Developer",
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Node",
      "HTML",
      "Machine Learning",
    ],
    online: true,
    profile: "images/1.jpg",
  },
  {
    name: "Sathish",
    city: "Pondy",
    description: "Back-end Developer",
    skills: ["Python", "JavaScript", "React", "Node", "Machine Learning"],
    online: false,
    profile: "images/1.jpg",
  },
  {
    name: "Deepak",
    city: "Pondy",
    description: "Digital Marketing Manager",
    skills: ["SEO", "Content Marketing", "Email Campaigns", "Photoshop"],
    online: true,
    profile: "images/1.jpg",
  },
  {
    name: "Dinesh",
    city: "Pondy",
    description: "UI/UX Designer",
    skills: ["Figma", "Canva", "Graphic Design", "Photoshop"],
    online: true,
    profile: "images/1.jpg",
  },
];
function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img src={props.profile} className="img" alt="user" />
      <img src="images/facebook-verified.png" className="verify" alt="tick" />
      <h3>{props.name}</h3>
      <h3 className="city">{props.city}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export const UserCard = () => {
  return (
    <>
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          online={user.online}
          profile={user.profile}
          skills={user.skills}
        />
      ))}
    </>
  );
};
