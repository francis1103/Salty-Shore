import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SeafoodDetail.css';

const seafoodDishes = {
  Shrimp: [
    { name: 'Garlic Butter Shrimp', img: '/Garlic Butter Shrimp.jpeg', price: 280, desc: 'Rich garlic-flavored shrimp cooked in butter.' },
    { name: 'Spicy Shrimp Tacos', img: '/Spicy Shrimp Tacos.jpeg', price: 240, desc: 'Tacos filled with spicy seasoned shrimp.' },
    { name: 'Shrimp Fried Rice', img: '/Shrimp Fried Rice.jpeg', price: 200, desc: 'Fried rice mixed with flavorful shrimp.' },
    { name: 'Grilled Shrimp Skewers', img: '/Grilled Shrimp Skewers.jpeg', price: 300, desc: 'Skewered shrimp grilled to perfection.' },
    { name: 'Shrimp Pasta', img: '/Shrimp Pasta.jpeg', price: 270, desc: 'Pasta tossed with shrimp and creamy sauce.' },
    { name: 'Lemon Shrimp Curry', img: '/Lemon Shrimp Curry.jpeg', price: 260, desc: 'Shrimp simmered in tangy lemon curry.' },
    { name: 'Shrimp Tempura', img: '/Shrimp Tempura.jpeg', price: 290, desc: 'Lightly battered and fried shrimp.' },
    { name: 'Shrimp Po Boy Sandwich', img: '/Shrimp Po Boy Sandwich.jpeg', price: 310, desc: 'Classic Southern sandwich with fried shrimp.' },
    { name: 'Coconut Shrimp', img: '/Coconut Shrimp.jpeg', price: 330, desc: 'Shrimp coated with coconut and deep fried.' },
    { name: 'Shrimp Scampi', img: '/Shrimp Scampi.jpeg', price: 350, desc: 'Shrimp sautéed in garlic, butter, and wine sauce.' },
  ],

  Crab: [
    { name: 'Crab Cake', img: '/Crab Cake.jpeg', price: 300, desc: 'Crispy cakes made with fresh crab meat.' },
    { name: 'Chili Crab', img: '/Chili Crab.jpeg', price: 350, desc: 'Hot and spicy crab cooked in tangy sauce.' },
    { name: 'Crab Fried Rice', img: '/Crab Fried Rice.jpeg', price: 250, desc: 'Stir-fried rice loaded with crab meat.' },
    { name: 'Garlic Butter Crab', img: '/Garlic Butter Crab.jpeg', price: 370, desc: 'Crab sautéed in garlic and butter.' },
    { name: 'Steamed Crab', img: '/Steamed Crab.jpeg', price: 320, desc: 'Simple and healthy steamed crab.' },
    { name: 'Crab Soup', img: '/Crab Soup.jpeg', price: 220, desc: 'Warm soup with tender crab chunks.' },
    { name: 'Crab Lasagna', img: '/Crab Lasagna.jpeg', price: 390, desc: 'Layered pasta dish with crab filling.' },
    { name: 'Crab Tacos', img: '/Crab Tacos.jpeg', price: 340, desc: 'Tacos with spiced crab meat.' },
    { name: 'Crab Pizza', img: '/Crab Pizza.jpeg', price: 400, desc: 'Thin crust pizza topped with crab.' },
    { name: 'Butter Pepper Crab', img: '/Butter Pepper Crab.jpeg', price: 380, desc: 'Crab stir-fried with pepper and butter.' },
  ],

  Salmon: [
    { name: 'Grilled Salmon Fillet', img: '/Grilled Salmon Fillet.jpeg', price: 450, desc: 'Char-grilled salmon served with lemon.' },
    { name: 'Teriyaki Salmon', img: '/Teriyaki Salmon.jpeg', price: 470, desc: 'Salmon glazed in teriyaki sauce.' },
    { name: 'Baked Lemon Salmon', img: '/Baked Lemon Salmon.jpeg', price: 440, desc: 'Oven-baked salmon with lemon slices.' },
    { name: 'Smoked Salmon Salad', img: '/Smoked Salmon Salad.jpeg', price: 390, desc: 'Salad tossed with smoked salmon strips.' },
    { name: 'Salmon Sushi Rolls', img: '/Salmon Sushi Rolls.jpeg', price: 510, desc: 'Sushi rolls filled with fresh salmon.' },
    { name: 'Honey Garlic Salmon', img: '/Honey Garlic Salmon.jpeg', price: 460, desc: 'Salmon cooked in honey garlic sauce.' },
    { name: 'Salmon Chowder', img: '/Salmon Chowder.jpeg', price: 380, desc: 'Creamy chowder with chunks of salmon.' },
    { name: 'Salmon Sandwich', img: '/Salmon Sandwich.jpeg', price: 430, desc: 'Toasted sandwich with grilled salmon.' },
    { name: 'Salmon Tacos', img: '/Salmon Tacos.jpeg', price: 420, desc: 'Soft tacos filled with spicy salmon.' },
    { name: 'Salmon Kebabs', img: '/Salmon Kebabs.jpeg', price: 460, desc: 'Grilled skewers of marinated salmon.' },
  ],

  Oysters: [
    { name: 'Grilled Garlic Oysters', img: '/Grilled Garlic Oysters.jpeg', price: 370, desc: 'Grilled oysters topped with garlic butter.' },
    { name: 'Oyster Stew', img: '/Oyster Stew.jpeg', price: 330, desc: 'Creamy stew made with fresh oysters.' },
    { name: 'Fried Oysters', img: '/Fried Oysters.jpeg', price: 310, desc: 'Golden fried oysters with dipping sauce.' },
    { name: 'Baked Cheese Oysters', img: '/Baked Cheese Oysters.jpeg', price: 380, desc: 'Oysters baked with a cheesy topping.' },
    { name: 'Oyster Chowder', img: '/Oyster Chowder.jpeg', price: 340, desc: 'Hearty chowder with oyster meat.' },
    { name: 'Oyster Rockefeller', img: '/Oyster Rockefeller.jpeg', price: 390, desc: 'Oysters with herbs and breadcrumbs.' },
    { name: 'Raw Oysters', img: '/Raw Oysters.jpeg', price: 280, desc: 'Served chilled with lemon and sauce.' },
    { name: 'Oyster Po Boy', img: '/Oyster Po Boy.jpeg', price: 360, desc: 'Fried oyster sandwich with pickles.' },
    { name: 'Oyster Pakora', img: '/Oyster Pakora.jpeg', price: 330, desc: 'Indian-style oyster fritters.' },
    { name: 'Oyster Pizza', img: '/Oyster Pizza.jpeg', price: 410, desc: 'Unique pizza with oyster toppings.' },
  ],

  Prawn: [
    { name: 'Prawn Masala', img: '/Prawn Masala.jpeg', price: 310, desc: 'Spicy masala prawns in a thick gravy.' },
    { name: 'Butter Garlic Prawns', img: '/Butter Garlic Prawns.jpeg', price: 340, desc: 'Prawns tossed in garlic and butter.' },
    { name: 'Prawn Biryani', img: '/Prawn Biryani.jpeg', price: 360, desc: 'Fragrant biryani with prawns.' },
    { name: 'Chili Prawns', img: '/Chili Prawns.jpeg', price: 320, desc: 'Spicy Indo-Chinese chili prawns.' },
    { name: 'Prawn Tacos', img: '/Prawn Tacos.jpeg', price: 300, desc: 'Tacos stuffed with prawns and salad.' },
    { name: 'Prawn Coconut Curry', img: '/Prawn Coconut Curry.jpeg', price: 350, desc: 'Coconut-flavored curry with prawns.' },
    { name: 'Prawn Pakora', img: '/Prawn Pakora.jpeg', price: 330, desc: 'Deep-fried prawns in chickpea batter.' },
    { name: 'Prawn Udon Noodles', img: '/Prawn Udon Noodles.jpeg', price: 370, desc: 'Japanese-style prawn noodle bowl.' },
    { name: 'Prawn Tempura', img: '/Prawn Tempura.jpeg', price: 390, desc: 'Crispy fried prawns with dipping sauce.' },
    { name: 'Prawn Stuffed Dosa', img: '/Prawn Stuffed Dosa.jpeg', price: 340, desc: 'South Indian dosa with prawn filling.' },
  ],

  Octopus: [
    { name: 'Grilled Octopus', img: '/Grilled Octopus.jpeg', price: 460, desc: 'Grilled octopus with olive oil and lemon.' },
    { name: 'Spicy Octopus Stir Fry', img: '/Spicy Octopus Stir Fry.jpeg', price: 420, desc: 'Stir-fried octopus with hot spices.' },
    { name: 'Octopus Salad', img: '/Octopus Salad.jpeg', price: 400, desc: 'Refreshing salad with octopus slices.' },
    { name: 'Octopus with Garlic Sauce', img: '/Octopus with Garlic Sauce.jpeg', price: 450, desc: 'Octopus sautéed in garlic sauce.' },
    { name: 'Fried Octopus Rings', img: '/Fried Octopus Rings.jpeg', price: 430, desc: 'Crispy rings of battered octopus.' },
    { name: 'Octopus Sushi', img: '/Octopus Sushi.jpeg', price: 490, desc: 'Sushi rolls with tender octopus.' },
    { name: 'Octopus Tandoori', img: '/Octopus Tandoori.jpeg', price: 470, desc: 'Tandoori-style spiced octopus.' },
    { name: 'Octopus Pizza', img: '/Octopus Pizza.jpeg', price: 520, desc: 'Pizza topped with grilled octopus.' },
    { name: 'Octopus Noodles', img: '/Octopus Noodles.jpeg', price: 410, desc: 'Stir-fried noodles with octopus chunks.' },
    { name: 'Octopus Wrap', img: '/Octopus Wrap.jpeg', price: 440, desc: 'Flatbread wrap filled with grilled octopus.' },
  ],

  Lobster: [
    { name: 'Lobster Thermidor', img: '/Lobster Thermidor.jpeg', price: 550, desc: 'Lobster meat cooked in creamy wine sauce.' },
    { name: 'Grilled Lobster Tail', img: '/Grilled Lobster Tail.jpeg', price: 600, desc: 'Juicy lobster tail grilled with herbs.' },
    { name: 'Lobster Roll', img: '/Lobster Roll.jpeg', price: 520, desc: 'Classic roll filled with chilled lobster meat.' },
    { name: 'Butter Poached Lobster', img: '/Butter Poached Lobster.jpeg', price: 580, desc: 'Lobster slowly poached in butter.' },
    { name: 'Lobster Mac and Cheese', img: '/Lobster Mac and Cheese.jpeg', price: 490, desc: 'Macaroni with lobster and cheese sauce.' },
    { name: 'Spicy Lobster Curry', img: '/Spicy Lobster Curry.jpeg', price: 530, desc: 'Lobster in spicy coconut curry.' },
    { name: 'Lobster Risotto', img: '/Lobster Risotto.jpeg', price: 560, desc: 'Creamy risotto with chunks of lobster.' },
    { name: 'Lobster Tacos', img: '/Lobster Tacos.jpeg', price: 510, desc: 'Tacos filled with buttery lobster meat.' },
    { name: 'Lobster Bisque', img: '/Lobster Bisque.jpeg', price: 500, desc: 'Smooth and creamy lobster soup.' },
    { name: 'Stuffed Lobster', img: '/Stuffed Lobster.jpeg', price: 610, desc: 'Lobster filled with breadcrumb stuffing.' },
  ],

  Tuna: [
    { name: 'Seared Ahi Tuna', img: '/Seared Ahi Tuna.jpeg', price: 420, desc: 'Tuna lightly seared and served rare.' },
    { name: 'Tuna Poke Bowl', img: '/Tuna Poke Bowl.jpeg', price: 390, desc: 'Hawaiian bowl with fresh tuna and rice.' },
    { name: 'Spicy Tuna Sushi', img: '/Spicy Tuna Sushi.jpeg', price: 450, desc: 'Sushi rolls filled with spicy tuna.' },
    { name: 'Tuna Salad Sandwich', img: '/Tuna Salad Sandwich.jpeg', price: 360, desc: 'Classic sandwich with creamy tuna salad.' },
    { name: 'Tuna Tartare', img: '/Tuna Tartare.jpeg', price: 430, desc: 'Raw tuna finely diced and seasoned.' },
    { name: 'Grilled Tuna Steak', img: '/Grilled Tuna Steak.jpeg', price: 460, desc: 'Thick tuna steak grilled to perfection.' },
    { name: 'Tuna Pasta', img: '/Tuna Pasta.jpeg', price: 380, desc: 'Pasta tossed with tuna and olive oil.' },
    { name: 'Tuna Melt', img: '/Tuna Melt.jpeg', price: 370, desc: 'Toasted sandwich with tuna and cheese.' },
    { name: 'Tuna Spring Rolls', img: '/Tuna Spring Rolls.jpeg', price: 350, desc: 'Rice paper rolls with spiced tuna.' },
    { name: 'Tuna Pizza', img: '/Tuna Pizza.jpeg', price: 410, desc: 'Thin crust pizza with tuna toppings.' },
  ],

  Squid: [
    { name: 'Crispy Calamari', img: '/Crispy Calamari.jpeg', price: 300, desc: 'Deep-fried squid rings served with sauce.' },
    { name: 'Squid Ink Pasta', img: '/Squid Ink Pasta.jpeg', price: 370, desc: 'Pasta tossed in savory squid ink sauce.' },
    { name: 'Stuffed Squid', img: '/Stuffed Squid.jpeg', price: 390, desc: 'Tender squid filled with spiced stuffing.' },
    { name: 'Spicy Stir-fried Squid', img: '/Spicy Stir-fried Squid.jpeg', price: 320, desc: 'Squid wok-tossed with spicy seasoning.' },
    { name: 'Grilled Squid', img: '/Grilled Squid.jpeg', price: 360, desc: 'Whole squid grilled with lemon and herbs.' },
    { name: 'Squid Pakora', img: '/Squid Pakora.jpeg', price: 310, desc: 'Indian-style battered and fried squid.' },
    { name: 'Squid Masala', img: '/Squid Masala.jpeg', price: 340, desc: 'Spicy masala squid curry.' },
    { name: 'Squid Fritters', img: '/Squid Fritters.jpeg', price: 300, desc: 'Golden fried squid balls.' },
    { name: 'Squid Biryani', img: '/Squid Biryani.jpeg', price: 380, desc: 'Biryani made with spicy squid.' },
    { name: 'Chili Squid', img: '/Chili Squid.jpeg', price: 330, desc: 'Spicy Indo-Chinese style chili squid.' },
  ],

  Mussels: [
    { name: 'Steamed Mussels', img: '/Steamed Mussels.jpeg', price: 330, desc: 'Mussels in garlic butter and white wine.' },
    { name: 'Mussels Marinara', img: '/Mussels Marinara.jpeg', price: 350, desc: 'Mussels simmered in spicy tomato sauce.' },
    { name: 'Creamy Garlic Mussels', img: '/Creamy Garlic Mussels.jpeg', price: 370, desc: 'Mussels in a creamy garlic sauce.' },
    { name: 'Grilled Mussels', img: '/Grilled Mussels.jpeg', price: 390, desc: 'Mussels grilled and topped with herbs.' },
    { name: 'Mussels in Coconut Gravy', img: '/Mussels in Coconut Gravy.jpeg', price: 360, desc: 'Mussels cooked in coastal coconut curry.' },
    { name: 'Chili Mussels', img: '/Chili Mussels.jpeg', price: 380, desc: 'Spicy mussels in chili garlic sauce.' },
    { name: 'Mussels Soup', img: '/Mussels Soup.jpeg', price: 320, desc: 'Warm soup with tender mussels.' },
    { name: 'Stuffed Mussels', img: '/Stuffed Mussels.jpeg', price: 400, desc: 'Cheesy breadcrumb stuffed mussels.' },
    { name: 'Baked Mussels with Cheese', img: '/Baked Mussels with Cheese.jpeg', price: 390, desc: 'Oven baked with mozzarella.' },
    { name: 'Mussels Pulao', img: '/Mussels Pulao.jpeg', price: 370, desc: 'Spiced rice with mussels.' },
  ]
};


function SeafoodDetail() {
  const { name } = useParams();
  const navigate = useNavigate();

  const dishes = seafoodDishes[name] || [];

  return (
    <div className="seafood-detail">
      <h2>Dishes Made With {name}</h2>
      <div className="dish-grid">
        {dishes.map((dish, index) => (
          <div key={index} className="dish-card">
            <div className="zoom-container">
              <img src={dish.img} alt={dish.name} className="zoom-img" />
            </div>
            <p>{dish.name}</p>
            <p className="dish-description">{dish.desc}</p>
            <p className="dish-price">₹{dish.price}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/menu')}>⬅ Back to Menu</button>
    </div>
  );
}

export default SeafoodDetail;
