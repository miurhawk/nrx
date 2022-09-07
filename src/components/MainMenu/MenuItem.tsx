import {StyledMenuItem, StyledSubmenu} from "./styles";
import {useEffect, useState} from "react";
import * as React from "react";


export interface Link {
    label: string;
    href: string;
}

type MenuItemProps = {
    link: Link;
    sublinks: Link[];
    isMobile: boolean;
}

export const MenuItem = (props: MenuItemProps) => {

    const [show, setShow] = useState(false);

    const [isSelected, setIsSelected] = useState(false);


    useEffect(()=>{
        if (props.link.href == window.location.pathname) {
            setIsSelected(true);
        } else {
            for (let i in props.sublinks) {
                if (props.sublinks[i].href == window.location.pathname) {
                    setIsSelected(true);
                }
            }
        }
    });

    const onClick = () => {
        if (props.isMobile) {
            setShow(!show);
            if (props.sublinks.length != 0) {
                return
            }
        }
        window.location.assign(props.link.href);
    }
    const onMouseEnter = () => {
        if (props.isMobile) {
            return
        }
        setShow(true);
    }
    const onMouseLeave = () => {
        if (props.isMobile) {
            return
        }
        setShow(false);
    }
    return(

        <StyledMenuItem selected={isSelected} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <h6 onClick={onClick} className={"category"}>{props.link.label}</h6>
            {show &&
            <StyledSubmenu>
                {props.sublinks.map((s) => <React.Fragment key={s.label}><h6 onClick={()=>window.location.assign(s.href)}>- {s.label}</h6></React.Fragment>)}
            </StyledSubmenu>}
        </StyledMenuItem>
    )

};



