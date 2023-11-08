import React, { useEffect, useState, Fragment } from "react";
import { API_ENDPOINT } from "../../config/constants";
import { Dialog, Transition } from "@headlessui/react";

interface completeArticleDetails {
  id: number;
  title: string;
  summary: string;
  thumbnail: string;
  sport: { id: number; name: string };
  date: string;
  content: string;
}

const ArticleDetails: React.FC<{ id: number }> = ({ id }) => {
  const [ArticleData, setArticleData] = useState<completeArticleDetails | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const fetchCompleteArticle = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await fetch(`${API_ENDPOINT}/articles/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        throw new Error("Cannot fetch article details");
      }
      const data = await response.json();
      setArticleData(data);
    } catch (error) {
      console.log("Error fetching articles", error);
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    fetchCompleteArticle();
  }, [id]);

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="flex rounded p-1 mt-2 pl-3 pr-3 bg-gray-600 text-white font-bold"
        >
          Read more
        </button>
      </div>
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
            onClose={closeModal}
          >
            <div className="fixed inset-0 flex items-center justify-center">
              <Transition.Child
                as="div"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="fixed inset-0 bg-black bg-opacity-70" />
              </Transition.Child>
              <Transition.Child
                as="div"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="w-4/5 mx-auto bg-white rounded shadow-xl p-6 text-left align-middle overflow-auto">
                  {ArticleData && (
                    <>
                      <div>
                        <button onClick={closeModal} className="text-gray-500 hover:text-red-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                          {ArticleData.title}
                        </Dialog.Title>
                        <h2>{ArticleData.sport.name}</h2>
                        <h2>{new Date(ArticleData.date).toLocaleDateString()}</h2>
                        <div className="w-1/2">
                          <img src={ArticleData.thumbnail} className="w-full h-60 mx-auto rounded" />
                        </div>
                        <p>{ArticleData.content}</p>
                      </div>
                    </>
                  )}
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};
export default ArticleDetails;
