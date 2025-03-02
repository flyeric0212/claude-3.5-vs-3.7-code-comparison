import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  // 模拟博客文章数据
  const featuredPosts = [
    {
      id: 1,
      title: '如何提高阅读效率',
      excerpt: '在这篇文章中，我们将探讨一些提高阅读效率的实用技巧，帮助你在短时间内获取更多知识...',
      date: '2023-06-15',
      category: '学习技巧',
      image: 'https://source.unsplash.com/random/600x400?reading'
    },
    {
      id: 2,
      title: '2023年最值得阅读的10本书',
      excerpt: '我们精选了2023年最具影响力的10本书，涵盖小说、科技、心理学和商业领域...',
      date: '2023-06-10',
      category: '书籍推荐',
      image: 'https://source.unsplash.com/random/600x400?books'
    },
    {
      id: 3,
      title: '写作的艺术：如何表达你的想法',
      excerpt: '无论是写博客、小说还是商业报告，这些写作技巧都能帮助你更清晰地表达想法...',
      date: '2023-06-05',
      category: '写作技巧',
      image: 'https://source.unsplash.com/random/600x400?writing'
    }
  ];

  return (
    <div className="home-page">
      {/* 英雄区域 */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">欢迎来到我们的博客</h1>
          <p className="hero-subtitle">探索知识的海洋，发现阅读的乐趣</p>
          <Link to="/books" className="btn hero-btn">浏览书籍</Link>
        </div>
      </section>

      {/* 特色文章区域 */}
      <section className="section featured-posts">
        <h2 className="section-title">精选文章</h2>
        <div className="posts-grid">
          {featuredPosts.map(post => (
            <div className="post-card" key={post.id}>
              <div className="post-image">
                <img src={post.image} alt={post.title} />
                <span className="post-category">{post.category}</span>
              </div>
              <div className="post-content">
                <span className="post-date">{post.date}</span>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <a href="#" className="post-link">阅读更多</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 订阅区域 */}
      <section className="section subscribe-section">
        <div className="subscribe-content">
          <h2 className="subscribe-title">订阅我们的通讯</h2>
          <p className="subscribe-text">获取最新的文章和书籍推荐，直接发送到您的邮箱</p>
          <form className="subscribe-form">
            <input type="email" placeholder="您的邮箱地址" required />
            <button type="submit" className="btn">订阅</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;