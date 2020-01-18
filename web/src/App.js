import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Register</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Github user</label>
            <input name="github_username" id="github_username" required />
          </div>
          
          <div class="input-block">
            <label htmlFor="techs">Technology</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/7252021?v=4" alt="fracmt" />
              <div className="user-info">
                <strong>Francisco Torres</strong>
                <span>PHP, Javascript, Java</span>
              </div>
            </header>
            <p>Software Engineer Software Engineer Software Engineer Software Engineer Software Engineer Software Engineer Software Engineer</p>
            <a href="http://github.com/fracmt">GitHub profile</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
