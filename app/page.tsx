import type { CSSProperties } from "react";

type CSSVariableProperties = CSSProperties & Record<`--${string}`, string>;

function cssVars(vars: Record<`--${string}`, string>): CSSVariableProperties {
  return vars as CSSVariableProperties;
}

export default function Home() {
  return (
    <>
      <header className="topbar">
          <a className="brand" href="#top" aria-label="返回顶部">
            <span className="brand-mark" aria-hidden="true"></span>
            <span>排球少年!!</span>
          </a>
          <nav className="nav" aria-label="页面导航">
            <a href="#about">作品</a>
            <a href="#teams">队伍</a>
            <a href="#characters">角色</a>
            <a href="#watch">观看顺序</a>
          </nav>
        </header>
      
        <main id="top">
          <section className="hero">
            <div className="hero-content">
              <div className="eyebrow">青春、才能、努力与球网另一侧</div>
              <h1>排球少年!!</h1>
              <p className="hero-subtitle">
                一部把排球比赛拍得像战斗、把成长写得像呼吸的热血运动番。它讲的不是天才一路胜利，而是每个人都在寻找自己能站上球场的理由。
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#about">了解作品</a>
                <a className="button" href="#characters">认识乌野</a>
              </div>
              <form className="visitor-form" aria-label="用户信息表单">
                <label>
                  <span>性别</span>
                  <select name="gender" defaultValue="" required>
                    <option value="" disabled>请选择</option>
                    <option value="female">女</option>
                    <option value="male">男</option>
                    <option value="other">其他</option>
                  </select>
                </label>
                <label>
                  <span>年龄</span>
                  <input name="age" type="number" min="1" max="120" placeholder="18" required />
                </label>
                <label>
                  <span>电话</span>
                  <input name="phone" type="tel" inputMode="tel" placeholder="请输入手机号" required />
                </label>
                <button className="button primary" type="submit">开始浏览</button>
              </form>
            </div>
          </section>
      
          <section className="section alt" id="about">
            <div className="wrap">
              <div className="section-head">
                <h2>从“小巨人”的背影，到重新起飞的乌野</h2>
                <p>《排球少年!!》围绕宫城县乌野高中男子排球部展开。日向翔阳被电视中“小巨人”的身影点燃，虽然身高不占优势，却凭借弹跳、速度和不服输的执念冲进球场。</p>
              </div>
              <div className="overview-grid">
                <article className="panel summary">
                  <p>
                    故事的核心是日向翔阳与影山飞雄这对“怪人快攻”组合：一个拥有惊人运动能力，一个具备顶级传球视野。两人从互相较劲，到彼此磨合，再与队友一起让沉寂的乌野重新成为赛场上无法忽视的存在。
                  </p>
                  <p>
                    作品真正动人的地方，是它没有把对手写成单纯的障碍。青叶城西、音驹、白鸟泽、稻荷崎等队伍都有自己的逻辑、信念和遗憾。每一次扣球、拦网和救球，都像是在回答“我为什么还要继续打下去”。
                  </p>
                </article>
                <aside className="panel">
                  <ul className="facts">
                    <li><strong>原作</strong><span>古馆春一创作的排球题材漫画</span></li>
                    <li><strong>动画制作</strong><span>Production I.G</span></li>
                    <li><strong>关键词</strong><span>青春、团队、宿敌、成长、全国大赛</span></li>
                    <li><strong>适合人群</strong><span>喜欢运动番、群像剧和高燃比赛演出的观众</span></li>
                  </ul>
                </aside>
              </div>
            </div>
          </section>
      
          <section className="section" id="teams">
            <div className="wrap">
              <div className="section-head">
                <h2>不只是乌野，每支队伍都有自己的排球</h2>
                <p>强队之间的差异不是数值高低，而是打法、性格和信念的碰撞。它们让比赛像棋局，也像一次次青春宣言。</p>
              </div>
              <div className="teams">
                <article className="team-card" style={cssVars({ "--card-a": "#101a2d", "--card-b": "#f07a2f" })}>
                  <h3>乌野高中</h3>
                  <p>曾经的强豪，重新振翅的“不会飞的乌鸦”。速度、韧性和不断试错，是这支队伍的底色。</p>
                  <span className="tag">主角队</span>
                </article>
                <article className="team-card" style={cssVars({ "--card-a": "#0f5670", "--card-b": "#43b4bb" })}>
                  <h3>青叶城西</h3>
                  <p>以二传手及川彻为核心，成熟、稳定、善于读局，是乌野成长路上的重要高墙。</p>
                  <span className="tag">宿敌</span>
                </article>
                <article className="team-card" style={cssVars({ "--card-a": "#7f1d2d", "--card-b": "#e34f4f" })}>
                  <h3>音驹高中</h3>
                  <p>“连接”是他们的武器，防守坚韧，节奏细密，与乌野有着命中注定般的垃圾场决战。</p>
                  <span className="tag">老对手</span>
                </article>
                <article className="team-card" style={cssVars({ "--card-a": "#38205f", "--card-b": "#c6a24a" })}>
                  <h3>白鸟泽学园</h3>
                  <p>绝对王牌牛岛若利领衔，力量和高度压迫感极强，是县内王者级别的存在。</p>
                  <span className="tag">王者</span>
                </article>
              </div>
            </div>
          </section>
      
          <section className="section" id="protagonists">
            <div className="wrap">
              <div className="section-head">
                <h2>怪人快攻的双主角</h2>
                <p>日向翔阳和影山飞雄从互相较劲开始，到成为乌野最锋利的进攻组合。一个负责突破想象，一个负责把球精准托到未来。</p>
              </div>
              <div className="protagonists" aria-label="主角介绍">
                <article className="protagonist">
                  <div className="protagonist-media">
                  <img src="/assets/hinata-shoyo.png" alt="日向翔阳角色图" />
                  </div>
                  <div className="protagonist-copy">
                    <span className="protagonist-kicker">怪人快攻 · 速度与弹跳</span>
                    <h3>日向翔阳</h3>
                    <p>日向翔阳被“小巨人”的背影点燃，即使身高不占优势，也用惊人的弹跳、冲刺速度和永不退缩的斗志冲进球场。他的存在让乌野的进攻多了一种近乎不可思议的节奏。</p>
                    <p>他不是一开始就完美的王牌，而是在一次次接球、助跑和失败里学会看见球场。越是不被看好，越能把比赛重新点燃。</p>
                    <div className="protagonist-points" aria-label="日向翔阳关键词">
                      <span>副攻手</span>
                      <span>爆发力</span>
                      <span>诱饵</span>
                    </div>
                  </div>
                </article>
                <article className="protagonist">
                  <div className="protagonist-media">
                  <img src="/assets/kageyama-tobio.png" alt="影山飞雄角色图" />
                  </div>
                  <div className="protagonist-copy">
                    <span className="protagonist-kicker">球场上的王者 · 精准托球</span>
                    <h3>影山飞雄</h3>
                    <p>影山飞雄拥有天才级的观察力和传球精度，他能把球送到攻手最需要的位置，也因此成为乌野进攻节奏的发动机。冷静、强势、执着，是他最锋利的一面。</p>
                    <p>真正的成长来自学会信任队友。影山从“命令别人进攻”的二传，慢慢变成能把每个人能力托举出来的指挥者。</p>
                    <div className="protagonist-points" aria-label="影山飞雄关键词">
                      <span>二传手</span>
                      <span>控场</span>
                      <span>精密传球</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
      
          <section className="section alt" id="characters">
            <div className="wrap">
              <div className="section-head">
                <h2>乌野的核心角色</h2>
                <p>每个人都有短板，也都有不可替代的位置。正因为不完美，团队才变得真实。</p>
              </div>
              <div className="character-grid">
                <article className="character">
                  <div className="avatar" style={cssVars({ "--avatar-a": "#ff8a35", "--avatar-b": "#d94720" })}>日</div>
                  <div>
                    <h3>日向翔阳</h3>
                    <p>小个子副攻手，速度和弹跳惊人，用行动证明高度不是球场的全部。</p>
                  </div>
                </article>
                <article className="character">
                  <div className="avatar" style={cssVars({ "--avatar-a": "#263b73", "--avatar-b": "#0f1628" })}>影</div>
                  <div>
                    <h3>影山飞雄</h3>
                    <p>天才二传手，精准、强势，也在团队中学会真正的“托付”。</p>
                  </div>
                </article>
                <article className="character">
                  <div className="avatar" style={cssVars({ "--avatar-a": "#f0b43c", "--avatar-b": "#8e5c22" })}>月</div>
                  <div>
                    <h3>月岛萤</h3>
                    <p>理性派副攻手，从旁观到投入，他的拦网是成长线最漂亮的瞬间之一。</p>
                  </div>
                </article>
                <article className="character">
                  <div className="avatar" style={cssVars({ "--avatar-a": "#2c8f80", "--avatar-b": "#15525d" })}>泽</div>
                  <div>
                    <h3>泽村大地</h3>
                    <p>队长与防守支柱，稳定到几乎让人忘记他承担了多少压力。</p>
                  </div>
                </article>
                <article className="character">
                  <div className="avatar" style={cssVars({ "--avatar-a": "#a15630", "--avatar-b": "#3a2730" })}>菅</div>
                  <div>
                    <h3>菅原孝支</h3>
                    <p>温柔可靠的三年级二传手，在关键时刻总能把队伍重新拉回节奏。</p>
                  </div>
                </article>
                <article className="character">
                  <div className="avatar" style={cssVars({ "--avatar-a": "#f2c54a", "--avatar-b": "#22283a" })}>西</div>
                  <div>
                    <h3>西谷夕</h3>
                    <p>自由人，乌野的守护神。只要他还在，球就没有真正落地。</p>
                  </div>
                </article>
              </div>
            </div>
          </section>
      
          <section className="section">
            <div className="wrap">
              <div className="section-head">
                <h2>为什么它这么燃</h2>
                <p>《排球少年!!》的热血不是简单喊口号，而是把每一次训练、失败和微小调整，都拍成可以被看见的进步。</p>
              </div>
              <div className="themes">
                <article className="theme" style={cssVars({ "--accent": "#ff7a2f" })}>
                  <h3>比赛演出清晰</h3>
                  <p>传球路线、攻防选择和站位变化都能被观众理解，紧张感来自真正的战术推进。</p>
                </article>
                <article className="theme" style={cssVars({ "--accent": "#19a7a8" })}>
                  <h3>对手同样鲜活</h3>
                  <p>每支队伍都有自己的青春。输赢之外，观众也会记住他们如何走到这里。</p>
                </article>
                <article className="theme" style={cssVars({ "--accent": "#f6c453" })}>
                  <h3>成长不靠奇迹</h3>
                  <p>角色的突破来自反复练习、彼此理解和临场选择，所以每个高光时刻都站得住。</p>
                </article>
              </div>
            </div>
          </section>
      
          <section className="section quote-band">
            <div className="wrap quote">
              <p>“再高的墙，只要球还没有落地，就还有下一次起跳。”</p>
              <div className="score" aria-label="装饰比分板">
                <div><strong>25</strong><span>KARASUNO</span></div>
                <div><strong>23</strong><span>RIVAL</span></div>
              </div>
            </div>
          </section>
      
          <section className="section alt" id="watch">
            <div className="wrap">
              <div className="section-head">
                <h2>推荐观看顺序</h2>
                <p>如果是第一次看，按动画播出主线顺序走最顺。总集篇可按需要补，核心体验主要来自 TV 动画与后续剧场版。</p>
              </div>
              <div className="watch">
                <article className="watch-step">
                  <span className="num">1</span>
                  <h3>第一季</h3>
                  <p>乌野集结，日向和影山从冲突到组成怪人快攻。</p>
                </article>
                <article className="watch-step">
                  <span className="num">2</span>
                  <h3>第二季</h3>
                  <p>东京集训与春高预选，队伍开始真正升级。</p>
                </article>
                <article className="watch-step">
                  <span className="num">3</span>
                  <h3>第三季</h3>
                  <p>对阵白鸟泽，十集高密度比赛，压迫感拉满。</p>
                </article>
                <article className="watch-step">
                  <span className="num">4</span>
                  <h3>TO THE TOP 与剧场版</h3>
                  <p>全国大赛展开，乌野迎来更强的对手和更大的舞台。</p>
                </article>
              </div>
            </div>
          </section>
        </main>
      
        <footer>
          <div className="wrap">
            本页为《排球少年!!》动漫介绍单页示例，视觉图为原创生成资产，仅用于网页展示。
          </div>
        </footer>
    </>
  );
}
