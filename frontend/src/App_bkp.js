import React from 'react';
import "./App.css";
import Login from './components/Login/Login';

function App() {
  return (
    <>

    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <h1 className="logo">CHILLZFLIX</h1>
        </div>
        <div className="menu-container">
          <ul className="menu-list">
            <div className="dropdown">
              <li className="menu-list-item active">Home</li>
              <div className="dropdown-content">
                <a href="#a1">English Hits</a>
                <a href="#a2">Watch Later</a>
                <a href="#a3">Regionals</a>
                <a href="#a4">Favorites</a>
                <a href="#a5">Popular Mix</a>
                <a href="#a6">Hindi Hits</a>
              </div>
            </div>

            <div className="dropdown">
              <li className="menu-list-item">Movies</li>
              <div className="dropdown-content">
                <a href="#">Top chart</a>
                <a href="#">New releases</a>
                <a href="#">English</a>
                <a href="#">Hindi</a>
                <a href="#">Punjabi</a>
              </div>
            </div>

            <li className="menu-list-item">Series</li>

            <div className="dropdown">
              <li className="menu-list-item">Genre</li>
              <div className="dropdown-content">
                <a href="#">Romantic</a>
                <a href="#">Horror</a>
                <a href="#">Sci-Fi</a>
                <a href="#">Comedy</a>
                <a href="#">Thriller</a>
              </div>
            </div>
            <li className="menu-list-item">Trends</li>
          </ul>
        </div>
        <div className="profile-container">
          <img className="profile-picture" src="./profile.jpg" alt="" />
          <div className="profile-text-container">
            <div className="dropdown">
              <span className="profile-text">PROFILE</span>
              <div className="dropdown-content">
                <a href="#">Account</a>
                {/* <Login /> */}
                <a href="../login.html">Logout</a>
              </div>
            </div>
            <i className="fas fa-caret-down"></i>
          </div>
          <div className="toggle">
            <i className="fas fa-moon toggle-icon"></i>
            <i className="fas fa-sun toggle-icon"></i>
            <div className="toggle-ball"></div>
          </div>
        </div>
      </div>
    </div><div className="sidebar">
        <i className="left-menu-icon fas fa-search"></i>
        <i className="left-menu-icon fas fa-home"></i>
        <i className="left-menu-icon fas fa-users"></i>
        <i className="left-menu-icon fas fa-bookmark"></i>
        <i className="left-menu-icon fas fa-tv"></i>
        <i className="left-menu-icon fas fa-hourglass-start"></i>
      </div>
      <div className="container">
        <div className="content-container">
          <div
            className="featured-content"
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), #151515)',
              backgroundImage: "url('https://example.com/./f-1.jpg')",
            }}
          >
            <img className="featured-title" src="./f-t-1.png" alt="" />
            <p className="featured-desc">
              Accompanied by a German bounty hunter, a freed slavenamed Django
              travels across America to free his wife from a sadistic plantation
              owner. Quentin Tarantino and Christoph Waltz both won Oscars for
              Tarantino's violent spin on spaghetti westerns.
            </p>
            <button className="featured-button">
              <a href="https://example.com/watch/tenet">WATCH</a>
            </button>
          </div>
          <div className="movie-list-container">
            <h1 id="a1" className="movie-list-title">English Hits</h1>
            <div className="movie-list-wrapper">
              <div className="movie-list">
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./1.jpeg"
                    alt="" />
                  <span className="movie-list-item-title">Peaky Blinders</span>
                  <p className="movie-list-item-desc">
                    A notorious gang in 1919 Birmingham, England, is led by the
                    fierce Tommy Shelby, a crime boss set on moving up in the
                    world no matter the cost.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/peaky-blinders">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./2.jpeg"
                    alt="" />
                  <span className="movie-list-item-title">Money Heist</span>
                  <p className="movie-list-item-desc">
                    Eight thieves take hostages and lock themselves in the Royal
                    Mint of Spain as a criminal manipulates the police to carry
                    out his plan.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/money-heist">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./333.jpg"
                    alt="" />
                  <span className="movie-list-item-title">TENET</span>
                  <p className="movie-list-item-desc">
                    A secret agent is given a single word as his weapon and sent
                    to prevent the onset of World War III.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/tenet">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./444.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Knives Out</span>
                  <p className="movie-list-item-desc">
                    The circumstances surrounding the death of crime novelist
                    Harlan Thrombey are mysterious,
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/knives-out">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./5.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Avengers</span>
                  <p className="movie-list-item-desc">
                    American superhero film based on the Marvel Comics superhero
                    team of the same name.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/avengers">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./6.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Rampage</span>
                  <p className="movie-list-item-desc">
                    Rampage is a 2018 American science fiction monster film
                    directed by Brad Peyton, loosely based on the video game
                    series of the same name by Midway Games
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/rampage">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./7.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Ender's Game</span>
                  <p className="movie-list-item-desc">
                    Ender's Game is a 2013 American military science fiction
                    action film based on Orson Scott Card's 1985 novel of the same
                    name.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/enders-game">Watch</a>
                  </button>
                </div>
              </div>
              <i className="fas fa-chevron-right arrow"></i>
            </div>
          </div>
          <div className="movie-list-container">
            <h1 id="a2" className="movie-list-title">Watch later</h1>
            <div className="movie-list-wrapper">
              <div className="movie-list">
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./8.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Iron Man</span>
                  <p className="movie-list-item-desc">
                    An industrialist constructs a high-tech armoured and decides
                    to use his suit tofight against evil forces and save the
                    world.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/iron-man">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./9.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Mirzapur</span>
                  <p className="movie-list-item-desc">
                    The iron-fisted Akhandanand Tripathi is a millionaire carpet
                    exporter and the mafia don of Mirzapur. His son, Munna, is an
                    unworthy, power hungry heir who will stop at nothing to
                    inherit his father's legacy.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/mirzapur">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./10.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Due Date</span>
                  <p className="movie-list-item-desc">The estimated date of delivery, also known as expected date of
                    confinement, and estimated due date or simply due date.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/due-date">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./11.jpg"
                    alt="" />
                  <span className="movie-list-item-title">The Family Man</span>
                  <p className="movie-list-item-desc">
                    The Family Man is an edgy action-drama series, which tells the
                    story of a middle-className man who works for a special cell of
                    the National Investigation Agency.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/the-family-man">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./12.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Sacred Games</span>
                  <p className="movie-list-item-desc">
                    A link in their pasts leads an honest cop to a fugitive gang
                    boss, whose cryptic warning spurs the officer on a quest to
                    save Mumbai from cataclysm.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/sacred-games">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./21.png"
                    alt="" />
                  <span className="movie-list-item-title">3 idiots </span>
                  <p className="movie-list-item-desc">
                    3 Idiots is a 2009 Indian Hindi-language coming-of-age
                    comedy-drama film directed by Rajkumar Hirani, and also
                    co-written by him with Abhijat Joshi.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/3-idiots">Watch</a>
                  </button>
                </div>
              </div>
              <i className="fas fa-chevron-right arrow"></i>
            </div>
          </div>
          <div className="movie-list-container">
            <h1 id="a3" className="movie-list-title">Regional</h1>
            <div className="movie-list-wrapper">
              <div className="movie-list">
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./30.jfif"
                    alt="" />
                  <span className="movie-list-item-title">Sufna</span>
                  <p className="movie-list-item-desc">
                    Jeet, a carefree young man, and Teg, a poor labourer working
                    in the fields, fall in love with each other.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/sufna">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./31.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Dear Comorade</span>
                  <p className="movie-list-item-desc">
                    Bobby, a student union leader with anger issues, falls in love
                    with Lily, a state-level cricketer.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/dear-comorade">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./32.jpg"
                    alt="" />
                  <span className="movie-list-item-title">NatSamrath</span>
                  <p className="movie-list-item-desc">
                    After retirement, Ganpat Belwalkar, a Shakespearean actor,
                    divides his property amongst his two children.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/natsamrath">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./33.jpg"
                    alt="" />
                  <span className="movie-list-item-title">World famous lover</span>
                  <p className="movie-list-item-desc">
                    As Gautham, an aspiring writer, grieves his heartbreak by
                    penning his thoughts in the form of love stories.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/world-famous-lover">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./34.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Qismat</span>
                  <p className="movie-list-item-desc">
                    Shivjit and Bani pretend to be in a relationship to make her
                    ex-boyfriend jealous.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/qismat">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./35.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Chal mera putt</span>
                  <p className="movie-list-item-desc">
                    Six illegal immigrants try to make a living in the UK while
                    fearing a raid. However, they develop a friendship and always
                    try to look after each other.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/chal-mera-putt">Watch</a>
                  </button>
                </div>
              </div>

              <i className="fas fa-chevron-right arrow"></i>
            </div>
          </div>
          <div
            className="featured-content"
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), #151515)',
              backgroundImage: "url('https://example.com/./f-2.jpg')",
            }}
          >
            <img className="featured-title" src="./f-t-2.png" alt="" />
            <p className="featured-desc">
              A missing child sets four families on a frantic hunt for answers as
              they unearth a mind-bending mystery that spans three generations.
            </p>
            <button className="featured-button">
              <a href="https://example.com/watch/the-missing">WATCH</a>
            </button>
          </div>
          <div className="movie-list-container">
            <h1 id="a4" className="movie-list-title">Favorities</h1>
            <div className="movie-list-wrapper">
              <div className="movie-list">
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./20.jpg"
                    alt="" />
                  <span className="movie-list-item-title">The kargil girl</span>
                  <p className="movie-list-item-desc">
                    An ambitious Gunjan Saxena eyes becoming a pilot after being
                    drawn by the idea of a life in a cockpit.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/the-kargil-girl">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./25.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Inception</span>
                  <p className="movie-list-item-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    hic fugit similique accusantium.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/inception">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./23.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Thor</span>
                  <p className="movie-list-item-desc">
                    Thor is a 2011 American superhero film based on the Marvel
                    Comics character of the same name.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/thor">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./24.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Raya the last dragon</span>
                  <p className="movie-list-item-desc">
                    Long ago, in the fantasy world of Kumandra, humans and dragons
                    lived together in harmony.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/raya-the-last-dragon">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./5.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Avengers</span>
                  <p className="movie-list-item-desc">
                    American superhero film based on the Marvel Comics superhero
                    team of the same name.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/avengers">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./15.jpg"
                    alt="" />
                  <span className="movie-list-item-title">lego Batman</span>
                  <p className="movie-list-item-desc">
                    Batman works together with his ward, Robin, and the police
                    commissioner's daughter, Barbara, to foil Joker's plans of
                    taking over Gotham City.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/lego-batman">Watch</a>
                  </button>
                </div>
              </div>
              <i className="fas fa-chevron-right arrow"></i>
            </div>
          </div>
          <div className="movie-list-container">
            <h1 id="a5" className="movie-list-title">Popular mix</h1>
            <div className="movie-list-wrapper">
              <div className="movie-list">
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./17.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Aquaman</span>
                  <p className="movie-list-item-desc">
                    Aquaman is a 2018 American superhero film based on the DC
                    Comics character of the same name. Distributed by Warner Bros.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/aquaman">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./22.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Extraction</span>
                  <p className="movie-list-item-desc">
                    A black-market mercenary who has nothing to lose is hired to
                    rescue the kidnapped son of an imprisoned international crime
                    lord.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/extraction">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./19.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Spiderman</span>
                  <p className="movie-list-item-desc">
                    Spider-Man is a fictional superhero created by writer-editor
                    Stan Lee and writer-artist Steve Ditko. He first appeared in
                    the anthology comic book
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/spiderman">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./7.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Ender's Game</span>
                  <p className="movie-list-item-desc">
                    Ender's Game is a 2013 American military science fiction
                    action film based on Orson Scott Card's 1985 novel of the same
                    name.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/enders-game">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./18.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Fairy tail</span>
                  <p className="movie-list-item-desc">
                    Fairy Tail: Dragon Cry is a 2017 Japanese animated fantasy
                    action film based on the shōnen manga and anime series Fairy
                    Tail by Hiro Mashima.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/fairy-tail">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./21.png"
                    alt="" />
                  <span className="movie-list-item-title">3 Idiots</span>
                  <p className="movie-list-item-desc">
                    3 Idiots is a 2009 Indian Hindi-language coming-of-age
                    comedy-drama film directed by Rajkumar Hirani, and also
                    co-written by him with Abhijat Joshi.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/3-idiots">Watch</a>
                  </button>
                </div>
              </div>

              <i className="fas fa-chevron-right arrow"></i>
            </div>
          </div>
          <div className="movie-list-container">
            <h1 id="a6" className="movie-list-title">Hindi Hits</h1>
            <div className="movie-list-wrapper">
              <div className="movie-list">
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./36.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Kabir Singh</span>
                  <p className="movie-list-item-desc">
                    Kabir, a genius yet hostile medical student, falls in love
                    with Preeti from his college. When Preeti's father spots the
                    couple kissing.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/kabir-singh">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./37.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Dil Bechara</span>
                  <p className="movie-list-item-desc">
                    While struggling to survive, Manny and Kizie, who each have a
                    terminal illness, fall in love with each other.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/dil-bechara">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./38.jfif"
                    alt="" />
                  <span className="movie-list-item-title">Chichore</span>
                  <p className="movie-list-item-desc">
                    A tragic incident forces Anirudh, a middle-aged man, to take a
                    trip down memory lane and reminisce his college days along
                    with his friends, who were labelled as losers.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/chichore">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./42.jpg"
                    alt="" />
                  <span className="movie-list-item-title">Devdas</span>
                  <p className="movie-list-item-desc">
                    After his wealthy family prohibits him from marrying the woman
                    he is in love with, Devdas's life spirals downward as he takes
                    up alcohol and a life of vice to alleviate the pain.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/devdas">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./40.jpg"
                    alt="" />
                  <span className="movie-list-item-title">War</span>
                  <p className="movie-list-item-desc">
                    Kabir, a secret agent, goes rogue after a mission to catch a
                    terrorist goes awry. However, his boss sends Khalid, another
                    agent and his student, to track him down.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/war">Watch</a>
                  </button>
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="./41.jpeg"
                    alt="" />
                  <span className="movie-list-item-title">Ganges of Wasseypur</span>
                  <p className="movie-list-item-desc">
                    Gangs of Wasseypur is a 2012 Indian two-part crime film
                    produced and directed by Anurag Kashyap, and written by
                    Kashyap and Zeishan Quadri.
                  </p>
                  <button className="movie-list-item-button">
                    <a href="https://example.com/watch/ganges-of-wasseypur">Watch</a>
                  </button>
                </div>
              </div>

              <i className="fas fa-chevron-right arrow"></i>
            </div>
          </div>
        </div>
      </div></>
  );
}

export default App;