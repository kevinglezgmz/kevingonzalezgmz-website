import { IconButton, Stack } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import styles from "../../styles/components/common/SocialLinkIcons.module.scss";

const SocialLinkIcons: NextPage = () => {
  return (
    <Stack className={styles.icons} direction="row" spacing={2}>
      <a href="https://www.linkedin.com/in/kevingonzalezgomez/" target="_blank" rel="noopener noreferrer">
        <IconButton className={styles["icon-button"]} color="primary" aria-label="Visit Kevin Gonzalez's LinkedIn">
          <LinkedInIcon fontSize="inherit" />
        </IconButton>
      </a>
      <a href="https://github.com/kevinglezgmz" target="_blank" rel="noopener noreferrer">
        <IconButton className={styles["icon-button"]} color="primary" aria-label="Visit Kevin Gonzalez's Github">
          <GitHubIcon fontSize="inherit" />
        </IconButton>
      </a>
      <a href="https://app.codesignal.com/profile/kevinglezgmz/" target="_blank" rel="noopener noreferrer">
        <IconButton className={styles["icon-button"]} color="primary" aria-label="Visit Kevin Gonzalez's Codesignal">
          <CodeIcon fontSize="inherit" />
        </IconButton>
      </a>
    </Stack>
  );
};

export default SocialLinkIcons;
