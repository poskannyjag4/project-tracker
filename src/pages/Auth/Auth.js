import styles from './Auth.module.css'

export function Auth(){
    //base container
    const screen = document.createElement('div');
    screen.classList.add(styles.container);

    //left side container
    const leftSide = document.createElement('div');
    leftSide.classList.add(styles.left);

    const title = document.createElement('h1');
    title.innerHTML = "my <br> Project"
    
    
    const slogan = document.createElement('div');
    slogan.classList.add(styles.slogan);
    slogan.textContent = "master the ";
    const span = document.createElement('span');
    span.classList.add(styles.caution);
    span.textContent = "chaos";
    slogan.append(span);

    const googleBtn = document.createElement('btn');
    googleBtn.id = "google-btn";
    // googleBtn.classList.add(styles.googleBtn);

    // googleBtn.innerHTML = `
    //             <svg viewBox="0 0 24 24">
    //                 <path  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    //                 <path  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    //                 <path  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    //                 <path  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-5.38z"/>
    //             </svg>
    // `;
    // googleBtn.append('Continue with Google');

    leftSide.append(title, slogan, googleBtn);

    // right side container
    const rightSide = document.createElement('div');
    rightSide.classList.add(styles.right);

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

export function initGoogleBtn(){
    google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: (response)=> console.log(response.credential)
    });

    google.accounts.id.renderButton(
        document.getElementById("google-btn"),
        {theme: "outline", size: "large", width: 500}
    );

    google.accounts.id.prompt();
}