const title = "WebComponents.js";

export default {
    '404': {
        template: "<error-page></error-page>",
        title: "404 | " + title,
    },
    '/': {
        template: "<home-page></home-page>",
        title: "Home | " + title,
    },
    '/about': {
        template: "<about-page></about-page>",
        title: "About | " + title,
    },
    '/documentation': {
        template: "<documentation-page></documentation-page>",
        title: "Documentation | " + title,
    },
    '/counter': {
        template: "<counter-page></counter-page>",
        title: "Counter | " + title,
    },
    '/drawer': {
        template: "<drawer-page></drawer-page>",
        title: "Drawer | " + title,
    },
    '/password-generator': {
        template: "<password-generator-page></password-generator-page>",
        title: "PasswordGenerator | " + title,
    },
};