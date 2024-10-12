import Arda from "../assets/images/photo-of-arda.jpg";
import Berke from "../assets/images/photo-of-berke.jpeg";
import Mert from "../assets/images/photo-of-mert.jpeg";
import Ercu from "../assets/images/photo-of-ercu.jpeg";
import Deniz from "../assets/images/photo-of-deniz.jpeg";
import Ege from "../assets/images/photo-of-ege.jpeg";

const teamMembers = [
  {
    name: "Ahmet Berke Gökmen",
    username: "berke.gokmen",
    id: "",
    role: "student",
    image: Berke,
    linkedInUrl: "https://www.linkedin.com/in/berkegokmen/",
    githubUrl: "https://github.com/berkegokmen1",
    personalWebsiteUrl: "",
  },
  {
    name: "Mert Gençtürk",
    username: "mert.gencturk",
    id: "",
    role: "student",
    image: Mert,
    linkedInUrl: "https://www.linkedin.com/in/mert-gençtürk-339864186/",
    githubUrl: "https://github.com/gencturkmert",
    personalWebsiteUrl: "",
  },
  {
    name: "Arda İynem",
    username: "arda.iynem",
    id: "",
    role: "student",
    image: Arda,
    imagePosition: "center",
    linkedInUrl: "https://www.linkedin.com/in/ardaiynem/",
    githubUrl: "https://github.com/ardaiynem",
    personalWebsiteUrl: "",
  },
  {
    name: "Deniz Tuna Onguner",
    username: "tuna.onguner",
    id: "22001788",
    role: "student",
    image: Deniz,
    imagePosition: "center",
    linkedInUrl: "https://www.linkedin.com/in/tuna-onguner/",
    githubUrl: "https://github.com/Tuna-Onguner",
    personalWebsiteUrl: "",
  },
  {
    name: "Hasan Ege Tunç",
    username: "hasan.tunc",
    id: "",
    role: "student",
    image: Ege,
    linkedInUrl: "",
    githubUrl: "https://github.com/HEgeTunc",
    personalWebsiteUrl: "",
  },
];

const supervisor = {
  name: "A. Ercüment Çiçek",
  username: "ercument.cicek",
  role: "supervisor",
  image: Ercu,
  imagePosition: "center",
  linkedInUrl: "https://www.linkedin.com/in/ercumentcicek/",
  githubUrl: "",
  personalWebsiteUrl: "http://ciceklab.cs.bilkent.edu.tr/ercument",
};

export { teamMembers, supervisor };
