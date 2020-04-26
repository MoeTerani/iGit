import React, { useState, useEffect } from 'react';
import './Card.css';
import { Card, Icon, Image } from 'semantic-ui-react';
import axios from 'axios';

const CardExampleCard = (props) => {
  const [userInfo, setuserInfo] = useState('');
  useEffect(() => {
    fetchData(props.data.url);
  }, []);

  const fetchData = async (url) => {
    try {
      const data = await axios.post(
        `http://localhost:8080/api/v1/search/user/`,
        { url }
      );
      setuserInfo(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {userInfo ? (
        <a href={props.data.html_url} target='_blank'>
          <Card className='card' data={props}>
            <Image src={props.data.avatar_url} wrapped ui={false} />
            <Card.Content>
              <Card.Header className='card__header'>
                <h2>{userInfo.name || '🤔'}</h2>
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Joined in {userInfo.created_at.split('T')[0]}
                </span>
              </Card.Meta>
              <Card.Description>
                {' '}
                <p>Contributions: {props.data.contributions}</p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name='user' />
              {userInfo.public_repos} Public Repositories
            </Card.Content>
            <Card.Content extra>
              <Icon name='users' />
              {userInfo.followers} Followers
            </Card.Content>
            <Card.Content extra>
              <Icon name='user circle' />
              {userInfo.following} Following
            </Card.Content>
          </Card>
        </a>
      ) : (
        <div>'Loading...'</div>
      )}
    </div>
  );
};

export default CardExampleCard;

/* 

const CardExampleCardProps = () => (
  <Card
    image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
);
 */
