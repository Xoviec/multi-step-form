import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className='step-list'>
          <div className='nav-step'>
            <button>1</button>
            <div>
              <span>STEP 1</span>
              <p>YOUR INFO</p>
            </div>
          </div>
          <div className='nav-step'>
            <button>2</button>
            <div>
              <span>STEP 2</span>
              <p>SELECT PLAN</p>
            </div>
          </div>
          <div className='nav-step'>
            <button>3</button>
            <div>
              <span>STEP 3</span>
              <p>ADD-ONS</p>
            </div>
          </div>
          <div className='nav-step'>
            <button>4</button>
            <div>
              <span>STEP 4</span>
              <p>SUMMARY</p>
            </div>
          </div>
        </div>
      </nav>
      <container>
      
      </container>
    </div>
  );
}

export default App;
