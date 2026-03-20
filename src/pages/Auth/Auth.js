import styles from './Auth.module.css'

export function Auth(){
    const screen = document.createElement('div');
    screen.classList.add(styles.container);

    const leftSide = document.createElement('div');
    leftSide.classList.add(styles.left);
    const rightSide = document.createElement('div');
    rightSide.classList.add(styles.right);

    screen.appendChild(leftSide);
    screen.appendChild(rightSide);

    return screen;
    
} 