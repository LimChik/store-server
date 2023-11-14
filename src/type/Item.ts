export interface IItem{
   gender:string;
   price:number;
   id:number;
   name:string;
   brand:string;

   size:number;
   count:number;
   imageArrPreview:string[]
}



export const items:IItem[]=[
   {
      id:1,
   gender:'Men',
   price:4000,
   size:44,
   name:'Кроссовки мужские адидас',
   brand:'Adidas',
   count:0,

   imageArrPreview:[
      'https://outmaxshop.ru/components/com_jshopping/files/img_products/39548/adidas-samba-og-39548-1.jpg',
      'https://outmaxshop.ru/components/com_jshopping/files/img_products/39548/adidas-samba-og-39548-2.jpg',
      'https://outmaxshop.ru/components/com_jshopping/files/img_products/39548/adidas-samba-og-39548-3.jpg'

   ]
   },
   {
      id:2,
      gender:'Woman',
      price:56040,
      size:46,
      count: 0,
      brand: 'Adidas',
      name:'Adidas originals женские',
      
      imageArrPreview: [
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/25380/adidas-zx-750-25380-9.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/25380/adidas-zx-750-25380-9.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/25380/adidas-zx-750-25380-6.jpg'
      ]
   },
   { 
      id:3,
      gender: 'Men',
      price: 3445,
      count: 0,
      size:43,
      brand: 'Puma',
      name: 'Кроссовки мужские Puma',
     
      imageArrPreview: [
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/39381/puma-rs-x-efekt-hi-39381-1.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/39381/puma-rs-x-efekt-hi-39381-4.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/39381/puma-rs-x-efekt-hi-39381-3.jpg'
      ]
   },
   {
      id:4,
      gender: 'Woman',
      price: 2560,
      count: 0,
      size:39,
      brand: 'Puma',
      name: 'Puma originals женские',

      imageArrPreview: [
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/39240/puma-future-ultimate-fg-39240-1.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/39240/puma-future-ultimate-fg-39240-3.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/39240/puma-future-ultimate-fg-39240-2.jpg'
      ]
   },
   {
      id:5,
      gender: 'Men',
      price: 5400,
      count: 0,
      size:45,
      brand: 'Nike',
      name: 'Кроссовки мужские Nike',

      imageArrPreview: [
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/38045/nike-38045-1.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/38045/nike-38045-4.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/38045/nike-38045-3.jpg'
      ]
   },
   {  
      id:6,

      gender: 'Woman',
      price: 4560,
      size:44,
      count: 0,
      brand:'Asics',
      name: 'Asics originals женские',
 
      imageArrPreview: [
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/39117/asics-gel-sonoma-15-50-39117-1.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/39117/asics-gel-sonoma-15-50-39117-3.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/39117/asics-gel-sonoma-15-50-39117-2.jpg'
      ]
   },
   {
      id: 7,

      gender: 'Woman',
      price: 1560,
      count: 0,
      size: 44,
      brand:'Fila',
      name: 'Fila originals женские',

      imageArrPreview: [
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/37293/fila-canestro-37293-1.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/37293/fila-canestro-37293-3.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/37293/fila-canestro-37293-2.jpg'
      ]
   },
   {
      id: 8,
      gender: 'Men',
      price: 5400,
      count: 0,
      size: 45,
      brand: 'Nike',
      name: 'Кроссовки мужские Nike',

      imageArrPreview: [
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/39547/nike-air-jordan-13-retro-39547-1.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/39547/nike-air-jordan-13-retro-39547-3.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/39547/nike-air-jordan-13-retro-39547-2.jpg'
      ]
   },
   {
      id: 9,

      gender: 'Woman',
      price: 4560,
      size: 44,
      count: 0,
      brand: 'Asics',
      name: 'Asics originals женские',

      imageArrPreview: [
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/39113/asics-gel-sonoma-15-50-39113-1.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/39113/asics-gel-sonoma-15-50-39113-3.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/39113/asics-gel-sonoma-15-50-39113-2.jpg'
      ]
   },
   {
      id: 10,

      gender: 'Woman',
      price: 1560,
      count: 0,
      size: 44,
      brand: 'Fila',
      name: 'Fila originals женские',

      imageArrPreview: [
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/28703/fila-mind-zero-28703-1.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/28703/fila-mind-zero-28703-5.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/28703/fila-mind-zero-28703-2.jpg'
      ]
   },
   {
      id: 11,
      gender: 'Men',
      price: 5400,
      count: 0,
      size: 45,
      brand: 'Nike',
      name: 'Кроссовки мужские Nike',

      imageArrPreview: [
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/39447/nike-air-jordan-1-low-39447-1.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/39447/nike-air-jordan-1-low-39447-3.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/39447/nike-air-jordan-1-low-39447-2.jpg'
      ]
   },
   {
      id: 12,

      gender: 'Woman',
      price: 4560,
      size: 44,
      count: 0,
      brand: 'Asics',
      name: 'Asics originals женские',

      imageArrPreview: [
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/37971/asics-ex89-37971-1.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/37971/asics-ex89-37971-4.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/37971/asics-ex89-37971-3.jpg'
      ]
   },
   {
      id: 13,

      gender: 'Woman',
      price: 1560,
      count: 0,
      size: 44,
      brand: 'Fila',
      name: 'Fila originals женские',

      imageArrPreview: [
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/30389/fila-30389-1.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/30389/fila-30389-5.jpg',
         'https://outmaxshop.ru/components/com_jshopping/files/img_products/30389/fila-30389-2.jpg'
      ]
   }
]