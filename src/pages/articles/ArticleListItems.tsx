import { useArticlesState } from "../../context/articles/context";
import React, { useState, useEffect } from "react";
import ArticleDetails from "./ArticleDetails";

export default function ArticleListItems() {
  let state: any = useArticlesState();
  const { articles, isLoading, isError, errorMessage } = state;
  const [selectedSport, setSelectedSport] = useState("All");
  let [sports, setSports] = useState<string[]>([]);
const [sortOrder,setSortOrder] = useState("date")

  useEffect(() => {
    if (articles) {
      const uniqueSports = Array.from(new Set(articles.map((article: any) => article.sport.name)));
      setSports(uniqueSports);
    }
  }, [articles]);

  const fullArticleDetails = (id:number) =>{
    return <ArticleDetails id={id} />
  }
  if (isLoading && articles.length === 0) {
    return <span>Loading ...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  const filteredArticles = articles
  .filter((article) => selectedSport === "All" || article.sport.name === selectedSport
  )
  .sort((a,b)=>{
    if(sortOrder === 'date'){
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateB.getTime() - dateA.getTime()
    }else if(sortOrder === 'title'){
      return a.title.localeCompare(b.title)
    }
  })
  return (
    <div className="w-full p-4">
      <div className="mb-4">
        <div className="space-x-4">
        <button
            onClick={() => setSelectedSport("All")}
            className={`${selectedSport === "All" ? "font-bold underline" : ""}`}
          >
            Your News
          </button>
          {sports.map((sport, index) => (
            <button
              key={index}
              onClick={() => setSelectedSport(sport)}
              className={`${selectedSport === sport ? "font-bold underline" : ""}`}
            >
              {sport}
            </button>
            
          ))}
          <button className="px-4 py-1 rounded border bg-gray-300">
          <label>Sort by:</label>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="date" className="bg-gray-300">Date</option>
          <option value="title">Title</option>
        </select>
        </button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {filteredArticles && filteredArticles.length > 0 ? (
          filteredArticles
            .filter((article: any) => selectedSport === "All" || article.sport.name === selectedSport)
            .map((article: any) => (
              
              <div key={article.id} className="border rounded-lg shadow-lg p-4 bg-white">
                <h5 className="font-semibold">{article.sport.name}</h5>
                <h4 className="text-xl font-bold mb-4">{article.title}</h4>
                <h3>{new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}</h3>
                <p>{article.summary}</p>
                <div>{fullArticleDetails(article.id)}</div>
              </div>
            ))
        ) : (
          <span>No articles available for the selected sport.</span>
        )}
      </div>
    </div>
  );
}
