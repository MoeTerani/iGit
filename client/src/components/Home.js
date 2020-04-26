import React, { useState, useEffect } from 'react';
import './Home.css';
import Card from './Card';
import { Form } from 'semantic-ui-react';
import Header from './Header';
import { fetchData, fetchPopularData, fetchContributors } from './HelperFn.js';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [popularRepo, setPopularRepo] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData('moeterani').then((res) => setSearchResult(res));
    fetchPopularData().then((res) => setPopularRepo(res));
    return () => console.log('unmounting...');
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
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
    <div className='home'>
      <Header />
      <div className='hero '>
        <div className='hero__heading'>
          <h1>Most Popular Repos on GitHub</h1>
          <p>
            And The
            <span style={{ fontWeight: 'bold' }}> Top Contributers </span>{' '}
            Behind Them
          </p>
        </div>
        <div className='hero__container'>
          {popularRepo ? (
            <div className='hero__container--logo'>
              {popularRepo.map((item, index) => (
                <a
                  key={index}
                  href='#'
                  onClick={() => handleClick(item.full_name)}
                  className='hero__repos'
                >
                  <img
                    className='popular__image'
                    key={index}
                    src={item.owner.avatar_url}
                  />
                </a>
              ))}
            </div>
          ) : (
            'Loading...'
          )}
        </div>
      </div>
      <div className='search'>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Github User/Repo'
              name='search'
              value={inputValue}
              onChange={handleChange}
            />
            <Form.Button content='Search' />
          </Form.Group>
        </Form>
      </div>
      {searchResult ? (
        <div className='card__container'>
          <h1 className='card__container--header'>{inputValue}</h1>
          <div className='card__container--cards'>
            {searchResult.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
        </div>
      ) : (
        'Loading...'
      )}
    </div>
  );
}
