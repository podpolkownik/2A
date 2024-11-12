import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check } from 'lucide-react';

const reviews = [
  {
    name: "Хуан Карлос Перес",
    date: "4 дня назад",
    image: "https://sun9-26.userapi.com/impg/lpQ6hNwR752pFnNibh_3h1KUCfJlYDBg5Qr1VA/YOsVpiM-xYI.jpg?size=736x736&quality=96&sign=dd729b60bd5a52d36ea34da41508a5d0&type=album",
    text: "Vitacaps помог мне справиться с дискомфортом, который мешал активной жизни. Прекрасное средство с натуральным составом!"
  },
  // Добавьте остальные отзывы здесь
];

const CustomerReviews = () => {
  return (
    <div className="bg-gray-100 p-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Отзывы клиентов</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={review.image} alt={review.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold flex items-center justify-center mb-2">
              <Check size={16} className="text-green-500 mr-2" /> {review.name}
            </h3>
            <p className="text-gray-500 text-sm mb-4">{review.date}</p>
            <p className="text-gray-700">{review.text}</p>
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-500" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
