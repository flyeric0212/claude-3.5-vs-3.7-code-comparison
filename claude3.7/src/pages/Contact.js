 import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // 表单状态
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  // 处理输入变化
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault();

    // 简单验证
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: '请填写所有必填字段'
      });
      return;
    }

    // 模拟表单提交
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: '您的消息已成功发送！我们会尽快回复您。'
      });

      // 重置表单
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // 3秒后清除状态消息
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false,
          message: ''
        });
      }, 3000);
    }, 1000);
  };

  // 常见问题数据
  const faqs = [
    {
      question: '如何订阅你们的通讯？',
      answer: '您可以在我们的首页底部找到订阅表单，填写您的电子邮箱地址即可接收我们的最新内容。'
    },
    {
      question: '你们接受投稿吗？',
      answer: '是的，我们欢迎优质的原创内容。请通过本页的联系表单发送您的投稿意向，我们的编辑团队会与您联系。'
    },
    {
      question: '如何成为你们的合作伙伴？',
      answer: '我们乐于与出版社、作者和其他相关机构合作。请发送合作意向至partner@blogname.com，详细说明您的合作提案。'
    },
    {
      question: '我可以推荐书籍吗？',
      answer: '当然可以！我们非常重视读者的推荐。请通过联系表单或发送邮件至recommendations@blogname.com告诉我们您喜欢的书籍。'
    }
  ];

  return (
    <div className="contact-page">
      <h1 className="page-title">联系我们</h1>

      {/* 联系信息和表单区域 */}
      <section className="contact-section">
        <div className="contact-info">
          <h2 className="section-subtitle">联系方式</h2>
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info-content">
              <h3>地址</h3>
              <p>北京市朝阳区建国路88号</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="info-content">
              <h3>电子邮箱</h3>
              <p>info@blogname.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="info-content">
              <h3>电话</h3>
              <p>+86 10 1234 5678</p>
            </div>
          </div>
          <div className="social-links">
            <a href="#" className="social-link"><i className="fab fa-weibo"></i></a>
            <a href="#" className="social-link"><i className="fab fa-weixin"></i></a>
            <a href="#" className="social-link"><i className="fab fa-qq"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        <div className="contact-form-container">
          <h2 className="section-subtitle">发送消息</h2>
          {formStatus.submitted && (
            <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
              {formStatus.message}
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">姓名 <span className="required">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">电子邮箱 <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">主题</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">消息 <span className="required">*</span></label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn submit-btn">发送消息</button>
          </form>
        </div>
      </section>

      {/* 地图区域 */}
      <section className="map-section">
        <h2 className="section-subtitle">我们的位置</h2>
        <div className="map-container">
          {/* 这里通常会嵌入真实的地图，这里用一个占位图 */}
          <img
            src="https://source.unsplash.com/random/1200x400?map"
            alt="地图"
            className="map-image"
          />
        </div>
      </section>

      {/* 常见问题区域 */}
      <section className="faq-section">
        <h2 className="section-subtitle">常见问题</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
