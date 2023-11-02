export interface IItem{
   gender:string;
   price:number;
   id:number;
   name:string;
   brand:string;
   image:string;
   size:number;
   count:number;
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
   image:'https://icdn.lenta.ru/images/2021/04/09/01/20210409010615804/wide_16_9_d8f66c8c863d57701df71cbe642b5e59.jpg'
   },
   {
      id:2,
      gender:'Woman',
      price:56040,
      size:46,
      count: 0,
      brand: 'Adidas',
      name:'Adidas originals женские',
      image:'https://www.pravilamag.ru/upload/img_cache/55b/55b1e82f3e6cd1b6ea8f0867f9da5088_ce_960x599x0x0_cropped_666x444.jpg'
   },
   { 
      id:3,
      gender: 'Men',
      price: 3445,
      count: 0,
      size:43,
      brand: 'Puma',
      name: 'Кроссовки мужские адидас',
      image: 'https://icdn.lenta.ru/images/2021/04/09/01/20210409010615804/wide_16_9_d8f66c8c863d57701df71cbe642b5e59.jpg'
   },
   {
      id:4,
      gender: 'Woman',
      price: 2560,
      count: 0,
      size:39,
      brand: 'Puma',
      name: 'Adidas originals женские',
      image: 'https://www.pravilamag.ru/upload/img_cache/55b/55b1e82f3e6cd1b6ea8f0867f9da5088_ce_960x599x0x0_cropped_666x444.jpg'
   },
   {
      id:5,
      gender: 'Men',
      price: 5400,
      count: 0,
      size:45,
      brand: 'Nike',
      name: 'Кроссовки мужские адидас',
      image: 'https://icdn.lenta.ru/images/2021/04/09/01/20210409010615804/wide_16_9_d8f66c8c863d57701df71cbe642b5e59.jpg'
   },
   {  
      id:6,

      gender: 'Woman',
      price: 4560,
      size:44,
      count: 0,
      brand:'Asics',
      name: 'Adidas originals женские',
      image: 'https://www.pravilamag.ru/upload/img_cache/55b/55b1e82f3e6cd1b6ea8f0867f9da5088_ce_960x599x0x0_cropped_666x444.jpg'
   },
   {
      id: 7,

      gender: 'Woman',
      price: 1560,
      count: 0,
      size: 44,
      brand:'Fila',
      name: 'Adidas originals женские',
      image: 'https://www.pravilamag.ru/upload/img_cache/55b/55b1e82f3e6cd1b6ea8f0867f9da5088_ce_960x599x0x0_cropped_666x444.jpg'
   }
]