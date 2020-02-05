const containerAppend = obj => {
    const container = document.getElementById('container');

    container.appendChild(obj);
};

const horizontalHead = () => {
    const characters = ['A', 'B', 'C', 'D', 'E'];
    const container = document.createElement('div');

    container.classList.add('horizontal');

    characters.forEach(character => {
        const head = document.createElement('div');

        head.innerText = character;
        container.appendChild(head);
    });

    return container;
};

const verticalHead = () => {
    const container = document.createElement('div');

    container.classList.add('vertical');

    for (let i = 1; i < 6; i++) {
        const head = document.createElement('div');

        head.innerText = i.toString();
        container.appendChild(head);
    }

    return container;
};

const grid = () => {
    const container = document.createElement('div');

    container.classList.add('main');

    for (let i = 1; i < 6; i++) {
        for (let j = 1; j < 6; j++) {
            const div = document.createElement('div');

            container.appendChild(div);
        }
    }

    return container;
};

const renderControls = () => {
    const container = document.createElement('div');
    const orientationVertical = document.createElement('input');
    const orientationHorizontal = document.createElement('input');
    const labelVertical = document.createElement('label');
    const labelHorizontal = document.createElement('label');
    const ready = document.createElement('button');

    container.classList.add('controls');

    orientationVertical.setAttribute('type', 'radio');
    orientationVertical.id = 'orientationVertical';
    orientationVertical.name = 'orientation';
    orientationVertical.checked = true;
    labelVertical.setAttribute('for', 'orientationVertical');
    labelVertical.innerText = 'vertical';

    orientationHorizontal.setAttribute('type', 'radio');
    orientationHorizontal.id = 'orientationHorizontal';
    orientationHorizontal.name = 'orientation';
    labelHorizontal.setAttribute('for', 'orientationHorizontal');
    labelHorizontal.innerText = 'Horizontal';

    ready.innerText = 'Start Game';

    container.appendChild(orientationVertical);
    container.appendChild(labelVertical);
    container.appendChild(orientationHorizontal);
    container.appendChild(labelHorizontal);
    container.appendChild(ready);
    containerAppend(container);
};

const renderSelfBoard = () => {
    const selfBoard = document.createElement('div');
    const title = document.createElement('h2');

    selfBoard.id = 'selfBoard';
    selfBoard.classList.add('self-board');
    title.innerText = 'My Board';

    selfBoard.appendChild(title);
    selfBoard.appendChild(horizontalHead());
    selfBoard.appendChild(verticalHead());
    selfBoard.appendChild(grid());
    containerAppend(selfBoard);
};

const renderEnemyBoard = () => {
    const enemyBoard = document.createElement('div');
    const title = document.createElement('h2');

    enemyBoard.id = 'enemyBoard';
    enemyBoard.classList.add('enemy-board');
    title.innerText = 'My Board';

    enemyBoard.appendChild(title);
    enemyBoard.appendChild(horizontalHead());
    enemyBoard.appendChild(verticalHead());
    enemyBoard.appendChild(grid());
    containerAppend(enemyBoard);
};

export {
    renderSelfBoard,
    renderEnemyBoard,
    renderControls
}