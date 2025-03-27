// import express from 'express';
// import cors from 'cors';

// const app = express()

// const port = process.env.PORT || 3000;

// app.use(cors({ origin: "http://localhost:5173" }));

// app.get("/", (req, res) => {
//   res.send("Welcome");
// });



// app.get("/api/products", (req, res) => {
//   const products = [
//     {
//       id: 1,
//       name: "Wireless Headphones",
//       price: 59.99,
//       image:
//         "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
//     },
//     {
//       id: 2,
//       name: "Smart Watch",
//       price: 99.99,
//       image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
//     },
//     {
//       id: 3,
//       name: "Gaming Mouse",
//       price: 29.99,
//       image:
//         "https://images.pexels.com/photos/8131624/pexels-photo-8131624.jpeg",
//     },
//     {
//       id: 4,
//       name: "Mechanical Keyboard",
//       price: 79.99,
//       image:
//         "https://images.pexels.com/photos/6697346/pexels-photo-6697346.jpeg",
//     },
//     {
//       id: 5,
//       name: "Portable Bluetooth Speaker",
//       price: 45.99,
//       image:
//         "https://images.pexels.com/photos/3990849/pexels-photo-3990849.jpeg",
//     },
//     {
//       id: 6,
//       name: "USB-C Hub",
//       price: 34.99,
//       image:
//         "https://images.pexels.com/photos/5428820/pexels-photo-5428820.jpeg",
//     },
//     {
//       id: 7,
//       name: "External SSD 1TB",
//       price: 149.99,
//       image:
//         "https://images.pexels.com/photos/3704743/pexels-photo-3704743.jpeg",
//     },
//     {
//       id: 8,
//       name: "4K Monitor",
//       price: 299.99,
//       image:
//         "https://images.pexels.com/photos/3063471/pexels-photo-3063471.jpeg",
//     },
//     {
//       id: 9,
//       name: "Wireless Charger",
//       price: 25.99,
//       image:
//         "https://images.pexels.com/photos/4792777/pexels-photo-4792777.jpeg",
//     },
//     {
//       id: 10,
//       name: "Noise Cancelling Earbuds",
//       price: 89.99,
//       image:
//         "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg",
//     },
//   ];

//   if (req.query.search) {
//     const filterProducts = products.filter((product) =>
//       product.name.includes(req.query.search)
//     );
//     res.send(filterProducts);
//     return;
//   }


  

//   setTimeout(() => {
//     res.send(products);
//   }, 3000);
// });












// app.listen(port, () => {
//   console.log(`Server running on: ${port}`);
// });


