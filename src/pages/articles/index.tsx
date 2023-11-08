import ArticleList from "./ArticleList";
import React from "react";

const Articles = () =>{
    return (
        <>
        <div>
        <div className="text-xl font-bold mb-4">
                Trending News
        </div>
            <ArticleList/>
        </div>
        </>
    )
}
export default Articles