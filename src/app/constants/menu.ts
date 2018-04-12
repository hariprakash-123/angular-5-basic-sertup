const Home = {
    text: 'Home',
    link: '/app/dashboard',
    icon: 'icon-home'
};

const Administration = {
    text: 'Administration',
    link: '/app/users',
    icon: 'icon-user',
    submenu: [
        {
            text: 'Manage Users',
            link: '/app/users'
        }
    ]
}

export const menu: Array<any> = [
    Home,
    Administration
];