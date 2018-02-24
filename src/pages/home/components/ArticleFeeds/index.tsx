import * as React from 'react'
import Pagination from '../Pagination'

export default function ArticleFeeds() {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <a className="nav-link disabled" href="">
              Your Feed
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="">
              Global Feed
            </a>
          </li>
        </ul>
      </div>

      <div className="article-preview">
        <div className="article-meta">
          <a href="profile.html">
            <img src="http://i.imgur.com/Qr71crq.jpg" />
          </a>
          <div className="info">
            <a href="" className="author">
              Eric Simons
            </a>
            <span className="date">January 20th</span>
          </div>
          <button className="btn btn-outline-primary btn-sm pull-xs-right">
            <i className="ion-heart" /> 29
          </button>
        </div>
        <a href="" className="preview-link">
          <h1>How to build webapps that scale</h1>
          <p>This is the description for the post.</p>
          <span>Read more...</span>
        </a>
      </div>

      <div className="article-preview">
        <div className="article-meta">
          <a href="profile.html">
            <img src="http://i.imgur.com/N4VcUeJ.jpg" />
          </a>
          <div className="info">
            <a href="" className="author">
              Albert Pai
            </a>
            <span className="date">January 20th</span>
          </div>
          <button className="btn btn-outline-primary btn-sm pull-xs-right">
            <i className="ion-heart" /> 32
          </button>
        </div>
        <a href="" className="preview-link">
          <h1>
            The song you won't ever stop singing. No matter how hard you try.
          </h1>
          <p>This is the description for the post.</p>
          <span>Read more...</span>
        </a>
      </div>

      <Pagination activePage={1} totalPages={10} />
    </div>
  )
}
