import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 1.5rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SubTitle = styled.h2`
  color: #444;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const Text = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 1rem;
`;

function About() {
  return (
    <AboutContainer>
      <Title>关于我们</Title>

      <Section>
        <SubTitle>我们的故事</SubTitle>
        <Text>
          我们是一群热爱技术和分享的人，致力于通过博客平台传播知识和经验。
          在这里，我们希望能够帮助更多的人学习和成长。
        </Text>
      </Section>

      <Section>
        <SubTitle>我们的使命</SubTitle>
        <Text>
          通过高质量的内容创作，我们希望：
        </Text>
        <ul style={{ color: '#666', marginLeft: '2rem' }}>
          <li>分享技术知识和经验</li>
          <li>推广优质的学习资源</li>
          <li>建立学习交流社区</li>
          <li>促进知识的开放共享</li>
        </ul>
      </Section>

      <Section>
        <SubTitle>加入我们</SubTitle>
        <Text>
          如果你也热爱分享，欢迎加入我们的团队。你可以通过"联系我们"页面与我们取得联系。
        </Text>
      </Section>
    </AboutContainer>
  );
}

export default About;