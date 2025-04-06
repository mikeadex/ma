const menuData = [
    {
      label: "Home",
      path: "/",
      submenu: [
        { label: "Home Style 1", path: "/" },
        {
          label: "Home Style 2",
          path: "/home-two",
          submenu: [
            { label: "Home Style 1", path: "/" },
            { label: "Home Style 2", path: "/home-two" },
            { label: "Home Style 3", path: "/home-three" },
          ],
        },
        {
          label: "Home Style 3",
          path: "/home-three",
          submenu: [
            { label: "Header Style 4", path: "/header-style-four" },
            { label: "Header Style 5", path: "/header-style-five" },
            { label: "Header Style 6", path: "/header-style-six" },
            { label: "Header Style 7", path: "/header-style-seven" },
          ],
        },
      ],
    },
    { label: "About Us", path: "/about" },
    {
      label: "Services",
      path: "/services",
      submenu: [
        { label: "Services", path: "/services" },
        { label: "Services Details", path: "/service-details" },
      ],
    },
    {
      label: "Insights",
      path: "/portfolio",
      submenu: [
        { label: "Portfolio", path: "/portfolio" },
        { label: "Portfolio Details", path: "/portfolio-details" },
        { label: "Team", path: "/team" },
        { label: "Team Details", path: "/team-details" },
      ],
    },
    {
      label: "Blog",
      path: "/blogs",
      submenu: [
        { label: "Blog", path: "/blogs" },
        { label: "Blog Details", path: "/blog-details" },
      ],
    },
    { label: "Contact Us", path: "/contact" },
  ];
  
  export default menuData;  