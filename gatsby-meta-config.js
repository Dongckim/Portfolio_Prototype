module.exports = {
  title: `dong-chan.com`,
  description: `알렉스의 끄적 끄적 끄적`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://dongckim.github.io/`,
  ogImage: `/og-image.jpg`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `dongckim/dongckim.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: ['김동찬', '알렉스', 'ALEX'],
    bio: {
      role: '엔지니어',
      description: ['문제를 해결하는', '세상을 혁신하는', '대체 불가능한'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    }, 
    social: {
      github: `https://github.com/Dongckim`, // `https://github.com/Dongckim`,
      linkedIn: `https://www.linkedin.com/in/dongckim99/`, // `https://www.linkedin.com/in/dongckim99/`,
      email: `dongchankim1999@gmail.com`, // `dongchankim1999@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      // {
      //   date: '2021.02 ~',
      //   activity: '개인 블로그 개발 및 운영',
      //   links: {
      //     post: '/gatsby-starter-zoomkoding-introduction',
      //     github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //     demo: 'https://www.zoomkoding.com',
      //   },
      // },
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '2019.03 ~ 2024.06',
        activity: 'Ghent University Global Campus, 분자생명공학과',
        // links: {
        //   post: '/gatsby-starter-zoomkoding-introduction',
        //   github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
        //   demo: 'https://www.zoomkoding.com',
        // },
      },
      {
        date: '2019.03 ~ 2020.06',
        activity: 'Student Council, Junior Year Representative 신입생 대표',
        // links: {
        //   post: '/gatsby-starter-zoomkoding-introduction',
        //   github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
        //   demo: 'https://www.zoomkoding.com',
        // },
      },
      {
        date: '2021.09 ~ 2023.03',
        activity: '대한민국 육군 의무병 만기전역',
        // links: {
        //   post: '/gatsby-starter-zoomkoding-introduction',
        //   github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
        //   demo: 'https://www.zoomkoding.com',
        // },
      },
      {
        date: '2023.06 ~ 2023.08',
        activity: '서울대학교 OUTTA AI 인공지능 딥러닝 부트캠프 2관왕 수상 (참가자 우수상, 팀 우수상)',
        // links: {
        //   post: '/gatsby-starter-zoomkoding-introduction',
        //   github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
        //   demo: 'https://www.zoomkoding.com',
        // },
      },
      {
        date: '2023.11 ~ 2023.12',
        activity: 'IGC 스타트업 아이디어 공모전 최우수상 수상',
        // links: {
        //   post: '/gatsby-starter-zoomkoding-introduction',
        //   github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
        //   demo: 'https://www.zoomkoding.com',
        // },
      },
      {
        date: '2024.08 ~ current',
        activity: 'The State University of New York, Stony Brook University 기술경영학과 컴퓨터과학 전공',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      {
        date: '2024.04 ~ current',
        activity: '2024 AI교육도시 학생 학술연구 대학생 멘토 인천진산과학고등학교 담당',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '개발 블로그 테마 개발',
        description:
          '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
