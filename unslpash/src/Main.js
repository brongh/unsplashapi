import React, { useState, useEffect } from "react";
import OnePost from "./OnePost";
import axios from "axios";
import { jumboStyle, jumboStyleTwo } from "./style/style";
import InfiniteScroll from "react-infinite-scroll-component";

const Main = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [postData, setPostData] = useState([]);
  const [page, setPage] = useState(2);

  let digit = 1;

  const fetchMorePosts = async () => {
    console.log(page);
    const res = await axios.get(
      `https://api.unsplash.com/photos/?page=${page}&client_id=${apiKey}`
    );
    const newData = [...postData, ...res.data];
    setPostData(newData);
    const newPage = page + 1;
    setPage(newPage);
    console.log(postData);
  };

  const getData = async () => {
    const res = await axios.get(
      `https://api.unsplash.com/photos/?page=1&client_id=${apiKey}`
    );
    setPostData(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    console.log("hi");
    getData();
  }, []);

  return (
    <>
      <InfiniteScroll
        dataLength={postData.length}
        next={fetchMorePosts}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {postData ? (
          postData.map((posts) => (
            <OnePost
              value={posts}
              key={posts.id}
              increment={digit++}
              style={digit % 2 === 1 ? jumboStyle : jumboStyleTwo}
            />
          ))
        ) : (
          <p>loading...</p>
        )}
      </InfiniteScroll>
    </>
  );
};

export default Main;
