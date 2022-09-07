import {NavItems, StyledMenu} from "./styles";
import {Link, MenuItem} from "./MenuItem";
import * as React from "react";
import {useEffect, useState} from "react";


export interface MenuSection {
    children: Link[];
    main: Link;
}
const DummyData: MenuSection[] = [
    {main: {label: "About", href: "/approach"}, children: [{label: "What We Do", href: "/approach"},{label: "Team", href: "/team"},{label: "Our Challenge", href: "/challenge"},{label: "Partners", href: "/partners"}]},
    {main: {label: "Nature Scoreboard", href: "/scoreboard"}, children: []}, //{label: "Coral Reefs", href: "/coral-reefs"},{label: "Nature Scoreboard", href: "/scoreboard"}
    {main: {label: "Get Involved", href: "/contact"}, children: [{label: "Donate", href: "/donate"},{label: "Contact Us", href: "/contact"}]},
    {main: {label: "", href: "/research"}, children: []}, // {main: {label: "News", href: "/research"}, children: [{label: "Research", href: "/research"},{label: "Blog", href: "https://medium.com/nature-counts-foundation"}]}, todo this is a bug right now bc of the odd/even stuff so i'm just leaving this inivisible child in bc i'm too lazy to fix it
]
// {main: {label: "News", href: "/research"}, children: [{label: "Research", href: "/research"},{label: "Blog", href: "https://medium.com/nature-counts-foundation"}]},
type MMProps = {
    // hght: string;
}
const MainMenu = (props: MMProps) => {
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return (
    //         () => window.removeEventListener('scroll', handleScroll)
    //     )
    // })
    const onMouseEnter = () => {
        // window.scrollTo(0,0);
    }
    const [hideOffHover, setHide] = useState(false);
    const [isMobile, setIsMobile] = useState(false);


    useEffect(()=>{
        // setHide(window.location.pathname == "/");
        setIsMobile(window.innerWidth < 800);
        function handleResize() {
            setIsMobile(window.innerWidth < 800);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    const [show, setShow] = useState(false);
    const showMenu = () => {
        setShow(true);
    }
    const hideMenu = () => {
        setShow(false);
    }

    if (isMobile) {
        return (
            <>
            <StyledMenu onMouseOver={onMouseEnter} onClick={()=>setShow(!show)} hideOffHover={hideOffHover}>


                <img src={'/logoWhite.png'} />
                <img onClick={()=>window.location.href ="/"} src={'/logoTypeWhite.png'} />

            </StyledMenu>
                {show && <NavItems>
                    {DummyData.map((l)=> <MenuItem key={l.main.label} isMobile={true} link={l.main} sublinks={l.children} />)}

                </NavItems>}
</>
    )
    }
    return(
         <StyledMenu hideOffHover={hideOffHover}>

             <img onClick={()=>window.location.href ="/"} src={'/logoWhite.png'} />

                    {DummyData.map((l)=> <MenuItem key={l.main.label} isMobile={false} link={l.main} sublinks={l.children} />)}
                <img src={'/logoTypeWhite.png'} />

                <div className={"block"}>
                 <div className={"line"} />

             </div>
            </StyledMenu>

    )

}

export default MainMenu;