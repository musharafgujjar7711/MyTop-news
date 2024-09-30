import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNewsApi = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f304179e3a484488828bba40d38e788f`;
    setLoading(true);
    
    try {
      const response = await fetch(url);
      const parsedData = await response.json();
      setArticles(parsedData.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsApi();
  }, [props.category]); // Fetch when the category changes

  return (
    <div>
      <div className='container'>
        <h2 className='text-center'>My-NewsToHeadline</h2>
        {loading && <Spinner />}
        <div className='row pt-4'>
          {articles.map((item, index) => (
            <div className='col-md-4 md-container' key={index}>
              <Newsitem
                urlToImage={item?.urlToImage}
                title={item.title.slice(0, 50)}
                description={item.description}
                url={item.url}
                publishedAt={item.publishedAt}
                author={item.author}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

News.defaultProps = {
  country: "us",
  category: "general"
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string
};

export default News;
