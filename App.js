import logo from './logo.svg';
import './App.css';

const HeaderLink=({children="ItemX", href="#"}) =>
<li class="header-btn"><a class="btn1" href={href}>{children}</a></li>
const Card=({title="Lorem ipsum dolor sit amet.",children="p", 
src="./img/card.png", btn="Go"}) =>
<li><section class="blok1"> 
                        <img class="foto" src={src} alt=""/>
                        <h1>{title}</h1>
                        <p>{children}</p>
                        <button class="go">{btn}</button>
                    </section></li>

function App() {
  return (
    <div className="App">
     <header>
            <nav class="main-nav hamburger-menu">
                <input id="menu-toggle" type="checkbox" />
                <label class="menu-btn" for="menu-toggle">
                  <span></span>
                </label>
                <img class="logo" src="./img/logo.png" alt="Logo A-level"/>
                <ul class="menu-box">
                  <HeaderLink>Item1</HeaderLink>
                  <HeaderLink>Item2</HeaderLink>
                  <HeaderLink>Item3</HeaderLink>
                  <HeaderLink>Item4</HeaderLink>
                  <HeaderLink>Item5</HeaderLink>
                {/* <li class="header-btn"><a class="btn1" href="#">Item1</a></li>
                <li class="header-btn"><a class="btn2" href="#">Item2</a></li>
                <li class="header-btn"><a class="btn3" href="#">Item3</a></li>
                <li class="header-btn"><a class="btn4" href="#">Item4</a></li>
                <li class="header-btn"><a class="btn5" href="#">Item5</a></li> */}
               </ul>
            </nav>
    </header>
    <main class="main">
        <aside class="as1">Aside1</aside>
        <section class="all-blok">
                <article class="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo dolorem modi ipsam,tenetur dignissimos ea repudiandae, temporibus in ex, fugit nisi autem voluptatibus est sit exercitationem rerum. Eligendi, necessitatibus nostrum!</article>
                <h1>OUR WORK</h1>
                <ul class="bloks">
                  <Card>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quia possimus temporibus, dolorem magnam vel harumat, laboriosam hic sed quas est quae consequuntur quibusdam!</Card>
                  <Card>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Card>
                  <Card>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptatibus iusto blanditiis reprehenderit voluptatem.</Card>
                  <Card>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, provident!!</Card>
                  <Card>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quia possimus temporibus, dolorem magnam vel harumat, laboriosam hic sed quas est quae consequuntur quibusdam!</Card>
                  <Card>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quia possimus temporibus, dolorem magnam vel harumat, laboriosam hic sed quas est quae consequuntur quibusdam!</Card>
                    
                    
                    
                    {/* <li><section class="blok1"> 
                        <img class="foto" src="./img/card.png" alt=""/>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quia possimus temporibus, dolorem magnam vel harumat, laboriosam hic sed quas est quae consequuntur quibusdam!</p>
                        <button class="go">Go</button>
                    </section></li>
                     <li><section class="blok2">
                        <img class="foto" src="./img/card.png" alt=""/>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        <button class="go">Go</button>
                    </section></li>
                    <li><section class="blok3">
                        <img class="foto" src="./img/card.png" alt=""/>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptatibus iusto blanditiis reprehenderit voluptatem.</p> 
                        <button class="go">Go</button>
                     </section></li>
                    <li><section class="blok4">
                        <img class="foto" src="./img/card.png" alt=""/>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, provident!!</p> 
                        <button class="go">Go</button>
                    </section></li>
                    <li><section class="blok5">
                        <img class="foto" src="./img/card.png" alt=""/>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quia possimus temporibus, dolorem magnam vel harumat, laboriosam hic sed quas est quae consequuntur quibusdam!</p>
                        <button class="go">Go</button>
                    </section></li>
                    <li><section class="blok6">
                        <img class="foto" src="./img/card.png" alt=""/>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quia possimus temporibus, dolorem magnam vel harumat, laboriosam hic sed quas est quae consequuntur quibusdam!</p>
                        <button class="go">Go</button>
                    </section></li> */}
                </ul>
        </section>
        <aside class="as2">Aside2</aside>
    </main>
    <footer>Footer</footer>  

</div>
  );
}
export default App;
