import React, { useState } from 'react';
import './Books.css';

const Books = () => {
  // 模拟书籍数据
  const allBooks = [
    {
      id: 1,
      title: '思考，快与慢',
      author: '丹尼尔·卡尼曼',
      category: '心理学',
      rating: 4.8,
      description: '这本书综合了卡尼曼多年的研究成果，探讨了人类思维的两种模式：快速、直觉和情绪化的系统1，以及缓慢、深思熟虑和理性的系统2。',
      image: 'https://source.unsplash.com/random/300x450?book'
    },
    {
      id: 2,
      title: '原子习惯',
      author: '詹姆斯·克利尔',
      category: '自我提升',
      rating: 4.7,
      description: '这本书提供了一个简单而有效的框架，帮助读者建立好习惯、打破坏习惯，并掌握微小改变带来巨大成果的艺术。',
      image: 'https://source.unsplash.com/random/300x450?habits'
    },
    {
      id: 3,
      title: '人类简史',
      author: '尤瓦尔·赫拉利',
      category: '历史',
      rating: 4.9,
      description: '这本书讲述了人类如何从不起眼的猿类演变成地球的主宰，以及我们创造的神话、宗教、国家和公司如何塑造了现代世界。',
      image: 'https://source.unsplash.com/random/300x450?history'
    },
    {
      id: 4,
      title: '深度工作',
      author: '卡尔·纽波特',
      category: '生产力',
      rating: 4.6,
      description: '这本书探讨了在充满干扰的世界中，如何培养深度工作的能力，以产出有价值的成果。',
      image: 'https://source.unsplash.com/random/300x450?work'
    },
    {
      id: 5,
      title: '刻意练习',
      author: '安德斯·艾利克森',
      category: '自我提升',
      rating: 4.5,
      description: '这本书揭示了成为专家的真正路径，不是天赋，而是一种特定类型的练习——刻意练习。',
      image: 'https://source.unsplash.com/random/300x450?practice'
    },
    {
      id: 6,
      title: '金字塔原理',
      author: '芭芭拉·明托',
      category: '商业',
      rating: 4.4,
      description: '这本书介绍了一种思考、表达和解决问题的逻辑方法，帮助读者更清晰地组织思想和表达观点。',
      image: 'https://source.unsplash.com/random/300x450?pyramid'
    }
  ];

  // 状态管理
  const [books, setBooks] = useState(allBooks);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');

  // 获取所有类别
  const categories = ['全部', ...new Set(allBooks.map(book => book.category))];

  // 处理搜索
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterBooks(term, selectedCategory);
  };

  // 处理类别筛选
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    filterBooks(searchTerm, category);
  };

  // 筛选书籍
  const filterBooks = (term, category) => {
    let filtered = allBooks;

    // 按搜索词筛选
    if (term) {
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(term.toLowerCase()) ||
        book.author.toLowerCase().includes(term.toLowerCase())
      );
    }

    // 按类别筛选
    if (category !== '全部') {
      filtered = filtered.filter(book => book.category === category);
    }

    setBooks(filtered);
  };

  return (
    <div className="books-page">
      <h1 className="page-title">书籍推荐</h1>

      {/* 搜索和筛选区域 */}
      <div className="filter-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="搜索书名或作者..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <i className="fas fa-search search-icon"></i>
        </div>

        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 书籍列表 */}
      <div className="books-grid">
        {books.length > 0 ? (
          books.map(book => (
            <div className="book-card" key={book.id}>
              <div className="book-image">
                <img src={book.image} alt={book.title} />
                <div className="book-rating">
                  <span>{book.rating}</span>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">作者: {book.author}</p>
                <span className="book-category">{book.category}</span>
                <p className="book-description">{book.description}</p>
                <button className="btn book-btn">了解更多</button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h3>没有找到匹配的书籍</h3>
            <p>请尝试其他搜索词或类别</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;