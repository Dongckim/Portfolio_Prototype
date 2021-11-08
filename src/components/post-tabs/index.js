import React, { useMemo } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import PostCardColumn from '../post-card-column';
import './style.scss';

const PostTabs = ({ tabIndex, onChange, tabs, posts, showMoreButton }) => {
  const tabPosts = useMemo(() => {
    if (tabIndex === 0) return posts;
    return posts.filter((post) => post.categories.includes(tabs[tabIndex]));
  }, [posts, tabs, tabIndex]);

  return (
    <div className="post-tabs-wrapper">
      <div className="post-tabs">
        <Tabs
          className="mui-tabs"
          value={tabIndex}
          onChange={onChange}
          variant="scrollable"
          scrollButtons="desktop"
        >
          {tabs.map((title, index) => (
            <Tab label={title} key={index} />
          ))}
        </Tabs>
      </div>
      <PostCardColumn
        posts={tabPosts}
        showMoreButton={showMoreButton && tabPosts.length > 4}
        moreUrl={`posts/${tabIndex === 0 ? '' : tabs[tabIndex]}`}
      />
    </div>
  );
};
export default PostTabs;
