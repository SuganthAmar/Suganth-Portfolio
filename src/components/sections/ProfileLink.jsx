import React from "react";

const ProfileLink = ({ href, icon, alt }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt={alt} />
    </a>
  );
};

export default ProfileLink;
