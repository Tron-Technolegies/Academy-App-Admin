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
  },
  {
    id: 5,
    icon: <FaUsers />,
    name: "Community & Sub",
    path: "/community",
  },
  {
    id: 6,
    icon: <FaVideo />,
    name: "Videos",
    path: "/videos",
  },
];
