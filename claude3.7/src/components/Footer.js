import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3 className="footer-title">博客名称</h3>
          <p className="footer-description">
            分享知识，连接世界。
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">快速链接</h3>
          <ul className="footer-links">
            <li><a href="/">首页</a></li>
            <li><a href="/books">书籍</a></li>
            <li><a href="/about">关于我们</a></li>
            <li><a href="/contact">联系我们</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">联系方式</h3>
          <p>邮箱: info@blogname.com</p>
          <p>电话: +123 456 7890</p>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} 博客名称. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;