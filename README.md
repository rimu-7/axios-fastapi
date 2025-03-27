
## Features

- You can learn how to create a ``backend`` with ``FastAPI`` in detail.
- How to fetch data using ``axios`` and ``search`` for products in ``React``.


## Installation

Describe how to install your project. For example:

```bash
# Clone the repository
git clone https://github.com/rimu-7/axios-fastapi.git
```

## Configuration backend
```bash
   cd backend
   pip install -r requirements.txt
```
## For run the backend
```bash
uvicorn main:app --reload
```
## API Documentation

- **URL:** `/`
- **URL:** `/api/products`
- **Method:** `GET`

- **Response:**
  ```json
  [
    {
        id: 1,
        name: "Wireless Headphone",
        price: 59.99,
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
    }
  ]
  ```

# Navigate to the project directory
```bash
cd ..
cd frontend
```
# Install dependencies
```bash
npm install

```
```bash
npm run dev
```