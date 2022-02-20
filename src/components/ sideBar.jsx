import { BsPlus, BsGearFill, BsFillLightningFill} from 'react-icons/bs';
import { FaGamepad } from 'react-icons/fa';
import { AiFillAliwangwang } from "react-icons/ai";

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-2xl">
            <SideBarIcon icon={<AiFillAliwangwang size="32"/>}/>
            <Divider/>
            <SideBarIcon icon={<FaGamepad size="30"/>}/>
            <SideBarIcon icon={<BsFillLightningFill size="30"/>}/>
            <SideBarIcon icon={<BsPlus size="30"/>}/>
            <Divider/>
            <SideBarIcon icon={<BsGearFill size="30"/>}/>

        </div>
    );
};

const SideBarIcon = ({icon}) => (
    <div className="sidebar-icon">
        {icon}
    </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;