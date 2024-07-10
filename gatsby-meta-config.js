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
      // {
      //   title: '개발 블로그 테마 개발',
      //   description:
      //     '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
      //   techStack: ['gatsby', 'react'],
      //   thumbnailUrl: 'blog.png',
      //   links: {
      //     post: '/gatsby-starter-zoomkoding-introduction',
      //     github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //     demo: 'https://www.zoomkoding.com',
      //   },
      // },
      
      {
        title: 'ACE (AWOONG Celeb) 서류전형 검토 솔루션',
        description:
          '특정 직업군에 따른 지원자의 능력과 외모를 투명하게 분석하는 기준을 제공해, 면접 과정을 간소화하며 효율적인 채용을 도우며, 지원자들의 경력과 능력등을 세부 카테고리로 분류하여 다수 지원자들을 기업이 한눈에 비교 분석할 수 있고, 또한, 창의성과 노력성을 중시하는 기업의 입장에서 사원 선발시 생성형 AI 사용 비중을 검증하는 솔루션입니다.',
        techStack: ['DetectGPT', '#project about face', '창업'],
        thumbnailUrl: 'ACE-document.png',
        links: {
          post: '',
          github: '',
          demo: 'https://docs.google.com/document/d/1ZbwFQUe7OzkLkLlP38_OCTNLl_N_s-sUfCGgS_TD1wU/edit?usp=sharing',
        },
      },
      {
        title: 'KWDC 2023',
        description:
        '코엑스 그랜드볼룸에서 열린 한국 최대 iOS와 애플생태계 개발자 컨퍼런스 오거나이징 스태프로 참여하여, 성공적으로 이벤트를 마쳤습니다. 다양한 개발자들과 네트워킹을 하며 교류하였고, 1000명 이상이 참석하는 행사로서 안전하게 진행하였습니다.',
        techStack: ['Apple', 'Networking', 'iOS'],
        thumbnailUrl: 'blog-5.png',
        links: {
          post: 'https://brunch.co.kr/@kakaobankplus/76',
          github: '',
          demo: 'https://kwdc2023.github.io/',
        },
      },
      {
        title: '함께 사용하는 내 물품 대여서비스, 빌리지',
        description:
          'Village는 지역 및 위치서비스 기반 주변에서 원하는 제품들을 보다 합리적으로 간편하게 대여할 수 있도록 도와주는 서비스입니다. 언제든지 부담없이 잠깐 쓸 제품이지만 비싼 가격 주고 사기는 힘들때, 살 계획은 없지만 체험해보고 싶은 제품이 있을때, 집 근처 또는 내가 원하는 지역에서 원하는 기간동안 대여서비스를 이용할 수 있습니다.',
        techStack: ['REACT', 'https'],
        thumbnailUrl: 'blog-1.png',
        links: {
          post: '',
          github: 'https://github.com/Dongckim/Village_FE',
          demo: 'https://village99.store/',
        },
      },
    ],
  },
};
