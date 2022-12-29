import React from "react";

import { AiFillHome, AiOutlineFlag, AiOutlineTrophy } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { ImNewspaper } from "react-icons/im";
import { GiHanger } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import {SiYoutubegaming} from 'react-icons/si'

export const categories = [
  {
    name: "New",
    icon: <AiFillHome />,
    type: "home",
  },
  {
    name: "Trending",
    icon: <MdLocalFireDepartment />,
    type: "category",
  },
  { name: "Music", icon: <CgMusicNote />, type: "category" },
  { name: "Movies", icon: <FiFilm />, type: "category" },
  { name: "Live", icon: <MdLiveTv />, type: "category" },
  { name: "Gaming", icon: <SiYoutubegaming />, type: "category" },
  { name: "News", icon: <ImNewspaper />, type: "category" },
  { name: "Sports", icon: <AiOutlineTrophy />, type: "category" },
  { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
  {
    name: "Fashion & beauty",
    icon: <GiHanger />,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];
