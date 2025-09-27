"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ShapeConnectAnimation = () => {
  const { scrollYProgress } = useScroll();
  
  // 스크롤 진행도에 따라 도형들의 위치를 변환
  const circleX = useTransform(scrollYProgress, [0, 0.3], [-200, 0]);
  const squareX = useTransform(scrollYProgress, [0, 0.3], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0.3, 1]);
  
  return (
    <section className="relative bg-black py-20 lg:py-32 overflow-hidden -mt-[150px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-64 relative">
          
          {/* 원형 */}
          <motion.div
            style={{ 
              x: circleX,
              opacity: opacity
            }}
            className="absolute z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl shadow-blue-500/25" />
          </motion.div>

          {/* 사각형 */}
          <motion.div
            style={{ 
              x: squareX,
              opacity: opacity
            }}
            className="absolute z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl shadow-2xl shadow-orange-500/25 transform rotate-12" />
          </motion.div>

          {/* 연결선 - 스크롤에 따라 나타남 */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            style={{
              scaleX: useTransform(scrollYProgress, [0.1, 0.3], [0, 1]),
              opacity: useTransform(scrollYProgress, [0.15, 0.3], [0, 1])
            }}
            className="absolute w-96 h-1 bg-gradient-to-r from-blue-500 via-white to-orange-500 transform-gpu origin-center z-0"
          />

          {/* 중앙 연결점 */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            style={{
              scale: useTransform(scrollYProgress, [0.2, 0.4], [0, 1]),
              opacity: useTransform(scrollYProgress, [0.25, 0.4], [0, 1])
            }}
            className="absolute w-6 h-6 bg-white rounded-full z-20 shadow-lg"
          />

          {/* 배경 파티클 효과 */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute inset-0 opacity-20"
          >
            <div className="w-full h-full border border-gray-700 rounded-full" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};