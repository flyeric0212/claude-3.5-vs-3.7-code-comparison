import React from 'react';
import './About.css';

const About = () => {
  // 团队成员数据
  const teamMembers = [
    {
      id: 1,
      name: '张明',
      role: '创始人 & 主编',
      bio: '拥有10年出版行业经验，热爱文学和科技。致力于通过阅读连接人与知识。',
      image: 'https://source.unsplash.com/random/300x300?portrait1'
    },
    {
      id: 2,
      name: '李华',
      role: '内容策划',
      bio: '文学硕士，曾在多家知名出版社工作。擅长发掘有价值的内容和新兴作者。',
      image: 'https://source.unsplash.com/random/300x300?portrait2'
    },
    {
      id: 3,
      name: '王芳',
      role: '技术总监',
      bio: '计算机科学博士，热衷于将技术与人文相结合，打造优质的阅读体验。',
      image: 'https://source.unsplash.com/random/300x300?portrait3'
    },
    {
      id: 4,
      name: '刘伟',
      role: '市场经理',
      bio: '营销专家，擅长社交媒体策略和用户增长。相信好内容应该被更多人看到。',
      image: 'https://source.unsplash.com/random/300x300?portrait4'
    }
  ];

  return (
    <div className="about-page">
      {/* 关于我们介绍 */}
      <section className="about-section">
        <div className="about-content">
          <h1 className="page-title">关于我们</h1>
          <p className="about-description">
            我们是一个致力于推广阅读文化的博客平台，成立于2020年。我们相信阅读是开启智慧之门的钥匙，
            通过分享高质量的书籍推荐、阅读心得和作者访谈，我们希望激发更多人的阅读兴趣，
            帮助读者在浩瀚的书海中找到真正值得阅读的作品。
          </p>
          <p className="about-description">
            我们的团队由热爱阅读的专业人士组成，包括编辑、作家、设计师和技术专家。
            我们共同努力，为读者提供最优质的内容和最舒适的阅读体验。
          </p>
        </div>
        <div className="about-image">
          <img src="https://source.unsplash.com/random/600x400?library" alt="关于我们" />
        </div>
      </section>

      {/* 我们的使命 */}
      <section className="mission-section">
        <div className="mission-content">
          <h2 className="section-title">我们的使命</h2>
          <div className="mission-cards">
            <div className="mission-card">
              <div className="mission-icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>推广阅读文化</h3>
              <p>在数字时代，培养阅读习惯，传播知识的力量。</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>启发思考</h3>
              <p>通过优质内容激发读者的思考和创造力。</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>建立社区</h3>
              <p>连接志同道合的读者，分享阅读体验和见解。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 团队成员 */}
      <section className="team-section">
        <h2 className="section-title">认识我们的团队</h2>
        <div className="team-grid">
          {teamMembers.map(member => (
            <div className="team-card" key={member.id}>
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-social">
                  <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 我们的历程 */}
      <section className="journey-section">
        <h2 className="section-title">我们的历程</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2020年</h3>
              <p>博客成立，开始分享书籍推荐和阅读心得。</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2021年</h3>
              <p>读者数量突破10万，开始举办线上读书会。</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2022年</h3>
              <p>推出会员计划，提供更多专属内容和服务。</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2023年</h3>
              <p>与多家出版社建立合作，获得行业认可。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;