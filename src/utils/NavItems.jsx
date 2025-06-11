import { FaChalkboardTeacher } from "react-icons/fa";
import {
  FaUserGraduate,
  FaRegCreditCard,
  FaFolderOpen,
  FaUsers,
  FaVideo,
} from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    icon: <FaChalkboardTeacher />,
    name: "Teachers",
    path: "/teachers",
  },
  {
    id: 2,
    icon: <FaUserGraduate />,
    name: "Students",
    path: "/students",
  },
  {
    id: 3,
    icon: <FaRegCreditCard />,
    name: "Subscription",
    path: "/subscription",
  },
  {
    id: 4,
    icon: <FaFolderOpen />,
    name: "Course & Category",
    path: "/domain",
    children: [
      {
        id: "4-1",
        name: "Course", // You will manage Course link inside /domain
        path: "/domain/course",
      },
      {
        id: "4-2",
        name: "Module", // Likewise, Module link inside /domain
        path: "/domain/module",
      },
    ],
  },

  {
    id: 5,
    icon: <FaUsers />,
    name: "Community & Sub",
    path: "/community",
    // children: [
    //   {
    //     id: "5-1",
    //     name: "Course",
    //     path: "/domain/course",
    //   },
    //   {
    //     id: "5-2",
    //     name: "Module",
    //     path: "/domain/module",
    //   },
    // ],
  },

  {
    id: 6,
    icon: <FaVideo />,
    name: "Videos",
    path: "/videos",
  },
  {
    id: 7,
    icon: <FaVideo />,
    name: "Quiz",
    path: "/quiz",
  },
];
