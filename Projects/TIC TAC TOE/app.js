* {
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: #fb6f92;
    text-align: center;
  }
  
  .container {
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .game {
    height: 60vmin;
    width: 60vmin;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.5vmin;
  }
  
  .box {
    height: 18vmin;
    width: 18vmin;
    border-radius: 1rem;
    border: none;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    font-size: 8vmin;
    color: #fe5d9f;
    background-color: #ffc2d1;
  }
  #reset-btn {
    padding: 1rem;
    font-size: 1.25rem;
    background-color: #ffc2d1;
    border-radius: 1.3rem;
  }
  #new-btn {
    padding: 1rem;
    font-size: 1.25rem;
    background-color: #ffc2d1;
    border-radius: 1.3rem;
  }
  #msg{
    font-size: 5vmin;
    color:#ffc2d1;
  }
  .msg-container{
    height:100vmin;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:2rem;
  }
  .hide{
    display: none;
  }