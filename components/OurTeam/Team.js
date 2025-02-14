import styles from './Team.module.css';
import { useEffect, useState } from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dhananjaya Pasan Wijesiri',
      role: 'CEO',
      image: '/images/Rectangle 75.png',
      social: {
        facebook: '/images/Facebook.png',
        twitter: '/images/Twitter.png',
        linkedin: '/images/LinkedIn.png',
      },
    },
    {
      name: 'John Doe',
      role: 'CTO',
      image: '/images/Rectangle 75.png',
      social: {
        facebook: '/images/Facebook.png',
        twitter: '/images/Twitter.png',
        linkedin: '/images/LinkedIn.png',
      },
    },
    {
      name: 'Jane Smith',
      role: 'CFO',
      image: '/images/Rectangle 75.png',
      social: {
        facebook: '/images/Facebook.png',
        twitter: '/images/Twitter.png',
        linkedin: '/images/LinkedIn.png',
      },
    },
    {
      name: 'Alex Johnson',
      role: 'COO',
      image: '/images/Rectangle 75.png',
      social: {
        facebook: '/images/Facebook.png',
        twitter: '/images/Twitter.png',
        linkedin: '/images/LinkedIn.png',
      },
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.teamSection}>
      <div className="mt-5 flex justify-center">
        <h2 className={styles.title}>Our Team</h2>
      </div>
      <br /> <br />
      
      {/* Desktop View */}
      {!isMobile && (
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <img src={member.image} alt={member.name} className={styles.image} />
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <div className={`${styles.socialLinks} mt-2`}>
                <a href={member.social.facebook} target="_blank" rel="noreferrer">
                  <img src="/images/facebook.png" alt="Facebook" />
                </a>
                <a href={member.social.twitter} target="_blank" rel="noreferrer">
                  <img src="/images/twitter.png" alt="Twitter" />
                </a>
                <a href={member.social.linkedin} target="_blank" rel="noreferrer">
                  <img src="/images/LinkedIn.png" alt="LinkedIn" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mobile View - Show Only One Team Member */}
      {isMobile && (
        <div className={styles.teamCard}>
          <img src={teamMembers[0].image} alt={teamMembers[0].name} className={styles.image} />
          <h3 className={styles.name}>{teamMembers[0].name}</h3>
          <p className={styles.role}>{teamMembers[0].role}</p>
          <div className={`${styles.socialLinks} mt-2`}>
            <a href={teamMembers[0].social.facebook} target="_blank" rel="noreferrer">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
            <a href={teamMembers[0].social.twitter} target="_blank" rel="noreferrer">
              <img src="/images/twitter.png" alt="Twitter" />
            </a>
            <a href={teamMembers[0].social.linkedin} target="_blank" rel="noreferrer">
              <img src="/images/LinkedIn.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
