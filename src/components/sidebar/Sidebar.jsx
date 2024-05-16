import React, { useState } from "react";
import styles from "./sidebar.module.css";
const Sidebar = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);

  const branches = ["Hyderabad", "Bhimavaram"];

  const handleClick = (branch) => {
    setSelectedBranch(branch);
  };

  return (
    <div className={styles.sidebar}> {/* Use styles.sidebar to apply the styles */}
      <ul>
        {branches.map((branch) => (
          <li
            key={branch}
            className={`${styles.branch} ${selectedBranch === branch ? styles.active : ""}`} {/* Use styles.branch and styles.active */}
            onClick={() => handleClick(branch)}
          >
            {branch}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
