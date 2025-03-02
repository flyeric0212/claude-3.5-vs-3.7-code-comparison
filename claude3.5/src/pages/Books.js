import React from 'react';
import styled from 'styled-components';

const BooksContainer = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 2rem;
`;

const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const BookCard = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BookTitle = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
`;

const BookDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

function Books() {
  const books = [
    {
      id: 1,
      title: "深入理解计算机系统",
      description: "一本讲解计算机系统底层原理的经典著作"
    },
    {
      id: 2,
      title: "算法导论",
      description: "全面介绍算法设计与分析的基础教材"
    },
    {
      id: 3,
      title: "设计模式",
      description: "介绍软件设计中常用的设计模式"
    },
    {
      id: 4,
      title: "代码整洁之道",
      description: "教你如何编写优雅的代码"
    }
  ];

  return (
    <BooksContainer>
      <Title>推荐书籍</Title>
      <BookGrid>
        {books.map(book => (
          <BookCard key={book.id}>
            <BookTitle>{book.title}</BookTitle>
            <BookDescription>{book.description}</BookDescription>
          </BookCard>
        ))}
      </BookGrid>
    </BooksContainer>
  );
}

export default Books;