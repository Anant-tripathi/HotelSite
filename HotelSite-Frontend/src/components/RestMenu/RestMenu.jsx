import "./restmenu.css";
import { useState, useEffect, useRef } from "react";
const menu = [
  {
    category: "Starter",
    items: [
      {
        name: "Samosa",
        price: 2.5,
        description: "Crispy pastry filled with spiced potatoes and peas",
      },
      {
        name: "Paneer Tikka",
        price: 4.0,
        description: "Tandoor-cooked Indian cheese marinated in spices",
      },
      {
        name: "Aloo Tikki",
        price: 3.0,
        description: "Spiced mashed potato patties, shallow-fried",
      },
      {
        name: "Vegetable Pakora",
        price: 3.5,
        description:
          "Assorted vegetables coated in chickpea flour batter and deep-fried",
      },
      {
        name: "Bhel Puri",
        price: 3.0,
        description: "Puffed rice mixed with vegetables, chutneys, and spices",
      },
      {
        name: "Dahi Puri",
        price: 4.5,
        description:
          "Small crispy hollow puris filled with spiced yogurt, chutneys, and potatoes",
      },
    ],
  },
  {
    category: "Lunch",
    items: [
      {
        name: "Vegetable Biryani",
        price: 10.0,
        description:
          "Basmati rice cooked with mixed vegetables and aromatic spices",
      },
      {
        name: "Dal Tadka",
        price: 8.0,
        description: "Yellow lentils tempered with spices",
      },
      {
        name: "Palak Paneer",
        price: 9.0,
        description: "Indian cottage cheese cooked in a spinach-based gravy",
      },
      {
        name: "Chana Masala",
        price: 8.5,
        description: "Spicy chickpea curry cooked with tomatoes and onions",
      },
      {
        name: "Mixed Vegetable Curry",
        price: 8.5,
        description: "Assorted vegetables cooked in a flavorful curry sauce",
      },
      {
        name: "Rajma",
        price: 9.0,
        description:
          "Red kidney beans cooked with onions, tomatoes, and spices",
      },
    ],
  },
  {
    category: "Main Course",
    items: [
      {
        name: "Vegetable Korma",
        price: 10.5,
        description: "Mixed vegetables cooked in a rich and creamy sauce",
      },
      {
        name: "Malai Kofta",
        price: 11.0,
        description: "Deep-fried vegetable balls in a creamy gravy",
      },
      {
        name: "Baingan Bharta",
        price: 9.5,
        description:
          "Smoky mashed eggplant cooked with tomatoes, onions, and spices",
      },
      {
        name: "Shahi Paneer",
        price: 11.5,
        description:
          "Indian cottage cheese cooked in a creamy tomato-based gravy",
      },
      {
        name: "Vegetable Jalfrezi",
        price: 10.0,
        description: "Assorted vegetables cooked in a tangy and spicy sauce",
      },
      {
        name: "Paneer Butter Masala",
        price: 12.0,
        description:
          "Tender Indian cottage cheese cooked in a buttery tomato gravy",
      },
    ],
  },
  {
    category: "Dessert",
    items: [
      {
        name: "Gulab Jamun",
        price: 4.0,
        description: "Deep-fried milk dumplings soaked in sugar syrup",
      },
      {
        name: "Rasgulla",
        price: 4.0,
        description:
          "Soft and spongy cottage cheese balls soaked in sugar syrup",
      },
      {
        name: "Kheer",
        price: 3.5,
        description: "Rice pudding flavored with cardamom, saffron, and nuts",
      },
      {
        name: "Rasmalai",
        price: 4.5,
        description: "Soft paneer patties soaked in sweetened, thickened milk",
      },
      {
        name: "Jalebi",
        price: 3.0,
        description: "Deep-fried spirals of batter soaked in sugar syrup",
      },
      {
        name: "Carrot Halwa",
        price: 5.0,
        description:
          "Sweet dessert pudding made with grated carrots, milk, sugar, and nuts",
      },
    ],
  },
];

function MenuSection() {
  const [menuSelection, setMenuSelection] = useState("STARTER");
  const [selectedMenuItems, setSelectedMenuItems] = useState([]);

  const handleCategoryClick = (category) => {
    setMenuSelection(category);
  };

  useEffect(() => {
    const selectedItem = menu.find((item) => item.category === menuSelection);
    if (selectedItem) {
      setSelectedMenuItems(selectedItem.items);
    } else {
      setSelectedMenuItems([]);
    }
  }, [menuSelection]);

  return (
    <div className="restrauntmenu__menuContainer__menuSection">
      <div className="restrauntmenu__menuContainer__menuSection_buttons">
        {menu.map((categories) => (
          <button
            key={categories.category}
            className={
              menuSelection === categories.category ? "btn active" : "btn"
            }
            onClick={() => handleCategoryClick(categories.category)}
          >
            {categories.category}
          </button>
        ))}
      </div>
      <div className="restrauntmenu__menuContainer__menuSection_menuItems">
        <div className="menuItems-grid">
          {selectedMenuItems.map((menuItem, key) => (
            <div key={key} className="menuItems-grid-item">
              <div className="menuItems-grid-item-price">{menuItem.price}$</div>
              <div className="menuItems-grid-item-name">{menuItem.name}</div>
              <div className="menuItems-grid-item-desc">
                {menuItem.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RestMenu() {
  const restMenuRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            restMenuRef.current.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.75)), url(../../assets/Menu_food.webp)`;
            restMenuRef.current.style.backgroundOrigin = "border-box";
          }
        });
      },
      { threshold: 0 },
    );

    if (restMenuRef.current) {
      observer.observe(restMenuRef.current);
    }

    return () => {
      if (restMenuRef.current) {
        observer.unobserve(restMenuRef.current);
      }
    };
  }, []);

  return (
    <section id="RestrauntMenu" className="restrauntmenu" ref={restMenuRef}>
      <div className="restrauntmenu__header">
        <h2 className="restrauntmenu__title">Our Restraunt Menu</h2>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
        </p>
      </div>
      <div className="restrauntmenu__menuContainer">
        <MenuSection />
      </div>
    </section>
  );
}
