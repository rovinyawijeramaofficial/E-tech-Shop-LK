import styles from './Team.module.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dhananjaya Pasan Wijesiri',
      role: 'CEO',
      image: '/images/Rectangle 75.png', // Replace with the actual image path
      social: {
        facebook: '/images/Facebook.png',
        twitter: '/images/Twitter.png',
        linkedin: '/images/LinkedIn.png',
      },
    },
    {
      name: 'Dhananjaya Pasan Wijesiri',
      role: 'CEO',
      image: '/images/Rectangle 75.png', // Replace with the actual image path
      social: {
        facebook: '/images/Facebook.png',
        twitter: '/images/Twitter.png',
        linkedin: '/images/LinkedIn.png',
      },
    },
    {
      name: 'Dhananjaya Pasan Wijesiri',
      role: 'CEO',
      image: '/images/Rectangle 75.png', // Replace with the actual image path
      social: {
        facebook: '/images/Facebook.png',
        twitter: '/images/Twitter.png',
        linkedin: '/images/LinkedIn.png',
      },
    },
    {
      name: 'Dhananjaya Pasan Wijesiri',
      role: 'CEO',
      image: '/images/Rectangle 75.png', // Replace with the actual image path
      social: {
        facebook: '/images/Facebook.png',
        twitter: '/images/Twitter.png',
        linkedin: '/images/LinkedIn.png',
      },
    },
  ];

  return (
    <div className={styles.teamSection}>
      <h2 className={styles.title}>Our Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamCard}>
            <img src={member.image} alt={member.name} className={styles.image} />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <div className={styles.socialLinks}>
              <a href={member.social.facebook} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href={member.social.twitter} target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={member.social.instagram} target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
