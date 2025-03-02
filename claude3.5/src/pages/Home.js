import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  color: #666;
  line-height: 1.6;
`;

function Home() {
  return (
    <HomeContainer>
      <Title>欢迎来到我的博客</Title>
      <Content>
        <p>这里是一个分享知识和经验的地方。我们将为您带来：</p>
        <ul style={{ marginTop: '1rem', marginLeft: '2rem' }}>
          <li>最新的技术动态</li>
          <li>读书心得分享</li>
          <li>个人成长经验</li>
          <li>有趣的生活故事</li>
        </ul>
      </Content>
    </HomeContainer>
  );
}

export default Home;