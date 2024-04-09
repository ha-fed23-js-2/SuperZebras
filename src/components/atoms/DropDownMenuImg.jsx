import { useState } from "react";
import { useStore } from "zustand";

const Dropdown = () => {
    // const selectedImg = useStore((state) => state.selectedImg);
    // const images = useStore((state) => state.images);
    // const setSelectedImg = useStore((state) => state.setSelectedImg);

    //for dropdown
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    };

    console.log(images);

    return (
        <></>   
        // <DropdownMenu onClick={toggle} style={{ height: open ? "50%" : "10%" }}>
        //     <div style={{ display: "flex", justifyContent: "space-between" }}>
        //     </div>
           
        // </DropdownMenu>
    );
};

export default Dropdown;