import Typography from "@mui/material/Typography";

import styles from "../../styles/components/layout/AboutSection.module.scss";
import { NextPage } from "next";
import Card from "@mui/material/Card";
import {
  Avatar,
  Button,
  CardActions,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import InterestsIcon from "@mui/icons-material/Interests";
import LogoDevIcon from "@mui/icons-material/LogoDev";

const AboutSection: NextPage = () => {
  return (
    <section id="about-section" className={styles["about-section"]}>
      <Typography className={styles["about-title"]} variant="h1">
        About me
      </Typography>
      <Card className={styles["card-container"]} variant="outlined">
        <CardContent>
          <Avatar className={styles.avatar} src="/images/kevin.png" alt="Kevin Gonzalez's picture">
            KG
          </Avatar>
          <Typography className={styles.name} variant="h2">
            Kevin Gonzalez
          </Typography>
          <Typography sx={{ mb: "1.5rem" }} color="text.secondary" gutterBottom>
            Student in Computer Systems Engineering{" "}
            <a href="https://iteso.mx/" target="_blank" rel="noopener noreferrer">
              @ITESO
            </a>
          </Typography>
          <Divider />
          <br />
          <Typography className={styles.subtitle} variant="h3" sx={{ textAlign: "start" }}>
            What I&apos;m currently studying?
          </Typography>
          <Typography className={styles.text} gutterBottom>
            I&apos;m currently studying a Bachelor&apos;s degree in Computer Systems Engineering{" "}
            <a href="https://iteso.mx/" target="_blank" rel="noopener noreferrer">
              @ITESO.
            </a>{" "}
            I&apos;m on my 8th semester, so I&apos;m really close to finish my degree!
          </Typography>
          <Typography className={styles.subtitle} variant="h3" sx={{ textAlign: "start" }}>
            What I&apos;m currently doing?
          </Typography>
          <Typography className={styles.text} gutterBottom>
            I&apos;m also currently working{" "}
            <a href="https://commerce.toshiba.com/" target="_blank" rel="noopener noreferrer">
              @TOSHIBA GCS
            </a>{" "}
            as Software Engineer Intern! I work together with my team implementing best software practices and clean code to
            meet the bussines requirements.
          </Typography>
          <Typography className={styles.subtitle} variant="h3" sx={{ textAlign: "start" }}>
            A little bit more about me
          </Typography>
          <List className={styles["about-me-list"]} sx={{ width: "100%", bgcolor: "background.paper" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <SpeedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="I'm really passionate about software development and really enjoy learning everyday about what can be done
            better in the industry such as how to increment teams developing efficiency."
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LogoDevIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="I enjoy being a Full-Stack developer as it helps me undestand how applications are made and how they can scale!" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <InterestsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="I'm interested in Fitness and Health as a whole. I love Technology and how it helps us solve today's problems. 
              I love connecting with people! Animals play a big role in my life!"
              />
            </ListItem>
          </List>
          <Typography className={styles.text} gutterBottom></Typography>
        </CardContent>
      </Card>
      <br />
    </section>
  );
};

export default AboutSection;
