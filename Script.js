const navbar = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  {
    name: 'Our Products',
    id: 'product',
    child: [
      { name: 'Product 1', id: 'p1' },
      { name: 'Product 2', id: 'p2' },
      { name: 'Product 3', id: 'p3' },
      { name: 'Product 4', id: 'p4' },
    ],
  },
  { name: 'Contact Us', id: 'contact' },
];

// Create the navigation menu
const navMenu = document.getElementById('top-menu');
const navList = document.createElement('ul');
navMenu.appendChild(navList);

navbar.forEach(item => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.textContent = item.name;
  link.href = `#${item.id}`;
  listItem.appendChild(link);

  if (item.child) {
    const subMenu = document.createElement('ul');
    item.child.forEach(subItem => {
      const subListItem = document.createElement('li');
      const subLink = document.createElement('a');
      subLink.textContent = subItem.name;
      subLink.href = `#${subItem.id}`;
      subListItem.appendChild(subLink);
      subMenu.appendChild(subListItem);
    });
    listItem.appendChild(subMenu);
  }

  navList.appendChild(listItem);
});
