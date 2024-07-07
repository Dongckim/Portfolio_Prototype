import React from 'react';
import './style.scss';

function PageFooter({ author, githubUrl }) {
  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()}
        &nbsp;
        <a href={githubUrl}>Dongchan Alex Kim</a>
        &nbsp;powered by
        <a href="https://dongckim.github.io/">
          &nbsp;dong-chan.com
        </a>
      </p>
    </footer>
  );
}

export default PageFooter;
