import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css?v=20261026-56';
import CircularCarousel from './CircularCarousel';
import opening01 from './assets/hero/opening-01.jpg';
import opening02 from './assets/hero/opening-02.jpg';
import opening03 from './assets/hero/opening-03.jpg';
import opening04 from './assets/hero/opening-04.jpg';
import opening05 from './assets/hero/opening-05.jpg';
import opening06 from './assets/hero/opening-06.jpg';
import opening07 from './assets/hero/opening-07.jpg';
import opening08 from './assets/hero/opening-08.jpg';
import heroPracticeCollage from './assets/hero/hero-practice-collage.jpg';
import avatar01 from './assets/profile/avatar-01.jpg';
import hexin01 from './assets/projects/hexin/hexin-01.jpg';
import hexin02 from './assets/projects/hexin/hexin-02.jpg';
import hexin03 from './assets/projects/hexin/hexin-03.jpg';
import hexin04 from './assets/projects/hexin/hexin-04.jpg';
import meisan01 from './assets/projects/meisan/meisan-01.jpg';
import meisan02 from './assets/projects/meisan/meisan-02.jpg';
import meisan03 from './assets/projects/meisan/meisan-03.jpg';
import meisan04 from './assets/projects/meisan/meisan-04.jpg';
import meisan05 from './assets/projects/meisan/meisan-05.jpg';
import meisan06 from './assets/projects/meisan/meisan-06.jpg';
import farm01 from './assets/projects/901/farm-01.jpg';
import rca03 from './assets/projects/rca/rca-03.jpg';
import rca04 from './assets/projects/rca/rca-04.jpg';
import rcaEnglishPpt from './assets/projects/rca/rca-english-ppt.png';
import rcaNew01 from './assets/projects/rca/rca-new-01.jpg';
import rcaNew02 from './assets/projects/rca/rca-new-02.jpg';
import rcaNew03 from './assets/projects/rca/rca-new-03.jpg';
import rcaNew04 from './assets/projects/rca/rca-new-04.jpg';
import rcaNew05 from './assets/projects/rca/rca-new-05.jpg';
import cyanotype02 from './assets/teaching/cyanotype/cyanotype-02.jpeg';
import cyanotype03 from './assets/teaching/cyanotype/cyanotype-03.jpeg';
import cyanotype04 from './assets/teaching/cyanotype/cyanotype-04.jpeg';
import cyanotype05 from './assets/teaching/cyanotype/cyanotype-05.jpg';
import cyanotype06 from './assets/teaching/cyanotype/cyanotype-06.jpeg';
import cyanotype07 from './assets/teaching/cyanotype/cyanotype-07.jpeg';
import cyanotypeJapanExchangeCover from './assets/teaching/cyanotype/cyanotype-jp-exchange-cover.jpg';
import persimmonPoster from './assets/teaching/persimmon-poster.png';
import innovationProjects from './assets/innovation/innovation-projects-timeline.png';
import innovationAwards from './assets/innovation/innovation-awards-timeline.png';
import patentsOverview from './assets/innovation/patents-overview-new.png';
import honorsOverview from './assets/innovation/honors-overview.png';
import credentialsBackground from './assets/innovation/credentials-background.png';
import projectsFolderBackground from './assets/projects/projects-folder-background.jpg';
import campusExperience from './assets/education/campus-experience.png';
import teachingFolderBackground from './assets/teaching/public-art-education-background.jpg';
import academicFolderBackground from './assets/academic/academic-folder-background.png';
import communityHubOperationProfile from './assets/projects/community-hub/community-hub-operation-profile.svg';
import communityHubBackendOverview from './assets/projects/community-hub/backend-overview.png';
import communityHubCover from './assets/projects/community-hub/cover-data-overview.png';
import communityHubActivityReport from './assets/projects/community-hub/activity-report.png';

const projectPhotoAssets = import.meta.glob('./assets/projects/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}', { eager: true, query: '?url', import: 'default' });
const gallery = (folder) => Object.entries(projectPhotoAssets)
  .filter(([path]) => path.includes(`/projects/${folder}/`))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url);
const teachingPhotoAssets = import.meta.glob('./assets/teaching/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}', { eager: true, query: '?url', import: 'default' });
const teachingGallery = (folder) => Object.entries(teachingPhotoAssets)
  .filter(([path]) => path.includes(`/teaching/${folder}/`))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url);

const hexinSections = [
  { title: '展览现场', detail: '何以新海派 · 上海大学美术馆展厅记录', images: gallery('hexin-exhibition') },
  { title: '工作记录', detail: '布展、导览与现场执行', images: gallery('hexin-work') },
  { title: '公共教育工作坊', detail: '三场工作坊活动与参与者合影', images: gallery('hexin-workshop') },
];
const meisanSections = [
  { title: '展览现场', detail: '梅园三村少儿美术馆空间与作品呈现', images: gallery('meisan-exhibition').slice(0, 6) },
  { title: '活动报告', detail: '岩彩体验活动', images: gallery('meisan-rock').slice(0, 6) },
  { title: '蓝晒工作坊', detail: '独立策划与主讲 · 植物蓝晒美育活动', images: gallery('meisan-cyanotype').slice(0, 6) },
  { title: '向猫微笑工作坊', detail: '海报与雕塑工作坊现场', images: gallery('meisan-cat').slice(0, 6) },
];
const aiSections = [
  { title: '上海大学上海美术学院美术馆', detail: '人工智能赋能新海派 · 展览现场与工作记录', images: gallery('ai-shangmei').slice(0, 6) },
  { title: '宝山社区美术馆', detail: '人工智能赋能新海派 · 展览现场与工作记录', images: gallery('ai-baoshan-new') },
];
const farmExhibitionImages = gallery('farm-exhibition').slice(2);
const farmSections = [
  { title: '双馆开馆展', detail: '901 欢乐农场菜园美术馆 · 展览现场', images: farmExhibitionImages },
  { title: '植染秋华植物扎染工作坊', detail: '自然材料与植物染体验', images: gallery('farm-dye') },
  { title: '指尖造柿扭扭棒工作坊', detail: '独立策划与主讲 · 现场活动记录', images: gallery('farm-persimmon') },
];
const petsSections = [
  { title: '展览现场', detail: '上海虹桥国际咖啡文化节 · 公共艺术项目作品呈现', images: gallery('pets-exhibition') },
  { title: '项目现场', detail: '活动入口、空间布置与现场记录', images: gallery('pets-onsite') },
];

const heroCarouselItems = [
  { src: opening01, alt: '展览空间现场', title: '展览现场', subtitle: 'EXHIBITION SPACE' },
  { src: opening02, alt: '影像与装置展览现场', title: '影像与装置', subtitle: 'MEDIA & OBJECT' },
  { src: opening03, alt: '白色展厅中的艺术作品', title: '空间叙事', subtitle: 'SPATIAL NARRATIVE' },
  { src: opening04, alt: '宝山社区美术馆展览现场', title: '社区美术馆', subtitle: 'COMMUNITY MUSEUM' },
  { src: opening05, alt: '艺术装置展览现场', title: '艺术装置', subtitle: 'ART INSTALLATION' },
  { src: opening06, alt: '城市公共艺术户外现场', title: '城市公共艺术', subtitle: 'PUBLIC ART' },
  { src: opening07, alt: '生成与共建展览现场', title: '生成与共建', subtitle: 'CO-CREATION' },
  { src: opening08, alt: '公共艺术展览现场', title: '策展实践', subtitle: 'CURATORIAL PRACTICE' },
];

const projects = [
  {
    no: '01', type: '大型展览 / 公共教育 / 新媒体', title: '何以新海派', subtitle: '大型展览统筹与公共教育项目', role: '展览统筹 · 公教项目负责人 · 公众号运营',
    desc: '上海大学美术馆开馆大展，以“文脉传承”“当代转译”“全球对话”三个篇章，回应海派艺术在当代的持续生成。负责展览统筹、公众号运营及公共教育项目，统筹展厅导览与系列美育工作坊落地，让学术叙事延展为可参与的公共文化体验。',
    tags: ['项目统筹', '公教体系', '内容传播'], accent: 'violet', image: hexin01, sections: hexinSections,
  },
  {
    no: '02', type: '社区文化 / 少儿美育 / 展览执行', title: '梅园三村少儿美术馆', subtitle: '展览与系列工作坊', role: '展览统筹 · 公教项目负责人',
    desc: '以社区儿童和家庭为服务对象，完成展览现场统筹，并围绕岩彩、植物蓝晒与“向猫微笑”雕塑开展系列美育活动。其中植物蓝晒工作坊由本人独立策划与主讲。',
    tags: ['社区文化', '少儿美育', '资源协调'], accent: 'orange', image: meisanSections[0].images[0], sections: meisanSections,
  },
  {
    no: '03', type: '双馆联动 / 展览执行 / 社区美育', title: '人工智能赋能新海派', subtitle: '上海美院美术馆 × 宝山社区美术馆', role: '展览执行 · 现场协调 · 工作坊支持',
    desc: '项目在上海大学上海美术学院美术馆与宝山社区美术馆分两地呈现，分别记录展览现场、作品创作与工作过程，体现人工智能与海派艺术叙事的在地转译。',
    tags: ['双馆联动', '展览执行', '现场统筹'], accent: 'blue', image: aiSections[0].images[0], sections: aiSections,
  },
  {
    no: '04', type: '乡村文旅 / 场馆运营 / 在地美育', title: '901 欢乐农场菜园美术馆', subtitle: '双馆开馆展与系列工作坊', role: '展览运营 · 配套公教统筹',
    desc: '参与双馆开馆展及配套活动组织，以在地场馆、自然教育与手作体验为切入，完成展览运营和公众活动的协同落地。植物扎染与“指尖造柿”两场工作坊形成面向公众的参与式体验，其中“指尖造柿”由本人独立策划与主讲。',
    tags: ['场馆运营', '在地实践', '活动组织'], accent: 'green', image: farmSections[0].images[0] || farm01, sections: farmSections,
  },
  {
    no: '05', type: '城市公共艺术 / 商务区文化空间', title: '寻找城市的宠儿', subtitle: '虹桥国际咖啡文化节配套公共艺术项目', role: '副导演 · 项目执行 · 全流程统筹',
    desc: '以上海虹桥诺亚财富中心为场域，围绕城市人文与动物公益开展公共艺术实践；运用 AI 辅助作品征集与评审，统筹艺术家对接、作品征集、评审布展、多方协调、预算及全流程项目进度管控。',
    tags: ['公共艺术', '艺术家对接', '布展统筹'], accent: 'blue', image: petsSections[0].images[0], sections: petsSections,
  },
  {
    no: '06', type: '国际研修 / 可持续创新 / 创意设计', title: '英国皇家艺术学院 RCA', subtitle: '《构建可持续世界的创新创意设计理念》高管研修项目', role: '短期研修课程 · 2026.01 顺利结业',
    desc: '完成英国皇家艺术学院（RCA）高管研修课程，系统学习面向可持续世界的创新创意设计理念，并将国际设计视野转化为文化项目与公共美育实践的补充方法。',
    tags: ['国际研修', '可持续设计', '创新方法'], accent: 'violet', image: rcaNew03, images: [rcaEnglishPpt, rcaNew01, rcaNew02, rcaNew03, rcaNew04, rcaNew05, rca03, rca04],
  },
  {
    no: '07', type: '社区文化 / 公众号后台运营 / 活动传播', title: '社区枢纽站', subtitle: '公众号后台运营与活动报告', role: '后台运营负责人 · 内容发布 · 数据复盘',
    desc: '负责社区枢纽站公众号后台的日常运营：内容排期、图文发布、活动预告与活动报告、用户数据追踪及传播复盘。通过“预告—参与—报告”的内容链路，将线下社区活动转化为持续可见的线上传播；账号累计发表内容 700 次，其中原创内容 288 篇，沉淀用户 2,853 人。',
    tags: ['后台运营', '活动报告', '数据复盘'], accent: 'green', image: communityHubCover, images: [communityHubCover, communityHubBackendOverview, communityHubActivityReport, communityHubOperationProfile],
  },
];

const teaching = [
  ['01', '一个展览的诞生——普希金文学之旅', '上海向东中学 × 中国近现代新闻出版博物馆', '面向上海市向东中学中学生开展系列文博美育课程，主讲“让展品说话”与展览策划两大主题，以文学与博物馆为线索引导学生完成观察、表达与策展实践。'],
  ['02', '大阪艺术大学中日交流展蓝晒公教工坊', '大阪艺术大学 × 上海大学上海美术学院', '围绕中日交流展开展蓝晒公教工坊，统筹方案设计、物料准备、现场执行与跨文化沟通，组织两校学生以蓝晒完成艺术共创。'],
  ['03', '指尖造柿', '扭扭棒手作工作坊', '901 欢乐农场项目配套课程，以材料体验连接自然观察与审美表达。'],
  ['04', '串链青春系列手作工坊', '2025.06 · 宝山区文化场馆', '在宝山区文化场馆落地同名工坊；负责项目策划，担任现场主持与主讲，讲解色彩搭配和手作技法，带领参与者完成创意手链，并把控现场节奏与参与体验。'],
];

const cyanotypePhotos = [cyanotype02, cyanotype03, cyanotype04, cyanotype05, cyanotype06, cyanotype07];
const cyanotypeProject = {
  no: '02',
  type: '大阪艺术大学 × 上海大学上海美术学院',
  title: '大阪艺术大学中日交流展蓝晒公教工坊',
  subtitle: '蓝晒共创 · 国际美育交流',
  role: '中日项目统筹 · 国际美育交流',
  desc: '围绕大阪艺术大学与上海大学上海美术学院中日交流展，统筹蓝晒公教工坊的方案设计、物料准备、现场执行与跨校跨文化沟通；组织两校学生以蓝晒为媒介开展艺术共创，让国际美育交流在展览现场自然发生。',
  tags: ['项目统筹', '跨文化沟通', '国际美育'],
  cover: cyanotypeJapanExchangeCover,
  images: [cyanotypeJapanExchangeCover, ...cyanotypePhotos],
};
const chainsGallery = teachingGallery('chains');
const chainsPhotos = [chainsGallery[3], chainsGallery[8], chainsGallery[4], chainsGallery[6], chainsGallery[7]];

const teachingProjects = {
  '02': cyanotypeProject,
  '03': { no: '03', type: '901 欢乐农场菜园美术馆', title: '指尖造柿', subtitle: '扭扭棒手作工作坊', role: '独立策划 · 主讲 · 现场组织', desc: '围绕秋日自然观察与材料体验开展的扭扭棒手作课程。负责课程策划、材料准备、现场讲解与参与者创作引导。', tags: ['课程策划', '材料体验', '现场主讲'], cover: persimmonPoster, images: farmSections[2].images },
  '04': { no: '04', type: '宝山区文化场馆', title: '串链青春系列手作工坊', subtitle: '色彩搭配与创意手链制作', role: '项目策划 · 现场主持 · 主讲', desc: '在宝山区文化场馆落地同名工坊，负责项目策划、现场主持与主讲，带领参与者完成创意手链，并把控现场节奏与参与体验。', tags: ['项目策划', '色彩搭配', '现场主持'], cover: chainsPhotos[0], images: chainsPhotos },
  '01': { no: '01', type: '上海向东中学 × 中国近现代新闻出版博物馆', title: '一个展览的诞生——普希金文学之旅', subtitle: '博物馆公共教育 · 展览策划主题课程', role: '课程讲师 · 青少年课程开发 · 现场教学执行', desc: '在《一个展览的诞生——普希金文学之旅》项目中担任讲师，面向上海市向东中学中学生，主讲《博物馆公共教育：让展品“说话”》与展览策划两大主题课程；联合中国近现代新闻出版博物馆落地系列文博美育课程，结合文学叙事、展品观察与策展实践，培养学生的文化理解与表达能力。', tags: ['博物馆公教', '课程开发', '青少年美育'], images: teachingGallery('exhibition-birth') },
};

const intellectualProperty = [
  { date: '2022.03', type: '外观设计专利', name: '美术铅笔', role: '设计人：林嘉玉', code: 'ZL202230173614.5' },
  { date: '2022.06', type: '计算机软件著作权', name: '《计算机信息管理系统 V1.0》', role: '第二著作权人', code: '2022SR0737083' },
  { date: '2022.10', type: '外观设计专利', name: '书架（漂流小书架）', role: '第二设计人', code: 'ZL202230694209.8' },
  { date: '2023.04', type: '外观设计专利', name: '手镯（斑彩纤纤镯）', role: '第一设计人', code: '202330199737.0' },
];

const innovationRecords = [
  { date: '2021', kind: '大学生创新创业项目', title: '《蝴蝶泉·白族木雕文化产品的创新设计与开发》', role: '项目组成员', result: '校级项目 · 顺利结项' },
  { date: '2022', kind: '大学生创新创业项目', title: '《少年读书好——搭建独属于青少年的阅读交流云平台》', role: '项目组成员', result: '省级项目 · 项目立项' },
  { date: '2022', kind: '暑期“三下乡”', title: '《脊上的守望者——瓦猫传统文化传承社会调研》', role: '项目负责人', result: '暑期社会实践 · 顺利结项' },
  { date: '2023', kind: '大学生创新创业项目', title: '“斑彩熠熠”——基于非遗会泽斑铜的设计创新与实践', role: '项目组成员', result: '校级项目 · 项目立项' },
  { date: '2023', kind: '“互联网+”创新创业大赛', title: '《药对你说——基于 NLP 的病情追踪和个性化治疗系统》', role: '项目成员', result: '校级赛事 · 铜奖' },
  { date: '2023', kind: '“互联网+”创新创业大赛', title: '《傣相“手望”——设计·创新·传承，非遗傣陶助力乡村振兴》', role: '项目成员', result: '校级赛事 · 银奖' },
  { date: '2023.11', kind: '“互联网+”创新创业大赛', title: '《UAV 安防——基于多模态图像融合的非法无人机检测系统》', role: '项目成员', result: '省级赛事 · 银奖' },
  { date: '2024.09', kind: '上海大学女大学生创新创业大赛', title: '社区美术馆——艺术融入社区，打造城市文化新空间', role: '核心成员', result: '校级赛事 · 二等奖' },
];

const honorRecords = [
  { date: '01', type: '省级荣誉', title: '云南省三好学生', role: '云南省级荣誉', result: '已获评' },
  { date: '02', type: '奖学金', title: '云南大学一等奖学金（优秀学生称号，连续三年）', role: '东陆奖学金', result: '已获评' },
  { date: '03', type: '奖学金', title: '上海大学校级二等奖学金', role: '2024—2025、2025—2026 学年', result: '已获评' },
];

const academicPapers = [
  { date: '2023.01', role: '独立作者', title: '《俄罗斯巡回画派艺术特性》', journal: '《明日风尚》', meta: '省级刊物', status: '已发表' },
  { date: '2025.01', role: '独立作者', title: '《蓝晒工艺在艺术社区展中的公众美育课程价值研究》', journal: '《社会与公益》', meta: '民政部主管期刊', status: '已发表' },
  { date: '2026.03', role: '第二作者', title: '《共生视域下公共艺术参与社区更新治理的内在逻辑研究——以 S 市 D 社区停车棚艺术更新为例》', journal: '《艺术研究》', meta: '哈尔滨师范大学艺术学报 · 高校主办／省级艺术学报', status: '已发表' },
  { date: '2026.06', role: '独立作者', title: '《赵伯驹〈江山秋色图〉五行五色审美表达研究》', journal: '《美术文献》', meta: '省级艺术类期刊', status: '已发表' },
  { date: '2026.10', role: '独立作者', title: '《文化记忆视角下社区美术馆的参与式实践与社区文化记忆建构——以上海宝山社区美术馆为例》', journal: '《浙江工艺美术》', meta: '省级艺术类期刊', status: '已发表' },
];

const innovationCertificates = [
  { image: innovationProjects, alt: '2021至2023年大学生创新创业项目校级和省级立项证明', label: '项目立项 / 2021—2023' },
  { image: innovationAwards, alt: '2022至2024年大学生创新创业项目获奖证书', label: '项目获奖 / 2022—2024' },
];

function App() {
  const [selected, setSelected] = useState(null);
  const [educationOpen, setEducationOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [teachingOpen, setTeachingOpen] = useState(false);
  const [academicOpen, setAcademicOpen] = useState(false);
  const [activeStat, setActiveStat] = useState(null);
  const [activeCredential, setActiveCredential] = useState(null);
  const [profileHiActive, setProfileHiActive] = useState(false);
  const [profileAvatarActive, setProfileAvatarActive] = useState(false);
  const [heroOrbExpanded, setHeroOrbExpanded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top" aria-label="首页">
          <span className="brand-mark">LJY</span>
          <span>林嘉玉 <i>PORTFOLIO</i></span>
        </a>
        <nav aria-label="页面导航">
          <a href="#about">关于我</a>
          <a href="#education">教育背景</a>
          <a href="#projects">展览与文化项目</a>
          <a href="#teaching">公共美育教学</a>
          <a href="#academic">学术成果</a>
          <a href="#research">创新创业项目</a>
          <a href="#honors">荣誉与证书</a>
        </nav>
        <a className="nav-contact" href="#contact">联系我 <span>↗</span></a>
      </header>

      <main id="top">
        <section className="opening-carousel" aria-label="文化项目影像开场">
          <div className="opening-label"><span>LIN JIAYU / PORTFOLIO</span><span>DRAG THE MOMENT · 2026</span></div>
          <div className="opening-cylinder">
            <CircularCarousel
              items={heroCarouselItems}
              preset="cylinder"
              intro="rise"
              cardWidth={220}
              aspectRatio={1}
              speed={14}
              captions
            />
          </div>
          <div className="opening-intro"><span>拖动照片旋转探索</span><b>向下探索 ↓</b></div>
        </section>
        <section className="hero">
          <div className="hero-motion" aria-hidden="true">
            <span className="orb orb-one" />
            <span className="orb orb-two" />
            <span className="orb orb-three" />
            <span className="scanline" />
          </div>
          <button className={`hero-photo-orb ${heroOrbExpanded ? 'is-expanded' : ''}`} onClick={() => setHeroOrbExpanded(!heroOrbExpanded)} aria-label="点击放大或缩小右侧圆形图片" aria-pressed={heroOrbExpanded}><img src={heroPracticeCollage} alt="文化项目现场影像" /></button>
          <div className="hero-content shell">
            <p className="eyebrow">LIN JIAYU / CULTURE OPERATION</p>
            <h1>让文化项目<br /><em>在现场发生。</em></h1>
            <div className="hero-bottom">
              <p>艺术管理 · 公共美育 · 社区美术馆研究<br />以策展实践连接艺术、公众与城市文化空间。</p>
              <a className="round-link" href="#projects" aria-label="查看精选项目">↓</a>
            </div>
          </div>
          <div className="hero-meta">SHANGHAI · 2026<br />CULTURAL PRACTICE</div>
          <div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section className="intro shell" id="about">
          <div className="section-label"><span>01</span> ABOUT / PROFILE</div>
          <div className="intro-grid">
            <div className="profile-orbit">
              <button className={`profile-avatar-button ${profileAvatarActive ? 'is-active' : ''}`} onClick={() => setProfileAvatarActive(!profileAvatarActive)} aria-pressed={profileAvatarActive} aria-label="点击互动头像"><div className="portrait-wrap avatar-motion"><img className="avatar-frame" src={avatar01} alt="林嘉玉个人照片" /></div><span>{profileAvatarActive ? 'ART · PUBLIC · CULTURE' : 'CLICK PORTRAIT'}</span></button>
              <button className={`intro-hi ${profileHiActive ? 'is-active' : ''}`} onClick={() => setProfileHiActive(!profileHiActive)} aria-pressed={profileHiActive}><span>Hi, I’m Rita</span><strong>林嘉玉</strong><small>{profileHiActive ? 'NICE TO MEET YOU ↗' : 'CLICK TO MEET'}</small></button>
            </div>
            <div className="intro-copy">
              <p className="large-copy">将<strong>展览实践</strong>与<strong>社区美育研究</strong>相结合，推动艺术面向公众的转化与传播。</p>
              <p className="body-copy">聚焦社区美术馆、公共美育与近现代美术研究。在展览运营、公教研发与跨文化交流中，将研究转化为可参与的现场体验。</p>
              <div className="contact-line">
                <span className="contact-location">SHANGHAI / CN</span>
                <a href="tel:+8613095330995"><i>CALL</i>13095330995</a>
                <a href="mailto:2511356868@qq.com"><i>EMAIL</i>2511356868@qq.com ↗</a>
              </div>
            </div>
          </div>
          <div className="stats">
            {[['27','公共美育实践','含策划主讲、协助执行'],['07','展览项目','含策划、主讲、协助执行'],['05','学术成果','点击查看研究输出'],['04','知识产权成果','专利与著作权'],['04','创新创业项目','实践与竞赛成果']].map(([number,label,detail], index) => <button className={activeStat === index ? 'is-active' : ''} key={label} onClick={() => setActiveStat(activeStat === index ? null : index)}><span className="stat-front"><b>{number}</b><span>{label}</span></span><span className="stat-back">{detail}<i>↗</i></span></button>)}
          </div>
        </section>

        <section className="education shell" id="education">
          <div className="section-label"><span>02</span> EDUCATION</div>
          <div className="education-head"><h2>教育背景，<br /><em>在学习中沉淀方法。</em></h2><p>从艺术教育到艺术管理，持续积累研究、策划与公共文化实践的方法。</p></div>
          <button className={`education-folder ${educationOpen ? 'is-open' : ''}`} onClick={() => setEducationOpen(!educationOpen)} aria-expanded={educationOpen}>
            <span className="folder-tab">02 / EDUCATION</span><span className="folder-card folder-card--left">云南大学<br /><i>FINE ARTS</i></span><span className="folder-card folder-card--right">上海大学<br /><i>ART MANAGEMENT</i></span><span className="folder-cover"><b>学历背景</b><small>{educationOpen ? 'CLICK TO CLOSE' : 'CLICK TO OPEN'} ↗</small></span>
          </button>
          {educationOpen && <div className="education-list">
            <article><div className="education-date">2020.09 — 2024.06</div><div className="education-main"><p>云南大学｜211 · 双一流建设高校</p><h3>美术学 · 本科</h3><div className="education-details"><span><b>GPA 3.68 / 4.0</b><em>成绩排名前 5%</em></span><span>学院组织部负责人</span><small>核心课程：美术概论 · 中国画创作 · 艺术教育学 · 版画基础 · 中外美术史</small></div><button className="education-experience" onClick={() => setSelected({ no: '02', type: 'CAMPUS EXPERIENCE', title: '校园经历', subtitle: '校园组织实践记录', role: '组织部', desc: '主持校级升旗仪式、担任校史讲解员与百年校庆宣传大使，并参与校园活动的组织与执行。', tags: ['校园组织', '活动执行'], images: [campusExperience] })}><img src={campusExperience} alt="云南大学校园经历" /><span>查看校园经历图片 ↗</span></button></div></article>
            <article><div className="education-date">2024.09 — 2027.06</div><div className="education-main"><p>上海大学｜211 · 双一流建设高校</p><h3>美术与书法（艺术管理方向） · 硕士研究生</h3><div className="education-details"><span><b>GPA 3.7 / 4.0</b><em>成绩排名前 5%</em></span><span>研究生助教</span><small>核心课程：艺术美学 · 架上艺术研究 · 艺术展览与策划 · 艺术实践 · 人工智能与协同创新 · 马克思主义与社会科学方法论 · 造型艺术原理 · 学术英语写作与交流（硕士）</small></div></div></article>
          </div>}
        </section>

        <section className="projects" id="projects">
          <div className="shell">
            <button className="section-reveal section-reveal--light" style={{ backgroundImage: `url(${projectsFolderBackground})` }} onClick={() => setProjectsOpen(!projectsOpen)} aria-expanded={projectsOpen}>
              <div className="section-label"><span>03</span> FEATURED WORK</div>
              <div><h2>展览与<br /><em>文化项目</em></h2><p>从策划统筹、现场执行到公共教育与传播，完整参与文化项目的落地过程。</p><small>{projectsOpen ? 'CLOSE FOLDER' : 'OPEN PROJECT FOLDER / 点击打开项目档案'} ↗</small></div>
            </button>
            {projectsOpen && <div className="project-list">
              {projects.map((project) => (
                <button className={`project-card project-${project.no} ${project.accent}`} key={project.no} onClick={() => setSelected(project)}>
                  <div className={`project-visual ${project.image ? 'project-visual-photo' : ''}`}>
                    {project.image && <img src={project.image} alt={`${project.title}项目现场`} />}
                    <span className="project-number">{project.no}</span><span className="visual-word">ARCHIVE</span><span className="visual-orbit" />
                  </div>
                  <div className="project-info">
                    <p className="project-type">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <div className="project-foot"><span>{project.role}</span><i>查看项目 ↗</i></div>
                  </div>
                </button>
              ))}
            </div>}
            {projectsOpen && <p className="archive-tip">点击卡片查看项目职责与完整图片档案</p>}
          </div>
        </section>

        <section className="teaching shell" id="teaching">
          <button className="section-reveal section-reveal--teaching" style={{ backgroundImage: `url(${teachingFolderBackground})` }} onClick={() => setTeachingOpen(!teachingOpen)} aria-expanded={teachingOpen}>
            <div className="section-label"><span>04</span> PUBLIC ART EDUCATION</div>
            <div><h2>公共美育，<br /><em>让参与发生。</em></h2><p>从课程研发到现场组织，面向少儿、社区大众与中学生，设计有参与感的艺术学习体验。</p><small>{teachingOpen ? 'CLOSE FOLDER' : 'OPEN PROGRAM FOLDER / 点击打开课程档案'} ↗</small></div>
          </button>
          {teachingOpen && <div className="teaching-grid">
            {teaching.map(([no, title, sub, desc]) => (
              <article className={`teaching-card ${no === '02' ? 'teaching-card--cyanotype' : ''}`} key={no}>
                <span className="card-no">{no}</span>
                <div className="teaching-symbol" aria-hidden="true">{no === '01' ? '◒' : no === '02' ? '⌁' : no === '03' ? '◉' : '↗'}</div>
                <p>{sub}</p><h3>{title}</h3><span className="card-rule" /><small>{desc}</small>
                {teachingProjects[no] && <button className="cyanotype-cover" onClick={() => setSelected(teachingProjects[no])} aria-label={`查看${title}照片`}>
                  <img src={teachingProjects[no].cover || teachingProjects[no].images[0]} alt={`${title}封面`} />
                  <span>查看全部现场照片 <b>↗</b></span>
                </button>}
              </article>
            ))}
          </div>}
        </section>

        <section className="academic shell" id="academic">
          <button className="section-reveal section-reveal--academic" style={{ backgroundImage: `url(${academicFolderBackground})` }} onClick={() => setAcademicOpen(!academicOpen)} aria-expanded={academicOpen}>
            <div><div className="section-label"><span>05</span> ACADEMIC OUTPUT</div><h2>学术成果</h2></div>
            <p>以公共美育、社区艺术与艺术史研究为线索，持续将项目实践转化为学术写作。<small>{academicOpen ? 'CLOSE FOLDER' : 'OPEN ACADEMIC FOLDER / 点击查看成果'} ↗</small></p>
          </button>
          {academicOpen && <div className="academic-table-wrap">
            <table className="academic-table">
              <thead><tr><th>时间</th><th>作者角色</th><th>论文题目</th><th>发表刊物</th><th>级别／主管单位</th><th>状态</th></tr></thead>
              <tbody>{academicPapers.map(({ date, role, title, journal, meta, status }) => <tr key={title}><td>{date}</td><td>{role}</td><td>{title}</td><td>{journal}</td><td>{meta}</td><td><b>{status}</b></td></tr>)}</tbody>
            </table>
          </div>}
        </section>

        <section className="patents" id="patents">
          <div className="shell patents-layout">
            <div className="patents-copy"><div className="section-label"><span>06</span> INTELLECTUAL PROPERTY</div><h2>专利与<br /><em>著作权成果。</em></h2><p>3 项外观设计专利与 1 项计算机软件著作权，覆盖文创产品、公共阅读设施与信息管理系统。</p></div>
            <div className="patents-detail"><button className="record-image-button" onClick={() => setSelected({ no: '05', type: 'INTELLECTUAL PROPERTY', title: '专利与著作权成果', subtitle: '点击证书图查看完整明细', role: '3 项外观设计专利 · 1 项计算机软件著作权', desc: '文创产品、公共阅读设施与信息管理系统的知识产权成果。', tags: ['外观设计专利', '软件著作权'], records: intellectualProperty })} aria-label="查看专利与著作权成果明细"><div className="patents-visual"><img src={patentsOverview} alt="软件著作权和外观设计专利证书" /></div><span>点击查看成果明细 <b>↗</b></span></button></div>
          </div>
        </section>

        <section className="research" id="research">
          <div className="shell research-layout">
            <div className="research-title"><div className="section-label"><span>07</span> INNOVATION / ENTREPRENEURSHIP</div><h2>大学生<br /><strong>创新创业项目。</strong></h2><p>从校级立项到省级赛事，以公共美育与社区文化空间为切入推进项目实践。</p></div>
            <div className="innovation-detail"><button className="record-image-button" onClick={() => setSelected({ no: '06', type: 'INNOVATION / ENTREPRENEURSHIP', title: '大学生创新创业项目', subtitle: '项目立项 · 社会实践 · 创新创业竞赛', role: '8 项项目与竞赛成果', desc: '从文化创新、社区美术馆到技术应用，持续参与项目研究、实践落地与创新创业竞赛。', tags: ['项目立项', '社会实践', '创新创业'], records: innovationRecords })} aria-label="查看大学生创新创业项目明细"><div className="innovation-archive innovation-archive--full" aria-label="大学生创新创业项目证明与获奖证书">
              {innovationCertificates.map(({ image, alt, label }) => <figure key={image}><div className="innovation-archive-label">{label}</div><img src={image} alt={alt} /></figure>)}
            </div><span>点击查看项目与获奖明细 <b>↗</b></span></button></div>
          </div>
        </section>

        <section className="honors shell" id="honors">
          <div className="section-label"><span>08</span> HONORS / QUALIFICATIONS</div>
          <div className="honors-layout">
            <div><h2>可靠的积累，<br /><em>持续的投入。</em></h2><p>以长期、稳定的学习与实践回应每一次项目现场。</p></div>
            <div className="honor-groups">
              <article className="honor-folder-group"><p>重点荣誉</p><button className="honor-folder" onClick={() => setSelected({ no: '08', type: 'HONORS / QUALIFICATIONS', title: '重点荣誉', subtitle: '点击查看荣誉文字介绍', role: '省级荣誉 · 奖学金', desc: '在学业、综合素质与专业实践中持续积累的阶段性成果。', tags: ['省级荣誉', '奖学金'], records: honorRecords })} aria-label="查看重点荣誉文字介绍"><img src={honorsOverview} alt="荣誉证书汇总" /><span>03 / HONORS</span><b>荣誉档案</b><small>CLICK FOR DETAILS ↗</small></button></article>
              <article className="credential-group"><img className="credential-bg" src={credentialsBackground} alt="急救与运动实践活动现场" /><p>专业资质</p><ul className="credential-plain-list">
                {['高中美术教师资格证','美国心脏协会 AHA 国际急救员证','保育员中级技能证书','中国健美协会 CBBA 中级专业健身教练证书','婚姻家庭咨询师（高级）','健康管理师（高级）','家庭教育指导师','心理咨询师（四级）'].map((name, index) => <li className={activeCredential === index ? 'is-active' : ''} key={name} onClick={() => setActiveCredential(activeCredential === index ? null : index)}><span>{name}</span><i>{activeCredential === index ? '已选中 ↗' : '点击查看'}</i></li>)}
              </ul></article>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-glow" />
          <div className="shell contact-content">
            <p className="eyebrow contact-eyebrow">期待与您一起，让好项目落地。</p>
            <h2>下一段故事，<br /><em>从一次对话开始。</em></h2>
            <div className="contact-actions"><a href="mailto:2511356868@qq.com"><small>邮箱</small>2511356868@qq.com <span>↗</span></a></div>
            <footer><span>LIN JIAYU · PORTFOLIO</span><span>文化项目运营 / 公共美育 / 艺术管理</span></footer>
          </div>
        </section>
      </main>

      {selected && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
        <article className="project-modal" onClick={(event) => event.stopPropagation()}>
          <button className="close-modal" onClick={() => setSelected(null)} aria-label="关闭">×</button>
          <p>{selected.type}</p><span>{selected.no}</span><h2>{selected.title}</h2><h3>{selected.subtitle}</h3><strong>{selected.role}</strong><div className="modal-line" /><p className="modal-desc">{selected.desc}</p>
          {selected.records ? <div className="modal-records">{selected.records.map((record) => <article key={record.code || record.title}><time>{record.date}</time><div><small>{record.type || record.kind}</small><h4>{record.name || record.title}</h4><p>{record.role}</p></div><b>{record.code || record.result}</b></article>)}</div> : selected.sections ? <div className="project-gallery-groups">{selected.sections.map((section) => <section className="project-gallery-section" key={section.title}><header><h4>{section.title}</h4><p>{section.detail}</p></header><div className="project-gallery">{section.images.map((image, index) => <img key={image} src={image} alt={`${selected.title} · ${section.title} · 照片 ${index + 1}`} onError={(event) => { event.currentTarget.style.display = 'none'; }} />)}</div></section>)}</div> : selected.images && <div className="project-gallery">{selected.images.map((image, index) => <img key={image} src={image} alt={`${selected.title}现场照片 ${index + 1}`} onError={(event) => { event.currentTarget.style.display = 'none'; }} />)}</div>}
          <div className="modal-tags">{selected.tags.map((tag) => <b key={tag}>{tag}</b>)}</div>
        </article>
      </div>}
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
