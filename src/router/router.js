import routes from './routes';

window.addEventListener('click', (event) => {
    const link = event.composedPath()[0];

    if (link?.href && link.classList.contains('route')) {
        event.preventDefault();

        const path = '/' + link?.href.split('/').pop();
        route(path);
    }
});

const route = (path) => {
    window.history.pushState({}, '', path);

    locationHandler();
};

const locationHandler = () => {
    let location = window.location.pathname;

    if (location.length === 0) {
        location = '/';
    }

    const route = routes[location] || routes['404'];
    const app = document.getElementById('app');

    app.innerHTML = route.template;
    document.title = route.title;
};

window.onpopstate = locationHandler;
window.route = route;

locationHandler();