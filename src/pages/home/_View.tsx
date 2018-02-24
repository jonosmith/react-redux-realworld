import * as React from 'react'
import ArticleFeeds from './components/ArticleFeeds'
import Banner from './components/Banner'
import Container from './components/Container'
import Sidebar from './components/Sidebar'
import tags from './tags'

export default function HomePage() {
  return (
    <div className="home-page">
      <Banner />

      <Container>
        <ArticleFeeds />
        <Sidebar>
          <tags.View />
        </Sidebar>
      </Container>
    </div>
  )
}
