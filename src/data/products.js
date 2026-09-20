const products = {
  shirts: [
    {
  id: 1,
  name: "Classic Oxford Shirt",
  image: "https://focusclothing.pk/cdn/shop/files/68a.jpg?crop=center&height=680&v=1752322134&width=476",
  price: 3499,
  description: "Look sharp and stylish with our Black Dress Shirt! Made from high-quality materials, this shirt is perfect for any formal or semi-formal occasion. Keep it classic with a black tie, or add a pop of color with a bold pocket square. Upgrade your wardrobe with this versatile and timeless piece.",
  rating: 4.5,
  sizes: ["S", "M", "L", "XL"],
  colors:["#000000", "#FFFFFF", "#1E3A8A", "#FFB6C1" ],
  stock: 15
},




// 
    {
        id: 2,
  name: "Classic Oxford Shirt",
  image: "https://focusclothing.pk/cdn/shop/files/9_369dd4df-65a6-4f71-a511-d11e28b74004.jpg?crop=center&height=680&v=1752319757&width=476",
  price: 3000,
  description: "Take your wardrobe to the next level with this classic White Dress Shirt. Look sharp and stylish no matter the occasion, from formal events to casual hangouts. With this versatile piece, you'll always be dressed to impress (and it's perfect for hiding pasta sauce stains).",
  rating: 4.5,
  sizes: ["S", "M", "L", "XL"],
  colors:["#000000", "#FFFFFF", "#1E3A8A", "#791928" ],
  stock: 15 
    },
{
  id: 3,
  name: "dress Shirt",
  image: "https://focusclothing.pk/cdn/shop/files/WhiteBlackButtonnewpocketromved.jpg?v=1752318917&width=1920",
  price: 2499,
  description: "Elevate your professional wardrobe with this refined navy dress shirt, a timeless essential for the modern man. Crafted for versatility, it transitions seamlessly from boardroom meetings to evening occasions. The classic navy hue pairs effortlessly with any suit or blazer, while the structured fit ensures a polished",
  rating: 4.5,
  sizes: ["S", "M", "L", "XL"],
  colors: ["#00000000", "#FFFFFF", "#42c0ce", "#791928" ],
  stock: 15
},
{
  id: 4,
  name: "shirts",
  image: "	https://focusclothing.pk/cdn/shop/files/Navy_3.jpg?v=1763013762&width=352",
  price: 1800,
  description: "Elevate your formal wardrobe with this sophisticated burgundy dress shirt. Crafted for the modern professional, it combines timeless elegance with contemporary styling. The rich burgundy hue works seamlessly with charcoal, navy, or black suits, making it an essential piece for business meetings, formal events, and upscale occasions. Premium fabric ensures comfort throughout the day while maintaining a polished appearance. Perfect for layering under blazers or wearing standalone for refined casual settings.",
  rating: 4.5,
  sizes: ["S", "M", "L", "XL"],
  colors: ["#000000", "#FFFFFF", "#1e8a27", "#79196b" ],
  stock: 15
},
{
  id: 5,
  name: "shirts",
  image: "	https://focusclothing.pk/cdn/shop/files/0002_1f435…44fc-a90c-67acc89e94f3.jpg?v=1788503665&width=352",
  price: 2300,
  description: "Elevate your formal wardrobe with this sophisticated purple dress shirt. Crafted for a polished, professional look, it pairs effortlessly with suits, blazers, or tailored trousers. The rich purple tone adds personality while maintaining versatility for office settings, events, and special occasions. Premium fabric ensures comfort and durability through repeated wear and washing. Perfect for anyone seeking quality menswear that combines style with everyday practicality.",
  rating: 4.5,
  sizes: ["S", "M", "L", "XL"],
  colors: ["#000000", "#FFFFFF", "#1e738a", "#797419" ],
  stock: 15
},
{
  id: 6,
  name: "shirts",
  image: "https://focusclothing.pk/cdn/shop/files/Peach.jpg?v=1777096780&width=352",
  price: 2100,
  description: "Elevate your formal wardrobe with this refined charcoal dress shirt, designed for the modern professional. Crafted with meticulous attention to detail, this versatile piece transitions seamlessly from boardroom meetings to evening occasions. The sophisticated charcoal tone complements any suit or blazer, while the tailored fit ensures a polished silhouette. Perfect for men who demand quality and understated elegance in their everyday essentials.",
  rating: 4.5,
  sizes: ["S", "M", "L", "XL"],
  colors: ["#000000", "#FFFFFF", "#1E3A8A", "#791928" ],
  stock: 15
},
{
  id: 7,
  name: "shirts",
  image: "https://focusclothing.pk/cdn/shop/files/Grey_95501…jpg?crop=center&height=234&v=1776692816&width=164",
  price: 3200,
  description: "Elevate your workday wardrobe with this soft pastel green dress shirt, crafted from a premium cotton blend for breathable comfort and lasting durability. The subtle sage tone pairs effortlessly with charcoal, navy, or neutral trousers, making it a versatile essential for professional settings and smart-casual occasions. Smooth fabric drapes cleanly for a polished silhouette. Perfect for those seeking sophisticated color beyond traditional whites and blues.",
  rating: 4.5,
  sizes: ["S", "M", "L", "XL"],
  colors: ["#000000", "#FFFFFF", "#1E3A8A", "#791928" ],
  stock: 15
},
{
  id: 8,
  name: "shirts",
  image: "	https://focusclothing.pk/cdn/shop/files/WhiteBlackButtonnew.jpg?v=1762179648&width=352",
  price: 1800,
  description: "Elevate your formal wardrobe with this Dark Blue Dress Shirt, crafted from a premium cotton blend fabric designed for comfort and durability. The rich, versatile dark blue hue pairs effortlessly with suits, blazers, and trousers for boardroom meetings, weddings, or professional events. The breathable cotton blend ensures all-day wearability while maintaining a crisp, polished appearance. Perfect for the modern professional who values quality and timeless style.",
  rating: 4.5,
  sizes: ["S", "M", "L", "XL"],
  colors: ["#000000", "#FFFFFF", "#1E3A8A", "#291979" ],
  stock: 15
},
{
  id: 9,
  name: "shirts",
  image: "	https://focusclothing.pk/cdn/shop/files/cream.jpg?crop=center&height=234&v=1752319631&width=164",
  price: 1950,
  description: "Elevate your formal wardrobe with this sophisticated green dress shirt, crafted from a premium cotton blend that delivers both comfort and durability. The breathable fabric ensures all-day wear without compromising on style, making it an essential piece for professional settings and special occasions alike. Its clean lines and refined cut offer versatility—pair it with tailored trousers for the office or layer it under a blazer for evening events. The cotton blend resists wrinkles while maintaining a crisp, polished appearance. A timeless investment in quality menswear that complements any wardrobe.",
  rating: 4.5,
  sizes: ["S", "M", "L", "XL"],
  colors: ["#000000", "#FFFFFF", "#7b86a4", "#c7b3b6" ],
  stock: 15
},
{
  id: 10,
  name: "shirts",
  image: "	https://focusclothing.pk/cdn/shop/files/105_239ffa…jpg?crop=center&height=234&v=1779519471&width=164",
  price: 1400,
  description: "Elevate your formal wardrobe with this sophisticated green dress shirt, crafted from a premium cotton blend that delivers both comfort and durability. The breathable fabric ensures all-day wear without compromising on style, making it an essential piece for professional settings and special occasions alike. Its clean lines and refined cut offer versatility—pair it with tailored trousers for the office or layer it under a blazer for evening events. The cotton blend resists wrinkles while maintaining a crisp, polished appearance. A timeless investment in quality menswear that complements any wardrobe.",
  rating: 4.5,
  sizes: ["S", "M", "L", "XL"],
  colors: ["#000000", "#FFFFFF", "#441e8a", "#791941" ],
  stock: 15
},
{
  id: 11,
  name: "shirts",
  image: "	https://focusclothing.pk/cdn/shop/files/001_cbf9de…jpg?crop=center&height=234&v=1788502861&width=164",
  price: 2700,
  description: "This pocketless white dress shirt combines understated elegance with everyday practicality. Crafted from premium cotton, it features sleek black buttons and a clean, minimalist silhouette that works seamlessly across formal events, office wear, and smart-casual occasions. The breathable fabric delivers all-day comfort without compromising on that crisp, polished finish. A versatile staple for the modern wardrobe.",
  rating: 4.5,
  sizes: ["S", "M", "L", "XL"],
  colors: [" #FFFFFF", "#1E3A8A", "#791928" ],
  stock: 15
},
{
  id: 12,
  name: "shirts",
  image: "https://focusclothing.pk/cdn/shop/files/0001_88c7a…jpg?crop=center&height=234&v=1788184825&width=164",
  price: 2500,
  description: "Elevate your workwear essentials with this sophisticated Light Gray Dress Shirt, crafted from a premium cotton blend for all-day comfort and durability. The versatile light gray hue pairs effortlessly with suits, trousers, and casual separates, making it a wardrobe staple for professional and social occasions alike. The breathable fabric allows for natural airflow, keeping you cool and confident throughout the day. Designed with a refined fit and clean lines, this shirt delivers polished styling that transitions seamlessly from office to evening. Perfect for building a curated collection of timeless menswear basics.",
  rating: 4.5,
  sizes: ["S", "M", "L", "XL"],
  colors: [ "#1E3A8A", "#791928" ],
  stock: 15
},
  ],

tshirts: [
  {
    id: 1,
    name: "Classic Black Essential Tee",
    image: "https://www.faisalabadfabricstore.com/wp-content/uploads/2024/06/Black-custom-t-shirts-pakistan.jpg",
    price: 1800,
    description: "A timeless black T-shirt designed for everyday wear. Its clean look makes it easy to pair with jeans, trousers, or casual shorts.",
    rating: 4.6,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#FFFFFF", "#4A5568"],
    stock: 18
  },
  {
    id: 2,
    name: "Sand Beige Premium Tee",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe-tF40lEIeWlOvNX0L9GBFjSn-o66vudpnHBub2shCg&s=10",
    price: 2300,
    description: "A premium beige T-shirt with a relaxed modern appearance. Perfect for creating simple and sophisticated casual outfits.",
    rating: 4.8,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#D6C3A5", "#FFFFFF", "#2F3A32"],
    stock: 12
  },
  {
    id: 3,
    name: "Deep Navy Comfort Tee",
    image: "https://nobero.com/cdn/shop/files/ManhattanNewYork-NYC.jpg?v=1772531579",
    price: 2100,
    description: "A versatile navy T-shirt offering a comfortable fit and timeless style. An easy choice for both daytime and evening outfits.",
    rating: 4.5,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#172554", "#FFFFFF", "#64748B"],
    stock: 20
  },
  {
    id: 4,
    name: "Olive Streetwear Tee",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtUglaRjZBbDoedNrromEc1UPyEPivuty8fF7W9qD1g&s=10",
    price: 3200,
    description: "A modern olive T-shirt inspired by contemporary streetwear. Its relaxed style adds a casual edge to everyday looks.",
    rating: 4.7,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#556B2F", "#1F2937", "#D1D5DB"],
    stock: 10
  },
  {
    id: 5,
    name: "Stone Grey Relaxed Tee",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbnrO7__IU0A9IOwoJtLbWXY8bwLteu4iBeJG_rgm4g&s=10",
    price: 1850,
    description: "A minimal stone grey T-shirt focused on comfort and effortless styling. Pair it with denim or neutral trousers for a balanced look.",
    rating: 4.4,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#78716C", "#111827", "#F5F5F4"],
    stock: 16
  },
  {
    id: 6,
    name: "Burgundy Modern Fit Tee",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSePBMjifZMgMYje4dLGO1U69_YvW-umujJk3diEn8Y8w&s",
    price: 1950,
    description: "A rich burgundy T-shirt that adds a subtle pop of color to your wardrobe. The modern fit keeps the overall look polished.",
    rating: 4.6,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#7F1D1D", "#111827", "#E7E5E4"],
    stock: 14
  },
  {
    id: 7,
    name: "Sky Blue Casual Tee",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QAAxWlskKCWCXMaItnow59X7wvoTXW_AMFQ-S1x8RQ&s=10",
    price: 1400,
    description: "A fresh sky blue T-shirt made for relaxed everyday wear. Its clean color works especially well with light and dark denim.",
    rating: 4.3,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#7DD3FC", "#FFFFFF", "#1E3A8A"],
    stock: 22
  },
  {
    id: 8,
    name: "Charcoal Minimal Tee",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTfTXyqiHsQ9ls1YZaiy13CNpAcouvkI0Fpma0WkTaA&s=10",
    price: 2700,
    description: "A refined charcoal T-shirt with a minimalist aesthetic. Designed to fit naturally into casual and smart-casual wardrobes.",
    rating: 4.9,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#374151", "#000000", "#9CA3AF"],
    stock: 9
  },
  {
    id: 9,
    name: "Cream Essential T-Shirt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvx3TJ29HEU8c_p_PPPs0kpFj3u49H28TQ_iyO5RK73w&s=10",
    price: 2500,
    description: "A clean cream-colored T-shirt offering a soft and sophisticated appearance. Ideal for neutral-toned everyday outfits.",
    rating: 4.7,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#FFF7ED", "#A8A29E", "#1C1917"],
    stock: 13
  },
  {
    id: 10,
    name: "Rust Oversized Street Tee",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvLj8bgKacFHvYU8L5Mcv-orxRflQZf2p48vwHU9dYA&s=10",
    price: 2900,
    description: "A contemporary rust-toned oversized T-shirt with a relaxed silhouette. Perfect for creating modern streetwear-inspired outfits.",
    rating: 4.5,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#9A3412", "#292524", "#F5F5F4"],
    stock: 11
  }
],

waffleShirts: [
  {
    id: 1,
    name: "Sand Waffle Overshirt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWIhkDo5S32VJi14eVPHuviNi8M20DObHhwrBYtGE8A&s=10",
    price: 2800,
    description: "A textured waffle overshirt in a warm sand tone, designed for comfortable everyday layering and effortless casual styling.",
    rating: 4.6,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#D6C3A5", "#000000", "#FFFFFF"],
    stock: 14
  },
  {
    id: 2,
    name: "Olive Waffle Casual Shirt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKaxgBJR1qsQCkKEsk_H7TssxaXGm-mywrUj6uUfeXw&s=10",
    price: 3100,
    description: "A relaxed olive waffle shirt featuring a distinctive textured finish that adds depth and character to casual outfits.",
    rating: 4.8,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#556B2F", "#1C1917", "#D1D5DB"],
    stock: 11
  },
  {
    id: 3,
    name: "Charcoal Textured Waffle Shirt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIOXk09FfpH6A33syGRt1NJQ1U7meoj1_g9doOoZee9Q&s=10",
    price: 3400,
    description: "A sophisticated charcoal waffle shirt with a structured texture and versatile design, suitable for casual and smart-casual occasions.",
    rating: 4.7,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#374151", "#000000", "#9CA3AF"],
    stock: 9
  },
  {
    id: 4,
    name: "Cream Waffle Button Shirt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbIcAWLCH2JJTgrt6vYxMz2GbFZO6YNsuZHISEb53t6w&s",
    price: 2950,
    description: "A soft cream waffle shirt with a clean button-up design. Its neutral tone makes it easy to style throughout the year.",
    rating: 4.5,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#FFF7ED", "#78716C", "#1C1917"],
    stock: 17
  },
  {
    id: 5,
    name: "Rust Waffle Work Shirt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZwF48ijKFpEmB3Mu0__bpCuV6zMKD9XptzaqSoZyvg&s=10",
    price: 3250,
    description: "A rich rust waffle shirt inspired by modern workwear. The textured fabric gives casual outfits a distinctive and rugged appearance.",
    rating: 4.6,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#9A3412", "#292524", "#F5F5F4"],
    stock: 13
  },
  {
    id: 6,
    name: "Navy Waffle Relaxed Shirt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ObP6igcRQan1ngjj-Ik5OpBB_J0O6Zxyd8Kj4cvI6g&s=10",
    price: 3600,
    description: "A deep navy waffle shirt designed with a relaxed silhouette for easy movement and comfortable everyday styling.",
    rating: 4.9,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#172554", "#FFFFFF", "#475569"],
    stock: 8
  },
  {
    id: 7,
    name: "Stone Waffle Utility Shirt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa12cXXq7l5jFk_n7_dAO-MpOHbQs_q2T8b2mnsGO5Og&s",
    price: 3300,
    description: "A modern stone-colored waffle utility shirt combining practical styling with a textured finish for a contemporary look.",
    rating: 4.4,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#A8A29E", "#44403C", "#F5F5F4"],
    stock: 15
  },
  {
    id: 8,
    name: "Chocolate Brown Waffle Shirt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkNe150eFX9diy2tr7FDoayNQjMKKA7CDnwVxbaIQPw&s",
    price: 3500,
    description: "A warm chocolate brown waffle shirt with a premium textured appearance. Perfect for autumn-inspired casual combinations.",
    rating: 4.8,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#78350F", "#000000", "#D6C3A5"],
    stock: 10
  },
  {
    id: 9,
    name: "Sky Grey Waffle Shirt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIOXk09FfpH6A33syGRt1NJQ1U7meoj1_g9doOoZee9Q&s=10",
    price: 2900,
    description: "A subtle sky grey waffle shirt offering a fresh and understated look. Designed to pair easily with denim and neutral trousers.",
    rating: 4.3,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#94A3B8", "#FFFFFF", "#334155"],
    stock: 19
  },
  {
    id: 10,
    name: "Burgundy Waffle Overshirt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrbQPRvWxTqxjJGlgehhpR8S0-GFp9Jo85t3qaDVrJ8Q&s=10",
    price: 3800,
    description: "A bold burgundy waffle overshirt that brings rich color and texture to your wardrobe while maintaining a relaxed modern silhouette.",
    rating: 4.7,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#7F1D1D", "#1C1917", "#E7E5E4"],
    stock: 7
  },
  {
    id: 11,
    name: "Black Waffle Layer Shirt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKu05DZ4ScUM41gMZGKjsCNeWuoYGxZoArGW0hUlQqng&s=10",
    price: 3900,
    description: "A versatile black waffle shirt designed for layering. Its textured surface creates a premium look while keeping the styling minimal.",
    rating: 4.9,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#374151", "#D1D5DB"],
    stock: 12
  },
  {
    id: 12,
    name: "Moss Green Waffle Shirt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaCnY6kY4EC8p5B61D_-zQnlS_ioRcNRUhedaqGF2JpQ&s=10",
    price: 3150,
    description: "A contemporary moss green waffle shirt with a natural earthy tone. A strong choice for relaxed weekend and everyday outfits.",
    rating: 4.6,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#4D5D53", "#1C1917", "#E7E5E4"],
    stock: 16
  }
],

trousers: [
  {
    id: 1,
    name: "Classic Black Regular Trouser",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjop5LW0yRvU-7EsJ95SaIspbVBL3IPMgyJGhkW3WjDA&s=10",
    price: 3200,
    description: "A classic black regular-fit trouser designed with a clean silhouette for office wear, formal occasions, and polished everyday outfits.",
    rating: 4.7,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#000000", "#374151", "#1F2937"],
    stock: 14
  },
  {
    id: 2,
    name: "Stone Grey Formal Trouser",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEmefKe6qy4JJ-F23dOyd0_am1kt0x1sXpdQUikWNt8g&s",
    price: 3500,
    description: "A refined stone grey trouser featuring a timeless regular fit that pairs effortlessly with dress shirts, polos, and smart casual outfits.",
    rating: 4.6,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#78716C", "#1F2937", "#F5F5F4"],
    stock: 11
  },
  {
    id: 3,
    name: "Navy Smart Fit Trouser",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_VDtmxPQ1hrVoYS16tfJNpBNJkfcdMxndvnc_5QGNw&s=10",
    price: 3800,
    description: "A deep navy smart-fit trouser offering a sharp and versatile appearance, ideal for professional settings and evening occasions.",
    rating: 4.8,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#172554", "#000000", "#64748B"],
    stock: 9
  },
  {
    id: 4,
    name: "Beige Classic Trouser",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_zcZbuJ_hE51Esz9hrY4RLNRBFOxDfvIRuq3MBOaRQ&s=10",
    price: 2900,
    description: "A versatile beige regular-fit trouser with a clean finish, perfect for creating relaxed yet sophisticated everyday combinations.",
    rating: 4.5,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#D6C3A5", "#FFFFFF", "#78350F"],
    stock: 18
  },
  {
    id: 5,
    name: "Olive Regular Cargo Trouser",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_zcZbuJ_hE51Esz9hrY4RLNRBFOxDfvIRuq3MBOaRQ&s=10",
    price: 4100,
    description: "A modern olive trouser combining a regular silhouette with practical styling. Its earthy tone works well with neutral shirts and T-shirts.",
    rating: 4.7,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#556B2F", "#1C1917", "#A8A29E"],
    stock: 13
  },
  {
    id: 6,
    name: "Brown Classic Fit Trouser",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5mOKGteuZzbqrN21ZYi2GXKVkdOn8bXaWz4z_HkaCSA&s=10",
    price: 3600,
    description: "A warm brown regular-fit trouser designed to bring a sophisticated earthy tone to both smart and casual wardrobes.",
    rating: 4.4,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#78350F", "#292524", "#D6C3A5"],
    stock: 16
  },
  {
    id: 7,
    name: "Black Urban Baggy Trouser",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fao6ieyVUNuKAZwXNLhnO6gjA_rwnKMkR8rSqghvZg&s=10",
    price: 3900,
    description: "A contemporary black baggy trouser featuring a relaxed silhouette for modern streetwear looks and comfortable everyday movement.",
    rating: 4.8,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#000000", "#374151", "#9CA3AF"],
    stock: 12
  },
  {
    id: 8,
    name: "Washed Grey Baggy Trouser",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnVAtGevlR0kicAnyr2UNWchItvU1Gu-8kJ0wqcRwXg&s=10",
    price: 4200,
    description: "A relaxed washed grey baggy trouser designed for effortless streetwear styling. The loose silhouette creates a contemporary oversized look.",
    rating: 4.6,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#6B7280", "#111827", "#E5E7EB"],
    stock: 10
  },
  {
    id: 9,
    name: "Cream Wide Baggy Trouser",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_MdJFAretgeFlzFa1spXKvN7AnvwRw_h82k6iuf0XCA&s=10",
    price: 4000,
    description: "A clean cream-colored baggy trouser with a wide relaxed silhouette, perfect for minimal outfits and modern casual styling.",
    rating: 4.5,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#FFF7ED", "#A8A29E", "#1C1917"],
    stock: 15
  },
  {
    id: 10,
    name: "Khaki Street Baggy Trouser",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RjlNAxSEWcagPE1lRUagKynIdyf0BZfziLjZk9mRKQ&s=10",
    price: 4300,
    description: "A relaxed khaki baggy trouser inspired by contemporary streetwear. Its earthy tone makes it easy to combine with oversized tops.",
    rating: 4.9,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#A16207", "#292524", "#F5F5F4"],
    stock: 8
  },
  {
    id: 11,
    name: "Charcoal Relaxed Baggy Trouser",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx86-vgVFBSaTv4HopddNxVElkRh0lK6l03fkE_XJKsw&s=10",
    price: 4500,
    description: "A premium charcoal baggy trouser offering a relaxed fit with a clean modern appearance. Ideal for elevated streetwear outfits.",
    rating: 4.7,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#374151", "#000000", "#64748B"],
    stock: 11
  },
  {
    id: 12,
    name: "Moss Green Baggy Trouser",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaIjaMVvZLb7IpagFMGw-884N0aUJ9D_011Isp0aj24g&s=10",
    price: 3950,
    description: "A stylish moss green baggy trouser with a relaxed silhouette and earthy character, designed for comfortable modern everyday wear.",
    rating: 4.6,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#4D5D53", "#1C1917", "#D6C3A5"],
    stock: 17
  }
],

pants: [
  {
    id: 1,
    name: "Classic Black Casual Pants",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIamJ8PhyLd8P7JP046BQWgaxLi18YS3U4cwyjsNg9pQ&s=10",
    price: 2800,
    description: "A versatile pair of black casual pants designed with a clean silhouette and comfortable fit for everyday outfits.",
    rating: 4.6,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#000000", "#374151", "#FFFFFF"],
    stock: 18
  },
  {
    id: 2,
    name: "Beige Relaxed Pants",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nlDWdevYc9XgfyRa5wyZuRg_PrEve4PojA2Q5hCP6A&s=10",
    price: 3100,
    description: "Relaxed beige pants with a modern everyday silhouette. Their neutral tone makes them easy to style with shirts, T-shirts, and overshirts.",
    rating: 4.7,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#D6C3A5", "#78716C", "#1C1917"],
    stock: 14
  },
  {
    id: 3,
    name: "Navy Everyday Pants",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIamJ8PhyLd8P7JP046BQWgaxLi18YS3U4cwyjsNg9pQ&s=10",
    price: 2950,
    description: "A deep navy pair of casual pants offering a balanced combination of comfort and clean styling for everyday wear.",
    rating: 4.5,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#172554", "#000000", "#64748B"],
    stock: 16
  },
  {
    id: 4,
    name: "Olive Utility Pants",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjziiyEZ2zgmvbmZCDvEPHndJX8qf-ddH7aisXx2vn9w&s=10",
    price: 3600,
    description: "Modern olive utility pants designed with practical styling and a comfortable fit, perfect for casual outdoor-inspired outfits.",
    rating: 4.8,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#556B2F", "#1C1917", "#A8A29E"],
    stock: 10
  },
  {
    id: 5,
    name: "Stone Straight Leg Pants",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTfH6jhXA8kjAIKDXdMUnY7NX6UNxmqzQy49rIJqJpw&s=10",
    price: 3300,
    description: "Clean stone-colored pants featuring a straight-leg silhouette that works effortlessly with both minimal and casual wardrobes.",
    rating: 4.4,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#A8A29E", "#44403C", "#F5F5F4"],
    stock: 12
  },
  {
    id: 6,
    name: "Brown Everyday Trousers",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLPhlkRnDXvREK2PcFN41gHBdEJ0rtSP7OYB7DaUhHuw&s=10",
    price: 3400,
    description: "Warm brown everyday pants with a refined casual appearance. A versatile choice for neutral and earthy outfit combinations.",
    rating: 4.6,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#78350F", "#292524", "#D6C3A5"],
    stock: 15
  },
  {
    id: 7,
    name: "Graphite Cargo Pants",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzOl39b3Gps7ZfS5A4xXB9ZEvsYnu8-1D--2wkURngCg&s=10",
    price: 3900,
    description: "Contemporary graphite cargo pants combining a relaxed fit with functional pocket details for a practical streetwear-inspired look.",
    rating: 4.9,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#374151", "#000000", "#9CA3AF"],
    stock: 9
  },
  {
    id: 8,
    name: "Cream Wide Casual Pants",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStgBZPye9fc6vSd6Hj6SHVjIAxawcYQi51nzHrYz2sw&s=10",
    price: 3700,
    description: "Wide cream-colored casual pants offering a relaxed silhouette and clean aesthetic for modern minimal outfits.",
    rating: 4.7,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#FFF7ED", "#A8A29E", "#292524"],
    stock: 13
  },
  {
    id: 9,
    name: "Washed Blue Denim Pants",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WQSGMnEentp9BqxUFMGgQJONvMA-YHgMauhkqrXQGQ&s=10",
    price: 4200,
    description: "Washed blue casual pants inspired by classic denim styling, designed to bring a relaxed and versatile character to everyday outfits.",
    rating: 4.5,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#3B82F6", "#1E3A8A", "#93C5FD"],
    stock: 20
  },
  {
    id: 10,
    name: "Rust Relaxed Cargo Pants",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_znTFdGc0mjDMOBbWF1g6s2t0E6hZAuPi3zEeEpvkjA&s=10",
    price: 4000,
    description: "A distinctive rust-colored cargo pant featuring a relaxed fit and utility-inspired styling for contemporary casual looks.",
    rating: 4.6,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#9A3412", "#292524", "#D6C3A5"],
    stock: 8
  },
  {
    id: 11,
    name: "Charcoal Drawstring Pants",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MjVbNeD54prf3YFWz6KNQFJaeMmwRFHv3BmFThyoCA&s",
    price: 3500,
    description: "Comfort-focused charcoal pants featuring a modern drawstring waist and relaxed styling, ideal for casual days and travel.",
    rating: 4.8,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#374151", "#111827", "#6B7280"],
    stock: 17
  },
  {
    id: 12,
    name: "Moss Green Casual Pants",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSScAVlfrtr2kXB4KokWY_yZRl_eeIHdisR8yMSxH7ZJw&s",
    price: 3250,
    description: "Earthy moss green casual pants with a comfortable silhouette, designed for effortless styling with neutral and darker tops.",
    rating: 4.7,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#4D5D53", "#1C1917", "#D6C3A5"],
    stock: 14
  }
],

watches: [
  {
    id: 1,
    name: "Classic Black Chronograph",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6G-EfCj_rcaR8BIN6Ck10KUy6RpY2XR1esbtZyqP4yA&s=10",
    price: 6500,
    description: "A sophisticated black chronograph watch featuring a clean dial and timeless design, perfect for both formal and everyday outfits.",
    rating: 4.8,
    colors: ["#000000", "#C0C0C0", "#FFFFFF"],
    stock: 12
  },
  {
    id: 2,
    name: "Silver Edge Analog Watch",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1jA7i_sGYJItgnde9QA0y_xIO0qzN5lpHzG9vOcEkXg&s=10",
    price: 5200,
    description: "A refined silver analog watch with a minimalist dial, designed to add a polished touch to smart-casual and formal looks.",
    rating: 4.6,
    colors: ["#C0C0C0", "#000000", "#1E3A8A"],
    stock: 15
  },
  {
    id: 3,
    name: "Midnight Steel Watch",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbBm528NmPKYKw_ObFJjsH5tLUhK3IHjQc2fy3gpYJA&s=10",
    price: 7800,
    description: "A bold stainless steel watch with a deep midnight dial, combining modern styling with a strong everyday presence.",
    rating: 4.9,
    colors: ["#111827", "#374151", "#C0C0C0"],
    stock: 8
  },
  {
    id: 4,
    name: "Brown Leather Classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4i8-DkpbaNYFFyXeSsVo0XujO6MyJVdNRU6amz3tBig&s=10",
    price: 4800,
    description: "A classic leather-strap watch featuring a warm brown finish and elegant dial, ideal for timeless everyday styling.",
    rating: 4.5,
    colors: ["#78350F", "#000000", "#D6C3A5"],
    stock: 18
  },
  {
    id: 5,
    name: "Golden Minimal Watch",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMi0DiIy4v5I4f0c2xMVWQrv4CfRO4IcL50AOvU28dA&s=10",
    price: 5900,
    description: "A sleek gold-tone watch with a minimal dial designed to bring a subtle luxury feel to formal and evening outfits.",
    rating: 4.7,
    colors: ["#D4AF37", "#000000", "#FFFFFF"],
    stock: 10
  },
  {
    id: 6,
    name: "Navy Steel Chronograph",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEAaZlNqET1IYq3Ui6NKGiDX1nBoybiHSG7FOu2D3bg&s=10",
    price: 7200,
    description: "A modern chronograph with a deep navy dial and steel finish, combining sporty details with sophisticated everyday styling.",
    rating: 4.8,
    colors: ["#172554", "#C0C0C0", "#000000"],
    stock: 9
  },
  {
    id: 7,
    name: "Olive Field Watch",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWACIPdhSBDjNHqxPUKXfmJ3xR0AW_oS6fgasogvnfVQ&s",
    price: 5600,
    description: "A rugged-inspired field watch with an olive tone and practical design, made for casual outfits and outdoor-inspired styling.",
    rating: 4.4,
    colors: ["#556B2F", "#000000", "#D1D5DB"],
    stock: 14
  },
  {
    id: 8,
    name: "Matte Black Steel Watch",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGwM3vAQirDuagziNo-9WCv9D6wPXID4Ip6Nm6ihFSQ&s=10",
    price: 8300,
    description: "A contemporary matte black steel watch featuring a bold monochrome appearance that complements modern minimalist wardrobes.",
    rating: 4.9,
    colors: ["#000000", "#374151", "#9CA3AF"],
    stock: 7
  },
  {
    id: 9,
    name: "Rose Gold Dress Watch",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxUkR95aZCy56NSoY9nYJC4K02YZB80D0NbJ6ewxyEIQ&s",
    price: 6900,
    description: "A refined rose gold watch with an elegant dial, designed to add a sophisticated finishing touch to formal and smart-casual outfits.",
    rating: 4.6,
    colors: ["#B76E79", "#FFFFFF", "#000000"],
    stock: 11
  },
  {
    id: 10,
    name: "Silver Mesh Minimal Watch",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdaRpZ6e_ybe_CNRBtJw1kUq3bidghJEkSxfRMaCcwxQ&s=10",
    price: 9500,
    description: "A lightweight minimalist watch with a silver mesh strap and clean dial, offering an understated look for everyday wear.",
    rating: 4.5,
    colors: ["#C0C0C0", "#000000", "#FFFFFF"],
    stock: 20
  }
]
};

export default products;