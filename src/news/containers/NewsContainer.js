import React, { useState, useEffect, useCallback } from 'react';

import NewsCategory from '../components/NewsCategory';
import NewsItems from '../components/NewsItems';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '경제',
  },
  {
    name: 'entertainment',
    text: '방송/연예',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sprots',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const NewsContainer = () => {
  const [items, setItems] = useState([]);
  const [category, setcategory] = useState('all');

  useEffect(() => {
    const addQs = category === 'all' ? '' : `&category=${category}`;
    const url = `https://newsapi.org/v2/top-headlines?country=kr${addQs}&apiKey=904246bdbdd94f53b331bcfd3d3bee24`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => setItems(json.articles));
  }, [categories]);

  const onClick = useCallback((category) => setcategory(category), []);
  return (
    <>
      <NewsCategory categories={categories} onClick={onclick} />
      <NewsItems items={items} />
    </>
  );
};

export default React.memo(NewsContainer);