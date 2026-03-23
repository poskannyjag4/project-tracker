import styles from './Auth.module.css'
import { loginUser } from '../../api/auth';

export function Auth(){
    //base container
    const screen = document.createElement('main');
    screen.classList.add(styles.container);

    //left side container
    const leftSide = document.createElement('section');
    leftSide.classList.add(styles.left);
    
    // Project Title
    const title = document.createElement('h1');
    title.innerHTML = "my <br> Project"
    
    //Slogan
    const slogan = document.createElement('div');
    slogan.classList.add(styles.slogan);
    slogan.textContent = "master the ";
    const span = document.createElement('span');
    span.classList.add(styles.caution);
    span.textContent = "chaos";
    slogan.append(span);


    //add function to global window scope
    window.loginUser = loginUser;

    //google settings for GIS
    const configDiv = document.createElement('div');
    configDiv.id = "g_id_onload";
    configDiv.setAttribute('data-client_id', import.meta.env.VITE_GOOGLE_CLIENT_ID);
    configDiv.setAttribute('data-callback', 'loginUser');
    configDiv.setAttribute('data-context', 'signin');
    configDiv.setAttribute('data-ux_mode', 'popup');
    configDiv.setAttribute('data-auto_prompt', 'true');
    configDiv.setAttribute('data-itp_support', 'true');
    
    //Google login btn

  const buttonDiv = document.createElement('div');
    buttonDiv.className = "g_id_signin";
    buttonDiv.setAttribute('data-type', 'standard');
    buttonDiv.setAttribute('data-shape', 'rectangular');
    buttonDiv.setAttribute('data-theme', 'outline');
    buttonDiv.setAttribute('data-text', 'signin_with');
    buttonDiv.setAttribute('data-size', 'large');
    buttonDiv.setAttribute('data-logo_alignment', 'left');

    leftSide.append(title, slogan,configDiv, buttonDiv);

    // right side container
    const rightSide = document.createElement('aside');
    rightSide.classList.add(styles.right);

    //bento grid
    const grid = document.createElement('div');
    grid.classList.add(styles.grid)
    grid.innerHTML = `
        <div class="${styles.card} ${styles.card__project}">
            <p>Current <br /> Goal</p>
            <h1>Finish MVP</h1>
            <div class="${styles.card__progress}">
                <div class="${styles.progress__fill}"></div>
            </div>
        </div>

        <div class="${styles.card} ${styles.card__task}">
            <p class="text">Current</p>
            <h1>Lab 1</h1>
        </div>
        
        <div class="${styles.card} ${styles.card__live}">
            <p class="text">system</p>
            <h1>Live</h1>
        </div>

        
        <div class="${styles.card} ${styles.card__complete}">
            <p class="text">Progress</p>
            <h1><span>88%</span> of project</h1>
        </div>
    `;

    rightSide.append(grid);

    screen.appendChild(leftSide);
    screen.appendChild(rightSide);
    return screen;
    
} 
