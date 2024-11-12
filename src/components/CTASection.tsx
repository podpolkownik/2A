import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Check, Star, Timer, ExternalLink } from 'lucide-react';

const CountdownTimer = () => {
  const [time, setTime] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { hours: prevTime.hours, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 text-2xl font-bold">
      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
        <span>{String(time.hours).padStart(2, '0')}</span>
        <span className="text-sm">ч</span>
      </div>
      <span>:</span>
      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
        <span>{String(time.minutes).padStart(2, '0')}</span>
        <span className="text-sm">м</span>
      </div>
      <span>:</span>
      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
        <span>{String(time.seconds).padStart(2, '0')}</span>
        <span className="text-sm">с</span>
      </div>
    </div>
  );
};

// Reviews with styles and images
const reviews = [
  {
    name: "Хуан Карлос Перес",
    comment: "Vitacaps помог мне справиться с дискомфортом, который мешал активной жизни. Прекрасное средство с натуральным составом!",
    date: "4 дня назад",
    avatar: "https://sun9-26.userapi.com/impg/lpQ6hNwR752pFnNibh_3h1KUCfJlYDBg5Qr1VA/YOsVpiM-xYI.jpg?size=736x736&quality=96&sign=dd729b60bd5a52d36ea34da41508a5d0&type=album",
  },
  {
    name: "Мария Хименес",
    comment: "С Vitacaps я смогла вернуться к привычной жизни. Теперь дискомфорт и боль в прошлом.",
    date: "3 дня назад",
    avatar: "https://sun9-40.userapi.com/impg/tnv-9s_z7tUqpmeeJOwmLrOnJiBU6c0uWzOA6Q/M-Tutnhm63M.jpg?size=736x736&quality=96&sign=91666027b4a5a99a37a7bbf12b208122&type=album",
  },
  {
    name: "Карлос Ортега",
    comment: "После долгих поисков нашел Vitacaps — препарат действительно работает! Очень рекомендую.",
    date: "6 дней назад",
    avatar: "https://sun9-60.userapi.com/impg/hcq2OyGID-LVZqpc4RFYZ7RthiaCQ2GEoxMXUQ/dEDNApOvb7c.jpg?size=736x736&quality=96&sign=6e2b351b1ef013c2c46c873a7be0a161&type=album",
  },
  {
    name: "Анна Лопес",
    comment: "Натуральный состав и отсутствие побочных эффектов для меня были важными факторами. Vitacaps справился на ура!",
    date: "5 дней назад",
    avatar: "https://sun9-75.userapi.com/impg/AmjGMLD5e43y4_ZERCFhYJUUzia_WGTBQIoAhA/nZ4GVaeRiX4.jpg?size=736x736&quality=96&sign=49a2f92b399a1fb48b670f515accb81c&type=album",
  },
  // Add more reviews here as needed
];

export const CTASection = () => (
  <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-blue-800 text-white relative overflow-hidden">
    <motion.div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
      <motion.h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
        Специальное предложение
      </motion.h2>

      {/* Display each review */}
      <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-lg mb-8 border border-white/20 shadow-[0_0_100px_rgba(59,130,246,0.3)]">
        {reviews.map((review, index) => (
          <div key={index} className="flex items-center gap-4 mb-6">
            <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full" />
            <div>
              <p className="text-xl font-semibold">{review.name}</p>
              <p className="text-white/80 text-lg">{review.comment}</p>
              <span className="text-white/60 text-sm">{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);
