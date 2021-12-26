import { Button, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useEffect, useState } from "react";
import styles from "../../styles/components/layout/HomeSection.module.scss";
import { NextPage } from "next";
import SocialLinkIcons from "../common/SocialLinkIcons";

const words: string[] = ["Kevin\xA0Gonzalez", "a\xA0Developer!", "a\xA0SWE\xA0Student!"];
let currWord: string = words[0];
let currWordIndex: number = 0;
let currIndex: number = 0;
let pause: boolean = false;

const HomeSection: NextPage = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setTimeout(
      () => {
        pause = false;
        if (!isDeleting && text.length < currWord.length) {
          setText(text + currWord.charAt(currIndex++));
        } else if (isDeleting && currIndex > 0) {
          setText(text.slice(0, --currIndex));
        } else {
          setIsDeleting(!isDeleting);
          if (isDeleting === false) {
            pause = true;
          } else {
            pause = false;
            currWordIndex = currWordIndex < words.length - 1 ? currWordIndex + 1 : 0;
            currWord = words[currWordIndex];
          }
        }
      },
      pause ? 1800 : isDeleting ? 50 : 175
    );
  }, [text, isDeleting]);

  return (
    <section id="home-section" className={styles["home-section"]}>
      <div>
        <Typography className={styles["home-title"]} variant="h1" component="span">
          Hey!&nbsp;I&apos;m&nbsp;
        </Typography>
        <Typography className={styles["home-title"]} variant="h1" component="span">
          {text}
        </Typography>
      </div>
      <SocialLinkIcons />
      <Button
        className={styles["resume-btn"]}
        size="large"
        href="/api/download/resume"
        variant="outlined"
        endIcon={<DownloadIcon />}
      >
        Download Resume
      </Button>
    </section>
  );
};

export default HomeSection;
