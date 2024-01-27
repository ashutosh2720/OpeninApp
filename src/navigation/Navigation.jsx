import { MdDashboard } from "react-icons/md";
import { MdUploadFile } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { AiTwotoneSchedule } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

export const Navigation = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Upload",
    icon: <MdUploadFile />,
  },
  {
    title: "Invoice",
    icon: <LiaFileInvoiceSolid />,
  },
  {
    title: "Schedule",
    icon: <AiTwotoneSchedule />,
  },
  {
    title: "Calender",
    icon: <SlCalender />,
  },
  {
    title: "Notification",
    icon: <IoIosNotifications />,
  },
  {
    title: "Setting",
    icon: <IoIosSettings />,
  },
];
