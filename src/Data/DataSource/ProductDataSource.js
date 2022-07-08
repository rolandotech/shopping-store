const productDataSource = [
    {
        id: 1,
        title: 'Shoes',
        discription: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        image: `${process.env.PUBLIC_URL}/assets/img/shoes.png`,
        price: 100,
        cartQTY: 1
    },
    {
        id: 2,
        title: 'Laptop',
        discription: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        image: `${process.env.PUBLIC_URL}/assets/img/laptop.jpg`,
        price: 360,
        cartQTY: 1
    },
    {
        id: 3,
        title: 'Headset',
        discription: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        image: `${process.env.PUBLIC_URL}/assets/img/headset.jpg`,
        price: 500,
        cartQTY: 1
    },
    {
        id: 4,
        title: 'Watch',
        discription: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        image: `${process.env.PUBLIC_URL}/assets/img/watch.jpg`,
        price: 200,
        cartQTY: 1
    },
]

export default productDataSource;