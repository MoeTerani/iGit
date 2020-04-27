import React, { useState, useEffect } from 'react';
import './Home.css';
import { Form } from 'semantic-ui-react';
import Card from './Card';
import Header from './Header';
import { fetchData, fetchPopularData, fetchContributors } from './HelperFn';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [popularRepo, setPopularRepo] = useState('');
  const [error, setError] = useState('');// eslint-disable-line 

  useEffect(() => {
    fetchData('moeterani').then((res) => setSearchResult(res));
    fetchPopularData().then((res) => setPopularRepo(res));
    return () => console.log('unmounting...');// eslint-disable-line 
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setSearchResult('');
    fetchData(inputValue).then((res) => setSearchResult(res));
    setInputValue('');
  };
  const handleClick = (arg) => {
    setSearchResult('');
    fetchContributors(arg).then((res) => setSearchResult(res));
    setInputValue(arg);
  };

  return (
    <div className="home">
      <Header />
      <div className="hero ">
        <div className="hero__heading">
          <h1>Most Popular Repos on GitHub</h1>
          <p>
            And The
            <span style={{ fontWeight: 'bold' }}> Top Contributers </span>
            {' '}
            Behind Them
          </p>
        </div>
        <div className="hero__container">
          {popularRepo ? (
            <div className="hero__container--logo">
              {popularRepo.map((item, index) => (
                /* eslint-disable */
                <a
                  key={index}// eslint-disable-line 
                  href="#"
                  onClick={() => handleClick(item.full_name)}
                  className="hero__repos"
                >
                  <img
                    alt="profile"
                    className="popular__image"
                    key={index}// eslint-disable-line 
                    src={item.owner.avatar_url}
                  />
                </a>
                /* eslint-enable */
              ))}
            </div>
          ) : (
            'Loading...'
          )}
        </div>
      </div>
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Github User/Repo"
              name="search"
              value={inputValue}
              onChange={handleChange}
            />
            <Form.Button content="Search" />
          </Form.Group>
        </Form>
      </div>
      {searchResult ? (
        <div className="card__container">
          <h1 className="card__container--header">{inputValue}</h1>
          <div className="card__container--cards">
            {searchResult.map((item, index) => (
              <Card key={index} data={item} />// eslint-disable-line 
            ))}
          </div>
        </div>
      ) : (
        'Loading...'
      )}
    </div>
  );
}
