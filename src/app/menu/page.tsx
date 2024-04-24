'use client';

import { useState } from 'react';
import { StaticImageData } from 'next/image';

import MenuImg1 from '@/../public/assets/images/sections/home/intro/intro-1.jpeg';
import MenuImg2 from '@/../public/assets/images/sections/home/intro/intro-2.jpeg';
import MenuImg3 from '@/../public/assets/images/sections/home/intro/intro-3.jpeg';
import MenuImg4 from '@/../public/assets/images/sections/home/intro/intro-4.jpeg';
import MenuImg5 from '@/../public/assets/images/sections/home/intro/intro-5.jpeg';
import MenuImg6 from '@/../public/assets/images/sections/home/intro/intro-6.jpeg';
import MenuImg7 from '@/../public/assets/images/sections/home/intro/intro-7.jpeg';

import useLenixScroll from '@/app/hooks/useLenisScroll';
import { cn } from '@/app/utils/cn';
import ImageWithBorder from '@/app/components/customs/images/ImageWithBorder';

const menuCategory = [
  { id: 1, name: 'Hot Coffee' },
  { id: 2, name: 'Iced Coffee' },
  { id: 3, name: 'Milk Tea' },
  { id: 4, name: 'Hot Non-Coffee' },
  { id: 5, name: 'Iced Non-Coffee' },
  { id: 6, name: 'Fizzy' },
  { id: 7, name: 'Frappe' },
];

const menus = [
  {
    id: 1,
    name: 'Menu 1',
    price: 200,
    src: MenuImg1,
    category: { id: 1, name: 'Hot Coffee' },
  },
  {
    id: 2,
    name: 'Menu 2',
    price: 200,
    src: MenuImg2,
    category: { id: 1, name: 'Hot Coffee' },
  },
  {
    id: 3,
    name: 'Menu 3',
    price: 200,
    src: MenuImg3,
    category: { id: 1, name: 'Hot Coffee' },
  },
  {
    id: 4,
    name: 'Menu 4',
    price: 200,
    src: MenuImg4,
    category: { id: 1, name: 'Hot Coffee' },
  },
  {
    id: 5,
    name: 'Menu 5',
    price: 200,
    src: MenuImg5,
    category: { id: 2, name: 'Iced Coffee' },
  },
  {
    id: 6,
    name: 'Menu 6',
    price: 200,
    src: MenuImg6,
    category: { id: 4, name: 'Hot Non-Coffee' },
  },
  {
    id: 7,
    name: 'Menu 7',
    price: 200,
    src: MenuImg7,
    category: { id: 7, name: 'Frappe' },
  },
];

export default function Menu() {
  useLenixScroll();

  const [selectedCategories, setSelectedCategories] = useState<
    { id: number; name: string }[]
  >([]);

  const filteredMenus = (categoryId: number) =>
    menus.filter((item) => item.category.id === categoryId);

  return (
    <main className='relative w-full py-32 lg:py-40'>
      <div className='flex w-full flex-col space-y-8 p-4 lg:px-16 xl:space-y-24'>
        <div className='flex-center'>
          <h2 className='text-center'>Restaurant Menu</h2>
        </div>

        <div className='relative grid grid-cols-5 gap-12'>
          <div className='col-span-5 xl:col-span-1'>
            <ul className='sticky top-40 flex flex-wrap items-center gap-2 xl:flex-col xl:items-start'>
              {menuCategory.map((item, index) => (
                <li
                  key={item.id}
                  className={cn('cursor-pointer p-3', {
                    'flex items-center space-x-2 rounded-lg bg-[#f8f4ec]/10':
                      selectedCategories.includes(item),
                  })}
                  onClick={() => {
                    if (selectedCategories.includes(item))
                      setSelectedCategories((prev) =>
                        prev.filter((prevItem) => prevItem.id !== item.id)
                      );
                    else
                      setSelectedCategories((prev) =>
                        [...prev, item].sort((a, b) => a.id - b.id)
                      );
                  }}
                >
                  {selectedCategories.includes(item) && (
                    <div className='h-2 w-2 rounded-full bg-primary-blue'></div>
                  )}
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className='full col-span-5 w-full space-y-12 lg:space-y-24 xl:col-span-4'>
            {selectedCategories.length > 0
              ? selectedCategories.map((item) => (
                  <MenusRenderer
                    key={item.id}
                    item={item}
                    filteredMenus={filteredMenus}
                  />
                ))
              : menuCategory.map((item) => (
                  <MenusRenderer
                    key={item.id}
                    item={item}
                    filteredMenus={filteredMenus}
                  />
                ))}
          </div>
        </div>
      </div>
    </main>
  );
}

type MenusRendererProps = {
  item: { id: number; name: string };
  filteredMenus: (categoryId: number) => {
    id: number;
    name: string;
    price: number;
    src: StaticImageData;
    category: { id: number; name: string };
  }[];
};

const MenusRenderer = ({ item, filteredMenus }: MenusRendererProps) => {
  return (
    <div key={item.id} className='space-y-4'>
      <h3 className=''>{item.name}</h3>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
        {filteredMenus(item.id).length > 0 ? (
          filteredMenus(item.id).map((item) => (
            <ImageWithBorder
              key={item.id}
              src={item.src}
              alt={item.name}
              className='h-[430px] w-full lg:h-[500px] xl:h-[415px]'
            >
              <div className='absolute top-0 bg-primary-blue px-4 py-2'>
                <p className='uppercase text-primary-black'>
                  {item.category.name}
                </p>
              </div>
              <div className='mt-4 space-y-1'>
                <p className='uppercase'>{item.name}</p>
                <p className='text-gray-400'>THB {item.price}</p>
              </div>
            </ImageWithBorder>
          ))
        ) : (
          <div className='h-full w-full'>No menu with {item.name} yet.</div>
        )}
      </div>
    </div>
  );
};
