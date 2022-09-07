import * as React from "react";
import {FullWidthPhoto} from "../Approach/styles";
import {Theme} from "../../styles";
import {BigDivider, NewsDiv, NewsImgTitle, NewsRow} from "./styles";

// this page is not used


type BlogPost = {
    title: string;
    id: number;
    content: string;
    photo: string;
    preview: string;
}

const BlogPosts: BlogPost[] = [
    {
        title: "Coral reefs: an ecosystem in transition",
        id: 3,
        content: "here is the first blog post. it is a great blog post.<br /><br /> here is further down on the page in the same first great blog post.",
        photo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80\n",
        preview: "Coral reef growth is intimately linked to sea level. It has been postulated that over the next\n" +
            "century, sea level will rise at a probable average rate of 15 mm/year, in response to fossil\n" +
            "fuel emissions, heating, and melting of the Antarctic ice cap. This predicted rate of sea level …"
    },
    {
        title: "Coral reefs: an ecosystem in transition",
        id: 4,
        content: "here is the second blog post. it is a great blog post.<br /><br /> here is further down on the page in the same first great blog post.",
        photo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80\n",
        preview: "Coral reef growth is intimately linked to sea level. It has been postulated that over the next\n" +
            "century, sea level will rise at a probable average rate of 15 mm/year, in response to fossil\n" +
            "fuel emissions, heating, and melting of the Antarctic ice cap. This predicted rate of sea level …"
    },
    {
        title: "Coral reefs: an ecosystem in transition",
        id: 5,
        content: "here is the third blog post. it is a great blog post.<br /><br /> here is further down on the page in the same first great blog post.",
        photo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80\n",
        preview: "Coral reef growth is intimately linked to sea level. It has been postulated that over the next\n" +
            "century, sea level will rise at a probable average rate of 15 mm/year, in response to fossil\n" +
            "fuel emissions, heating, and melting of the Antarctic ice cap. This predicted rate of sea level …"
    },
    {
        title: "Coral reefs: an ecosystem in transition",
        id: 6,
        content: "here is the fourth blog post. it is a great blog post.<br /><br /> here is further down on the page in the same first great blog post.",
        photo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80\n",
        preview: "Coral reef growth is intimately linked to sea level. It has been postulated that over the next\n" +
            "century, sea level will rise at a probable average rate of 15 mm/year, in response to fossil\n" +
            "fuel emissions, heating, and melting of the Antarctic ice cap. This predicted rate of sea level …"
    },
    {
        title: "Coral reefs: an ecosystem in transition",
        id: 7,
        content: "here is the fifth blog post. it is a great blog post.<br /><br /> here is further down on the page in the same first great blog post.",
        photo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80\n",
        preview: "Coral reef growth is intimately linked to sea level. It has been postulated that over the next\n" +
            "century, sea level will rise at a probable average rate of 15 mm/year, in response to fossil\n" +
            "fuel emissions, heating, and melting of the Antarctic ice cap. This predicted rate of sea level …"
    },
];

export const Blog = () => {


    return (
        <>
            <FullWidthPhoto img={"https://images.unsplash.com/photo-1488921618671-463b781ac428?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"} />
                <h1>Blog</h1>
            <p>Our blog gives you a closer look at the work we do and the partnerships that we have formed, with a
                focus on how the Nature Counts Foundation brings together resources, people, and ideas to
                conserve and restore nature.</p>
            <h2 style={{color: Theme.colors.pink, marginLeft: `30px`}}>Recent Posts</h2>

            <NewsRow>
                {BlogPosts.map((b) =>
                    <NewsPiece b={b} />

                )}
            </NewsRow>
        </>
    )
}

type BP = {

    b: BlogPost;
}
const NewsPiece = (props: BP) => {

    return (
        <NewsDiv onClick={()=>window.location.assign("/blog?id="+props.b.id)}>
            <NewsImgTitle img={props.b.photo}>
                <h3>{props.b.title}</h3>
            </NewsImgTitle>
            <a>{props.b.preview}</a>
        </NewsDiv>
        )

}