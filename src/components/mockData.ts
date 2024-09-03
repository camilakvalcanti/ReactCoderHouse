export const mockItems = [
    {
        id: '1',
        title: 'Product 1',
        description: 'Product 1 - description',
        price: 150,
        pictureUrl: 'https://via.placeholder.com/150'
    },

    {
        id: '2',
        title: 'Product 2',
        description: 'Product 2 - description',
        price: 350,
        pictureUrl: 'https://via.placeholder.com/150'
    },

    {
        id: '3',
        title: 'Product 3',
        description: 'Product 3 - description',
        price: 70,
        pictureUrl: 'https://via.placeholder.com/150'
    }

];

export const fetchItems = (): Promise<typeof mockItems> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockItems);
        }, 2000);
    });
};

export const fetchItem = (id: string): Promise<typeof mockItems[number] | undefined> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const item = mockItems.find(item=> item.id ===id);
            resolve(item);
        }, 2000);
    
        });
    };
