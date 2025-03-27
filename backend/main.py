import asyncio
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,  
    allow_methods=["*"],  
    allow_headers=["*"], 
)

#error handaling
@app.exception_handler(HTTPException)
async def error_handler(request: Request, exc: HTTPException):
    return JSONResponse(
        status_code=404,
        content={
            "message":"Opps! The requested path does not exist",
            "hint": "Please check the URL and try again",
            "available_endpoints": [
                "/",
                "/api/products",
                "/api/products/{product_id}"
                ],
        }
    )


@app.get("/")
def index():
    return {"message": "welcome to my api"} 


class ProductInfo(BaseModel):  
    id: int
    name: str
    price: float
    image: str


products = {
 1: ProductInfo(id=1, name="Wireless Headphones", price=59.99, image="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"),
    2: ProductInfo(id=2, name="Bluetooth Speaker", price=39.99, image="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg"),
    3: ProductInfo(id=3, name="Smart Watch", price=199.99, image="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg"),
    4: ProductInfo(id=4, name="Gaming Keyboard", price=89.99, image="https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg"),
    5: ProductInfo(id=5, name="Wireless Mouse", price=29.99, image="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg"),
    6: ProductInfo(id=6, name="4K Monitor", price=349.99, image="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg"),
    7: ProductInfo(id=7, name="Laptop Stand", price=24.99, image="https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg"),
    8: ProductInfo(id=8, name="USB-C Hub", price=45.99, image="https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg"),
    9: ProductInfo(id=9, name="External SSD 1TB", price=129.99, image="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"),
    10: ProductInfo(id=10, name="Noise Cancelling Earbuds", price=149.99, image="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg"),
    11: ProductInfo(id=11, name="Mechanical Keyboard", price=79.99, image="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg"),
    12: ProductInfo(id=12, name="Wireless Charger", price=19.99, image="https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg"),
    13: ProductInfo(id=13, name="Smartphone Gimbal", price=99.99, image="https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg"),
    14: ProductInfo(id=14, name="Portable Projector", price=279.99, image="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg"),
    15: ProductInfo(id=15, name="Fitness Tracker", price=79.99, image="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg"),
    16: ProductInfo(id=16, name="VR Headset", price=299.99, image="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg"),
    17: ProductInfo(id=17, name="Action Camera", price=199.99, image="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"),
    18: ProductInfo(id=18, name="E-Reader", price=129.99, image="https://images.pexels.com/photos/131616/pexels-photo-131616.jpeg"),
    19: ProductInfo(id=19, name="Desktop Microphone", price=89.99, image="https://images.pexels.com/photos/270288/pexels-photo-270288.jpeg"),
    20: ProductInfo(id=20, name="Webcam 1080p", price=69.99, image="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg")
    }


@app.get("/api/products")
async def get_all_products(search: str = None):
    await asyncio.sleep(3) 
    if search:
        filtered_products = [
            product for product in products.values()
            if search.lower() in product.name.lower()
        ]
        return filtered_products
    return list(products.values())



@app.get("/api/products/{product_id}") 
async def product(product_id: int): 
    await asyncio.sleep(3)  
    if product_id in products:  
        return products[product_id]
    return {"error": "ProductInfo not found"} 

