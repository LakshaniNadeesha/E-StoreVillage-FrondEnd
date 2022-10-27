import { FiHome, FiTag, FiUpload } from "react-icons/fi";
import { VscSettingsGear, VscCalendar } from "react-icons/vsc";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiFillShop,
} from "react-icons/ai";

export const pages = [
  { name: "home", icon: <FiHome size={25} /> },
  { name: "prduct", icon: <FiTag size={25} /> },
  { name: "shop", icon: <AiFillShop size={25} /> },
  { name: "event", icon: <VscCalendar size={25} /> },
  { name: "profile", icon: <VscCalendar size={25} /> },
  { name: "cart", icon: <AiOutlineShoppingCart size={25} /> },
  { name: "my orders", icon: <FiUpload size={25} /> },
  { name: "settingss", icon: <VscSettingsGear size={25} /> },
];
