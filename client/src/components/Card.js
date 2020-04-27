import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';
import { fetchCardData } from './HelperFn';
import './Card.css';

const CardExampleCard = ({ data }) => {
  const [userInfo, setuserInfo] = useState('');
  useEffect(() => {
    fetchCardData(data.url).then((res) => setuserInfo(res));
  }, []);

  return (
    <div>
      {userInfo ? (
        <a href={data.html_url} target="_blank" rel="noopener noreferrer">
          <Card className="card" data={data}>
            <Image src={data.avatar_url} wrapped ui={false} />
            <Card.Content>
              <Card.Header className="card__header">
                <h2>{userInfo.name || '🤔'}</h2>
              </Card.Header>
              <Card.Meta>
                <span className="date">
                  Joined in
                  {' '}
                  {userInfo.created_at.split('T')[0]}
                </span>
              </Card.Meta>
              <Card.Description>
                {' '}
                <p>
                  Contributions:
                  {data.contributions}
                </p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="user" />
              {userInfo.public_repos}
              {' '}
              Public Repositories
            </Card.Content>
            <Card.Content extra>
              <Icon name="users" />
              {userInfo.followers}
              {' '}
              Followers
            </Card.Content>
            <Card.Content extra>
              <Icon name="user circle" />
              {userInfo.following}
              {' '}
              Following
            </Card.Content>
          </Card>
        </a>
      ) : (
          <div>'Loading...'</div> // eslint-disable-line 
      )}
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string,
    html_url: PropTypes.string,
    avatar_url: PropTypes.string,
    contributions: PropTypes.number,

  }),
};

export default CardExampleCard;
